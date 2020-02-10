const Chef = require('../../models/Chef');
const File = require('../../models/File');

class ChefController {
  static async index(req, res) {
    try {
      const chefs = await Chef.findAll({
        order: [['created_at', 'DESC']],
        include: { association: 'file' },
      });

      return res.render('chefs/index', { title: 'Chefs', chefs });
    } catch (error) {
      throw Error(error);
    }
  }

  static async show(req, res) {
    try {
      const { id } = req.params;

      const chef = await Chef.findByPk(id, {
        include: { association: ['recipes', 'file'] },
      });

      if (!chef)
        return res.render('chefs/show', {
          title: `Chef`,
          message: { err: 'Chef não encontrado' },
        });

      return res.render('chefs/show', {
        title: `Chef ${chef.name}`,
        chef,
      });
    } catch (error) {
      throw Error(error);
    }
  }

  static create(req, res) {
    return res.render('chefs/create', { title: 'Criar chef' });
  }

  static async store(req, res) {
    try {
      const { name } = req.body;
      const { originalname, filename } = req.file;

      const { id: file_id } = await File.create({
        name: originalname,
        path: `http://${req.headers.host}/files/${filename}`,
      });
      const chef = await Chef.create({ name, file_id });

      return res.redirect(`/admin/chefs/${chef.id}`);
    } catch (error) {
      throw Error(error);
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;

      if (req.file) {
        const { originalname, filename } = req.file;

        const { id: file_id } = await File.create({
          name: originalname,
          path: `http://${req.headers.host}/files/${filename}`,
        });

        await Chef.update({ name, file_id }, { where: { id } });
      }

      await Chef.update({ name, file_id }, { where: { id } });

      return res.redirect(`/admin/chefs/${id}`);
    } catch (error) {
      throw Error(error);
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;

      await Chef.destroy({ where: { id } });

      return res.redirect('/admin/chefs');
    } catch (error) {
      throw Error(error);
    }
  }
}

module.exports = ChefController;
