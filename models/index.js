const User = require('./User');
const Exercise = require('./Exercise');
const Nutrition = require('./Nutrition');
const Planner = require('./Planner');

User.hasMany(Exercise, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Exercise.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Nutrition, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Nutrition.belongsTo(User, {
    foreignKey: 'user_id'
});

Planner.belongsTo(User, {
    foreignKey: 'user_id'
});

Planner.hasMany(Nutrition, {
    foreignKey: 'planner_id',
    onDelete: 'CASCADE'
});

Planner.hasMany(Exercise, {
    foreignKey: 'planner_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Exercise, Nutrition, Planner };
