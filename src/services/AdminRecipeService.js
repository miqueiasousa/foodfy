const Recipe = require('../models/Recipe');

class AdminRecipeService {
  static async createRecipe({
    user_id,
    chef_id,
    title,
    ingredients,
    preparation,
    information,
  }) {
    try {
      const recipe = await Recipe.create({
        user_id,
        chef_id,
        title,
        ingredients,
        preparation,
        information,
      });

      return recipe;
    } catch (error) {
      throw Error(error);
    }
  }

  static async updateRecipe(
    id,
    { chef_id, title, ingredients, preparation, information }
  ) {
    try {
      const recipe = await Recipe.findByPk(id);

      await recipe.update({
        chef_id,
        title,
        ingredients,
        preparation,
        information,
      });

      return recipe;
    } catch (error) {
      throw Error(error);
    }
  }

  static async deleteRecipe(id) {
    try {
      const recipe = await Recipe.findByPk(id);

      await recipe.destroy();

      return;
    } catch (error) {
      throw Error(error);
    }
  }
}

module.exports = AdminRecipeService;
