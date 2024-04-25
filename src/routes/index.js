import { Router } from "express";
//import { userRouter } from "./users.router.js";
//import viewsRouter from "./views.router.js";

//const router = Router();

//router.use("/", viewsRouter);
//router.use("/api/users", userRouter);

//export default router;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("palabrasecretaparafirmarcookie"));
app.use(
  session({
    secret: "secretCoder",
    resave: true,
    saveUninitialized: true,
  })
);

const cookieParser = require("cookie-parser");
const session = require("express-session");
const { connect, mongo, get } = require("mongoose");

const connectDB = async () => {
  try {
    await connect("mongo://127.0.0.1:27017/");
    console.log("Base de datos conectado");
  } catch (err) {
    console.log("Error connecting to MongoDB");
  }
};
module.exports = {
  configObject,
  connectDB,
};

app.get("/getcookie", (req, res) => {
  res
    .cookie("CoderCookie", "esta es una cookie firmada", {
      maxAge: 100000,
      signed: true,
    })
    .send("seteando cookie");
});
app.get("/getcookieSigned", (req, res) => {
  // console.log(req.cookies);
  console.log(req.signedCookies);
  res.send(req.signedCookies);
});

app.get("/deletecookie", (req, res) => {
  res.clearCookie("CoderCookie"), send("cookie borrada");
});
