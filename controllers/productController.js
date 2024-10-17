const fs = require("fs/promises");

const catchAsync = require("../utils/catchAsync");

class Product {
  static getProducts = catchAsync(async (req, res, next) => {
    const products = JSON.parse(await fs.readFile("data.json", "utf-8"));

    console.log(products);

    res.status(200).json({ status: "success", data: { products } });
  });

  static getProduct = catchAsync(async (req, res, next) => {
    const products = JSON.parse(await fs.readFile("data.json", "utf-8"));

    const product = products.find((el) => el.id == req.params.id);

    res.status(200).json({ status: "success", data: { product } });
  });
}

module.exports = Product;
