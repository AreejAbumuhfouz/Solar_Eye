
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Lock, Check } from 'lucide-react';
import PayPalComponent from "../../components/PayPalComponent";
import StripePayment from "../../components/StripePayment";
import PayPal from "../../assets/PayPal1.png";

const PaymentMethod = ({ paymentMethod, handleConfirmation }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handlePaymentConfirmation = async () => {
    setIsProcessing(true);
    try {
      // هنا يتم معالجة الدفع
      await handleConfirmation();
      setIsCompleted(true); // تعيين الدفع كمكتمل بعد النجاح
    } catch (error) {
      console.error('Payment error:', error);
    } finally {
      setIsProcessing(false); // إعادة تعيين حالة المعالجة
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          {paymentMethod === "paypal" ? (
            <img src={PayPal} alt="PayPal logo" className="w-12 h-12" />
          ) : (
            <CreditCard className="w-6 h-6 text-[#635BFF]" />
          )}
          <h2 className="text-xl font-bold text-gray-800">
            {paymentMethod === "paypal" ? "Pay with PayPal" : "Pay with Credit Card"}
          </h2>
        </div>
        <div className="flex items-center mt-2 text-sm text-gray-600">
          <Lock className="w-4 h-4 mr-1" />
          <span>Secure payment processing</span>
        </div>
      </div>

      {/* Payment Component */}
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          {paymentMethod === "paypal" ? (
            <PayPalComponent />
          ) : (
            <StripePayment />
          )}
        </motion.div>

        {/* Security Notice */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-start space-x-2 text-sm text-gray-600">
            <Lock className="w-4 h-4 mt-0.5 text-gray-400" />
            <p>
              Your payment information is encrypted and secure. We never store your full payment details.
            </p>
          </div>
        </div>

        {/* Confirm Payment Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handlePaymentConfirmation}
          disabled={isProcessing || isCompleted} // سيتم تفعيل الزر عند إتمام الدفع
          className={`
            w-full px-6 py-4 rounded-lg shadow-md font-semibold
            flex items-center justify-center space-x-2
            transition-all duration-200
            ${isCompleted 
              ? 'bg-green-500 hover:bg-green-600' 
              : 'bg-blue-600 hover:bg-blue-700'
            }
            ${isProcessing || isCompleted ? 'cursor-not-allowed opacity-90' : ''}
            text-white
          `}
        >
          {isProcessing ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              />
              <span>Processing...</span>
            </>
          ) : isCompleted ? (
            <>
              <Check className="w-5 h-5" />
              <span>Payment Confirmed</span>
            </>
          ) : (
            <>
              <Lock className="w-5 h-5" />
              <span>Confirm Payment</span>
            </>
          )}
        </motion.button>

        {/* Payment Protection Notice */}
        <p className="mt-4 text-center text-sm text-gray-500">
          Protected by industry standard SSL/TLS encryption
        </p>
      </div>
    </motion.div>
  );
};

export default PaymentMethod;
