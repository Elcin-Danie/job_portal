const express = require('express');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
const cors = require('cors');
const app = express();
const session = require('express-session');

app.use(express.json());
app.use(cors());
// express-session
app.use(session({
    secret: 'mySecretkey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set `true` if using HTTPS
}))

app.use(cors());

app.use('/api/users', userRoutes);

module.exports = app;
