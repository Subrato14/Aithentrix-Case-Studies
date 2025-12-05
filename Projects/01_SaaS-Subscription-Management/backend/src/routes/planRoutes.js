import express from "express";
import { listPlans, createPlan } from "../controllers/planController.js";
import auth from "../middleware/auth.js";

const router = express.Router();
router.get("/", listPlans);
router.post("/", auth, createPlan);
export default router;
