/* eslint-disable @typescript-eslint/no-floating-promises */
"use server";

import { redirect } from "next/navigation";
import Charity from "~/models/Charity";
import User from "~/models/User";
import checkDGRStatus from "~/scraper";

/**
 * Updates the ABN (Australian Business Number) for a charity.
 *
 * @param formData - The form data containing the updated ABN.
 * @returns {Promise<void>} - A promise that resolves once the ABN is updated.
 */
const updateCharityAbn = async (formData: FormData) => {
  console.log(formData);
  const abn = formData.get("charity-abn") as string;
  const charityId = formData.get("charity-id") as string;
  const id = formData.get("id") as string;
  console.log({ abn, charityId, id });

  const user = await User.findById(id);

  if (!user) return;

  user.signUpStep = user.signUpStep + 1;
  await user.save();

  const charity = await Charity.findOne({ userId: user._id as string });
  if (!charity) return;

  charity.abn = abn;
  charity.charityId = charityId;
  await charity.save();

  // Initiate DGR status check without awaiting it
  checkDGRStatus(abn)
    .then((isEntitled) => {
      console.log(
        `Is charity with ABN ${abn} entitled to gift receipts? ${isEntitled}`,
      );
      charity.dgrRegistered = isEntitled;
      charity.save();
      // Handle the result of the DGR status check if needed
    })
    .catch((error) => {
      console.error(`Error checking DGR status for ABN ${abn}:`, error);
    });

  // Redirect immediately
  redirect(`/register?step=3&id=${id}`);
};

export default updateCharityAbn;
