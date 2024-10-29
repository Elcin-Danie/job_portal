const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require("path");

const UserModel = require(path.resolve(__dirname,'../models/userModel'));

class user_AuthController {

    // Method to register a new user
    async register(req, res) {
        const { email, first_name, last_name, password } = req.body;

        // Validate request data
        if (!first_name || !last_name || !email || !password) {
            return res.status(400).json({ message: 'Please fill in all fields.' });
        }

        // Hash the password
        const hashedPassword = bcrypt.hashSync(password, 10);

        try {
            // Attempt to register the user
            await UserModel.register(first_name, last_name, email, hashedPassword);
            return res.status(201).json({ message: 'User registered successfully.' });
        } catch (err) {
            return res.status(400).json({ error: 'User already exists or invalid data. ' + err.message });
        }
    }

    // Method for user login
    async login(req, res) {
        const { email, password } = req.body;

        try {
            // Fetch user by email
            const results = await UserModel.findByEmail(email);
            if (results.length === 0) {
                return res.status(400).json({ error: 'Invalid email or password.' });
            }
            
            const user = results[0];

            // Compare the passwords
            if (!bcrypt.compareSync(password, user.password)) {
                return res.status(400).json({ error: 'Invalid email or password.' });
            }

            // Generate JWT token
            const token = jwt.sign({ id: user.id, name: user.first_name }, process.env.JWT_SECRET, { expiresIn: '1h' });
            req.session.token = token;
            return res.json({ message: 'Login successful', token });
        } catch (err) {
            return res.status(500).json({ error: 'Server error: ' + err.message });
        }
    }
}

// Export an instance of AuthController
module.exports = new user_AuthController();
