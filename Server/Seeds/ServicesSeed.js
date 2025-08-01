
const mongoose = require('mongoose');
const connectDB = require('../config/db'); // Adjust the path to your actual connectDB file
const Service = require('../models/Service'); // Adjust the path to where your Service model is located


const sampleServices = [
  {
    packageName: 'Partial',
    description: 'Basic package offering essential support and monitoring.',
    features: ['Basic mentoring', 'Monthly inspection'],
    price: 150,
    duration: 'per month',
    contractType: 'Short-term',
    contractDescription: '1 month contract',
    serviceFrequency: 'Monthly',
    frequencyDescription: 'Services are provided every month.',
    additionalServices: {
      mentoring: true,
      inspection: true,
      maintenance: false,
    },
    icon: 'https://www.pv-magazine.com/wp-content/uploads/2021/09/09026_Above_Drone_opt-1200x900.jpeg',
    IsDeleted: false,
  },
  {
    packageName: 'Full',
    description: 'Standard package with enhanced support and additional features.',
    features: ['Advanced mentoring', 'Bi-weekly inspection'],
    price: 220,
    duration: 'per month',
    contractType: 'Short-term',
    contractDescription: '3 months contract',
    serviceFrequency: 'Monthly',
    frequencyDescription: 'Services are provided every month.',
    additionalServices: {
      mentoring: true,
      inspection: true,
      maintenance: false,
    },
    icon: 'https://www.pv-magazine.com/wp-content/uploads/2021/07/Screen-Shot-2021-07-14-at-10.25.13-am.png',
    IsDeleted: false,
  },
  {
    packageName: 'Premium',
    description: 'Comprehensive package for businesses requiring more frequent support.',
    features: ['Advanced mentoring', 'Bi-weekly inspection', 'Maintenance'],
    price: 400,
    duration: 'per month',
    contractType: 'Long-term',
    contractDescription: '6 months contract',
    serviceFrequency: 'Weekly',
    frequencyDescription: 'Services are provided weekly.',
    additionalServices: {
      mentoring: true,
      inspection: true,
      maintenance: true,
    },
    icon: 'https://www.abovesurveying.com/wp-content/uploads/2021/06/DroneAI-012-012-01.png',
    IsDeleted: false,
  },
  {
    packageName: 'Premium',
    description: 'Premium package offering full-scale services for top-tier businesses.',
    features: ['Premium mentoring', 'Daily inspection', '24/7 maintenance'],
    price: 850,
    duration: 'per month',
    contractType: 'Long-term',
    contractDescription: '12 months contract',
    serviceFrequency: 'Weekly',
    frequencyDescription: 'Services are provided weekly.',
    additionalServices: {
      mentoring: true,
      inspection: true,
      maintenance: true,
    },
    icon: 'https://ik.imagekit.io/equinoxsdrones/blog/img/automate-your-solar-panel-inspection-using-ai-powered-drones/solar-panel-cracks_2_h8vfENf.png',
    IsDeleted: false,
  },
  {
    packageName: 'Partial',
    description: 'Entry-level package ideal for startups and small businesses.',
    features: ['Basic mentoring', 'Quarterly inspection'],
    price: 100,
    duration: 'per month',
    contractType: 'Short-term',
    contractDescription: '1 month contract',
    serviceFrequency: 'Monthly',
    frequencyDescription: 'Services are provided once a month.',
    additionalServices: {
      mentoring: true,
      inspection: false,
      maintenance: false,
    },
    icon: 'https://img.freepik.com/premium-photo/innovative-solar-panel-field-maintenance-engineers-utilizing-drones-advanced-monitoring_38013-26995.jpg',
    IsDeleted: false,
  },
  // Additional Entries
  {
    packageName: 'Partial',
    description: 'Starter package with essential services for growing businesses.',
    features: ['Basic mentoring', 'Quarterly inspection'],
    price: 120,
    duration: 'per month',
    contractType: 'Short-term',
    contractDescription: '2 months contract',
    serviceFrequency: 'Monthly',
    frequencyDescription: 'Services provided monthly.',
    additionalServices: {
      mentoring: true,
      inspection: true,
      maintenance: false,
    },
    icon: 'https://dac.digital/wp-content/uploads/2024/02/ai_drone_solutions_in_agriculture_man_operating_a_drone-optimized.jpeg',
    IsDeleted: false,
  },
  {
    packageName: 'Full',
    description: 'Expanded package with more features and support.',
    features: ['Advanced mentoring', 'Monthly inspection'],
    price: 250,
    duration: 'per month',
    contractType: 'Short-term',
    contractDescription: '3 months contract',
    serviceFrequency: 'Monthly',
    frequencyDescription: 'Services are provided every month.',
    additionalServices: {
      mentoring: true,
      inspection: true,
      maintenance: true,
    },
    icon: 'https://ik.imagekit.io/equinoxsdrones/blog/img/automate-your-solar-panel-inspection-using-ai-powered-drones/DISCOLOURATION_fcxjjIXcaw.png',
    IsDeleted: false,
  },
  {
    packageName: 'Premium',
    description: 'Top-tier package with complete services and priority support.',
    features: ['Priority mentoring', 'Weekly inspection', 'Emergency maintenance'],
    price: 1000,
    duration: 'per month',
    contractType: 'Long-term',
    contractDescription: '12 months contract',
    serviceFrequency: 'Weekly',
    frequencyDescription: 'Services are provided weekly.',
    additionalServices: {
      mentoring: true,
      inspection: true,
      maintenance: true,
    },
    icon: 'https://cdn.prod.website-files.com/5d7a345dfedbb6145d87d0d8/6172798729738c7be3334b90_ai-solar-skylark-featuredimage.jpg',
    IsDeleted: false,
  },
  {
    packageName: 'Full',
    description: 'Comprehensive service package with continuous support.',
    features: ['Full mentoring', 'Bi-weekly inspection', 'Maintenance support'],
    price: 320,
    duration: 'per month',
    contractType: 'Long-term',
    contractDescription: '6 months contract',
    serviceFrequency: 'Monthly',
    frequencyDescription: 'Services are provided every month.',
    additionalServices: {
      mentoring: true,
      inspection: true,
      maintenance: true,
    },
    icon: 'https://cdn.prod.website-files.com/5d7a345dfedbb6145d87d0d8/6172798729738c7be3334b90_ai-solar-skylark-featuredimage.jpg',
    IsDeleted: false,
  },
];


// Connect to MongoDB and seed data
const seedDatabase = async () => {
  try {
    await connectDB(); // Use your existing connection file to connect to DB

    // Delete all existing data in the Service collection
    await Service.deleteMany({});
    console.log('All previous services deleted');

    // Insert sample data into the database
    await Service.insertMany(sampleServices);
    console.log('Sample services added successfully');

    // Close the connection after seeding
    mongoose.connection.close();
  } catch (err) {
    console.error('Error during database seeding:', err);
    mongoose.connection.close();
  }
};

seedDatabase();
