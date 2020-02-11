const { Router } = require('express');
const isAdmin = require('../middleware/isAdmin');

const UserController = require('../controllers/UserController');

const router = Router();

router.get('/', UserController.index);
router.get('/create', isAdmin, UserController.create);
router.get('/:id', isAdmin, UserController.show);
router.post('/', isAdmin, UserController.store);
router.put('/:id', isAdmin, UserController.update);
router.delete('/:id', isAdmin, UserController.delete);

module.exports = router;
