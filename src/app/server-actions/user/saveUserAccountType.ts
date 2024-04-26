/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";
import { redirect } from "next/navigation";
import Company from "~/models/Company";
import Individual from "~/models/Individual";
import User from "~/models/User"; // Import the User model
import dbConnect from "~/utils/dbConnect";
import Charity from "~/models/Charity";

/**
 * Saves the user account type and creates the corresponding individual, company, or charity.
 *
 * @param formData - The form data containing the account type.
 * @throws {Error} - If the account type is not provided.
 * @returns {Promise<void>} - A promise that resolves when the account type is saved and the corresponding entity is created.
 */
export const saveUserAccountType = async (formData: FormData) => {
  const accountType = formData.get("account-type") as string;
  if (!accountType) {
    throw new Error("Account type is required");
  }

  await dbConnect();
  const user = new User({ accountType: accountType });
  await user.save();
  console.log(user?._id);
  // Create the individual, company or charity
  switch (accountType) {
    case "individual":
      // Create individuals
      const individual = new Individual({
        userId: user?._id,
        monthlyBudget: 0,
        currentCharities: [],
      });
      await individual.save();
      break;
    case "company":
      // Create company
      const company = new Company({
        userId: user?._id,
        monthlyBudget: 0,
        currentCharities: [],
      });
      await company.save();
      break;
    case "charity":
      const charity = new Charity({
        userId: user?._id,
      });
      await charity.save();
      // Create charity
      break;
  }

  redirect(`/register?step=1&id=${user?._id as string}`);
};
