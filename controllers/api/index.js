const router = require('express').Router();
const userRoutes = require('./userRoutes');
const plannerRoutes = require('./plannerRoutes');
const nutritionRoutes = require('./nutritionRoutes');

router.use('/user', userRoutes);
router.use('/homepage', plannerRoutes);
// router.use('/addexercise', plannerRoutes);
// router.use('/updateexercise', plannerRoutes);
// router.use('/deleteexercise', plannerRoutes);
router.use('/nutrition', nutritionRoutes);

module.exports = router;