const express = require("express");
const auth = require("../middleware/auth");
const { createLesson, getLesson } = require("../controllers/lessonController");
const router = express.Router();

router.get("/:id", auth(), getLesson);
router.post("/", auth(["instructor"]), createLesson);

module.exports = router;
