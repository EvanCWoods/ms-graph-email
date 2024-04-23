/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";

import type { ObjectId } from "mongoose";
import { redirect } from "next/navigation";
import User from "~/models/User";

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const createSubscriptionInStripe = async (
  userId: ObjectId,
  charityId: string,
  charityName: string,
  amount: number,
) => {
  console.log(userId, charityId, amount);
  // find the user
  const user = await User.findById(userId);
  if (!user) return;

  const session = await stripe.checkout.sessions.create({
    customer: user.stripeCustomerId,
    billing_address_collection: "auto",
    metadata: {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      charityId: charityId,
      charityName: charityName,
    },
    line_items: [
      {
        price_data: {
          unit_amount: amount * 100,
          currency: "AUD",
          recurring: {
            interval: "month",
          },
          product_data: {
            name: `Subscribe to ${charityName}`,
          },
        },
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel.html`,
  });

  console.log(session);
  redirect(session.url);
};

export default createSubscriptionInStripe;
