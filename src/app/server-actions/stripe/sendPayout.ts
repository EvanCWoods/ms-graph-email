/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";

import Charity from "~/models/Charity";
import dbConnect from "~/utils/dbConnect";
import { getPayoutByCharityId } from "../charity/getPayoutByCharityId";
import Transaction from "~/models/Transaction";

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

async function sendPayouts() {
  await dbConnect();
  const charities = await Charity.find({ verified: true }).exec();

  for (const charity of charities) {
    if (charity.stripeAccountId) {
      try {
        const totalPayout = await getPayoutByCharityId(charity.charityId);

        if (totalPayout.dgrAmount! > 0) {
          const transferDgr = await stripe.transfers.create({
            amount: totalPayout.dgrAmount,
            currency: "aud",
            destination: charity.stripeAccountId,
            description: "Monthly payout from GoodChange.org.au (DGR)",
          });

          console.log(
            `Payout successful for DGR Charity ID: ${charity.charityId}`,
            transferDgr,
          );

          totalPayout.dgrTransactionIds?.forEach(
            async (transactionId: string) => {
              await Transaction.findByIdAndUpdate(transactionId, {
                status: "distributed",
              });
            },
          );

          console.log(
            `Updated transactions to 'distributed' for DGR Charity ID: ${charity.charityId}`,
          );
        }

        if (totalPayout.nonDgrAmount! > 0) {
          const transferNonDgr = await stripe.transfers.create({
            amount: totalPayout.nonDgrAmount,
            currency: "aud",
            destination: charity.stripeAccountId,
            description: "Monthly payout from GoodChange.org.au (Non-DGR)",
          });

          console.log(
            `Payout successful for Non-DGR Charity ID: ${charity.charityId}`,
            transferNonDgr,
          );

          totalPayout.nonDgrTransactionIds?.forEach(
            async (transactionId: string) => {
              await Transaction.findByIdAndUpdate(transactionId, {
                status: "distributed",
              });
            },
          );

          console.log(
            `Updated transactions to 'distributed' for Non-DGR Charity ID: ${charity.charityId}`,
          );
        }
      } catch (error) {
        console.error(
          `Payout failed for Charity ID: ${charity.charityId}`,
          error,
        );
      }
    }
  }
}

export default sendPayouts;
