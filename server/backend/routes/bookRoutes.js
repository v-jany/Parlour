// const express = require("express");
// const router = express.Router();
// const Booking = require("../models/Booking");

// router.post("/book", async (req, res) => {
//   try {
//     const booking = new Booking(req.body);
//     await booking.save();

//     res.json({ message: "Booking Saved" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// BOOK API
router.post("/book", async (req, res) => {
  console.log("🔥 BOOK API HIT");
  console.log(req.body);

  try {
    const booking = new Booking(req.body);
    const saved = await booking.save();

    console.log("SAVED:", saved);

    res.json({ message: "Booking Saved Successfully" });

  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;