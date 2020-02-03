const { Model, DataTypes } = require('sequelize');

class Recipe extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      ingredients: DataTypes.ARRAY(DataTypes.TEXT),
      preparation: DataTypes.ARRAY(DataTypes.TEXT),
      information: DataTypes.STRING
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Chef, { foreignKey: 'chef_id', as: 'chef' })
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
  }
}

module.exports = Recipe
