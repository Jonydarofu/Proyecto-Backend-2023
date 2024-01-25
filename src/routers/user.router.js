const express = require("express");

const router = express.Router();

router
  .get("/", () => {})
  .post("/:cid", () => {})
  .post("/", () => {});

module.exports = router;
