// models/EmailModel.js
const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema(
  {
    email: { 
      type: String, 
      required: true, 
      unique: true, 
      lowercase: true, 
      trim: true 
    },
  },
  { timestamps: true }
);

const Email = mongoose.model('Email', emailSchema);

module.exports = Email;
