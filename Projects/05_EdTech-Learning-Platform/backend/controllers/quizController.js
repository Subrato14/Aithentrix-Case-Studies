const Quiz = require("../models/quizModel");

exports.createQuiz = async (req, res) => {
  try {
    const { courseId, title, questions } = req.body;
    const quiz = await Quiz.create({ course: courseId, title, questions });
    res.status(201).json(quiz);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });
    res.json(quiz);
  } catch (err) { res.status(500).json({ message: err.message }); }
};
