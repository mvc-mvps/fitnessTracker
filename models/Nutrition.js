const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Nutrition extends Model {}

Nutrition.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    calories: {
        type: DataTypes.INTEGER,
      },
    //Need other variables we want to include
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
    modelName: 'nutrition',
  }
);

module.exports = Nutrition;