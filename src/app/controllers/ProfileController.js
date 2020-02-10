const bcrypt = require('bcryptjs');
const User = require('../../models/User');

class ProfileController {
  static async show(req, res) {
    try {
      const { id } = req.session.user;

      const user = await User.findByPk(id, { attributes: ['name', 'email'] });

      return res.render('admin/profile/index', {
        title: `Bem vindo ${user.name}`,
        user,
      });
    } catch (error) {
      throw Error(error);
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.session.user;
      const { name, email, password } = req.body;

      const user = await User.findByPk(id);
      const passed = await bcrypt.compare(password, user.password);

      if (!passed)
        return res.render('admin/profile/index', {
          title: `Bem vindo ${user.name}`,
          user: req.body,
          message: { err: 'Senha incorreta' },
        });

      await User.update({ name, email }, { where: { id } });

      return res.redirect('/admin/users/profile');
    } catch (error) {
      res.render('admin/profile/index', {
        title: `Bem vindo`,
        message: { err: 'Ocorreu um erro, tente novamente' },
      });

      throw Error(error);
    }
  }
}

module.exports = ProfileController;
