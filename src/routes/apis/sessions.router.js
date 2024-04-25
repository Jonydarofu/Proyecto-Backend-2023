const { Router } = require("express");
const { auth } = require("../../middleware/authentication.middleware");

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

module.exports = router;
