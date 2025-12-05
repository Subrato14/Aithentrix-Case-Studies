import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";

import authRoutes from "./src/routes/authRoutes.js";
import planRoutes from "./src/routes/planRoutes.js";
import subscriptionRoutes from "./src/routes/subscriptionRoutes.js";
import paymentRoutes from "./src/routes/paymentRoutes.js";
import webhookRoutes from "./src/routes/webhookRoutes.js";
import adminRoutes from "./src/routes/adminRoutes.js";

import startCron from "./src/utils/cronJobs.js";

dotenv.config();
connectDB();

const app = express();

// Stripe webhooks need raw body — mount webhook route before general json middleware
import bodyParser from "body-parser";
app.post("/api/webhook/stripe", bodyParser.raw({ type: "application/json" }), webhookRoutes);

// JSON for other routes
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/plans", planRoutes);
app.use("/api/subscriptions", subscriptionRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/admin", adminRoutes);

// health
app.get("/", (req, res) => res.send("SaaS Subscription Pro API running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend listening on ${PORT}`);
  startCron();
});
