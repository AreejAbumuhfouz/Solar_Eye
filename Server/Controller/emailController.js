// controllers/emailController.js
const Email = require('../models/Email');

const saveEmail = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if the email already exists
    const existingEmail = await Email.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Create and save the email
    const newEmail = new Email({ email });
    await newEmail.save();

    // Respond with success message
    res.status(201).json({ message: 'Email saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { saveEmail };
