import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  stripeInvoiceId: String,
  amountDue: Number,
  currency: String,
  paid: Boolean,
  invoicePdf: String
}, { timestamps:true });

export default mongoose.model("Invoice", invoiceSchema);
