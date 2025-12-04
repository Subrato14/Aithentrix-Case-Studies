const express = require("express");
const { getAllDoctors, addDoctor } = require("../controllers/doctorController");
const protect = require("../middleware/auth");
const router = express.Router();

router.get("/", protect(), getAllDoctors);
router.post("/", protect(["admin"]), addDoctor);

module.exports = router;
