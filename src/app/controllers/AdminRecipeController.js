const Recipe = require('../../models/Recipe');
const Chef = require('../../models/Chef');
const File = require('../../models/File');

const ChefService = require('../../services/ChefService');
const FileService = require('../../services/FileService');
const RecipeService = require('../../services/RecipeService');
const AdminRecipeService = require('../../services/AdminRecipeService');

class RecipeController {
  static async index(req, res) {
    try {
      const recipes = await RecipeService.findAll();

      return res.render('admin/recipe/index', { title: 'Receitas', recipes });
    } catch (error) {
      res.render('admin/recipe/index', {
        title: 'Receitas',
        message: { err: 'Ocorreu um erro, tente novamente' },
      });
      throw Error(error);
    }
  }

  static async show(req, res) {
    try {
      const { id } = req.params;

      const recipe = await RecipeService.findOne(id);

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
      res.render('admin/recipe/show', {
        title: 'Receita',
        message: { err: 'Ocorreu um erro, tente novamente' },
      });

      throw Error(error);
    }
  }

  static async create(req, res) {
    try {
      const chefs = await ChefService.findAll();

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
      const { id: user_id } = req.session.user;
      const { chef_id, title, information } = req.body;
      let { ingredients, preparation } = req.body;

      ingredients =
        typeof ingredients === 'string' ? ingredients.split() : ingredients;
      preparation =
        typeof preparation === 'string' ? preparation.split() : preparation;

      const recipe = await AdminRecipeService.createRecipe({
        user_id,
        chef_id,
        title,
        ingredients,
        preparation,
        information,
      });

      await Promise.all(
        req.files.map(async ({ originalname: name, filename }) => {
          const path = `http://${req.headers.host}/files/${filename}`;

          const file = await FileService.create({ name, path });

          return recipe.addFile(file);
        })
      );

      return res.redirect(`/admin/recipes/${recipe.id}`);
    } catch (error) {
      res.render('admin/recipe/create', {
        title: 'Nova receita',
        message: { err: 'Ocorreu um erro, tente novamente' },
      });

      throw Error(error);
    }
  }

  static async edit(req, res) {
    try {
      const { id } = req.params;

      const recipe = await RecipeService.findOne(id);

      if (!recipe)
        return res.render('admin/recipe/edit', {
          title: `Editar receita`,
          message: { err: 'Receita não encontrado' },
        });

      const chefs = await ChefService.findAll();

      return res.render('admin/recipe/edit', {
        title: `Editar receita`,
        recipe,
        chefs,
      });
    } catch (error) {
      res.render('admin/recipe/edit', {
        title: `Editar receita`,
        message: { err: 'Ocorreu um erro, tente novamente' },
      });

      throw Error(error);
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { chef_id, title, information } = req.body;
      let { ingredients, preparation } = req.body;

      ingredients =
        typeof ingredients === 'string' ? ingredients.split() : ingredients;
      preparation =
        typeof preparation === 'string' ? preparation.split() : preparation;

      const recipe = await AdminRecipeService.updateRecipe(id, {
        chef_id,
        title,
        ingredients,
        preparation,
        information,
      });

      if (req.files) {
        await Promise.all(
          req.files.map(async ({ originalname: name, filename }) => {
            const path = `http://${req.headers.host}/files/${filename}`;

            const file = await FileService.create({ name, path });

            recipe.addFile(file);
          })
        );
      }

      if (req.body.removed_files) {
        const removedFiles = req.body.removed_files.split(',');

        removedFiles.splice(removedFiles.length - 1, 1);

        await Promise.all(
          removedFiles.map(async fileId => {
            const file = await FileService.findOne(fileId);

            recipe.removeFile(file);

            await file.destroy();
          })
        );
      }

      return res.redirect(`/admin/recipes/${id}`);
    } catch (error) {
      res.render('admin/recipe/edit', {
        title: 'Editar receita',
        message: { err: 'Ocorreu um erro, tente novamente' },
      });

      throw Error(error);
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const recipe = await RecipeService.findOne(id);

      await Promise.all(
        recipe.files.map(async ({ id: fileId }) => {
          const file = await FileService.findOne(fileId);

          recipe.removeFile(file);

          await file.destroy();
        })
      );

      await AdminRecipeService.deleteRecipe(id);

      return res.redirect(`/admin/recipes`);
    } catch (error) {
      throw Error(error);
    }
  }
}

module.exports = RecipeController;
