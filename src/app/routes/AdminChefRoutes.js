const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('../../config/multer');
const isAdmin = require('../middleware/isAdmin');

const AdminChefController = require('../controllers/AdminChefController');

const router = Router();

router.get('/', AdminChefController.index);
router.get('/create', isAdmin, AdminChefController.create);
router.get('/:id', AdminChefController.show);
router.get('/:id/edit', isAdmin, AdminChefController.edit);
router.post(
  '/',
  multer(multerConfig).single('file'),
  isAdmin,
  AdminChefController.store
);
router.put(
  '/:id',
  multer(multerConfig).single('file'),
  isAdmin,
  AdminChefController.update
);
router.delete('/:id', isAdmin, AdminChefController.delete);

module.exports = router;
