const router = require("express").Router();
const StoreController = require("../controllers/StoreController");
const Auth = require("../middlewares/auth");

// get -> untuk mendapatkan data
router.get("/", Auth.authentication, StoreController.getStore);

// post -> menyimpan data baru
router.post("/", Auth.authentication, StoreController.postStore);

// put -> mengedit data yg sudah ada
router.put("/:id", StoreController.editStore);

// delete -> menghapus data
router.delete("/:id", StoreController.deleteStore);

module.exports = router;
