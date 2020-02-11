const { compare } = require('bcryptjs');

const User = require('../models/User');

class ProfileService {
  static async authenticateAndUpdateUser(id, password, keys) {
    try {
      const user = await User.findByPk(id);
      const passed = await compare(password, user.password);

      if (!passed) return false;

      await user.update({ ...keys });

      return user;
    } catch (error) {
      throw Error(error);
    }
  }
}

module.exports = ProfileService;
