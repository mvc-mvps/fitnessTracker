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
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //goal for minutes/time or number of reps    
        goal: {
            type: DataTypes.INTEGER,
        },
        //completed minutes/time or number of reps    
        completed: {
            type: DataTypes.INTEGER,
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