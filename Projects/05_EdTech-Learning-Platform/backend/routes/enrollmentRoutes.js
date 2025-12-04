const express = require("express");
const auth = require("../middleware/auth");
const { enroll, myEnrollments } = require("../controllers/enrollmentController");
const router = express.Router();

router.post("/", auth(["student"]), enroll);
router.get("/mine", auth(["student"]), myEnrollments);

module.exports = router;
