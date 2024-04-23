/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/dot-notation */
"use server";
import User from "~/models/User";
import type { IUser } from "~/models/User";
import dbConnect from "~/utils/dbConnect";
import { getPagination } from "~/utils/getPagination";

/**
 * Retrieves filtered users based on the provided parameters.
 *
 * @param {number} page - The page number for pagination.
 * @param {string} [name] - The name of the user to filter by.
 * @param {string} [email] - The email of the user to filter by.
 * @param {string} [accountType] - The account type of the user to filter by.
 * @returns {Promise<Array<IUser>>} - A promise that resolves to an array of filtered users.
 */
export const getAllFilteredUsers = async (
  page: number,
  name?: string,
  email?: string,
  accountType?: string,
) => {
  await dbConnect();

  // Initialize an empty query object
  const query: Partial<IUser> = {};

  if (accountType) {
    query.accountType = accountType;
  }
  if (name) {
    query.name = name;
  }
  if (email) {
    query.email = email;
  }

  const { skip, limit } = getPagination(page, 10);
  // Fetch and return users based on the constructed query
  return await User.find(query).skip(skip).limit(limit);
};

export default getAllFilteredUsers;
