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
const setupUserStripe = async () => {
  await dbConnect();
  const { userId } = auth();

  if (!userId) return;

  // find the user
  const user = await User.findOne({ clerkUserId: userId });
  if (!user) return;

  // create the checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "setup", // This mode is for saving payment methods without charging.
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/register?step=5`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
    customer: user.stripeCustomerId,
  });
  // return the session url
  if (!session) return;

  user.signUpStep = user.signUpStep + 1;
  await user.save();

  redirect(session.url as string);
};

export default setupUserStripe;
