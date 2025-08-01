

const express = require('express');
const { sendMessage, getMessages, getMessagesForAdmin, replyToMessage } = require('../Controller/chatController');
const authMiddleware = require('../config/authMiddleware');

const router = express.Router();

// Routes for chat-related functionality
router.post('/sendMessage', authMiddleware, sendMessage); // Send message
router.get('/getMessages', authMiddleware, getMessages); // Get messages for the logged-in user
router.get('/getMessagesForAdmin', authMiddleware, getMessagesForAdmin); // Get messages for admin
router.post('/replyToMessage', authMiddleware, replyToMessage); // Admin replies to a message

module.exports = router;
