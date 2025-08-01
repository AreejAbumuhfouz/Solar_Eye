const express = require('express');
const { getAllUsers, approveUser, disapproveUser } = require('../Controller/CostumersController');
const router = express.Router();

// Get all users (Customers)
router.get('/users', getAllUsers);

// Approve user by ID
router.put('/users/:id/approve', approveUser);

// Disapprove user by ID
router.put('/users/:id/disapprove', disapproveUser);

module.exports = router;
