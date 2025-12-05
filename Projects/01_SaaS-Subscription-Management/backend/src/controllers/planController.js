import Plan from "../models/Plan.js";
import stripe from "../utils/stripe.js";

export async function listPlans(req, res) {
  const plans = await Plan.find();
  res.json(plans);
}

export async function createPlan(req, res) {
  // Admin only - minimal check
  if (!req.user || req.user.role !== "admin") return res.status(403).json({ message: "Not allowed" });

  const { name, price, currency="usd", interval="month", features=[], trialDays=0 } = req.body;

  // Create Stripe Product + Price
  const prod = await stripe.products.create({ name });
  const priceObj = await stripe.prices.create({
    unit_amount: Math.round(price*100),
    currency,
    recurring: { interval },
    product: prod.id
  });

  const plan = await Plan.create({ name, price, currency, interval, features, stripePriceId: priceObj.id, trialDays });
  res.status(201).json(plan);
}
