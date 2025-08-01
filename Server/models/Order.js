const mongoose = require('mongoose');
const Service = require('../models/Service'); // Import the Service model
const User = require('../models/User'); // Import the Service model

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: true,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['Pending', 'Active', 'Expired', 'Cancelled'],
    default: 'Pending',
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: false, // Set when the service is activated
  },
  endDate: {
    type: Date,
    required: false, // Automatically calculated based on duration
  },
});

// Activate the package using serviceFrequency from Service
orderSchema.methods.activatePackage = async function () {
  // Fetch the associated Service
  const service = await Service.findById(this.serviceId);
  if (!service) {
    throw new Error('Service not found.');
  }

  // Map serviceFrequency to duration in days
  const durationMapping = {
    Weekly: 7,
    Monthly: 30,
    Yearly: 365,
  };

  const durationDays = durationMapping[service.serviceFrequency];
  if (!durationDays) {
    throw new Error(`Invalid service frequency: ${service.serviceFrequency}`);
  }

  // Set startDate, endDate, and status
  this.startDate = new Date();
  this.endDate = new Date();
  this.endDate.setDate(this.startDate.getDate() + durationDays);
  this.status = 'Active';
};

orderSchema.methods.checkExpiration = function () {
  const today = new Date();
  if (this.endDate && this.endDate < today) {
    this.status = 'Expired';
  }
};

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
