const Course = require("../models/courseModel");
const Lesson = require("../models/lessonModel");

exports.createCourse = async (req, res) => {
  try {
    const { title, shortDescription, description } = req.body;
    const course = await Course.create({ title, shortDescription, description, instructor: req.user.id });
    res.status(201).json(course);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate("instructor", "name email");
    res.json(courses);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate("lessons").populate("instructor", "name");
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.publishCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Not found" });
    if (course.instructor.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ message: "Not allowed" });
    }
    course.published = true;
    await course.save();
    res.json(course);
  } catch (err) { res.status(500).json({ message: err.message }); }
};
