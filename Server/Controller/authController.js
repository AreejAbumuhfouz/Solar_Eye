

const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS,
  },
});



//       // Generate and return a JWT token after successful OTP verification
//       const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

//       // Clear the session after successful OTP verification
//       req.session.destroy();

//       return res.json({ token });
//     } else {
//       return res.status(400).json({ message: 'Invalid OTP' });
//     }
//   } else {
//     return res.status(400).json({ message: 'OTP expired or invalid' });
//   }
// };

// const signup = async (req, res) => {
//   const { email, password, name, city } = req.body;

//   try {
//     // Check if the email is already taken
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already in use' });
//     }

//     // Create new user (without isVerified field yet)
//     const newUser = new User({ email, password, name, city });
//     await newUser.save();

//     // Generate JWT token for user
//     const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, { expiresIn: '1h' });

//     // Generate OTP
//     const otp = generateOTP();
    
//     // Store OTP and email in the session
//     req.session.otp = otp;
//     req.session.otpExpiration = Date.now() + 5 * 60 * 1000; // OTP expires in 5 minutes
//     req.session.email = email; // Store email in session

//     // Log session data for debugging
//     console.log('Session after storing OTP:', req.session);
//     console.log(otp);


//     // Send OTP email
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: 'Your OTP Code for SolarEye',
//       text: `Hi there,
//       To complete your registration, please use the following One-Time Password (OTP):
//       OTP: ${otp}
//       This OTP will expire in 5 minutes.`
//     };

//     await transporter.sendMail(mailOptions);

//     // Set token in cookie (httpOnly for security)
//     res.setHeader('Set-Cookie', cookie.serialize('token', token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
//       maxAge: 60 * 60, // 1 hour
//       sameSite: 'Strict',
//       path: '/',
//     }));

//     return res.status(201).json({ message: 'User created successfully. OTP has been sent to your email.' });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Server error' });
//   }
// };
const signup = async (req, res) => {
  const { email, password, name, city } = req.body;

  try {
    // Check if the email is already taken
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Create new user
    const newUser = new User({ email, password, name, city });
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, { expiresIn: '1h' });

    // Set token in cookie
    res.setHeader('Set-Cookie', cookie.serialize('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60, // 1 hour
      sameSite: 'Strict',
      path: '/',
    }));

    // Return success response
    return res.status(201).json({ message: 'User created successfully', token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

const verifyOTP = async (req, res) => {
  console.log('Session data in verifyOTP:', req.session);

  const { otp } = req.body;
  console.log('Sending OTP:', otp);
  if (!otp) {
    return res.status(400).json({ message: 'OTP is required' });
  }
  console.log('Session data in verifyOTP:', req.session);


  // Log the session data for debugging
  console.log('Received OTP:', otp);
  console.log('Session OTP:', req.session.otp);
  console.log('Session OTP Expiration:', req.session.otpExpiration);

  // Check if OTP exists and is not expired
  if (req.session.otp && req.session.otpExpiration > Date.now()) {
    console.log('OTP is valid');
    // Compare the received OTP with the stored one in the session
    if (parseInt(otp) === req.session.otp) {
      // OTP is valid, proceed with user verification
      const user = await User.findOne({ email: req.session.email });

      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }

      // Mark the user as verified and approved
      user.isVerified = true;  // Assuming `isVerified` is your field, mark the user as verified
      user.isApproved = true;  // You can use `isApproved` field here
      await user.save();

      // Generate and return a JWT token after successful OTP verification
      const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

      // Clear the session after successful OTP verification
      req.session.destroy();

      return res.json({ token });
    } else {
      return res.status(400).json({ message: 'Invalid OTP' });
    }
  } else {
    return res.status(400).json({ message: 'OTP expired or invalid' });
  }
};


const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare the password with the stored hash
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

    // Set token in cookie (httpOnly for security)
    res.setHeader('Set-Cookie', cookie.serialize('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      maxAge: 60 * 60, // 1 hour
      sameSite: 'Strict',
      path: '/',
    }));

    return res.status(200).json({ token: token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Logout user (clear cookie)
const logout = (req, res) => {
  res.setHeader('Set-Cookie', cookie.serialize('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    maxAge: 0, // Expired the cookie
    sameSite: 'Strict',
    path: '/',
  }));
  return res.status(200).json({ message: 'Logged out successfully' });
};

module.exports = { signup, login, logout, verifyOTP };
