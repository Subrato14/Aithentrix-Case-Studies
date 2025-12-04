const Appointment = require("../models/appointmentModel");

exports.getAppointmentsByPatient = async (req, res) => {
  const appointments = await Appointment.find({ patient: req.user.id }).populate("doctor");
  res.json(appointments);
};

exports.bookAppointment = async (req, res) => {
  const { doctor, slot, date } = req.body;
  const appointment = await Appointment.create({ patient: req.user.id, doctor, slot, date });
  res.status(201).json(appointment);
};
