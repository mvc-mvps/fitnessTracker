const router = require('express').Router();
const userRoutes = require('./userRoutes');
const plannerRoutes = require('./plannerRoutes');
const exerciseRoutes = require('./exerciseRoutes');
const nutritionRoutes = require('./nutritionRoutes');

router.use('/user', userRoutes);
router.use('/planner', plannerRoutes);
router.use('/exercise', exerciseRoutes);
router.use('/nutrition', nutritionRoutes);

module.exports = router;