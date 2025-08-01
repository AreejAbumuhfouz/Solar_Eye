
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import Logo from "../assets/ASK.png";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [socket, setSocket] = useState(null);
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
const ws = new WebSocket('wss://solar-eye.onrender.com');
    setSocket(ws);
  
    ws.onmessage = (event) => {
      setMessages((prev) => [...prev, { sender: 'bot', text: event.data }]);
    };
  
    ws.onclose = (event) => {
      console.log('WebSocket disconnected', event);
    };
  
    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  
    return () => ws.close();
  }, []);
  
  const sendMessage = () => {
    if (input.trim() && socket) {
      setMessages((prev) => [...prev, { sender: 'user', text: input }]);
      socket.send(input);
      setInput('');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">

{!isOpen && (
  <button
    onClick={() => setIsOpen(true)}
    className="m-2 w-32 shadow-lg hover:shadow-2xl rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-blue-100 p-1 flex items-center justify-center cursor-pointer"
  >
    <img src={Logo} alt="Chat Logo" width="140px" />
  </button>
)}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-96 h-[540px] bg-gradient-to-b from-gray-50 to-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-slideUp">
          {/* Chat Header */}
          <div className="bg-white px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <div>
              <h1 className="text-xl font-semibold text-gray-800">
                <span className='text-[#185B8D] mr-2'>
                SolarEye
                </span>
                 Chat Support</h1>
              <p className="text-sm text-gray-500">We're here to help</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Messages Container */}
          <div className="h-96 overflow-y-auto px-6 py-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-xl shadow-sm ${
                    msg.sender === 'bot'
                      ? 'bg-white text-gray-800 rounded-tl-none'
                      : 'bg-blue-600 text-white rounded-tr-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2">
              <input
                type="text"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="px-6 py-3 bg-blue-600 bg-gradient-to-r from-[#185B8D] to-[#4ACEF4]  text-white rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
