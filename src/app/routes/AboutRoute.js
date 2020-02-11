const { Router } = require('express');

const AboutController = require('../controllers/AboutController');

const router = Router();

router.get('/', AboutController.index);

module.exports = router;
