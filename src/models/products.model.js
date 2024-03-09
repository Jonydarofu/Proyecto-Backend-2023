const { Schema, model } = require("mongoose");

const collection = "carts";

const ProductsSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  stock: Number,
});

const productModel = model(collection, ProdutctsSchema);

module.exports = { productModel };
