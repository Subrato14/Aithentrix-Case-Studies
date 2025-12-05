import stripe from "../utils/stripe.js";
import Invoice from "../models/Invoice.js";
import Subscription from "../models/Subscription.js";
import User from "../models/User.js";

// Minimal endpoint to create one-time payment (mock for this demo)
export async function createPaymentIntent(req, res) {
  const { amount, currency="usd" } = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(amount*100),
    currency
  });
  res.json({ clientSecret: paymentIntent.client_secret });
}
