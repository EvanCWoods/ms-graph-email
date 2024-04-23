"use server";

import Charity from "~/models/Charity";
import dbConnect from "~/utils/dbConnect";

/**
 * Retrieves all charities from the database.
 *
 * @returns {Promise<Array<Charity>>} A promise that resolves to an array of Charity objects.
 */
const getAllCharitiesFromDb = async () => {
  await dbConnect();

  return await Charity.find({});
};

export default getAllCharitiesFromDb;
