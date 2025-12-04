const Lesson = require("../models/lessonModel");
const Course = require("../models/courseModel");

exports.createLesson = async (req, res) => {
  try {
    const { courseId, title, content, videoUrl } = req.body;
    const lesson = await Lesson.create({ title, content, videoUrl, course: courseId });
    await Course.findByIdAndUpdate(courseId, { $push: { lessons: lesson._id } });
    res.status(201).json(lesson);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getLesson = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    if (!lesson) return res.status(404).json({ message: "Lesson not found" });
    res.json(lesson);
  } catch (err) { res.status(500).json({ message: err.message }); }
};
