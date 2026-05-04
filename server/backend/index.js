const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/parlourDB")
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

const userRoutes = require("./routes/userRoutes");
const bookingRoutes = require("./routes/bookRoutes");

app.use("/api/users", userRoutes);
app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.send("Parlour API Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});