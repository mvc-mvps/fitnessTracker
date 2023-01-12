const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Planner extends Model { }

Planner.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        //goal for minutes/time or number of reps    
        exercisegoal: {
            type: DataTypes.INTEGER,
        },
        //completed minutes/time or number of reps    
        exercisecompleted: {
            type: DataTypes.INTEGER,
        },
        exercise_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'exercise',
                key: 'id',
            },
        },
        nutrition_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'nutrition',
                key: 'id',
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'planner',
    }
);

module.exports = Planner;