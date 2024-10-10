const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/config');
const express = require('express');

// Register a new user
exports.register = (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Please fill in all fields.' });
}
  const hashedPassword = bcrypt.hashSync(password, 10); // Hash the password

  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(query, [name, email, hashedPassword], (err, result) => {
    if (err) {
      return res.status(400).json({ error: 'User already exists or invalid data.' });
    }
    res.status(201).json({ message: 'User registered successfully.' });
  });
};

// Login a user
exports.login = (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err || results.length === 0) {
      return res.status(400).json({ error: 'Invalid email or password.' });
    }

    const user = results[0];

    // Compare the passwords
    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(400).json({ error: 'Invalid email or password.' });
    }

    // Generate JWT
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  });
};
