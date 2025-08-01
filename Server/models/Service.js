const mongoose = require('mongoose');

// Service Schema
const serviceSchema = new mongoose.Schema({
  packageName: {
    type: String,
    required: true,
    enum: ['Partial', 'Full', 'Premium'],  
  },
  description: {
    type: String,
    required: true,
  },
  features: {
    type: [String],  // Array of features included in the package
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  duration: {
    type: String,
    required: true,  // E.g., 'per month', 'per year'
  },
  contractType: {
    type: String,
    required: true,
    enum: ['Short-term', 'Long-term'],  // Options: Short-term, Long-term
  },
  contractDescription: {
    type: String,
    required: true,
  },
  serviceFrequency: {
    type: String,
    required: true,
    enum: ['Weekly', 'Monthly', 'Yearly'],  // Options: Weekly, Monthly, Yearly
  },
  frequencyDescription: {
    type: String,
    required: true,
  },
  additionalServices: {
    mentoring: {
      type: Boolean,
      default: false,
    },
    inspection: {
      type: Boolean,
      default: false,
    },
    maintenance: {
      type: Boolean,
      default: false,
    },
  },
  icon: { // New field to store the icon or picture URL
    type: String,
    required: false, // Optional field for icon URL or file name
  },
  IsDeleted: { // New field to store the icon or picture URL
    type: Boolean,
    default: false, // Optional field for icon URL or file name
  },
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
