const ChefService = require('../../services/ChefService');
const FileService = require('../../services/FileService');
const AdminChefService = require('../../services/AdminChefService');

class ChefController {
  static async index(req, res) {
    try {
      const chefs = await ChefService.findAll();

      return res.render('admin/chef/index', { title: 'Chefs', chefs });
    } catch (error) {
      res.render('admin/chef/index', {
        title: 'Chefs',
        message: { err: 'Ocorreu um erro, tente novamente' },
      });

      throw Error(error);
    }
  }

  static async show(req, res) {
    try {
      const { id } = req.params;

      const chef = await ChefService.findOne(id);

      if (!chef)
        return res.render('admin/chef/show', {
          title: `Chef`,
          message: { err: 'Chef não encontrado' },
        });

      return res.render('admin/chef/show', {
        title: `Chef ${chef.name}`,
        chef,
      });
    } catch (error) {
      res.render('admin/chef/show', {
        title: `Chef`,
        message: { err: 'Ocorreu um erro, tente novamente' },
      });

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

      const fileId = await FileService.create({
        name: originalname,
        path: `http://${req.headers.host}/files/${filename}`,
      });
      const chef = await AdminChefService.createChef(name, fileId);

      return res.redirect(`/admin/chefs/${chef.id}`);
    } catch (error) {
      res.render('admin/chef/create', {
        title: 'Criar chef',
        message: { err: 'Ocorreu um erro, tente novamente' },
      });

      throw Error(error);
    }
  }

  static async edit(req, res) {
    try {
      const { id } = req.params;

      const chef = await ChefService.findOne(id);

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
      res.render('admin/chef/edit', {
        title: `Editar chef`,
        message: { err: 'Ocorreu um erro, tente novamente' },
      });

      throw Error(error);
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { name, file_id } = req.body;

      if (req.file) {
        const { originalname, filename } = req.file;

        const fileId = await FileService.create({
          name: originalname,
          path: `http://${req.headers.host}/files/${filename}`,
        });

        await AdminChefService.updateChef(id, { name, file_id: fileId });

        return res.redirect(`/admin/chefs/${id}`);
      }

      await AdminChefService.updateChef(id, { name, file_id });

      return res.redirect(`/admin/chefs/${id}`);
    } catch (error) {
      res.render('admin/chef/edit', {
        title: `Editar chef`,
        message: { err: 'Ocorreu um erro, tente novamente' },
      });

      throw Error(error);
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;

      await AdminChefService.deleteChef(id);

      return res.redirect('/admin/chefs');
    } catch (error) {
      res.render('admin/chef/edit', {
        title: `Editar chef`,
        message: { err: 'Ocorreu um erro, tente novamente' },
      });

      throw Error(error);
    }
  }
}

module.exports = ChefController;
