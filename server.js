const express = require("express");
const userRouter = require("./src/routes/user.router");
const cartsRouter = require("./src/routes/carts.router");
const ProductManager = require("./ProductManager");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const products = [
  { id: 1, nombre: "Venzo", linea: "Thorn" },
  { id: 2, nombre: "Venzo", linea: "Loki" },
  { id: 3, nombre: "Venzo", linea: "Skyline" },
  { id: 4, nombre: "Venzo", linea: "Raptor" },
  { id: 5, nombre: "Venzo", linea: "Primal" },
  { id: 6, nombre: "Venzo", linea: "Fx" },
  { id: 7, nombre: "Venzo", linea: "Phoenix" },
  { id: 8, nombre: "Venzo", linea: "Shadow" },
  { id: 9, nombre: "Venzo", linea: "Eolo" },
  { id: 10, nombre: "Venzo", linea: "X-blaze" },
];
app.get("/api/product/:uid", (req, res) => {
  const { uid } = req.params;
  const product = product.find((product) => product.id === Number(uid));
  res.send(product);
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.post("/products", (req, res) => {
  res.send("create products");
});

app.put("/products/:uid", (req, res) => {
  res.send("update products");
});

app.delete("/products/:uid", (req, res) => {
  res.send("Eliminiar producto");
});

app.get("/query", (req, res) => {
  const { nombre, linea } = req.query;
  const product = products.find((product) => product.nombre === nombre);

  res.status(200).send(product);
});

app.listen(() => {
  console.log("Puerto 8080");
});
