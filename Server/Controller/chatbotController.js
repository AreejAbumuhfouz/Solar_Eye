// controllers/chatbotController.js
const { getResponse } = require('../models/chatbot');

function handleWebSocketConnection(ws) {
  ws.on('message', (message) => {
    console.log('Received:', message);
    const response = getResponse(message);
    ws.send(response);
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed.');
  });
}

module.exports = { handleWebSocketConnection };
