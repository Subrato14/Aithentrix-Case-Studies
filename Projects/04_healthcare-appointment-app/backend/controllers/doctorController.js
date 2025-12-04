const Doctor = require("../models/doctorModel");
const User = require("../models/userModel");

exports.getAllDoctors = async (req, res) => {
  const doctors = await Doctor.find().populate("user", "name email");
  res.json(doctors);
};

exports.addDoctor = async (req, res) => {
  const { userId, specialization, experience, availableSlots } = req.body;
  const doctor = await Doctor.create({ user: userId, specialization, experience, availableSlots });
  res.status(201).json(doctor);
};
