"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Image.init(
    {
      image: {
        type: DataTypes.TEXT,
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
      }
    },
    {
      sequelize,
      modelName: "Image"
    }
  );
  return Image;
};
