/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";

import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Charity from "~/models/Charity";
import User from "~/models/User";

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const registerAsPayee = async () => {
  const { userId } = auth();

  if (!userId) return;

  const user = await User.findOne({ clerkUserId: userId });
  if (!user) return;

  const charity = await Charity.findOne({ userId: user._id });

  const account = await stripe.accounts.create({
    type: "express",
    metadata: {
      userId: user._id.toString(), // Storing user's database ID as metadata
      charityId: charity ? charity._id.toString() : "", // Optional: Store charity ID if available
    },
  });

  const accountLink = await stripe.accountLinks.create({
    account: account.id,
    refresh_url: "http://localhost:3000/reauth",
    return_url: "http://localhost:3000/dashboard",
    type: "account_onboarding",
  });
  redirect(accountLink.url);
};

export default registerAsPayee;;