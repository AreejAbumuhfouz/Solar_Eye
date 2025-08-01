
const Message = require('../models/Message');
const User = require('../models/User');  // Assuming you have a User model

const sendMessage = async (req, res) => {
  const { userMessage } = req.body;

  // Get userId from the authenticated user attached to the req object by authMiddleware
  const userId = req.user.userId;

  // Validation to ensure message is provided
  if (!userMessage || userMessage.trim() === '') {
    return res.status(400).json({ error: 'Message cannot be empty' });
  }

  try {
    // Create and save the new message in the database
    const newMessage = new Message({
      userMessage,
      user: userId,  // Associate the message with the user by their userId
    });

    await newMessage.save();

    // Emit the new message to all connected clients via WebSocket
    req.app.get('io').emit('chatMessage', newMessage);  // Emit the new message using the Socket.IO server

    res.status(200).json({ success: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send message' });
  }
};

// Get all messages for a user (client-side)
const getMessages = async (req, res) => {
  const userId = req.user.userId;  // Get userId from authenticated user in req.user

  try {
    const messages = await Message.find({ user: userId })  // Find messages associated with the user
      .populate('user', 'name email');  // Populate user details (name, email)

    res.status(200).json({ messages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};

const getMessagesForAdmin = async (req, res) => {
  try {
    // Fetch all messages with user information (name) and reply status
    const messages = await Message.find()
      .populate('user', 'name')  // Populate user name
      .sort({ createdAt: -1 }); // Sort messages by created date, latest first
    
    res.json({ messages });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages for admin' });
  }
};

const replyToMessage = async (req, res) => {
  const { messageId, adminReply } = req.body;

  try {
    const message = await Message.findById(messageId);

    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }

    // Update the message with the admin's reply
    message.adminReply = adminReply;
    message.isReplied = true;
    await message.save();

    // Emit the admin's reply to the client
    req.app.get('io').emit('adminReply', message);

    res.json({ success: 'Reply sent successfully', message });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send reply' });
  }
};

module.exports = {
  sendMessage,
  getMessages,
  getMessagesForAdmin,
  replyToMessage,
};
