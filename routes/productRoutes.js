const express = require("express");
const Product = require("../controllers/productController");
const router = express.Router();

router.route("/").get(Product.getProducts);
router.route("/:id").get(Product.getProduct);

module.exports = router;
