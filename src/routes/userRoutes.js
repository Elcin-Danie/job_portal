const express = require('express');
const u = require('../controllers/userController');
const r = express.Router();

r.post('/register', u.register);
r.post('/login', u.login);

module.exports = r;
