const { Category } = require("../models");

class CategoryController {
  // GET
  static async getCategories(req, res, next) {
    try {
      let query = req.query || null;
      let categories = await Category.findAll({
        where: query
      });

      res.status(200).json({
        categories
      });
    } catch (error) {
      next(error);
    }
  }

  // POST
  static async postCategory(req, res, next) {
    try {
      let data = {
        name: req.body.name
      };

      let categoryData = await Category.create(data);

      res.status(201).json({
        msg: "success add data category",
        categoryData
      });
    } catch (error) {
      next(error);
    }
  }

  // PUT
  static async editCategory(req, res, next) {
    try {
      let id = req.params.id;
      let data = {
        name: req.body.name
      };

      let categoryData = await Category.update(data, {
        where: { id: id },
        returning: true
      });
      const editedData = categoryData[1];

      if (!editedData.length) {
        throw new Error({ name: "NotFound", msg: "ups data not found" });
      }

      res.status(200).json({
        msg: "successfully edit category",
        product: editedData[0]
      });
    } catch (error) {
      next(error);
    }
  }

  // DELETE
  static async deleteCategory(req, res, next) {
    try {
      let id = req.params.id;

      let deletedData = await Category.destroy({
        where: { id: id }
      });

      if (deletedData === 1) {
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

module.exports = CategoryController;
