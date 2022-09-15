const router = require("express").Router();
const churchRoute = require("./church");
const productRoute = require("./product");
const userRoute = require("./user");
const categoryRoute = require("./category");
const storeRoute = require("./store");

router.get("/", (req, res, next) => {
  res.status(200).json({ msg: "app is running" });
});
router.use("/", userRoute);
router.use("/church", churchRoute);
router.use("/product", productRoute);
router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/store", storeRoute);
module.exports = router;
