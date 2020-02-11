const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('../../config/multer');

const AdminRecipeController = require('../controllers/AdminRecipeController');

const router = Router();

router.get('/', AdminRecipeController.index);
router.get('/create', AdminRecipeController.create);
router.get('/:id', AdminRecipeController.show);
router.get('/:id/edit', AdminRecipeController.edit);
router.post(
  '/',
  multer(multerConfig).array('files', 5),
  AdminRecipeController.store
);
router.put(
  '/:id',
  multer(multerConfig).array('files', 5),
  AdminRecipeController.update
);
router.delete('/:id', AdminRecipeController.delete);

module.exports = router;
