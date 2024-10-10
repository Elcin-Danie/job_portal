const express = require('express');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());  // Use express.json() instead of body-parser
app.use(cors());

// Routes
app.use('/api', userRoutes);

// Export the app
module.exports = app;
