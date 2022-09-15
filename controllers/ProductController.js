const { Product, User, Store } = require("../models");

class ProductController {
  static async getProductBySlug(req, res, next) {
    try {
      let slug = req.params.slug;
      let product = await Product.findOne({
        where: {
          slug: slug
        },
        include: [
          {
            model: User,
            attributes: { exclude: ["password"] }
          },
          {
            model: Store,
            attributes: { exclude: ["description", "address"] }
          }
        ]
      });

      res.status(200).json({
        product
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getProduct(req, res, next) {
    try {
      let query = req.query || null;
      let products = await Product.findAll({
        where: {
          ...query,
          userId: req.user.id
        },
        include: [
          {
            model: User,
            attributes: { exclude: ["password"] }
          },
          {
            model: Store,
            attributes: { exclude: ["description", "address"] }
          }
        ]
      });
      res.status(200).json({
        products
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async postProduct(req, res, next) {
    try {
      let data = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        variant: req.body.variant,
        weight: req.body.weight,
        quantity: req.body.quantity,
        userId: req.user.id,
        storeId: req.body.storeId
      };
      let productData = await Product.create(data);
      res.status(201).json({
        msg: "Success add new product",
        productData
      });
    } catch (error) {
      next(error);
    }
  }

  static async editProduct(req, res, next) {
    try {
      let id = req.params.id;
      let data = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        variant: req.body.variant,
        weight: req.body.weight,
        quantity: req.body.quantity,
        storeId: req.body.storeId
      };

      let productData = await Product.update(data, {
        where: { id: id },
        returning: true,
        individualHooks: true
      });
      const editedData = productData[1];
      res.status(200).json({
        msg: "successfully edit product",
        product: editedData[0]
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      let id = req.params.id;
      let deletedProduct = await Product.destroy({
        where: { id: id }
      });

      if (deletedProduct === 1) {
        res.status(200).json({
          msg: "successfully delete category"
        });
      } else {
        throw new Error({ name: "NotFound", msg: "ups data not found" });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductController;
