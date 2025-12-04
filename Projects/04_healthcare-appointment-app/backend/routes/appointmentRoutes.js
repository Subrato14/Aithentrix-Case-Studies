const express = require("express");
const { getAppointmentsByPatient, bookAppointment } = require("../controllers/appointmentController");
const protect = require("../middleware/auth");
const router = express.Router();

router.get("/mine", protect(["patient"]), getAppointmentsByPatient);
router.post("/", protect(["patient"]), bookAppointment);

module.exports = router;
