const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lat: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: 0.0,
            validate: {
                isDecimal: true
            }
        },
        lon: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: 0.0,
            validate: {
                isDecimal: true
            }
        },
        favoriteGame: {
            type: DataTypes.STRING,
            allowNull: false
        },
        skillLevel: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        underscored: false,
        freezeTableName: true,
        modelName: 'User',
    }
);

module.exports = User;
