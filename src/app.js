const express = require('express');
const userRoutes = require('./routes/userRoutes');
const companiRoute =require('./routes/companiRoute');
require('dotenv').config();
const cors = require('cors');
const app = express();
const session = require('express-session');
const migration = require('./migration/migration')

// respons
app.use(express.json())

// Cors middleware
app.use('*',cors());

// express-session
app.use(session({
    secret: 'mySecretkey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set `true` if using HTTPS
}))

app.use(cors());

// migration api =====
app.get('/api/migration', migration);

// User api =====
app.use('/api/users', userRoutes);

// Compani api ====
app.use('/api/employ', companiRoute);


module.exports = app;
