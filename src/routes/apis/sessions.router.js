const { Router } = require("express");
const { auth } = require("../../middleware/authentication.middleware");

const router = Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

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
