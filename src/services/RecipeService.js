const { Op } = require('sequelize');
const Recipe = require('../models/Recipe');

class RecipeService {
  static async findAll() {
    try {
      const recipes = await Recipe.findAll({
        order: [['updated_at', 'DESC']],
        include: [{ association: 'chef' }, { association: 'files' }],
      });

      return recipes;
    } catch (error) {
      throw Error(error);
    }
  }

  static async findOne(id) {
    try {
      const recipe = await Recipe.findByPk(id, {
        include: [{ association: 'chef' }, { association: 'files' }],
      });

      return recipe;
    } catch (error) {
      throw Error(error);
    }
  }

  static async search(filter) {
    try {
      const recipes = await Recipe.findAll({
        where: {
          title: {
            [Op.iLike]: `%${filter}%`,
          },
        },
        order: [['updated_at', 'DESC']],
        include: [{ association: 'chef' }, { association: 'files' }],
      });

      return recipes;
    } catch (error) {
      throw Error(error);
    }
  }
}

module.exports = RecipeService;
