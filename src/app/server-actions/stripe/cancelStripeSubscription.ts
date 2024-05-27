/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";

import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Individual from "~/models/Individual";
import User from "~/models/User";
import dbConnect from "~/utils/dbConnect";

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const cancelStripeSubscription = async (subscriptionId: string) => {
    await dbConnect();
    const {userId} = auth();
    if (!userId ) return;
  console.log({ subscriptionId });
  // Cancel the subscription
  const subscription = await stripe.subscriptions.cancel(subscriptionId);

  if (subscription) {
    // TODO: Email confirmation
    const user = await User.findOne({ clerkUserId: userId });
    if (!user) return;
    const accountType = user.accountType;

    switch (accountType) {
        case "individual":
            const individual = await Individual.findOne({userId: user.id as string});
            if (!individual) return;
            const currentIndividualCharities = individual.currentCharities;
            // Remove the current charity that matches to the subscription id
            const updatedIndividualCharities = currentIndividualCharities.filter(
              (charity) => charity.subscriptionId !== subscriptionId,
            );
            individual.currentCharities = updatedIndividualCharities;
            await individual.save();
            break;
        case "company":
          const company = await Individual.findOne({userId: user.id as string});
            if (!company) return;
            const currentCompanyCharities = company.currentCharities;
            // Remove the current charity that matches to the subscription id
            const updatedCharities = currentCompanyCharities.filter(
              (charity) => charity.subscriptionId !== subscriptionId,
            );
            company.currentCharities = updatedCharities;
            await company.save();
            break;
    }
    redirect("/dashboard");
  }
};

export default cancelStripeSubscription;
