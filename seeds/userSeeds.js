const sequelize = require('../config/connection');
const { User, Nutrition, Planner } = require('../models');

const userData = require('./userData.json');
const nutritionData = require('./nutritionData.json');
const plannerData = require('./plannerData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  
  await Nutrition.bulkCreate(nutritionData, {
    individualHooks: true,
    returning: true,
  });

  await Planner.bulkCreate(plannerData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
