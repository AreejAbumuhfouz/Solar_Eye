// models/ContactUs.js

const mongoose = require('mongoose');

// Define the schema for the ContactUs form
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/ },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const ContactUs = mongoose.model('ContactUs', contactSchema);

module.exports = ContactUs;
