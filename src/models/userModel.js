const db = require('../config/config');

// Create the users table if it does not exist
const createUserTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  
  db.query(query, (err) => {
    if (err) throw err;
    console.log('Users table created or already exists.');
  });
};

// Call the function to create the table
createUserTable();

module.exports = {
  db,
};
