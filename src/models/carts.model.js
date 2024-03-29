const { Schema, model } = require("mongoose");

const collection = "carts";

const CartsSchema = new Schema({
  products: {
    type: [
      {
        product: { type: Schema.Types.ObjectId, ref: "products" },
        quantity: Number,
      },
    ],
  },
});

CartsSchema.pre("findOne", function () {
  this.populate("products.product");
});

const cartstModel = model(collection, CartsSchema);

module.exports = { cartstModel };
