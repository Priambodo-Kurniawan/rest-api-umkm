const { User } = require("../models");
const { checkPassword } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jsonwebtoken");

class UserController {
  static async register(req, res, next) {
    try {
      let {
        churchId,
        email,
        password,
        name,
        address,
        photo,
        phoneNumber,
        dob,
        gender
      } = req.body;

      let createdUser = await User.create({
        churchId,
        email,
        password,
        name,
        address,
        photo,
        phoneNumber,
        dob,
        gender
      });

      res.status(201).json({
        msg: "user successfully registered"
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      let data = {
        email: req.body.email,
        password: req.body.password
      };

      const user = await User.findOne({
        where: { email: data.email }
      });

      if (!user) {
        throw new Error({ name: "NotFound", msg: "user not found" });
      }

      const isMatch = await checkPassword(data.password, user.password);

      if (!isMatch) {
        throw { name: "NotAuthorize" };
      }

      let tokenData = {
        id: user.id,
        name: user.name
      };

      let accessToken = generateToken(tokenData);

      res.status(200).json({
        msg: "login success test",
        accessToken
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
