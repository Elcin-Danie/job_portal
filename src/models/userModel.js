const db = require('../config/config');

class UserModel {
    async register(first_name, last_name, email, hashedPassword) {
        const query = 'INSERT INTO users (first_name,last_name, email, password) VALUES (?, ?, ?, ?)';
        return new Promise((resolve, reject) => {
            db.query(query, [first_name, last_name, email, hashedPassword], (err, result) => {
                if (err) {
                    return reject(err); // Handle error appropriately
                }
                resolve(result);
            });
        });
    }

    async findByEmail(email) {
        const query = 'SELECT * FROM users WHERE email = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [email], (err, results) => {
                if (err) {
                    return reject(err); // Handle error appropriately
                }
                resolve(results);
            });
        });
    }
}

module.exports = new UserModel(); // Export an instance of UserModel
