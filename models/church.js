"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Church extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Church.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Name cannot be null"
          },
          notEmpty: {
            args: true,
            msg: "Name is required"
          }
        }
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Address cannot be null"
          },
          notEmpty: {
            args: true,
            msg: "Address is required"
          }
        }
      },
      longlat: {
        type: DataTypes.STRING,
        allowNull: true
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Description cannot be null"
          },
          notEmpty: {
            args: true,
            msg: "Description is required"
          }
        }
      },
      photo: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Photo cannot be null"
          },
          notEmpty: {
            args: true,
            msg: "Photo is required"
          }
        }
      }
    },
    {
      sequelize,
      modelName: "Church"
    }
  );
  return Church;
};
