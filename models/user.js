"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Email cannot be null"
          },
          notEmpty: {
            args: true,
            msg: "Email is required"
          },
          isEmail: {
            args: true,
            msg: "Email is invalid"
          }
        },
        unique: {
          args: true,
          msg: "Email is already exists"
        }
      },
      churchId: {
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.TEXT
      },
      address: {
        type: DataTypes.TEXT
      },
      password: {
        type: DataTypes.STRING
      },
      photo: {
        type: DataTypes.TEXT
      },
      phoneNumber: {
        type: DataTypes.STRING
      },
      gender: {
        type: DataTypes.STRING
      },
      dob: {
        type: DataTypes.DATE
      },
      role: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      hooks: {
        beforeCreate(user) {
          user.password = hashPassword(user.password);
          user.role = "user";
        },
        beforeUpdate(user) {
          if (user.role !== "admin") {
            user.role = "user";
          }
        }
      },
      modelName: "User"
    }
  );
  return User;
};
