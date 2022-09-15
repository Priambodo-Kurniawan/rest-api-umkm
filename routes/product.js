const router = require("express").Router();
const ProductController = require("../controllers/ProductController");
const Auth = require("../middlewares/auth");
router.get("/", Auth.authentication, ProductController.getProduct);
router.get("/:slug", ProductController.getProductBySlug);

router.post("/", Auth.authentication, ProductController.postProduct);

router.put(
  "/:id",
  Auth.authentication,
  Auth.authorizationProduct,
  ProductController.editProduct
);

router.delete(
  "/:id",
  Auth.authentication,
  Auth.authorizationProduct,
  ProductController.deleteProduct
);

module.exports = router;
