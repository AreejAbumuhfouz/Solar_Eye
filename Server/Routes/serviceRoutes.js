const express = require('express');
const router = express.Router();
const serviceController = require('../Controller/serviceController');

// Route to get all services
router.get('/services', serviceController.getAllServices);
router.post('/services', serviceController.addService);
router.get('/random-packages', serviceController.getRandomPackages);
router.put('/services/:id', serviceController.editService);
router.delete('/services/:id', serviceController.deleteService);

module.exports = router;
