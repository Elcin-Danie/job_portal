const express = require('express');
const r = express.Router();
const path = require('path');
const A = require(path.resolve(__dirname, '../controllers/authControllers/companiesController'));
const c_r = require(path.resolve(__dirname, '../controllers/companiControllers/details_Controller'));
const multer = require('multer');
const companiesCheck = require('../middleware/companies/check_inters')

// Serve static files from the uploads directory
const app = express();
app.use('/uploads', express.static(path.join(__dirname, '../../public/uploads')));

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Use the correct absolute path to the uploads directory
        cb(null, path.join(__dirname, '../../public/uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    }
});

const upload = multer({ storage: storage });

// Define routes
// auth route=================
r.post('/singup', A.register);
r.post('/singin', A.login);

// companie route=============
r.post('/form_2', upload.single('logo'), c_r.form_2);
r.post('/inset_intn_form', companiesCheck.checkJson, c_r.post_internship);
r.post('/job_posts', c_r.post_job);
r.get('/posts', c_r.get_posts)

module.exports = r;
