import sendPayouts from "~/app/server-actions/stripe/sendPayout";
import checkDGRStatus from "~/scraper";

export async function GET() {
  // const isRegistered = await checkDGRStatus("23663978863");
  await sendPayouts();
}
