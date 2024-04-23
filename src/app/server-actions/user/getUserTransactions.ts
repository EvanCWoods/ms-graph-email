"use server";

import { auth } from "@clerk/nextjs";
import Transaction from "~/models/Transaction";
import User from "~/models/User";

/**
 * Retrieves the transactions associated with the authenticated user.
 *
 * @returns {Promise<Array<typeof Transaction>>} A promise that resolves to an array of transactions.
 * @throws {Error} If the user is not authenticated or if the user does not exist.
 */
const getUserTransactions = async () => {
  const { userId } = auth();

  if (!userId) return;

  const user = await User.findOne({ clerkUserId: userId });

  if (!user) return;

  const transactions = Transaction.find({
    stripeCustomerId: user.stripeCustomerId,
  });

  return transactions;
};

export default getUserTransactions;
