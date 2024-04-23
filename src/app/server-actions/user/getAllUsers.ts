"use server";
import User from "~/models/User";
import dbConnect from "~/utils/dbConnect";

/**
 * Retrieves all users from the database.
 *
 * @returns {Promise<Array<User>>} A promise that resolves to an array of User objects.
 */
export const getAllUsers = async () => {
  await dbConnect();
  return await User.find({});
};
