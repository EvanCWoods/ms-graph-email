import Stripe from "stripe";
import dbConnect from "~/utils/dbConnect";

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY!);

export interface StripePayoutRequest {
  amount: number;
  connectedAccountId: string;
}

export const stripePayout = async ({
  amount,
  connectedAccountId,
}: StripePayoutRequest): Promise<unknown> => {
  await dbConnect();

  const transfer = await stripe.transfers.create({
    amount,
    currency: "aud",
    destination: connectedAccountId,
  });

  return transfer;
};
