const bcrypt = require('bcryptjs');
const path = require('path');
const jwt = require('jsonwebtoken');

const Comp_model = require(path.resolve(__dirname, '../../models/authmodels/companiModel'));
const { request } = require('../../app');



class Compani_auth {
    async register(req, res) {
        const { first_name, last_name, email, phone, password } = req.body;
        if (!first_name || !last_name || !email || !phone || !password) {
            return res.status(400).json({ message: 'Please fill in all fields' });
        }
        const HashPassword = bcrypt.hashSync(password, 10);
        
        try {
           const userData = await Comp_model.singin(first_name, last_name, email, phone, HashPassword);
            const token = jwt.sign({id: userData.id, name: userData.first_name, email: userData.email}, process.env.JWT_SECRET, { expiresIn: '12h' });
            return res.status(201).json({ message: "Register successfully.", success: true, token: token})
        } catch (err) {
            return res.status(400).json({ error: "Register Unsuccessfully" + err.message })
        }
    }
    async login(req, res) {
        const { email, password } = req.body;
        try {
            const result = await Comp_model.findMyemail(email);
            
            
            
            if (result.length === 0) {
                return res.status(400).json({ error: 'Invalid email or password.' });
            }

            const user = result[0];
            
            if (!bcrypt.compareSync(password, user.password)) {
                return res.status(400).json({ error: "Invalid email or password." })
            }
            const token = jwt.sign({ id: user.id, name: user.first_name }, process.env.JWT_SECRET, { expiresIn: '12h' });
            req.session.token = token;
            return res.status(200).json({ message: 'Login successfully', token });
        } catch (err) {
            return res.status(500).json({ error: 'Server error: ' + err.message })
        }
    }
}
module.exports = new Compani_auth();