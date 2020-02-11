const Chef = require('../models/Chef');

class AdminChefService {
  static async createChef(name, fileId) {
    try {
      const chef = await Chef.create({ name, file_id: fileId });

      return chef;
    } catch (error) {
      throw Error(error);
    }
  }

  static async updateChef(id, { name, file_id }) {
    try {
      const user = await Chef.findByPk(id);

      await user.update({ name, file_id });

      return user;
    } catch (error) {
      throw Error(error);
    }
  }

  static async deleteChef(id) {
    try {
      const user = await Chef.findByPk(id);

      await user.destroy();

      return;
    } catch (error) {
      throw Error(error);
    }
  }
}

module.exports = AdminChefService;
