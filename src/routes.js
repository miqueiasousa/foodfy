const { Router } = require('express');

const SessionController = require('./app/controllers/SessionController');
const ProfileController = require('./app/controllers/ProfileController');

const isAuthenticated = require('./app/middleware/isAuthenticated');

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

router.get('/admin/users/profile', ProfileController.index);
router.put('/admin/users/profile', ProfileController.update);

module.exports = router;
