const UserService = require('../../services/UserService');

class UserController {
  static async index(req, res) {
    try {
      const users = await UserService.findAll();

      return res.render('admin/user/index', { title: 'Usuários', users });
    } catch (error) {
      throw Error(error);
    }
  }

  static create(req, res) {
    return res.render('admin/user/create', { title: 'Criar usuário' });
  }

  static async store(req, res) {
    try {
      const { name, email, is_admin } = req.body;

      const user = await UserService.createUser({ name, email, is_admin });

      return res.redirect(`/admin/users/${user.id}`);
    } catch (error) {
      res.render('admin/user/create', {
        title: 'Criar usuário',
        message: { err: 'Ocorreu um erro, tente novamente' },
      });

      throw Error(error);
    }
  }

  static async show(req, res) {
    try {
      const { id } = req.params;

      if (Number(id) === Number(req.session.user.id))
        return res.redirect('/admin/users/profile');

      const user = await UserService.findOne(id);

      if (!user)
        return res.render('admin/user/edit', {
          title: 'Editar usuário',
          message: { err: 'Usuário não encontrado' },
        });

      return res.render('admin/user/edit', { title: 'Editar usuário', user });
    } catch (error) {
      res.render('admin/user/edit', {
        title: 'Editar usuário',
        message: { err: 'Ocorreu um erro, tente novamente' },
      });

      throw Error(error);
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;
      const is_admin = req.body.is_admin ? req.body.is_admin : false;

      await UserService.updateUser(id, { name, email, is_admin });

      return res.redirect(`/admin/users/${id}`);
    } catch (error) {
      res.render('admin/user/edit', {
        title: 'Editar usuário',
        message: { err: 'Ocorreu um erro, tente novamente' },
      });

      throw Error(error);
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;

      await UserService.deleteUser(id);

      return res.redirect('/admin/users');
    } catch (error) {
      res.render('admin/user/edit', {
        title: 'Editar usuário',
        message: { err: 'Ocorreu um erro, tente novamente' },
      });

      throw Error(error);
    }
  }
}

module.exports = UserController;
