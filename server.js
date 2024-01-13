const express = require("express");
const userRouter = require("./src/routes/user.router");
const cartsRouter = require("./src/routes/carts.router");
const ProductManager = require("./ProductManager")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let products = [
  { id: 1, nombre: "Venzo", linea: "Thorn" },
  { id: 2, nombre: "Venzo", linea: "Loki" },
  { id: 3, nombre: "Venzo", linea: "Skyline" },
];
app.get('/api/product/:uid', (req, res)=>{
  const {uid} = req.params
  const product = product.find(product => product.id === Number(uid))
  res.send (product)
});

app.get('/users', (req,res)=> {
  res.send (products)
});


app.listen(() => {
  console.log("Puerto");
});
