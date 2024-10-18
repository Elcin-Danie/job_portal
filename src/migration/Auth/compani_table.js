const db = require('../../config/config');


const createComapanitable = () => {
    const query = `
    CREATE TABLE IF NOT EXISTS comapanis (
      id INT AUTO_INCREMENT PRIMARY KEY,
      first_name VARCHAR(100) NOT NULL,
      last_name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      phone INT(20) NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )`;
    db.query(query, (err, result) => {
        if (err) {
            throw err;
        }
        if (result.affectedRows > 0) {
            console.log('Compani table created successfully.');
        } else {
            console.log('Compani table already exists.');
        }
    })
}
module.exports = createComapanitable;