/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";

import dbConnect from "~/utils/dbConnect";
import getOneCharityById from "../charity/getOneCharity";
import { auth } from "@clerk/nextjs";
import User from "~/models/User";
import Individual from "~/models/Individual";
import Company from "~/models/Company";
import createSubscriptionInStripe from "./createSubscriptionInStripe";
import type { ObjectId } from "mongoose";

/**
 * Saves the selected charity and donation amount for the user.
 *
 * @param formData - The form data containing the donation amount and charity ID.
 * @returns {Promise<void>} - A promise that resolves once the charity selection is saved.
 */
const saveCharitySelection = async (formData: FormData) => {
  const donationAmount = formData.get("donation-amount") as string;
  const charityId = formData.get("charity-id") as string;

  console.log(donationAmount, charityId);

  const charityData: unknown = await getOneCharityById(charityId);

  console.log(charityData)

  console.log({
    charityId,
    amount: parseFloat(donationAmount),
    charityName: (charityData as { Name: string }).Name,
  });

  const newAllocation = {
    charityId,
    amount: parseFloat(donationAmount),
    charityAbn: (charityData as { Abn: string }).Abn,
    charityName: (charityData as { Name: string }).Name,
  };

  await dbConnect();

  const { userId } = auth();
  if (!userId) return;
  // Get the user's account type
  const user = await User.findOne({ clerkUserId: userId });
  if (!user) return;
  // get the user account
  const accountType = user.accountType;

  switch (accountType) {
    case "individual":
      // Get the individual account
      const individual = await Individual.findOne({
        userId: user._id as string,
      });

      if (!individual) return;
      // Create the subscription in stripe
      await createSubscriptionInStripe(
        user._id as ObjectId,
        charityId,
        newAllocation.charityName,
        parseFloat(donationAmount),
      );
      break;
    case "company":
      const company = await Company.findOne({
        userId: user._id as string,
      });
      if (!company) return;
      company.currentCharities.push(newAllocation);
      // Create the subscription in stripe
      await createSubscriptionInStripe(
        user._id as ObjectId,
        charityId,
        newAllocation.charityName,
        parseFloat(donationAmount),
      );
      await company.save();
  }
  // Update the currentCharities array
};

export default saveCharitySelection;
