import React, { useEffect, useState } from 'react';

const PayPalComponent = () => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    // Retrieve the price from session storage
    const selectedService = JSON.parse(sessionStorage.getItem('selectedService'));
    if (selectedService && selectedService.price) {
      setPrice(selectedService.price);
    }

    // Load the PayPal script dynamically
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=AbhhVtGZ4Lj4N6Qq3iTDtDJsEIP9A1ztnk_TPyLBMq_KBH9rLfGyFyZmYCCPwhLCitfonW1jhf1O9qCy&currency=USD';
    script.addEventListener('load', () => {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: price.toString(), // Use dynamic price
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            alert('Payment successful!');
            console.log(details);
            // Send the payment details to your backend for processing
            fetch('http://localhost:10000/api/payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ orderID: data.orderID, payerID: data.payerID }),
            });
          });
        },
      }).render('#paypal-button-container');
    });
    document.body.appendChild(script);

    return () => {
      // Cleanup PayPal script on component unmount
      script.removeEventListener('load', () => {});
    };
  }, [price]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg max-w-xs mx-auto">
      <h2 className="text-xl font-semibold text-center mb-4">Pay with PayPal</h2>
      {price > 0 ? (
        <div id="paypal-button-container" className="flex justify-center items-center"></div>
      ) : (
        <p className="text-center text-gray-500">Loading payment options...</p>
      )}
    </div>
  );
};

export default PayPalComponent;
