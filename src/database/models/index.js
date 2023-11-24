const { Product, productSchema } = require("../models/productModel");
function setupModels(sequelize) {
  Product.init(productSchema, Product.config(sequelize));
}

module.exports = setupModels;
