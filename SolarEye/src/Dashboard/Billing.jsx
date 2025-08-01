
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [adminReply, setAdminReply] = useState('');

  // Fetch all messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('/get-messages');
        setMessages(response.data.messages);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const handleAdminReply = async (messageId) => {
    try {
      await axios.post('/reply-message', { messageId, adminReply });
      setMessages(messages.map(msg => 
        msg._id === messageId ? { ...msg, adminReply } : msg
      ));
      setAdminReply('');
    } catch (error) {
      console.error('Error sending admin reply:', error);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto p-4 bg-white border rounded-lg shadow-md">
      <div className="flex-1 overflow-auto space-y-4 mb-4">
        {messages.map((message) => (
          <div key={message._id} className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full">
                {message.user ? message.user.name.charAt(0).toUpperCase() : 'U'}
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-gray-100 p-2 rounded-md">{message.userMessage}</div>
              {message.adminReply && (
                <div className="bg-blue-100 p-2 rounded-md">{message.adminReply}</div>
              )}
              <input
                type="text"
                className="w-full p-2 border rounded-md mt-2"
                placeholder="Admin reply..."
                value={adminReply}
                onChange={(e) => setAdminReply(e.target.value)}
              />
              <button
                onClick={() => handleAdminReply(message._id)}
                className="px-4 py-2 bg-green-500 text-white rounded-md mt-2 hover:bg-green-600"
              >
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
