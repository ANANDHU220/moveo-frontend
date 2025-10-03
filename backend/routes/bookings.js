const express = require("express");
const Booking = require("../models/Booking");
const Train = require("../models/Train");
const router = express.Router();

// Book a train
router.post("/", async (req, res) => {
  try {
    const { userId, trainId, passengers } = req.body;
    const train = await Train.findById(trainId);

    if (!train || train.seats < passengers) {
      return res.status(400).json({ msg: "Not enough seats available" });
    }

    train.seats -= passengers;
    await train.save();

    const booking = await Booking.create({ user: userId, train: trainId, passengers });
    res.json({ msg: "Booking successful", booking });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// Get user bookings
router.get("/:userId", async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.params.userId }).populate("train");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
