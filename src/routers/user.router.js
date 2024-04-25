const { Router } = require("express");
const { userModel } = require("../models/user.model");

const router = express.Router();
userModel

router
  .get("/", (req, res) => {
    try{
      const users = await userModel.find({})
    res.send(users);
  }
catch (error){
  console.log(error)}
})
  router.get("/:uid", async (req, res) => {
    const { uid } = req.params;
    const user = await userModel.findOne({_id: uid})

    res.send("user");
  })
  
  .post("/", async (req, res) => {
    const {first_name, last_name, email, password} = req.body
    const userNew {
      first_name,
      last_name,
      email,
      password
    }
     const result = await userModel.create(userNew)
      res.status(200).send({ 
        status:'success',
        userCreate: result
      })
  });

  router.put ('/:uid', async (req, res)=>{
    const { uid } = req.params  
    const userToUpdate = req.body
    const result = await userModel.findOneAndUpdate({_id: uid}, userToUpdate, {new: true})
     
    res.status(200).send({
      status:'success',
      mesage: result
    })
  })

  //DELETE

  router.delete('/:uid', async (req, res)=>{
    const {uid} = req.params
    const result = await userModel.findOneAndDelete({_id: uid})
    res.send(result)
  })

module.exports = router;
