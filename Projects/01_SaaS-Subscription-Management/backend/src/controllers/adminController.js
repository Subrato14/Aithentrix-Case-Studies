import Plan from "../models/Plan.js";
import Subscription from "../models/Subscription.js";
import User from "../models/User.js";
import createCsvWriter from "csv-writer";

export async function getReports(req, res) {
  if (!req.user || req.user.role!=="admin") return res.status(403).json({ message:"Forbidden" });
  const totalUsers = await User.countDocuments();
  const totalSubs = await Subscription.countDocuments();
  const revenue = 0; // placeholder - compute from Stripe webhooks

  res.json({ totalUsers, totalSubs, revenue });
}

export async function exportSubscriptionsCSV(req, res) {
  if (!req.user || req.user.role!=="admin") return res.status(403).json({ message:"Forbidden" });
  const subs = await Subscription.find().populate("user plan");
  const records = subs.map(s => ({
    user: s.user.email,
    plan: s.plan.name,
    status: s.status,
    currentPeriodEnd: s.currentPeriodEnd
  }));
  const csvWriter = createCsvWriter.createObjectCsvStringifier({
    header: [
      {id:'user', title:'User'},
      {id:'plan', title:'Plan'},
      {id:'status', title:'Status'},
      {id:'currentPeriodEnd', title:'PeriodEnd'}
    ]
  });
  const csv = csvWriter.getHeaderString() + csvWriter.stringifyRecords(records);
  res.setHeader('Content-disposition', 'attachment; filename=subscriptions.csv');
  res.set('Content-Type', 'text/csv');
  res.status(200).send(csv);
}
