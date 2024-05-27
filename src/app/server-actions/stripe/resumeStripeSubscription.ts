/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";

import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Individual from "~/models/Individual";
import Company from "~/models/Company"; // Make sure to import the correct model
import User from "~/models/User";
import dbConnect from "~/utils/dbConnect";

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const resumeStripeSubscription = async (subscriptionId: string) => {
  try {
    await dbConnect();
    const { userId } = auth();
    if (!userId) return;

    const subscription = await stripe.subscriptions.update(subscriptionId, {
      pause_collection: null, // Setting this to null to resume collection
    });

    if (subscription) {
      // TODO: Email confirmation
      const user = await User.findOne({ clerkUserId: userId });
      if (!user) return;
      const accountType = user.accountType;

      switch (accountType) {
        case "individual":
          const individual = await Individual.findOne({
            userId: user.id as string,
          });
          if (!individual) return;
          // Update charities to mark as active instead of paused
          individual.currentCharities = individual.currentCharities.map(
            (charity) => {
              if (charity.subscriptionId === subscriptionId) {
                return { ...charity, paused: false }; // Resume donation
              }
              return charity;
            },
          );
          await individual.save();
          break;
        case "company":
          const company = await Company.findOne({
            userId: user.id as string,
          });
          if (!company) return;
          // Update charities to mark as active instead of paused
          company.currentCharities = company.currentCharities.map((charity) => {
            if (charity.subscriptionId === subscriptionId) {
              return { ...charity, paused: false }; // Resume donation
            }
            return charity;
          });
          await company.save();
          break;
      }

      redirect("/dashboard");
    }
  } catch (error) {
    console.error("Error resuming subscription:", error);
    throw error;
  }
};

export default resumeStripeSubscription;
