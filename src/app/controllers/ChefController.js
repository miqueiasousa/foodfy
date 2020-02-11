const ChefService = require('../../services/ChefService');

class ChefController {
  static async index(req, res) {
    try {
      const chefs = await ChefService.findAll();

      return res.render('chef/index', { title: 'Chefs', chefs });
    } catch (error) {
      throw Error(error);
    }
  }

  static async show(req, res) {
    try {
      const { id } = req.params;

      const chef = await ChefService.findOne(id);

      return res.render('chef/show', { title: `${chef.name}`, chef });
    } catch (error) {
      throw Error(error);
    }
  }
}

module.exports = ChefController;
