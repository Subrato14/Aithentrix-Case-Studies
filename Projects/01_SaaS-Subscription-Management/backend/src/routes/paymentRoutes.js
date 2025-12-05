import express from "express";
import { createPaymentIntent } from "../controllers/paymentController.js";
import auth from "../middleware/auth.js";

const router = express.Router();
router.post("/intent", auth, createPaymentIntent);
export default router;
