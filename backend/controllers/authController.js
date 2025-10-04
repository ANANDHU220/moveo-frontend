const pool = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    const [existing] = await pool.query('SELECT * FROM Users WHERE email=?', [email]);
    if (existing.length) return res.status(400).json({ message: 'Email already exists' });

    const hashed = await bcrypt.hash(password, 10);
    await pool.query(
      'INSERT INTO Users (name, email, phone, password) VALUES (?,?,?,?)',
      [name, email, phone, hashed]
    );

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const [rows] = await pool.query('SELECT * FROM Users WHERE email=?', [email]);
    if (!rows.length) return res.status(400).json({ message: 'Invalid credentials' });

    const valid = await bcrypt.compare(password, rows[0].password);
    if (!valid) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ user_id: rows[0].user_id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, name: rows[0].name });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
