const Recipe = require('../../models/Recipe');
const Chef = require('../../models/Chef');
const File = require('../../models/File');

class RecipeController {
  static async index(req, res) {
    try {
      const recipes = await Recipe.findAll({
        include: [{ association: 'chef' }, { association: 'files' }],
      });

      return res.render('admin/recipe/index', { title: 'Receitas', recipes });
    } catch (error) {
      throw Error(error);
    }
  }

  static async show(req, res) {
    try {
      const { id } = req.params;

      const recipe = await Recipe.findByPk(id, {
        include: [{ association: 'files' }, { association: 'chef' }],
      });

      if (!recipe)
        return res.render('admin/recipe/show', {
          title: 'Receita',
          message: { err: 'Receita não econtrada' },
        });

      return res.render('admin/recipe/show', {
        title: `${recipe.title}`,
        recipe,
      });
    } catch (error) {
      throw Error(error);
    }
  }

  static async create(req, res) {
    try {
      const chefs = await Chef.findAll();

      return res.render('admin/recipe/create', {
        title: 'Nova receita',
        chefs,
      });
    } catch (error) {
      throw Error(error);
    }
  }

  static async store(req, res) {
    try {
      const {
        chef_id,
        title,
        ingredients,
        preparation,
        information,
      } = req.body;

      const recipe = await Recipe.create({
        chef_id,
        user_id: req.session.user.id,
        title,
        ingredients,
        preparation,
        information,
      });

      await Promise.all(
        req.files.map(async ({ originalname: name, filename }) => {
          const path = `http://${req.headers.host}/files/${filename}`;
          const file = await File.create({ name, path });

          return recipe.addFile(file);
        })
      );

      return res.redirect(`/admin/recipes/${recipe.id}`);
    } catch (error) {
      throw Error(error);
    }
  }

  static async edit(req, res) {
    try {
      const { id } = req.params;

      const recipe = await Recipe.findByPk(id, {
        include: { association: 'files' },
      });

      if (!recipe)
        return res.render('admin/recipe/edit', {
          title: `Editar receita`,
          message: { err: 'Receita não encontrado' },
        });

      const chefs = await Chef.findAll();

      return res.render('admin/recipe/edit', {
        title: `Editar receita`,
        recipe,
        chefs,
      });
    } catch (error) {
      throw Error(error);
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { title, ingredients, preparation, information } = req.body;

      const recipe = await Recipe.findByPk(id);

      if (!recipe)
        return res.render('admin/recipe/edit', {
          title: 'Editar receita',
          message: { err: 'Receita não encontrada' },
        });

      await Recipe.update(
        { title, ingredients, preparation, information },
        {
          where: { id },
        }
      );

      if (req.files) {
        await Promise.all(
          req.files.map(async ({ originalname: name, filename }) => {
            const path = `http://${req.headers.host}/files/${filename}`;
            const file = await File.create({ name, path });

            return recipe.addFile(file);
          })
        );
      }

      if (req.body.removed_files) {
        const removedFiles = req.body.removed_files.split(',');

        removedFiles.splice(removedFiles.length - 1, 1);

        await Promise.all(
          removedFiles.map(async fileId => {
            await File.destroy({ where: { id: fileId } });

            return true;
          })
        );
      }

      return res.redirect(`/admin/recipes/${id}`);
    } catch (error) {
      throw Error(error);
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const recipe = await Recipe.findByPk(id, {
        include: { association: 'files' },
      });

      await Promise.all(
        recipe.files.map(async file => {
          await File.destroy({ where: { id: file.id } });

          return true;
        })
      );

      recipe.destroy();

      return res.redirect(`/admin/recipes`);
    } catch (error) {
      throw Error(error);
    }
  }
}

module.exports = RecipeController;
