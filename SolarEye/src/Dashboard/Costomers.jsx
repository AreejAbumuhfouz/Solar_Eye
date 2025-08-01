import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const Costumers = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('http://localhost:10000/api/users');
        setUsers(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Approve user
  const approveUser = async (id) => {
    try {
      await axios.put(`http://localhost:10000/api/users/${id}/approve`, { message });
      setUsers(users.map(user => 
        user._id === id 
          ? { ...user, isApproved: true, lastAction: 'approved' } 
          : user
      ));
      setSelectedUser(null);
    } catch (error) {
      console.error("Error approving user:", error);
    }
  };

  // Disapprove user
  const disapproveUser = async (id) => {
    try {
      await axios.put(`http://localhost:10000/api/users/${id}/disapprove`, { message });
      setUsers(users.map(user => 
        user._id === id 
          ? { ...user, isApproved: false, lastAction: 'disapproved' } 
          : user
      ));
      setSelectedUser(null);
    } catch (error) {
      console.error("Error disapproving user:", error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-green-500 p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-white flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          User Management
        </h2>
        {isLoading && (
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-white"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            animate={{ rotate: 360 }}
            transition={{ 
              repeat: Infinity, 
              duration: 1, 
              ease: "linear" 
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </motion.svg>
        )}
      </div>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              {['Name', 'Email', 'Country', 'Status', 'Actions'].map((header) => (
                <th 
                  key={header} 
                  className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {users.map((user) => (
                <motion.tr
                  key={user._id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3 }}
                  className={`hover:bg-gray-50 transition-colors 
                    ${user.lastAction === 'approved' ? 'bg-green-50' : 
                      user.lastAction === 'disapproved' ? 'bg-red-50' : ''}`}
                >
                  <td className="py-4 px-4 border-b">
                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                  </td>
                  <td className="py-4 px-4 border-b">
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </td>
                  <td className="py-4 px-4 border-b">
                    <div className="text-sm text-gray-500">{user.city}</div>
                  </td>
                  <td className="py-4 px-4 border-b">
                    <motion.span
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium 
                        ${user.isApproved 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'}`}
                    >
                      {user.isApproved ? 'Approved' : 'Disapproved'}
                    </motion.span>
                  </td>
                  <td className="py-4 px-4 border-b">
                    <button 
                      onClick={() => {
                        setSelectedUser(user);
                        setMessage("");
                      }}
                      className="px-3 py-1.5 border border-blue-300 text-blue-600 hover:bg-blue-50 rounded-md text-sm transition-colors"
                    >
                      Change Status
                    </button>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {/* Status Change Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md"
          >
            <h2 className="text-xl font-semibold mb-4">Change User Status</h2>
            <p className="text-gray-600 mb-4">
              Send an email to {selectedUser.name} about their account status
            </p>
            
            <textarea
              placeholder="Write a message for the user"
              className="w-full p-2 border rounded min-h-[100px] mb-4 focus:ring-2 focus:ring-blue-500 transition-all"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            
            <div className="flex justify-between gap-4">
              <button 
                onClick={() => approveUser(selectedUser._id)}
                className="flex-1 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors"
              >
                Approve
              </button>
              <button 
                onClick={() => disapproveUser(selectedUser._id)}
                className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors"
              >
                Disapprove
              </button>
              <button 
                onClick={() => setSelectedUser(null)}
                className="flex-1 bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Costumers;