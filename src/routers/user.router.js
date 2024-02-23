const { Router } = require("express");
const { userModel } = require("../models/user.model");

const router = express.Router();
userModel

router
  .get("/", (req, res) => {
    try{
      const user = await userModel.find({})
    res.send(users);
  }
catch (error){
  console.log(error)}
})
  .get("/:uid", (req, res) => {
    const { uid } = req.params;
    res.send("user");
  })
  .post("/", async (req, res) => {
    const {nombre, apellido} = req.body
    if (!nombre || !apellido ) {
      return res.status(400).send({ error: "Faltan datos"})
  }});

module.exports = router;
