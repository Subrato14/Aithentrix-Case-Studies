import express from "express";
import auth from "../middleware/auth.js";
import { getReports, exportSubscriptionsCSV } from "../controllers/adminController.js";

const router = express.Router();
router.get("/reports", auth, getReports);
router.get("/export/subscriptions", auth, exportSubscriptionsCSV);

export default router;
