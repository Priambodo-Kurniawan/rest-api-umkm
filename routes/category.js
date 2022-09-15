const router = require("express").Router();
const CategoryController = require("../controllers/CategoryController");

// get -> untuk mendapatkan data
router.get("/", CategoryController.getCategories);

// post -> menyimpan data baru
router.post("/", CategoryController.postCategory);

// put -> mengedit data yg sudah ada
router.put("/:id", CategoryController.editCategory);

// delete -> menghapus data
router.delete("/:id", CategoryController.deleteCategory);

module.exports = router;
