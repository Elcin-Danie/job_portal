const db = require('../models/userModel');

// Example function to find a user by ID
exports.findUserById = (id, callback) => {
  const query = 'SELECT * FROM users WHERE id = ?';
  db.query(query, [id], callback);
};
