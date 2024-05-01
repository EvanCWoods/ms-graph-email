import "server-only";
import { auth } from "@clerk/nextjs";
import User from "~/models/User";
import dbConnect from "~/utils/dbConnect";

/**
 * Retrieves the account type of the user.
 *
 * @param {string | undefined} id - The id of the user to find, or null to use the authenticated user's ID.
 * @returns {Promise<string | null>} The account type of the user, or null if the user is not found or the account type is not found.
 */
const getUserAccountType = async (id?: string | undefined) => {
  await dbConnect();

  if (id) {
    const user = await User.findById(id).select("accountType");
    if (!user) return;
    return user.accountType;
  }

  // Use the provided ID or fall back to the authenticated user's ID
  const {userId} = auth();

  if (!userId) return null;

  const user = await User.findOne({ clerkUserId: userId }).select(
    "accountType",
  );

  if (!user) return null;

  console.log(user.accountType);

  return user.accountType;
};

export default getUserAccountType;
