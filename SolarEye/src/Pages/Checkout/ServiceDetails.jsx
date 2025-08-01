
import React from 'react';
import { Check, Clock, DollarSign, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import PayPal from "../../assets/PayPal1.png"
const ServiceDetails = ({ selectedService, onPaymentSelect }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800">
          Service Details
        </h2>
      </div>
      
      <div className="p-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Package Header */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg mb-6"
          >
            <h3 className="text-xl font-bold text-gray-800">
              {selectedService.packageName}
            </h3>
            <p className="text-gray-600 mt-2">{selectedService.description}</p>
          </motion.div>

          {/* Features */}
          <motion.div variants={itemVariants} className="mb-6">
            <h4 className="text-lg font-semibold mb-3 text-gray-700">Features</h4>
            <div className="space-y-2">
              {selectedService.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-2 text-gray-600"
                >
                  <Check className="w-5 h-5 text-green-500" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Price and Duration */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 gap-4 mb-8"
          >
            <div className="bg-gray-50 p-4 rounded-lg flex items-center space-x-3">
              <DollarSign className="w-6 h-6 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Price</p>
                <p className="text-lg font-bold text-gray-800">
                  ${selectedService.price}
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg flex items-center space-x-3">
              <Clock className="w-6 h-6 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Duration</p>
                <p className="text-lg font-bold text-gray-800">
                  {selectedService.duration}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Payment Methods */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-gray-700">
              Select Payment Method
            </h4>
            <div className="grid grid-cols-2 gap-4">
             

<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  onClick={() => onPaymentSelect("paypal")}
  className="flex items-center justify-center space-x-2 px-6 py-4 bg-[#0070BA] text-white font-semibold rounded-lg shadow-md hover:bg-[#005ea6] transition-colors duration-200"
>
  <img src={PayPal} alt="PayPal logo" className="w-8 h-8" />
  <span>PayPal</span>
</motion.button>


              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onPaymentSelect("stripe")}
                className="flex items-center justify-center space-x-2 px-6 py-4 bg-[#635BFF] text-white font-semibold rounded-lg shadow-md hover:bg-[#4B45C6] transition-colors duration-200"
              >
                <CreditCard className="w-5 h-5" />
                <span>Cridet Card</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetails;