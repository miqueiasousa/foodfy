const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const User = require('../../models/User');
const mailer = require('../../config/mailer');

class UserController {
  static async index(req, res) {
    try {
      const users = await User.findAll({ order: [['created_at', 'DESC']] });

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
      const passwordGenerator = crypto.randomBytes(3).toString('hex');

      const password = await bcrypt.hash(passwordGenerator, 8);
      const user = await User.create({ name, email, password, is_admin });

      await mailer.sendMail({
        from: 'Equipe Foodfy <noreply@foodfy.com>',
        to: email,
        subject: 'Cadastro realizado',
        html: `
          <p>Olá, você foi cadastrado no Foodfy, para ter acesso a sua conta use a senha: ${passwordGenerator}</p>
          <a href="http://localhost:3333/admin/users/login">Fazer login</a>
        `,
      });

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

      if (id == req.session.user.id)
        return res.redirect('/admin/users/profile');

      const user = await User.findByPk(id);

      return res.render('admin/user/edit', { title: 'Editar usuário', user });
    } catch (error) {
      throw Error(error);
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;
      const is_admin = req.body.is_admin ? req.body.is_admin : false;

      await User.update(
        { name, email, is_admin },
        {
          where: { id },
        }
      );

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

      if (id === req.session.user.id)
        return res.render('admin/user/edit', {
          title: 'Editar usuário',
          message: { err: 'Você não pode deletar sua conta' },
        });

      await User.destroy({ where: { id } });

      return res.redirect('/admin/users');
    } catch (error) {
      throw Error(error);
    }
  }
}

module.exports = UserController;
