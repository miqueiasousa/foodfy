const { compare, hash } = require('bcryptjs');
const { randomBytes } = require('crypto');
const mailer = require('../config/mailer');

const User = require('../models/User');

class SessionService {
  static async authenticateUser(email, password) {
    try {
      const user = await User.findOne({ where: { email } });
      const passed = await compare(password, user.password);

      if (!passed) return false;

      return user;
    } catch (error) {
      throw Error(error);
    }
  }

  static async createToken(email) {
    try {
      const token = randomBytes(20).toString('hex');
      const now = new Date();
      const tokenExpires = now.setHours(now.getHours() + 1);

      const user = await User.findOne({ where: { email } });

      await user.update({
        reset_token: token,
        reset_token_expires: tokenExpires,
      });

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

      return user;
    } catch (error) {
      throw Error(error);
    }
  }

  static async resetPassword(token, email, password) {
    try {
      const user = await User.findOne({ where: { email } });

      if (!user || token !== user.reset_token) return false;

      const now = new Date();
      const expires = now.setHours(now.getHours());

      if (expires > user.reset_token_expires) return false;

      const passwordHash = await hash(password, 8);

      await user.update({
        password: passwordHash,
        reset_token: null,
        reset_token_expires: null,
      });

      return user;
    } catch (error) {
      throw Error(error);
    }
  }
}

module.exports = SessionService;
