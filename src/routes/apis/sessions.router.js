const { Router } = require("express");
const { auth } = require("../../middleware/authentication.middleware");
const passport = require("passport");
const {userModel} = require('../../models/user')
const  router = Router();

const router = Router();
const sessionRouter = new UserDaMongo();
router.post("/login", (req, res) => {
  const { first_name, last_name, username, password } = req.body;
  console.log(first_name, last_name, username, password);
  if (username !== "jony" || password !== "123456")
    return res.send("login failed");

  req.session.username = "jony";
  req.session.admin = true;

  res.send("login succes");
});

router.get("/current", auth, (req, res) => {
  res.send("datos sensibles");
});

router.post("/register", passport.authenticate("register", {
    failureRedirect: "/apis/sessions/faillogin",
  }),
  async (req, res) => {
    if (!req.user)
      return res
        .status(401)
        .send({ status: "error", error: "creadential invalid" });

    req.session.user = {
      first_name: req.user.first_name,
      last_name: req.user.last_name,
      username: req.user.username,
      email: req.user.email,
      id: req.user._id,
    };
    res.send({ status: "succes", message: req.user });
  }
);

router.get("/faillogin", async (req, res) => {
  res.send({ error: "falla en register" });
});

router.get('/github', passport.authenticate( 'github', {scope: 'user', 'email'}), async(req, res) =>{
router.get('/githubcallback', passport.authenticate('github', {failureRedirect:'/apis/session/login'}) ,async(req,res)=>{
  req.session.user = req.user
  res.redirect('/')
})
  //res.send({error:'falla en el register'})
});

router.get('/current', async (req, res) =>{
  res.send({message: 'datos sensibles'})
})

module.exports = router;
