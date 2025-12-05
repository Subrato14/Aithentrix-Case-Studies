import stripe from "../utils/stripe.js";
import User from "../models/User.js";
import Subscription from "../models/Subscription.js";
import Invoice from "../models/Invoice.js";
import Plan from "../models/Plan.js";

export async function createCheckoutSession(req, res) {
  // create stripe customer if needed, then create subscription with trial if provided
  const user = req.user;
  const { priceId, success_url, cancel_url } = req.body;

  // ensure stripe customer
  let stripeCustomerId = user.stripeCustomerId;
  if (!stripeCustomerId) {
    const c = await stripe.customers.create({ email: user.email, name: user.name });
    stripeCustomerId = c.id;
    user.stripeCustomerId = c.id;
    await user.save();
  }

  // create subscription session
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    customer: stripeCustomerId,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: success_url || process.env.STRIPE_SUCCESS_URL,
    cancel_url: cancel_url || process.env.STRIPE_CANCEL_URL
  });

  res.json({ url: session.url });
}

export async function getMySubscription(req, res) {
  const sub = await Subscription.findOne({ user: req.user._id }).populate("plan");
  res.json(sub);
}
