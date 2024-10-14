const express = require('express');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
const cors = require('cors');
const app = express();

app.use(express.json()); 
app.use(cors());

app.use(cors());

app.use('/api/users',userRoutes);

module.exports = app;
