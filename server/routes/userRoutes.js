const express = require("express");
const router = express.Router();
const User = require("../../models/user");

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const user = new User({ name, email, password });
  await user.save();

  res.json({ message: "User Registered" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (user) {
    res.json({ message: "Login Success", user });
  } else {
    res.status(400).json({ message: "Invalid Credentials" });
  }
});

module.exports = router;