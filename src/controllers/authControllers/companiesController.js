const bcrypt = require('bcrypt');
class Compani_auth {
    async register(req, res) {
        const { first_name, last_name, email, phone, password } = req.body;
        if (!first_name || !last_name || !email || !phone || !password) {
            return res.status(400).json({ message: 'Please fill in all fields' });
        }
        const HashPassword = bcrypt.hash(password, 10);
        try {
            
        } catch (err) {
            console.error(err);
        }

    }
    async login() {

    }
}
module.exports = new Compani_auth();