"use server";

import { auth } from "@clerk/nextjs";
import User from "~/models/User";
import dbConnect from "~/utils/dbConnect";

/**
 * Updates the signup step for a user.
 *
 * This function connects to the database, retrieves the user's ID from the authentication token,
 * finds the user in the database based on the clerkUserId, increments the signUpStep property by 1,
 * and saves the updated user object back to the database.
 *
 * @returns The updated signUpStep value for the user.
 */
const updateSignupStep = async () => {
  await dbConnect();
  const { userId } = auth();
  if (!userId) {
    return;
  }
  const user = await User.findOne({ clerkUserId: userId });
  if (!user) {
    return;
  }
  user.signUpStep = user.signUpStep + 1;
  await user.save();

  return user.signUpStep;
};

export default updateSignupStep;
