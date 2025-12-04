const express = require("express");
const auth = require("../middleware/auth");
const {
  createCourse,
  getCourses,
  getCourse,
  publishCourse
} = require("../controllers/courseController");
const router = express.Router();

router.get("/", getCourses);
router.get("/:id", getCourse);
router.post("/", auth(["instructor"]), createCourse);
router.post("/:id/publish", auth(["instructor","admin"]), publishCourse);

module.exports = router;
