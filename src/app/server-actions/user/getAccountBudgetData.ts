"use server";

import { auth } from "@clerk/nextjs";
import Individual from "~/models/Individual";
import User from "~/models/User";
import dbConnect from "~/utils/dbConnect";

/**
 * Retrieves the account budget data for the user.
 *
 * This function connects to the database, retrieves the user's account type, and based on the account type, calculates the budget, allocated budget, and remaining budget.
 *
 * @returns {Promise<{ budget: number, allocatedBudget: number, remainingBudget: number } | undefined>} The account budget data, including the budget, allocated budget, and remaining budget. Returns undefined if the user is not authenticated or if the user or individual data is not found.
 */
const getAccountBudgetData = async () => {
  await dbConnect();
  const { userId } = auth();
  if (!userId) {
    return;
  }
  const user = await User.findOne({ clerkUserId: userId });
  if (!user) {
    return;
  }
  const accountType = user.accountType;

  switch (accountType) {
    case "individual":
      const individual = await Individual.findOne({
        userId: user._id as string,
      });
      if (!individual) {
        return;
      }

      const allocatedBudget =
        individual.currentCharities.reduce((acc, item) => {
          return acc + item.amount;
        }, 0) ?? 0;
      return {
        budget: individual.monthlyBudget,
        allocatedBudget: allocatedBudget,
        remainingBudget: individual.monthlyBudget - allocatedBudget,
      };
  }
};

export default getAccountBudgetData;
