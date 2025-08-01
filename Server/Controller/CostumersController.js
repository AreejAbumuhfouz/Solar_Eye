const nodemailer = require('nodemailer');
const User = require('../models/User');

// Email setup for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

// Send email notification
const sendEmail = (email, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email: ', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

// Get all users (Customers)
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // Exclude password for security
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

// Approve user by ID
const approveUser = async (req, res) => {
  const { id } = req.params;
  const { message } = req.body; // Message to send to the user upon approval

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { isApproved: true },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send approval email
    const subject = 'Your Account Has Been Approved';
    const text = `Dear ${user.name},\n\nCongratulations! Your account has been approved.\n\nMessage: ${message}\n\nThank you.`;
    sendEmail(user.email, subject, text);

    res.status(200).json({ message: 'User approved successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error approving user', error });
  }
};

// Disapprove user by ID
const disapproveUser = async (req, res) => {
  const { id } = req.params;
  const { message } = req.body; // Message to send to the user upon disapproval

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { isApproved: false },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send disapproval email
    const subject = 'Your Account Has Been Disapproved';
    const text = `Dear ${user.name},\n\nUnfortunately, your account has been disapproved.\n\nMessage: ${message}\n\nIf you have any questions, please contact support.`;
    sendEmail(user.email, subject, text);

    res.status(200).json({ message: 'User disapproved successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error disapproving user', error });
  }
};

module.exports = { getAllUsers, approveUser, disapproveUser };
