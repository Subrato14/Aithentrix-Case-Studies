const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  specialization: String,
  experience: Number,
  availableSlots: [String]
});

module.exports = mongoose.model("Doctor", doctorSchema);
