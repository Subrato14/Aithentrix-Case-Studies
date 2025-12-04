const express = require("express");
const auth = require("../middleware/auth");
const { createQuiz, getQuiz } = require("../controllers/quizController");
const router = express.Router();

router.post("/", auth(["instructor"]), createQuiz);
router.get("/:id", auth(), getQuiz);

module.exports = router;
