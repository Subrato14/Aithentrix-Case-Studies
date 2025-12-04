const Enrollment = require("../models/enrollmentModel");

exports.enroll = async (req, res) => {
  try {
    const { courseId } = req.body;
    const exists = await Enrollment.findOne({ student: req.user.id, course: courseId });
    if (exists) return res.status(400).json({ message: "Already enrolled" });
    const enroll = await Enrollment.create({ student: req.user.id, course: courseId });
    res.status(201).json(enroll);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.myEnrollments = async (req, res) => {
  try {
    const list = await Enrollment.find({ student: req.user.id }).populate("course");
    res.json(list);
  } catch (err) { res.status(500).json({ message: err.message }); }
};
