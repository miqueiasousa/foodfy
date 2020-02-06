const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        reset_token: DataTypes.STRING,
        reset_token_expires: DataTypes.STRING,
        is_admin: DataTypes.BOOLEAN,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = User;
