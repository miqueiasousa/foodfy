const File = require('../models/File');

class FileService {
  static async findOne(id) {
    try {
      const file = await File.findByPk(id);

      return file;
    } catch (error) {
      throw Error(error);
    }
  }

  static async create({ name, path }) {
    try {
      const file = await File.create({ name, path });

      return file.id;
    } catch (error) {
      throw Error(error);
    }
  }

  static async deleteFile(id) {
    try {
      const file = await File.findByPk(id);

      await file.destroy();

      return;
    } catch (error) {
      throw Error(error);
    }
  }
}

module.exports = FileService;
