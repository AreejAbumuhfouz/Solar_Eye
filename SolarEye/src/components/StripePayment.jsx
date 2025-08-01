import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// Load your Stripe publishable key
const stripePromise = loadStripe("pk_test_51QY8l3DeVjiMll7e1xTmxDktOiyB8QEZJIaF1jqRmUeThf3IkW3pOUMt5kKxg3rYcCVLnvNpoHVkxDiddOwxCZjn00TC0nd5tJ");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Retrieve the price from sessionStorage
  const selectedService = JSON.parse(sessionStorage.getItem("selectedService"));
  const amount = selectedService ? selectedService.price * 100 : 0; // Convert to cents for Stripe

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    // Call your backend to create a PaymentIntent
    const res = await fetch("http://localhost:10000/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }), // Pass the dynamic amount
    });

    const { clientSecret } = await res.json();

    // Confirm the payment
    const { error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Payment successful!");
    }

    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg space-y-6"
    >
      <div className="p-4 border rounded-lg shadow-sm">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#495057",
                "::placeholder": {
                  color: "#d1d5db",
                },
              },
              invalid: {
                color: "#e3342f",
              },
            },
          }}
        />
      </div>

      <button
        type="submit"
        disabled={!stripe || isLoading}
        className={`w-full py-3 px-6 text-white font-semibold rounded-lg transition-all text-center shadow-md ${
          isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {isLoading ? "Processing..." : "Confirm Payment"}
      </button>

      {message && (
        <div
          className={`text-center mt-4 font-medium ${
            message.includes("successful") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </div>
      )}
    </form>
  );
};

const StripePayment = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default StripePayment;
