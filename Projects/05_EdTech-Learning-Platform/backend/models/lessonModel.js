const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String,
  videoUrl: String,
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  order: { type: Number, default: 0 }
});

module.exports = mongoose.model("Lesson", lessonSchema);
