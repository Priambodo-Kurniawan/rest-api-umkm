const router = require("express").Router();
const ChurchController = require("../controllers/ChurchController");

// get -> untuk mendapatkan data
router.get("/", ChurchController.getChurch);

// post -> menyimpan data baru
router.post("/", ChurchController.postChurch);

// put -> mengedit data yg sudah ada
router.put("/:id", ChurchController.editChurch);

// delete -> menghapus data
router.delete("/:id", ChurchController.deleteChurch);

module.exports = router;
