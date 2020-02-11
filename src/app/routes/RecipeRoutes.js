const { Router } = require('express');

const RecipeController = require('../controllers/RecipeController');

const router = Router();

router.get('/', RecipeController.index);
router.get('/search', RecipeController.search);
router.get('/:id', RecipeController.show);

module.exports = router;
