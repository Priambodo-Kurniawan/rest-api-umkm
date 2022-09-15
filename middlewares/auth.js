const { verifyToken } = require("../helpers/jsonwebtoken");
const { User } = require("../models");
const { Product } = require("../models");

class Auth {
  static async authentication(req, res, next) {
    try {
      let token = req.headers.token;

      if (!token) {
        throw { name: "NotAuthorize" };
      }

      let decoded = verifyToken(token); // bisa dibaca lagi
      let user = await User.findByPk(decoded.id);

      if (!user) throw { name: "NotAuthorize" };

      // jika ada di database, token user valid
      req.user = {
        id: user.id,
        email: user.email
      };
      next();
    } catch (error) {
      next(error);
    }
  }

  static async authorizationProduct(req, res, next) {
    try {
      let userId = req.user.id;
      let productId = req.params.id;

      let dataProduct = await Product.findByPk(productId);

      if (dataProduct.userId !== userId) {
        throw { name: "Forbiden" };
      }

      next();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Auth;
