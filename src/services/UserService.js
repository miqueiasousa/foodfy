const { randomBytes } = require('crypto');
const { hash } = require('bcryptjs');
const mailer = require('../config/mailer');

const User = require('../models/User');

class UserService {
  static async findAll() {
    try {
      const users = await User.findAll({ order: [['created_at', 'DESC']] });

      return users;
    } catch (error) {
      throw Error(error);
    }
  }

  static async findOne(id) {
    try {
      const user = await User.findByPk(id);

      return user;
    } catch (error) {
      throw Error(error);
    }
  }

  static async createUser({ name, email, is_admin }) {
    try {
      const generatePassword = randomBytes(4).toString('hex');

      const password = await hash(generatePassword, 8);
      const user = await User.create({ name, email, password, is_admin });

      await mailer.sendMail({
        from: 'Equipe Foodfy <noreply@foodfy.com>',
        to: email,
        subject: 'Cadastro realizado',
        html: `
          <p>Olá, você foi cadastrado no Foodfy, para ter acesso a sua conta use a senha: ${generatePassword}</p>
          <a href="http://localhost:3333/admin/users/login">Fazer login</a>
        `,
      });

      return user;
    } catch (error) {
      throw Error(error);
    }
  }

  static async updateUser(id, { name, email, is_admin }) {
    try {
      const user = await User.findByPk(id);

      await user.update({ name, email, is_admin });

      return user;
    } catch (error) {
      throw Error(error);
    }
  }

  static async deleteUser(id) {
    try {
      const user = await User.findByPk(id);

      await user.destroy();

      return;
    } catch (error) {
      throw Error(error);
    }
  }
}

module.exports = UserService;
