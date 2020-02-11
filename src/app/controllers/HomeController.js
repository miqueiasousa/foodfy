const RecipeService = require('../../services/RecipeService');

class HomeController {
  static async index(req, res) {
    try {
      const recipes = await RecipeService.findAll();

      return res.render('home/index', { recipes });
    } catch (error) {
      throw Error(error);
    }
  }
}

module.exports = HomeController;
