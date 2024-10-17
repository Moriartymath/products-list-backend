const fs = require("fs/promises");

const catchAsync = require("../utils/catchAsync");

class Product {
  static getProducts = catchAsync(async (req, res, next) => {
    const products = JSON.parse(await fs.readFile("../data.json", "utf-8"));

    return products;
  });

  static getProduct = catchAsync(async (req, res, next) => {
    const products = JSON.parse(await fs.readFile("../data.json", "utf-8"));

    return products.find((el) => el.id === req.params.id);
  });
}

module.exports = Product;
