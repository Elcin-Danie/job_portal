const db = require('../../config/config')
class Comp_model {
    async singin(first_name, last_name, email, phone, hashedPassword) {
        const query = "INSERT INTO companies (first_name, last_name, email, phone, password) VALUES (?, ?, ?, ?, ?)";
        return new Promise((resolve, reject) => {
            db.query(query, [first_name, last_name, email, phone, hashedPassword], (err, result) => {
                if (err) return reject(err);
                const userId = result.insertId;
                const getUser = 'SELECT * FROM companies WHERE id = ? ';
                db.query(getUser, [userId], (err, userResult) => {
                    if (err) reject(err);
                    if (userResult.length > 0) {
                        resolve(userResult[0]); // Return the first user object
                    } else {
                        reject(new Error("User not found after insertion."));
                    }
                })
            })
        })
    }
    async findMyemail(email) {
        const query = 'SELECT * FROM companies WHERE email = ?';
        return new Promise((resolve, reject) => {

            db.query(query, [email], (err, result) => {
                if (err) return reject(err);
                resolve(result);
            })
        })

    }
}
module.exports = new Comp_model();