const Chef = require('../../models/Chef');
const Recipe = require('../../models/Recipe');
const File = require('../../models/File');

class ChefController {
  static async index(req, res) {
    try {
      const chefs = await Chef.findAll({
        order: [['created_at', 'DESC']],
        include: { association: 'file' },
      });

      return res.render('admin/chef/index', { title: 'Chefs', chefs });
    } catch (error) {
      throw Error(error);
    }
  }

  static async show(req, res) {
    try {
      const { id } = req.params;

      const chef = await Chef.findByPk(id, {
        include: [{ association: 'file' }, { association: 'recipes' }],
      });

      if (!chef)
        return res.render('admin/chef/show', {
          title: `Chef`,
          message: { err: 'Chef não encontrado' },
        });

      const recipes = await Recipe.findAll({
        where: { chef_id: id },
        include: [{ association: 'chef' }, { association: 'files' }],
      });

      return res.render('admin/chef/show', {
        title: `Chef ${chef.name}`,
        chef,
        recipes,
      });
    } catch (error) {
      throw Error(error);
    }
  }

  static create(req, res) {
    return res.render('admin/chef/create', { title: 'Criar chef' });
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

  static async edit(req, res) {
    try {
      const { id } = req.params;

      const chef = await Chef.findByPk(id);

      if (!chef)
        return res.render('admin/chef/edit', {
          title: `Editar chef`,
          message: { err: 'Chef não encontrado' },
        });

      return res.render('admin/chef/edit', {
        title: `Editar chef ${chef.name}`,
        chef,
      });
    } catch (error) {
      throw Error(error);
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { name, file_id } = req.body;

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
