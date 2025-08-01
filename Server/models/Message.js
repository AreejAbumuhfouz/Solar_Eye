const mongoose = require('mongoose');

// Define the message schema
const messageSchema = new mongoose.Schema({
  userMessage: { type: String, required: true },  // User's message
  adminReply: { type: String },  // Admin's reply (optional initially)
  isReplied: { type: Boolean, default: false },  // Flag to track if the admin has replied
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Reference to the User collection
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,  // Automatically set the creation date
  },
  updatedAt: {
    type: Date,  // To track when the message was updated
    default: Date.now,
  },
});

// Middleware to update the `updatedAt` field when the admin replies
messageSchema.pre('save', function(next) {
  if (this.isModified('adminReply')) {
    this.updatedAt = Date.now();
  }
  next();
});

// Create the model based on the schema
const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
