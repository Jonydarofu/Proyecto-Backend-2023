const mongoose = require("mongoose");
const { productModel } = require("../models/products.model");
const { orderModel } = require("../models/orders.models");

exports.connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://jonathan071:<Fucina-1307>@jonydarofu.sgp0xpo.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Base de datos conectada");

    //await productModel.create(
    const products = [
      {
        tittle: "producto uno",
        description: "esto es producto uno",
        price: 600000,
        stock: 30,
      },
      {
        tittle: "producto dos",
        description: "Esto es el producto dos",
        price: 450000,
        stock: 20,
      },
      {
        tittle: "producto tres",
        description: "Este es el producto tres",
        price: 389000,
        stock: 10,
      },
    ];
    //);

    //let result = await orderModel.insertMany(products);
    //console.log(result);

    //const  order = await orderModel.find()
    //console.log('Ordenes',order),

    let ordersResult = await orderModel.aggregate([
      { $match: { size: "" } },
      { $group: { _id: "$name", totalStock: { $sum: "$stock" } } },
      { $sort: { totalStock: -1 } },
      { $group: { _id: 1, orders: { $push: "$$ROOT" } } },
      { $project: { _id: 0, orders: "$.orders" } },
      { $merge: { into: "reports" } },
    ]);
  } catch (error) {
    console.log("Error al conectar a la base de datos");
  }
};
