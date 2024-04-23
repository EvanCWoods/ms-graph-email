import "server-only";

import { auth } from "@clerk/nextjs";
import User from "~/models/User";
import dbConnect from "~/utils/dbConnect";

/**
 * Retrieves the account type of the user.
 *
 * @returns {Promise<string|null>} The account type of the user, or null if the user is not authenticated or the account type is not found.
 */
const getUserAccountType = async () => {
  const { userId } = auth();

  if (!userId) return null;

  await dbConnect();

  const userAccountType = await User.findOne({ clerkUserId: userId }).select(
    "accountType",
  );

  if (!userAccountType) return null;

  console.log(userAccountType.accountType);

  return userAccountType.accountType;
};

export default getUserAccountType;
