"use strict";
const { Model } = require("sequelize");
const convertToSlug = require("../helpers/slug");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.User, { foreignKey: "userId" });
      Product.belongsTo(models.Store, { foreignKey: "storeId" });
    }
  }
  Product.init(
    {
      storeId: {
        type: DataTypes.INTEGER
      },
      categoryId: {
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "name cannot be null"
          },
          notEmpty: {
            args: true,
            msg: "name is required"
          }
        }
      },
      slug: {
        type: DataTypes.TEXT,
        allowNull: true
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
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "price cannot be null"
          },
          notEmpty: {
            args: true,
            msg: "price is required"
          }
        }
      },
      variant: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "variant cannot be null"
          },
          notEmpty: {
            args: true,
            msg: "variant is required"
          }
        }
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "weight cannot be null"
          },
          notEmpty: {
            args: true,
            msg: "weight is required"
          },
          isInt: {
            args: false,
            msg: "Weight is not Integer"
          }
        }
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "quantity cannot be null"
          },
          notEmpty: {
            args: true,
            msg: "quantity is required"
          }
        }
      }
    },
    {
      sequelize,
      hooks: {
        beforeCreate(product) {
          product.slug = convertToSlug(product.name);
        },
        beforeUpdate(product) {
          if (product.name) {
            product.slug = convertToSlug(product.name);
          }
        }
      },
      modelName: "Product"
    }
  );
  return Product;
};
