"use server";

import { auth } from "@clerk/nextjs";
import User from "~/models/User";
import dbConnect from "~/utils/dbConnect";

/**
 * Retrieves the signup step for the current user.
 *
 * @returns {Promise<number | undefined>} The signup step of the user, or undefined if the user is not authenticated or not found.
 */
const getSignupStep = async () => {
  await dbConnect();
  const { userId } = auth();
  if (!userId) {
    return;
  }
  console.log(userId);
  const user = await User.findOne({ clerkUserId: userId });
  if (!user) {
    return;
  }

  return user.signUpStep;
};

export default getSignupStep;
