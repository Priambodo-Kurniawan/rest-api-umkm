"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Store.init(
    {
      churchId: {
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER
      },
      storeName: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Store name cannot be null"
          },
          notEmpty: {
            args: true,
            msg: "Store name is required"
          }
        }
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "description cannot be null"
          },
          notEmpty: {
            args: true,
            msg: "description is required"
          }
        }
      },
      whatsappNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Whatsapp Number cannot be null"
          },
          notEmpty: {
            args: true,
            msg: "Whatsapp Number is required"
          }
        }
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "address cannot be null"
          },
          notEmpty: {
            args: true,
            msg: "address is required"
          }
        }
      },
      longlat: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "longlat cannot be null"
          },
          notEmpty: {
            args: true,
            msg: "longlat is required"
          }
        }
      },
      photoProfile: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Photo Profile cannot be null"
          },
          notEmpty: {
            args: true,
            msg: "Photo Profile is required"
          }
        }
      }
    },
    {
      sequelize,
      modelName: "Store"
    }
  );
  return Store;
};
