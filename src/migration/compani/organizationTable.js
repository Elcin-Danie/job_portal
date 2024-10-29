const db = require('../../config/config');


const organizationTable = () => {
    const query = `
            CREATE TABLE companies (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            description TEXT,
            city VARCHAR(100),
            industries VARCHAR(255),  -- Store as comma-separated values
            employees_count INT,
            logo VARCHAR(255)
        );

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
module.exports = organizationTable;