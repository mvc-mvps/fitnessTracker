const User = require('./User');
const Nutrition = require('./Nutrition');
const Planner = require('./Planner');

//associations between user model and other models

User.hasMany(Nutrition, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Nutrition.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Planner, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Planner.belongsTo(User, {
    foreignKey: 'user_id'
});

//associationS between planner model and nutrition/exercise models


module.exports = { User, Nutrition, Planner };
