
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Download, Printer, Share2, FileText } from 'lucide-react';
import { jsPDF } from "jspdf";
import CircleLogo from "../../assets/CircleLogo.png";

const OrderConfirmation = ({ selectedService }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const generatePDF = async () => {
    setIsDownloading(true);
    try {
      const doc = new jsPDF();

      // Add Solar Eye Logo
      const imgWidth = 20;
      const imgHeight = 20;
      doc.addImage(CircleLogo, "PNG", 20, 10, imgWidth, imgHeight);

      // Header
      doc.setFontSize(22);
      doc.setFont("helvetica", "bold");
      doc.setTextColor("#FFA500");
      doc.text("Payment Receipt (SolarEye)", 75, 30, null, null, "center");

      // Receipt number and date
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.setTextColor("#333333");
      const receiptNo = `Receipt #${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
      const currentDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      doc.text(receiptNo, 140, 20);
      doc.text(`Date: ${currentDate}`, 140, 25);

      // Divider
      doc.setDrawColor("#FFA500");
      doc.setLineWidth(0.5);
      doc.line(20, 45, 190, 45);

      // Service Details
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.setTextColor("#FFA500");
      doc.text("Service Details", 20, 55);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor("#333333");
      const details = [
        [`Package Name: ${selectedService.packageName}`, 65],
        [`Description: ${selectedService.description}`, 72],
        [`Duration: ${selectedService.duration}`, 79],
        [`Contract: ${selectedService.contractDescription}`, 86],
        [`Service Frequency: ${selectedService.serviceFrequency}`, 93],
      ];

      details.forEach(([text, y]) => doc.text(text, 20, y));

      // Payment Details
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor("#FFA500");
      doc.text("Payment Details", 20, 110);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor("#333333");
      doc.text(`Subtotal: $${selectedService.price}`, 140, 120);
      doc.text(`Tax: $${(selectedService.price * 0.1).toFixed(2)}`, 140, 127);
      doc.setFont("helvetica", "bold");
      doc.text(`Total: $${(selectedService.price * 1.1).toFixed(2)}`, 140, 137);

      // Footer
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor("#999999");
      doc.text("Thank you for your business!", 20, 270);
      doc.text("For any queries, please contact support@solareye.com", 20, 275);

      // Save the PDF
      doc.save("payment_receipt.pdf");
    } finally {
      setIsDownloading(false);
    }
  };

  const handleReturnHome = () => {
    window.location.href = '/'; // Navigate to home
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
    >
      {/* Success Header */}
      <div className="bg-green-50 p-6 border-b border-green-100">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4"
        >
          <Check className="w-8 h-8 text-green-600" />
        </motion.div>
        <h2 className="text-2xl font-bold text-center text-green-600">
          Payment Successful!
        </h2>
        <p className="mt-2 text-center text-gray-600">
          Thank you for your payment. Your transaction has been completed successfully.
        </p>
      </div>

      {/* Order Details */}
      <div className="p-6">
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-gray-700 mb-3">Order Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Package</span>
              <span className="font-medium">{selectedService.packageName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Duration</span>
              <span className="font-medium">{selectedService.duration}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Amount</span>
              <span className="font-medium">${selectedService.price}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={generatePDF}
            disabled={isDownloading}
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition-colors duration-200"
          >
            {isDownloading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              />
            ) : (
              <Download className="w-5 h-5" />
            )}
            <span>{isDownloading ? 'Generating PDF...' : 'Download Receipt'}</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.print()}
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
          >
            <Printer className="w-5 h-5" />
            <span>Print Receipt</span>
          </motion.button>
        </div>

        

        {/* Return to Home Button */}
        <div className="mt-6 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleReturnHome}
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#185B8D] to-[#4ACEF4] text-white  font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
          >
            <span>Return to Home</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderConfirmation;
