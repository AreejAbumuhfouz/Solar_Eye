
import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';
import Cookies from 'js-cookie';

const AdminChat = () => {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [reply, setReply] = useState('');
  const [socket, setSocket] = useState(null);

 
    useEffect(() => {
      // Get the token from cookies
      const token = Cookies.get('token'); // Replace 'token' with your cookie name if it's different
    
      // Initialize socket connection
      const newSocket = io('http://localhost:10000', {
        auth: {
          token, // Pass the token from cookies
        },
      });
    
    //   setSocket(newSocket); // Set the socket in the state
    
    //   // Clean up on unmount
    //   return () => newSocket.close();
    // }, []);
    setSocket(newSocket);

    // Fetch all messages for admin
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:10000/api/getMessagesForAdmin', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setMessages(response.data.messages);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();

    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (!socket) return;

    // Listen for new messages
    socket.on('chatMessage', (message) => {
      setMessages(prev => [message, ...prev]);
    });
  }, [socket]);

  const handleReply = async (e) => {
    e.preventDefault();
    if (!reply.trim() || !selectedMessage) return;

    try {
      await axios.post('http://localhost:10000/api/replyToMessage',
        {
          messageId: selectedMessage._id,
          adminReply: reply
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      // Update local state
      setMessages(prev => prev.map(msg =>
        msg._id === selectedMessage._id
          ? { ...msg, adminReply: reply, isReplied: true }
          : msg
      ));

      setReply('');
      setSelectedMessage(null);
    } catch (error) {
      console.error('Error sending reply:', error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Messages List */}
      <div className="w-1/2 p-4 overflow-y-auto border-r">
        <h2 className="text-xl font-semibold mb-4">Customer Messages</h2>
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message._id}
              className={`p-4 rounded-lg shadow cursor-pointer ${
                selectedMessage?._id === message._id
                  ? 'bg-blue-50 border-2 border-blue-500'
                  : 'bg-white'
              } ${
                !message.isReplied ? 'border-l-4 border-yellow-500' : ''
              }`}
              onClick={() => setSelectedMessage(message)}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="font-medium">{message.user?.name}</span>
                <span className="text-sm text-gray-500">
                  {new Date(message.createdAt).toLocaleString()}
                </span>
              </div>
              <p className="text-gray-700">{message.userMessage}</p>
              {message.adminReply && (
                <div className="mt-2 pt-2 border-t">
                  <p className="text-sm font-medium text-gray-500">Your Reply:</p>
                  <p className="text-gray-700">{message.adminReply}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Reply Section */}
      <div className="w-1/2 p-4">
        {selectedMessage ? (
          <div className="h-full flex flex-col">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Reply to {selectedMessage.user?.name}</h3>
              <p className="text-gray-700 mt-2">{selectedMessage.userMessage}</p>
            </div>

            <form onSubmit={handleReply} className="mt-auto">
              <textarea
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                className="w-full h-32 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your reply..."
              />
              <div className="flex justify-end mt-4 space-x-2">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedMessage(null);
                    setReply('');
                  }}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                  Send Reply
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500">
            Select a message to reply
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminChat;