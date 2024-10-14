const db = require('../config/config');

// Create the users table if it does not exist
const createUserTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      first_name VARCHAR(100) NOT NULL,
      last_name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`;


  // Execute the query to create the table
  db.query(query, (err, result) => {
    if (err) {
      throw err; // Handle any errors that occur
    }
    
    // Check if the table was created
    if (result.affectedRows > 0) {
      console.log('Users table created successfully.');
    } else {
      console.log('Users table already exists.');
    }
  });
};

module.exports = createUserTable;
