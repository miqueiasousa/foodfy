const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const User = require('../../models/User');
const mailer = require('../../config/mailer');

class SessionController {
  static renderLogin(req, res) {
    return res.render('session/login', { title: 'Login' });
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if (!user)
        return res.render('session/login', {
          title: 'Login',
          message: { err: 'Usuário incorreto' },
        });

      const passed = await bcrypt.compare(password, user.password);

      if (!passed)
        return res.render('session/login', {
          title: 'Login',
          message: { err: 'Senha incorreta' },
        });

      req.session.user = {
        id: user.id,
        isAuthenticated: true,
        isAdmin: user.is_admin,
      };

      return res.redirect('/admin/users/profile');
    } catch (error) {
      res.render('session/login', {
        title: 'Login',
        message: { err: 'Ocorreu um erro, tente novamente' },
      });

      throw Error(error);
    }
  }

  static logout(req, res) {
    req.session.destroy(err => {
      if (err)
        return res.render('profile/index', {
          title: 'Bem vindo',
          message: { err: 'Ocorreu um erro, tente novamente' },
        });

      return res.redirect('/admin/users/login');
    });
  }

  static renderForgotPassword(req, res) {
    return res.render('session/forgot-password', { title: 'Recuperar senha' });
  }

  static async forgotPassword(req, res) {
    try {
      const { email } = req.body;

      const user = await User.findOne({ where: { email } });

      if (!user)
        return res.render('session/forgot-password', {
          title: 'Recuperar senha',
          message: { err: 'Usuário não cadastrado' },
        });

      const token = crypto.randomBytes(20).toString('hex');
      const now = new Date();
      const tokenExpires = now.setHours(now.getHours() + 1);

      await User.update(
        {
          reset_token: token,
          reset_token_expires: tokenExpires,
        },
        { where: { id: user.id } }
      );
      await mailer.sendMail({
        from: 'Equipe Foodfy <noreply@foodfy.com>',
        to: email,
        subject: 'Recuperação de senha',
        html: `
          <h1>Clique no link abaixo para recuperar sua senha.</h1>
          <p>Atenção, o link expira em 1 hora</p>
          <a href="http://localhost:3333/admin/users/reset-password?token=${token}">Recuperar senha</a>
        `,
      });

      return res.render('session/forgot-password', {
        title: 'Recuperar senha',
        message: { sucess: 'Verifique seu email para recuperar sua senha!' },
      });
    } catch (error) {
      res.render('session/forgot-password', {
        title: 'Recuperar senha',
        message: { err: 'Ocorreu um erro, tente novamente' },
      });

      throw Error(error);
    }
  }

  static renderResetPassword(req, res) {
    return res.render('session/reset-password', {
      title: 'Nova senha',
      token: req.query.token,
    });
  }

  static async resetPassword(req, res) {
    try {
      const { email, token } = req.body;

      const user = await User.findOne({ where: { email } });

      if (!user || token !== user.reset_token)
        return res.render('session/reset-password', {
          title: 'Nova senha',
          message: { err: 'Usuário ou token estão incorretos' },
        });

      const now = new Date();
      const expires = now.setHours(now.getHours());

      if (expires > user.reset_token_expires)
        return res.render('session/reset-password', {
          title: 'Nova senha',
          message: {
            err: 'Token expirado! Solicite uma nova recuperação de senha.',
          },
        });

      const password = await bcrypt.hash(req.body.password, 8);

      await User.update({ password }, { where: { id: user.id } });

      return res.redirect('/admin/users/login');
    } catch (error) {
      res.render('session/reset-password', {
        title: 'Nova senha',
        message: { err: 'Ocorreu um erro, tente novamente' },
      });

      throw Error(error);
    }
  }
}

module.exports = SessionController;
