"use server";

import Charity from "~/models/Charity";
import dbConnect from "~/utils/dbConnect";

/**
 * Retrieves a list of featured charities.
 *
 * This function connects to the database using the 'dbConnect' utility function.
 * It then queries the 'Charity' model to find all charities that are marked as featured.
 * The returned list of charities includes only the '_id', 'charityName', and 'featureDescription' fields.
 *
 * @returns {Promise<Array<typeof Charity>>} A promise that resolves to an array of featured charities.
 */
const getFeaturedCharities = async () => {
  await dbConnect();

  const charities = await Charity.find({ featured: true }).select(
    "_id charityName featureDescription",
  );
  return charities;
};

export default getFeaturedCharities;
