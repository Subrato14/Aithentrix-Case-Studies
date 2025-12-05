import Twilio from "twilio";
const client = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export async function sendSMS(to, body) {
  if (!process.env.TWILIO_ACCOUNT_SID) {
    console.log("TWILIO not configured, skipping SMS:", to, body);
    return;
  }
  await client.messages.create({ from: process.env.TWILIO_FROM, to, body });
}
