const Chef = require('../models/Chef');

class ChefService {
  static async findAll() {
    try {
      const chefs = await Chef.findAll({
        order: [['created_at', 'DESC']],
        include: [{ association: 'file' }, { association: 'recipes' }],
      });

      return chefs;
    } catch (error) {
      throw Error(error);
    }
  }

  static async findOne(id) {
    try {
      const chef = await Chef.findByPk(id, {
        include: [
          {
            association: 'recipes',
            include: [{ association: 'chef' }, { association: 'files' }],
          },
          { association: 'file' },
        ],
      });

      return chef;
    } catch (error) {
      throw Error(error);
    }
  }
}

module.exports = ChefService;
