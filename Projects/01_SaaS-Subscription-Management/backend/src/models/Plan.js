import mongoose from "mongoose";

const planSchema = new mongoose.Schema({
  name: String,
  stripePriceId: String, // price id for recurring billing
  price: Number,
  currency: { type: String, default: "usd" },
  interval: { type: String, enum:["month","year"], default:"month" },
  features: [String],
  trialDays: { type: Number, default: 0 }
});

export default mongoose.model("Plan", planSchema);
