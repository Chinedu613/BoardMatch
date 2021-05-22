const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RightSwipe extends Model {}

RightSwipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "User",
                key: "id",
                unique: false
            }
        },
        prospectId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "User",
                key: "id",
                unique: false
            }
        },
        distance: {
            type: DataTypes.DECIMAL,
            allowNull: false,            
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        message: {
            type: DataTypes.STRING            
        }
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'Product',
    }
);

module.exports = RightSwipe;
