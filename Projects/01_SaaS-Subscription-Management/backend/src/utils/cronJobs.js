import cron from "node-cron";
import Subscription from "../models/Subscription.js";
import Invoice from "../models/Invoice.js";
import User from "../models/User.js";
import { sendEmail } from "./mailer.js";
import { sendSMS } from "./sms.js";

export default function startCron() {
  // run daily at 02:00 to send renewal reminders for subscriptions ending within 3 days
  cron.schedule("0 2 * * *", async () => {
    console.log("Cron: checking upcoming renewals...");
    const soon = new Date(Date.now() + 3*24*60*60*1000);
    const subs = await Subscription.find({ currentPeriodEnd: { $lte: soon }, status: "active" }).populate("user");
    for (const s of subs) {
      const user = s.user;
      await sendEmail(user.email, "Subscription renewal reminder", `<p>Your subscription expires on ${s.currentPeriodEnd.toDateString()}</p>`);
      await sendSMS(user.phone || user.email, `Your subscription expires on ${s.currentPeriodEnd.toDateString()}`);
    }
  });
}
