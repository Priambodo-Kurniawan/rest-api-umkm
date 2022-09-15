const { Store } = require("../models");

class StoreController {
  // GET
  static async getStore(req, res, next) {
    try {
      let query = req.query || null;
      let store = await Store.findAll({
        where: query
      });

      res.status(200).json({
        store
      });
    } catch (error) {
      next(error);
    }
  }

  // POST
  static async postStore(req, res, next) {
    try {
      let data = {
        storeName: req.body.storeName,
        description: req.body.description,
        whatsappNumber: req.body.whatsappNumber,
        address: req.body.address,
        longlat: req.body.longlat,
        photoProfile: req.body.photoProfile,
        userId: req.user.id
      };

      let storeData = await Store.create(data);

      res.status(201).json({
        msg: "success add data store",
        storeData
      });
    } catch (error) {
      next(error);
    }
  }

  // PUT
  static async editStore(req, res, next) {
    try {
      let id = req.params.id;
      let data = {
        storeName: req.body.storeName,
        description: req.body.description,
        whatsappNumber: req.body.whatsappNumber,
        address: req.body.address,
        longlat: req.body.longlat,
        photoProfile: req.body.photoProfile
      };

      let storeData = await Store.update(data, {
        where: { id: id },
        returning: true
      });
      const editedData = storeData[1];

      if (!editedData.length) {
        throw new Error({ name: "NotFound", msg: "ups data not found" });
      }

      res.status(200).json({
        msg: "successfully edit store",
        product: editedData[0]
      });
    } catch (error) {
      next(error);
    }
  }

  // DELETE
  static async deleteStore(req, res, next) {
    try {
      let id = req.params.id;

      let deletedStore = await Store.destroy({
        where: { id: id }
      });

      if (deletedStore === 1) {
        res.status(200).json({
          msg: "successfully delete store"
        });
      } else {
        throw new Error({ name: "NotFound", msg: "ups data not found" });
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = StoreController;
