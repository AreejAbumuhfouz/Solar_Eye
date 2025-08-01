// routes/contactRoutes.js

const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../Controller/contactController');

// Route to handle the contact form submission
router.post('/contact', submitContactForm);

module.exports = router;
