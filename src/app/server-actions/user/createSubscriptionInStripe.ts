/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";

import { type ObjectId } from "mongoose";
import { redirect } from "next/navigation";
import User from "~/models/User";
import checkDGRStatus from "~/scraper";
import dbConnect from "~/utils/dbConnect";

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const STRIPE_DGR_ACCOUNT_ID = process.env.STRIPE_DGR_ACCOUNT_ID;
const STRIPE_NON_DGR_ACCOUNT_ID = process.env.STRIPE_NON_DGR_ACCOUNT_ID;

const createSubscriptionInStripe = async (
  userId: ObjectId,
  charityId: string,
  charityAbn: string,
  charityName: string,
  amount: number,
) => {
  console.log(userId, charityId, amount);

  // Connect to the database
  await dbConnect();

  // Find the user
  const user = await User.findById(userId);
  if (!user) {
    console.error("User not found");
    return;
  }

  // Create a Stripe customer if not exists
  if (!user.stripeCustomerId) {
    const customer = await stripe.customers.create({
      email: user.email,
      name: user.name,
    });

    // Save the Stripe customer ID to the user
    user.stripeCustomerId = customer.id;
    await user.save();
  }

  // Retrieve the Stripe customer to ensure it exists
  const stripeCustomer = await stripe.customers.retrieve(user.stripeCustomerId);
  if (!stripeCustomer) {
    console.error("Stripe customer could not be retrieved");
    return;
  }

  const isDgrRegistered: boolean | null = await checkDGRStatus(charityAbn);
  console.log({ isDgrRegistered });

  // Determine the Stripe account based on DGR status
  const stripeAccount = isDgrRegistered
    ? STRIPE_DGR_ACCOUNT_ID
    : STRIPE_NON_DGR_ACCOUNT_ID;

  // Create a checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "subscription",
    customer: user.stripeCustomerId,
    billing_address_collection: "auto",
    line_items: [
      {
        price_data: {
          currency: "AUD",
          product_data: {
            name: `${charityName} (${isDgrRegistered ? "DGR Registered" : "Not DGR Registered"})`,
          },
          recurring: {
            interval: "month",
          },
          unit_amount: amount * 100,
        },
        quantity: 1,
      },
    ],
    metadata: {
      charityId: charityId,
      charityName: charityName,
      charityAbn: charityAbn,
      receivedAccountId: stripeAccount,
      isDgrRegistered: isDgrRegistered,
    },
    subscription_data: {
      transfer_data: {
        destination: stripeAccount,
      },
    },
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel.html`,
  });

  console.log("Stripe session created:", session);
  if (session.url) {
    redirect(session.url as string);
  } else {
    console.error("No URL returned from Stripe session");
  }
};

export default createSubscriptionInStripe;
