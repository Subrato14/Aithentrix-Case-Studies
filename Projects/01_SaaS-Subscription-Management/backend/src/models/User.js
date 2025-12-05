import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  stripeCustomerId: String,
  role: { type: String, enum: ["customer","admin"], default: "customer" },
  currency: { type: String, default: "usd" }
}, { timestamps:true });

export default mongoose.model("User", userSchema);
