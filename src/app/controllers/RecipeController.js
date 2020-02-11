const RecipeService = require('../../services/RecipeService');

class RecipeController {
  static async index(req, res) {
    try {
      const recipes = await RecipeService.findAll();

      return res.render('recipe/index', { title: 'Receitas', recipes });
    } catch (error) {
      throw Error(error);
    }
  }

  static async search(req, res) {
    try {
      const { filter } = req.query;

      const recipes = await RecipeService.search(filter.toString());

      return res.render('recipe/search', {
        title: `Buscar receita`,
        recipes,
        filter,
      });
    } catch (error) {
      throw Error(error);
    }
  }

  static async show(req, res) {
    try {
      const { id } = req.params;

      const recipe = await RecipeService.findOne(id);

      return res.render('recipe/show', { title: `${recipe.title}`, recipe });
    } catch (error) {
      throw Error(error);
    }
  }
}

module.exports = RecipeController;
