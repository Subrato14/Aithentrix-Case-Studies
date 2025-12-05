import express from "express";
import stripe from "../utils/stripe.js";
import Subscription from "../models/Subscription.js";
import Invoice from "../models/Invoice.js";
import User from "../models/User.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.log("Webhook signature error", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // handle event types
  switch (event.type) {
    case "customer.subscription.created":
    case "customer.subscription.updated": {
      const sub = event.data.object;
      // find user by stripe customer id
      const user = await User.findOne({ stripeCustomerId: sub.customer });
      if (user) {
        // find plan by stripe price id
        const priceId = sub.items.data[0].price.id;
        const plan = await Plan.findOne({ stripePriceId: priceId });
        const existing = await Subscription.findOne({ stripeSubscriptionId: sub.id });
        const data = {
          user: user._id,
          stripeSubscriptionId: sub.id,
          plan: plan ? plan._id : null,
          status: sub.status,
          currentPeriodEnd: new Date(sub.current_period_end * 1000)
        };
        if (existing) {
          await Subscription.findByIdAndUpdate(existing._id, data);
        } else {
          await Subscription.create(data);
        }
      }
      break;
    }
    case "invoice.paid": {
      const inv = event.data.object;
      const user = await User.findOne({ stripeCustomerId: inv.customer });
      if (user) {
        await Invoice.create({
          user: user._id,
          stripeInvoiceId: inv.id,
          amountDue: inv.amount_due/100,
          currency: inv.currency,
          paid: inv.paid,
          invoicePdf: inv.invoice_pdf || ""
        });
      }
      break;
    }
    default:
      console.log("Unhandled event", event.type);
  }

  res.json({ received: true });
});

export default router;
