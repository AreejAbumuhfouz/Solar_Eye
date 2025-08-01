// paypalRoutes.js
const express = require("express");
const axios = require("axios");

const router = express.Router();

const PAYPAL_API = "https://sandbox.paypal.com"; // Sandbox URL for testing
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_SECRET = process.env.PAYPAL_SECRET;

// Create an order
router.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    // Get an access token
    const auth = await axios.post(
      `${PAYPAL_API}/v1/oauth2/token`,
      "grant_type=client_credentials",
      {
        auth: {
          username: PAYPAL_CLIENT_ID,
          password: PAYPAL_SECRET,
        },
      }
    );

    const { access_token } = auth.data;

    // Create an order
    const order = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders`,
      {
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: amount,
            },
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(order.data);
  } catch (error) {
    console.error("PayPal Order Creation Error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
