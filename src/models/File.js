const { Model, DataTypes } = require('sequelize');

class File extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        path: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Recipe, {
      foreignKey: 'file_id',
      through: 'recipe_files',
      as: 'recipes',
    });
  }
}

module.exports = File;
