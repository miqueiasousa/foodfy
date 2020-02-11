const { Router } = require('express');

const ChefController = require('../controllers/ChefController');

const router = Router();

router.get('/', ChefController.index);

router.get('/:id', ChefController.show);

module.exports = router;
