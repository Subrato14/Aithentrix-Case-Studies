import express from "express";
import { createCheckoutSession, getMySubscription } from "../controllers/subscriptionController.js";
import auth from "../middleware/auth.js";

const router = express.Router();
router.post("/checkout", auth, createCheckoutSession);
router.get("/me", auth, getMySubscription);
export default router;
