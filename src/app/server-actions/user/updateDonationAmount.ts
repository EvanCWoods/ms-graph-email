"use server";

import { auth } from "@clerk/nextjs";
import type { Types } from "mongoose";
import { redirect } from "next/navigation";
import Company from "~/models/Company";
import Individual from "~/models/Individual";
import User from "~/models/User";
import dbConnect from "~/utils/dbConnect";
import updateSignupStep from "~/app/server-actions/user/updateSignupStep";

/**
 * Updates the donation amount for a user based on the provided form data.
 *
 * @param {FormData} formData - The form data containing the donation amount.
 * @returns {Promise<void>} - A promise that resolves once the donation amount has been updated.
 */
const updateDonationAmount = async (formData: FormData) => {
  console.log(formData);
  const donationAmount = formData.get("donation-amount") as string;

  await dbConnect();
  const { userId } = auth();
  const user = await User.findOne({ clerkUserId: userId ?? "" });
  if (!user) return;
  const accountType: string = user.accountType;
  switch (accountType) {
    case "individual":
      await Individual.findOneAndUpdate(
        {
          userId: user._id as Types.ObjectId,
        },
        { monthlyBudget: parseFloat(donationAmount) * 100 },
      );
      break;
    case "company":
      await Company.findOneAndUpdate(
        {
          userId: user._id as Types.ObjectId,
        },
        { monthlyBudget: donationAmount },
      );
      break;
  }

  const signUpStep = await updateSignupStep();
  const url = `/register?step=${signUpStep}`;
  redirect(url);
};

export default updateDonationAmount;
