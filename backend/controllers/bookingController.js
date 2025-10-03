const pool = require('../db');
const { v4: uuidv4 } = require('uuid');

exports.bookTrain = async (req, res) => {
  const { user_id, train_id, seat_no } = req.body;
  try {
    const PNR = uuidv4();
    const booking_date = new Date();

    await pool.query(
      'INSERT INTO Bookings (user_id, train_id, seat_no, booking_date, PNR, status) VALUES (?,?,?,?,?,?)',
      [user_id, train_id, seat_no, booking_date, PNR, 'Booked']
    );

    res.status(201).json({ message: 'Booking successful', PNR });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBookings = async (req, res) => {
  const { user_id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM Bookings WHERE user_id=?', [user_id]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
