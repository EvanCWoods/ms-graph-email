"use server";

import { redirect } from "next/navigation";
import Charity from "~/models/Charity";
import dbConnect from "~/utils/dbConnect";

/**
 * Updates the verification status of a charity.
 *
 * @param formData - The form data containing the charity ID.
 * @returns {Promise<void>} - A promise that resolves when the verification is complete.
 */
const verifyCharity = async (formData: FormData) => {
  const charityId = formData.get("id") as string;

  await dbConnect();
  await Charity.findByIdAndUpdate(charityId, { verified: true });
  redirect("/admin");
};

export default verifyCharity;
