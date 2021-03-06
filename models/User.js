const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lat: {
            type: DataTypes.DECIMAL(10, 4),
            allowNull: false,
            defaultValue: 0.0,
            validate: {
                isDecimal: true
            }
        },
        lon: {
            type: DataTypes.DECIMAL(10, 4),
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
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        testSize: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        minSkillLevel: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        userBio: {
            type: DataTypes.STRING,
            allowNull: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
          },
        sequelize,
        timestamps: false,
        underscored: false,
        freezeTableName: false,
        modelName: 'Users',
    }
);

module.exports = User;
