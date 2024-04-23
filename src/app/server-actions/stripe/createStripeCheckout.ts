/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";

import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import User from "~/models/User";
import dbConnect from "~/utils/dbConnect";

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

/**
 * Creates a checkout session for a one-time donation to a charity.
 *
 * @param formData - The form data containing the charity ID, charity name, and donation amount.
 * @returns The URL of the checkout session.
 */
const createStripeCheckout = async (formData: FormData) => {
  const charityName = formData.get("charityName") as string;
  const charityId = formData.get("charityId") as string;
  const amount = parseInt(formData.get("amount") as string);

  console.log("Creating checkout session for", charityName, amount);
  // get the user from clerk
  const { userId } = auth();
  if (!userId) return;
  // get the user from the database
  await dbConnect();
  const user = await User.findOne({ clerkUserId: userId });

  if (!user || !user.stripeCustomerId) {
    return;
  }
  // create the checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    customer: user.stripeCustomerId,
    metadata: {
      charityId: charityId,
      charityName: charityName,
    },
    line_items: [
      {
        price_data: {
          unit_amount: amount * 100,
          currency: "AUD",
          product_data: {
            name: `Send a one time donation to ${charityName}`,
          },
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: "https://example.com/cancel",
  });
  // return the session url
  if (!session) return;

  redirect(session.url as string);
};

export default createStripeCheckout;
