const db = require('../../config/config');


const organizationForm = () => {
    const query = `
            CREATE TABLE Organizations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    company_name VARCHAR(255) NOT NULL,
    company_description TEXT,
    org_location VARCHAR(255),
    industries VARCHAR(255),
    employees_count INT,
    logo_path VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    finished_at TIMESTAMP NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)  -- Assuming you have a users table
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
module.exports = organizationForm;
