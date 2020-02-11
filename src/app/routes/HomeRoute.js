const { Router } = require('express');

const HomeController = require('../controllers/HomeController');

const router = Router();

router.get('/', HomeController.index);

module.exports = router;
