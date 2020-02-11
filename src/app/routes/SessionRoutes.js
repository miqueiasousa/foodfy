const { Router } = require('express');

const SessionController = require('../controllers/SessionController');

const router = Router();

router.get('/login', SessionController.renderLogin);
router.post('/login', SessionController.login);
router.post('/logout', SessionController.logout);
router.get('/forgot-password', SessionController.renderForgotPassword);
router.post('/forgot-password', SessionController.forgotPassword);
router.get('/reset-password', SessionController.renderResetPassword);
router.post('/reset-password', SessionController.resetPassword);

module.exports = router;
