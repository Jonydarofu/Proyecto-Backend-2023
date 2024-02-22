const express = require("express");
const userRouter = require("./src/routers/products.router");
const cartsRouter = require("./src/routers/carts.router");
const ProductManager = require("./ProductManager");
const handlebars = require("express-handlebars");
const { connect } = require("./src/config/connectDB");

const app = express();
const PORT = 8080 || process.env.PORT;
connectDB;

app.use(express.static(_dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "./views");
app.set("view engine", "handlebars");

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
  const { nombre, linea } = req.body;
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

app.listen(8080, () => {
  console.log("Puerto 8080");
});
