const { Router } = require('express');

const HomeRoute = require('./app/routes/HomeRoute');
const AboutRoute = require('./app/routes/AboutRoute');
const RecipeRoutes = require('./app/routes/RecipeRoutes');
const ChefRoutes = require('./app/routes/ChefRoutes');
const SessionRoutes = require('./app/routes/SessionRoutes');
const ProfileRoutes = require('./app/routes/ProfileRoutes');
const UserRoutes = require('./app/routes/UserRoutes');
const AdminChefRoutes = require('./app/routes/AdminChefRoutes');
const AdminRecipeRoutes = require('./app/routes/AdminRecipeRoutes');

const isAuthenticated = require('./app/middleware/isAuthenticated');

const router = Router();

router.use(HomeRoute);
router.use('/about', AboutRoute);
router.use('/recipes', RecipeRoutes);
router.use('/chefs', ChefRoutes);

router.use('/admin/users', SessionRoutes);

router.use(isAuthenticated);

router.use('/admin/users', ProfileRoutes);
router.use('/admin/users', UserRoutes);
router.use('/admin/chefs', AdminChefRoutes);
router.use('/admin/recipes', AdminRecipeRoutes);

module.exports = router;
