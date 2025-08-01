

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the user schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true, // You can make this optional if not everyone needs to specify their city
  },
  isApproved: {
    type: Boolean,
    default: false, // Default value to false (not approved)
  },
  isVerified: {
    type: Boolean,
    default: false, // Default value to false (not verified)
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Hash password before saving user to the database
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare passwords
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
