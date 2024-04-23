"use server";

import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Charity from "~/models/Charity";
import User from "~/models/User";

/**
 * Updates the ABN (Australian Business Number) for a charity.
 *
 * @param formData - The form data containing the updated ABN.
 * @returns {Promise<void>} - A promise that resolves once the ABN is updated.
 */
const updateCharityAbn = async (formData: FormData) => {
  console.log(formData);
  const abn = formData.get("charity-abn") as string;

  const { userId } = auth();

  if (!userId) return;

  const user = await User.findOne({ clerkUserId: userId });

  if (!user) return;

  user.signUpStep = user.signUpStep + 1;
  await user.save();

  const charity = await Charity.findOne({ userId: user._id as string });
  if (!charity) return;

  charity.abn = abn;
  await charity.save();

  redirect("/register?step=4");
};

export default updateCharityAbn;
