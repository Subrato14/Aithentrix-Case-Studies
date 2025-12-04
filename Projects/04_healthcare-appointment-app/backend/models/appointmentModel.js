const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  slot: String,
  date: String,
  status: { type: String, enum: ["pending", "confirmed", "cancelled", "completed"], default: "pending" }
});

module.exports = mongoose.model("Appointment", appointmentSchema);
