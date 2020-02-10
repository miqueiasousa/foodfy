const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const SessionController = require('./app/controllers/SessionController');
const ProfileController = require('./app/controllers/ProfileController');
const UserController = require('./app/controllers/UserController');
const ChefController = require('./app/controllers/ChefController');

const isAuthenticated = require('./app/middleware/isAuthenticated');
const isAdmin = require('./app/middleware/isAdmin');

const router = Router();

router.get('/admin/users/login', SessionController.renderLogin);
router.post('/admin/users/login', SessionController.login);
router.post('/admin/users/logout', SessionController.logout);
router.get(
  '/admin/users/forgot-password',
  SessionController.renderForgotPassword
);
router.post('/admin/users/forgot-password', SessionController.forgotPassword);
router.get(
  '/admin/users/reset-password',
  SessionController.renderResetPassword
);
router.post('/admin/users/reset-password', SessionController.resetPassword);

router.use(isAuthenticated);

router.get('/admin/users/profile', ProfileController.show);
router.put('/admin/users/profile', ProfileController.update);

router.get('/admin/users', UserController.index);
router.get('/admin/users/create', isAdmin, UserController.create);
router.get('/admin/users/:id', isAdmin, UserController.show);
router.post('/admin/users', isAdmin, UserController.store);
router.put('/admin/users/:id', isAdmin, UserController.update);
router.delete('/admin/users/:id', isAdmin, UserController.delete);

router.get('/admin/chefs', ChefController.index);
router.get('/admin/chefs/create', isAdmin, ChefController.create);
router.get('/admin/chefs/:id', ChefController.show);
router.get('/admin/chefs/:id/edit', isAdmin, ChefController.edit);
router.post(
  '/admin/chefs',
  multer(multerConfig).single('file'),
  isAdmin,
  ChefController.store
);
router.put(
  '/admin/chefs/:id',
  multer(multerConfig).single('file'),
  isAdmin,
  ChefController.update
);
router.delete('/admin/chefs/:id', isAdmin, ChefController.delete);

module.exports = router;
