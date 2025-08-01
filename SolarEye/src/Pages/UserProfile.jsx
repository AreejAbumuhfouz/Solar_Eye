
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import NavBar from "../components/NavBar";
import ShaheenFooter from "../components/Footer";
import { 
  Sun, Moon, User, MapPin, Package, Calendar, DollarSign, 
  Edit2, Save, AlertCircle, CheckCircle, Clock, ShoppingBag
} from "lucide-react";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loadingOrders, setLoadingOrders] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/profile", { withCredentials: true });
        setUser(response.data);
        setName(response.data.name);
        setCity(response.data.city);
      } catch (err) {
        setError("Failed to fetch user profile. Please log in again.");
      }
    };

    const fetchUserOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/orders/user", { withCredentials: true });
        console.log('Orders response:', response);
        if (response.data && response.data.orders) {
          setOrders(response.data.orders);
        } else {
          setError("No orders found.");
        }
        setLoadingOrders(false);
      } catch (err) {
        console.error('Error fetching orders:', err);
        setLoadingOrders(false);
      }
    };
    
    fetchUserProfile();
    fetchUserOrders();
  }, []);

  const handleEditClick = () => setIsEditing(true);
  
  const handleSaveClick = async () => {
    try {
      const updatedUser = { name, city };
      const response = await axios.put("http://localhost:5000/api/profile", updatedUser, { withCredentials: true });
      setUser(response.data);
      setSuccess("Profile updated successfully!");
      setIsEditing(false);
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError("Failed to update profile. Please try again.");
      setTimeout(() => setError(""), 3000);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 rounded-full border-t-transparent animate-spin mx-auto" />
          <p className="mt-4 text-blue-600 font-medium">Loading your profile...</p>
        </div>
      </div>
    );
  }

  const OrderCard = ({ order }) => {
    const isExpired = new Date(order.endDate) < new Date();
    const daysLeft = Math.ceil((new Date(order.endDate) - new Date()) / (1000 * 60 * 60 * 24));
    
    return (
      <motion.div 
        whileHover={{ y: -5 }}
        className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 ${
          isExpired ? 'opacity-75' : ''
        }`}
      >
        <div className="p-6">
          <div className="flex gap-6">
            <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
              <img
                // src={order.serviceId.icon}
                src={order.serviceId.icon}
                alt=""
                className="w-full h-full object-cover"
              />
              {!isExpired && (
                <div className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white text-xs py-1 text-center font-medium">
                  {daysLeft} days left
                </div>
              )}
              {isExpired && (
                <div className="absolute bottom-0 left-0 right-0 bg-gray-600 text-white text-xs py-1 text-center font-medium">
                  Expired
                </div>
              )}
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1 text-blue-800">{order.serviceId.packageName}</h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{order.serviceId.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">{order.serviceId.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-bold">${order.totalPrice}</span>
                </div>
              </div>
              
              <div className="flex gap-6 text-sm text-gray-600 pt-2 border-t border-gray-100">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <Calendar className="w-4 h-4 text-blue-700" />
                    <span className="font-medium">Start</span>
                  </div>
                  <p className="font-medium">{new Date(order.startDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <Calendar className="w-4 h-4 text-blue-700" />
                    <span className="font-medium">End</span>
                  </div>
                  <p className="font-medium">{new Date(order.endDate).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <NavBar />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-4 pb-20 pt-36"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8 p-8 rounded-2xl shadow-lg bg-white border border-blue-100"
        >
          <h1 className="text-3xl font-bold mb-8 flex items-center gap-3 text-blue-900">
            <User className="w-8 h-8 text-blue-600" />
            Profile Information
          </h1>

          <AnimatePresence>
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-600"
              >
                <AlertCircle className="w-5 h-5" />
                <p>{error}</p>
              </motion.div>
            )}
            {success && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-600"
              >
                <CheckCircle className="w-5 h-5" />
                <p>{success}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2 text-blue-700">
                <User className="w-4 h-4 text-blue-600" />
                Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-blue-50"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                <p className="text-xl font-medium py-3 text-gray-800 bg-blue-50 px-4 rounded-lg">{user.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2 text-blue-700">
                <MapPin className="w-4 h-4 text-blue-600" />
                Country
              </label>
              {isEditing ? (
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-blue-50"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              ) : (
                <p className="text-xl font-medium py-3 text-gray-800 bg-blue-50 px-4 rounded-lg">{user.city}</p>
              )}
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={isEditing ? handleSaveClick : handleEditClick}
              className="bg-gradient-to-r from-[#185B8D] to-[#4ACEF4] text-white px-8 py-3 rounded-xl text-lg font-semibold flex items-center mx-auto space-x-2 hover:bg-[#3A9AD3] transition-all shadow-lg"
            >
              {isEditing ? (
                <>
                  <Save className="w-5 h-5" />
                  Save Changes
                </>
              ) : (
                <>
                  <Edit2 className="w-5 h-5" />
                  Edit Profile
                </>
              )}
            </button>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-3xl font-bold mb-6 flex text-blue-900 items-center gap-3">
            <Package className="w-7 h-7 text-blue-600" />
            Your Orders
          </h2>
          
          {loadingOrders ? (
            <div className="flex justify-center py-12 bg-white rounded-xl shadow-md">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-blue-500 rounded-full border-t-transparent animate-spin mx-auto" />
                <p className="mt-4 text-blue-600 font-medium">Loading your orders...</p>
              </div>
            </div>
          ) : orders.length === 0 ? (
            <motion.div 
              className="text-center py-16 bg-white rounded-xl shadow-md border border-blue-100"
              whileHover={{ scale: 1.02 }}
            >
              <Package className="w-20 h-20 text-blue-300 mx-auto mb-4" />
              <p className="text-2xl text-gray-600 font-medium mb-2">No orders found</p>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">You haven't placed any orders yet. Browse our services and make your first order!</p>
              
              <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all hover:shadow-lg hover:from-blue-700 hover:to-indigo-700">
                <ShoppingBag className="w-5 h-5" />
                Make Order Now
              </Link>
            </motion.div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {orders.map((order) => (
                <OrderCard key={order._id} order={order} />
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>

      <ShaheenFooter />
    </div>
  );
};

export default ProfilePage;