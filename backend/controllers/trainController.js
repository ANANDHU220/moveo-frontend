const pool = require('../db');

exports.listTrains = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Trains');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addTrain = async (req, res) => {
  const { name, source, destination, dep_time, arr_time, capacity } = req.body;
  try {
    await pool.query(
      'INSERT INTO Trains (name, source, destination, dep_time, arr_time, capacity) VALUES (?,?,?,?,?,?)',
      [name, source, destination, dep_time, arr_time, capacity]
    );
    res.status(201).json({ message: 'Train added successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
