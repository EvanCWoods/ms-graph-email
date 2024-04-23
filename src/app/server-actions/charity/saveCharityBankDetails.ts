"use server";

import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Charity from "~/models/Charity";
import User from "~/models/User";
import dbConnect from "~/utils/dbConnect";

/**
 * Saves the bank details of a charity.
 *
 * @param formData - The form data containing the bank details.
 * @returns {Promise<void>} - A promise that resolves when the bank details are saved.
 */
const saveCharityBankDetails = async (formData: FormData) => {
  const accountName = formData.get("account-name") as string;
  const accountNumber = formData.get("account-number") as string;
  const bsb = formData.get("bsb") as string;

  const { userId } = auth();

  if (!userId) return;

  await dbConnect();

  // Find the user
  const user = await User.findOne({ clerkUserId: userId });

  if (!user) return;

  // Find the charity
  await Charity.findOneAndUpdate(
    { userId: user._id as string },
    { accountNumber: accountNumber, accountName: accountName, bsb: bsb },
  );
  redirect("/register/welcome");
};

export default saveCharityBankDetails;
