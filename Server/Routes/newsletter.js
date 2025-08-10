const express = require('express');
const router = express.Router();
const newsletterController = require('../Controller/newsletterController');

router.post('/subscribe', newsletterController.subscribe);
router.get('/all', newsletterController.getAllSubscribers);

module.exports = router;
