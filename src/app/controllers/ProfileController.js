const bcrypt = require('bcryptjs');
const User = require('../../models/User');

class ProfileController {
  static async index(req, res) {
    try {
      const { userId } = req.session;

      const user = await User.findByPk(userId, {
        attributes: { exclude: ['password'] },
      });

      return res.render('profile/index', {
        title: `Bem vindo ${user.name}`,
        user,
        message: { sucess: 'Login realizado com sucesso' },
      });
    } catch (error) {
      throw Error(error);
    }
  }

  static async update(req, res) {
    try {
      const { userId } = req.session;
      const { name, email, password } = req.body;

      const user = await User.findOne({
        where: { id: userId },
      });

      const passed = await bcrypt.compare(password, user.password);

      if (!passed)
        return res.render('profile/index', {
          title: `Bem vindo ${user.name}`,
          user: req.body,
          message: { err: 'Senha incorreta' },
        });

      await User.update({ name, email }, { where: { id: userId } });

      return res.redirect('/admin/profile');
    } catch (error) {
      res.render('profile/index', {
        title: `Bem vindo`,
        message: { err: 'Ocorreu um erro, tente novamente' },
      });

      throw Error(error);
    }
  }
}

module.exports = ProfileController;
