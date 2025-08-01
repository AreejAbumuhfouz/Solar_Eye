// controllers/contactController.js

const ContactUs = require('../models/ContactUs');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

// Create a new contact message
const submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  // Simple validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Create a new contact form entry in the database
  const newMessage = new ContactUs({
    name,
    email,
    message
  });

  try {
    // Save the new contact message to the database
    await newMessage.save();

    // Respond with a success message
    res.status(200).json({ success: 'Your message has been sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
};

module.exports = {
  submitContactForm
};
