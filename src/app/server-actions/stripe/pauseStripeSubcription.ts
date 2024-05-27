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

const pauseStripeSubscription = async (subscriptionId: string) => {
  try {
        await dbConnect();
        const { userId } = auth();
        if (!userId) return;
        
    const subscription = await stripe.subscriptions.update(
      subscriptionId,
      {
        pause_collection: {
          behavior: "mark_uncollectible", // or 'void' or 'keep_as_draft'
        },
      },
    );
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
         // Update charities to mark paused instead of removing
         individual.currentCharities = individual.currentCharities.map(
           (charity) => {
             if (charity.subscriptionId === subscriptionId) {
               return { ...charity, paused: true };
             }
             return charity;
           },
         );
         await individual.save();
         break;
       case "company":
         const company = await Individual.findOne({
           // Assuming this should be Company.findOne
           userId: user.id as string,
         });
         if (!company) return;
         // Update charities to mark paused instead of removing
         company.currentCharities = company.currentCharities.map((charity) => {
           if (charity.subscriptionId === subscriptionId) {
             return { ...charity, paused: true };
           }
           return charity;
         });
         await company.save();
         break;
     }

     redirect("/dashboard");
    }
  } catch (error) {
    console.error("Error pausing subscription:", error);
    throw error;
  }
};

export default pauseStripeSubscription;
