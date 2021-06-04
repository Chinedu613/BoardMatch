const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Swipe extends Model {}

Swipe.init(
    {
        //col definitions
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: "Users",
                key: "id",
                unique: false
            }
        },
        prospectId: {
            type: DataTypes.INTEGER,
        },
        distance: {
            type: DataTypes.FLOAT(10, 2),       
        },
        message: {
            type: DataTypes.STRING, 
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        game: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        underscored: false,
        freezeTableName: false,
        modelName: "Swipes"
    }
);

module.exports = Swipe;