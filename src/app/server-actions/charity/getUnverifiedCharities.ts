"use server";

import Charity from "~/models/Charity";
import dbConnect from "~/utils/dbConnect";

/**
 * Retrieves a list of unverified charities.
 *
 * This function connects to the database using the dbConnect function and retrieves all charities
 * that have not been verified. It returns a list of unverified charities.
 *
 * @returns {Promise<Array<Charity>>} A promise that resolves to an array of unverified charities.
 * @throws {Error} If there is an error connecting to the database or retrieving the charities.
 */
const getUnverifiedCharities = async () => {
  await dbConnect();

  // Get the unverified charities
  const unverifiedCharities = await Charity.find({ verified: false });

  if (!unverifiedCharities) return;

  console.log(unverifiedCharities);
  return unverifiedCharities;
};

export default getUnverifiedCharities;
