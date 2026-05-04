const express = require("express");
const router = express.Router();
const Booking = require("../backend/models/Booking");

router.post("/book", async (req, res) => {
    console.log(req.body);
    
  try {
    const booking = new Booking(req.body);
    await booking.save();

    res.json({ message: "Booking Saved Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;