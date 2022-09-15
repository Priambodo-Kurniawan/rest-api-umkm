const { Church } = require("../models");

class ChurchController {
  // GET
  static async getChurch(req, res, next) {
    try {
      let query = req.query || null;
      let church = await Church.findAll({
        where: query
      });

      res.status(200).json({
        church
      });
    } catch (error) {
      next(error);
    }
  }
  // POST
  static async postChurch(req, res, next) {
    try {
      let data = {
        name: req.body.name,
        address: req.body.address,
        longlat: req.body.longlat,
        description: req.body.description,
        photo: req.body.photo
      };

      let churchData = await Church.create(data);

      res.status(201).json({
        msg: "success add data category",
        churchData
      });
    } catch (error) {
      next(error);
    }
  }
  // PUT
  static async editChurch(req, res, next) {
    try {
      let id = req.params.id;
      let data = {
        name: req.body.name,
        address: req.body.address,
        longlat: req.body.longlat,
        description: req.body.description,
        photo: req.body.photo
      };

      let churchData = await Church.update(data, {
        where: { id: id },
        returning: true
      });
      const editedData = churchData[1];

      if (!editedData.length) {
        throw new Error({ name: "NotFound", msg: "ups data not found" });
      }

      res.status(200).json({
        msg: "successfully edit church",
        product: editedData[0]
      });
    } catch (error) {
      next(error);
    }
  }

  // DELETE
  static async deleteChurch(req, res, next) {
    try {
      let id = req.params.id;

      let deletedData = await Church.destroy({
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

module.exports = ChurchController;
