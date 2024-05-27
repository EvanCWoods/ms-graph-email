import { NextResponse } from "next/server";
import sendPayouts from "../server-actions/stripe/sendPayout";

export default async function handler() {
  // Your scheduled task code goes here
  console.log("Cron job executed");
  await sendPayouts();
  return NextResponse.json({ message: "Cron job executed" });
}
