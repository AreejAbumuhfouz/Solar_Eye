// routes/chatbotRoutes.js
const express = require('express');
const { getResponse } = require('../models/chatbot');

const router = express.Router();

router.get('/test', (req, res) => {
  const response = getResponse(req.query.message || "");
  res.json({ message: response });
});

module.exports = router;
