import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  stripeSubscriptionId: String,
  plan: { type: mongoose.Schema.Types.ObjectId, ref: "Plan" },
  status: String, // active, past_due, canceled
  currentPeriodEnd: Date
}, { timestamps:true });

export default mongoose.model("Subscription", subscriptionSchema);
