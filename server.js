const express = require("express");
const userRouter = require("./src/routes/user.router");
const cartsRouter = require("./src/routes/carts.router");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use();
app.use();
app.use();

app.listen(() => {
  console.log("Puerto");
});
