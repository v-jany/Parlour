const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/add-user", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({ message: "User Added" });
});

module.exports = router;
