const express = require("express");
const Train = require("../models/Train");
const router = express.Router();

// Add train (Admin only)
router.post("/", async (req, res) => {
  try {
    const train = await Train.create(req.body);
    res.json(train);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// Search trains
router.get("/search", async (req, res) => {
  const { from, to, date } = req.query;
  try {
    const trains = await Train.find({
      from,
      to,
      date: { $gte: new Date(date), $lt: new Date(date).setHours(23,59,59,999) }
    });
    res.json(trains);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
