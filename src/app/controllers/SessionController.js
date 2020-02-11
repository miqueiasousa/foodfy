const SessionService = require('../../services/SessionService');

class SessionController {
  static renderLogin(req, res) {
    return res.render('session/login', { title: 'Login' });
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;

      const { id, is_admin } = await SessionService.authenticateUser(
        email,
        password
      );

      req.session.user = {
        id,
        isAuthenticated: true,
        isAdmin: is_admin,
      };

      return res.redirect('/admin/users/profile');
    } catch (error) {
      res.render('session/login', {
        title: 'Login',
        message: { err: 'Usuário ou senha estão incorretos' },
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

      await SessionService.createToken(email);

      return res.render('session/forgot-password', {
        title: 'Recuperar senha',
        message: { sucess: 'Verifique seu email para recuperar sua senha!' },
      });
    } catch (error) {
      res.render('session/forgot-password', {
        title: 'Recuperar senha',
        message: { err: 'Usuário não encontrado' },
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
      const { token, email, password } = req.body;

      const user = await SessionService.resetPassword(token, email, password);

      if (!user)
        return res.render('session/reset-password', {
          title: 'Nova senha',
          message: { err: 'Usuário ou token são inválidos' },
        });

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
