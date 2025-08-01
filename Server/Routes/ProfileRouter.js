const express = require('express');
const router = express.Router();
const authMiddleware = require('../config/authMiddleware');
const { getUserProfile, updateUserProfile } = require('../Controller/ProfileController');

// Get user profile (protected route)
router.get('/profile', authMiddleware, getUserProfile);

// Update user profile (protected route)
router.put('/profile', authMiddleware, updateUserProfile);

module.exports = router;
