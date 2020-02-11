const ProfileService = require('../../services/ProfileService');
const UserService = require('../../services/UserService');

class ProfileController {
  static async show(req, res) {
    try {
      const { id } = req.session.user;

      const user = await UserService.findOne(id);

      return res.render('admin/profile/index', {
        title: `Bem vindo ${user.name}`,
        user,
      });
    } catch (error) {
      res.render('admin/profile/index', {
        title: `Bem vindo`,
        message: { err: 'Ocorreu um erro, tente novamente' },
      });

      throw Error(error);
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.session.user;
      const { name, email, password } = req.body;

      const user = await ProfileService.authenticateAndUpdateUser(
        id,
        password,
        { name, email }
      );

      if (!user)
        return res.render('admin/profile/index', {
          title: `Bem vindo`,
          message: { err: 'Senha incorreta' },
        });

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
