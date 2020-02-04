const { Model, DataTypes } = require('sequelize');

class Chef extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'file_id', as: 'file' });
    this.hasMany(models.Recipe, { foreignKey: 'chef_id', as: 'recipes' });
  }
}

module.exports = Chef;
