// routes/emailRoutes.js
const express = require('express');
const { saveEmail } = require('../Controller/emailController');
const router = express.Router();

// POST request to save email
router.post('/save-email', saveEmail);

module.exports = router;
