"use server";

import { redirect } from "next/navigation";
import Charity from "~/models/Charity";
import dbConnect from "~/utils/dbConnect";

/**
 * Saves a featured charity by updating its featured status and feature description.
 *
 * @param formData - The form data containing the charity ID and description.
 * @returns Promise<void>
 */
const saveFeaturedCharity = async (formData: FormData) => {
  await dbConnect();

  const charityId = formData.get("id") as string;
  const description = formData.get("description") as string;

  console.log(charityId, description);

  const charity = await Charity.findById(charityId);
  if (!charity) return;
  charity.featured = true;
  charity.featureDescription = description;
  await charity.save();
  redirect("/admin/featured-charities");
};

export default saveFeaturedCharity;
