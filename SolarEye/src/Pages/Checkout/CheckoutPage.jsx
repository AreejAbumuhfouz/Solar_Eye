
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProgressBar from "./ProgressBar";
import ServiceDetails from "./ServiceDetails";
import PaymentMethod from "./PaymentMethod";
import OrderConfirmation from "./OrderConfirmation";

const CheckoutPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [error, setError] = useState(null); // State for error messages
  const [loading, setLoading] = useState(true); // Loading state to track data fetch
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const steps = ["Details", "Payment", "Confirmation"];

  // Fetch user and selected service when the component mounts
  useEffect(() => {
    const fetchServiceData = () => {
      const serviceData = sessionStorage.getItem("selectedService");
      if (serviceData) {
        setSelectedService(JSON.parse(serviceData));
      }
      setLoading(false); // Data is now loaded
    };

    fetchServiceData();
  }, []);

  const handlePaymentSelection = (method) => {
    setPaymentMethod(method);
    setActiveStep(2);
  };

  const handleConfirmation = async () => {
    if (loading) {
      console.log("Please wait, data is still loading...");
      return;
    }

    if (!selectedService) {
      setError("No service selected. Please go back and select a service.");
      return;
    }

    setActiveStep(3);

    // Prepare order data
    const orderData = {
      serviceId: selectedService._id, // Pass service ID
      totalPrice: selectedService.price, // Use the price from selected service
    };

    try {
      const response = await axios.post('http://localhost:5000/api/orders', orderData, {
        withCredentials: true, // Ensure credentials are included
      });

      console.log("Order response:", response.data); // Log the response for debugging

      if (response.status === 201) {
        console.log("Order created successfully:", response.data.order);
      } else {
        console.error("Error creating order:", response.data.message);
      }
    } catch (error) {
      console.error("Error sending order data:", error.response?.data || error.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-2">SolarEye Checkout</h1>
      {error && <p className="text-red-500">{error}</p>} {/* Display error if there's any */}
      <ProgressBar activeStep={activeStep} steps={steps} />

      {loading && <div>Loading data...</div>} {/* Loading message */}

      {activeStep === 1 && selectedService && !loading && (
        <ServiceDetails 
          selectedService={selectedService} 
          onPaymentSelect={handlePaymentSelection} 
          setDeliveryAddress={setDeliveryAddress}
        />
      )}

      {activeStep === 2 && !loading && (
        <PaymentMethod 
          paymentMethod={paymentMethod} 
          handleConfirmation={handleConfirmation} 
        />
      )}

      {activeStep === 3 && !loading && <OrderConfirmation selectedService={selectedService} />}
    </div>
  );
};

export default CheckoutPage;
