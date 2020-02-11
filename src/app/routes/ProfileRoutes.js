const { Router } = require('express');

const ProfileController = require('../controllers/ProfileController');

const router = Router();

router.get('/profile', ProfileController.show);
router.put('/profile', ProfileController.update);

module.exports = router;
