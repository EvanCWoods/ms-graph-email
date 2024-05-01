"use server";

import { auth } from "@clerk/nextjs";
import Company from "~/models/Company";
import Individual from "~/models/Individual";
import User from "~/models/User";
import dbConnect from "~/utils/dbConnect";

/**
 * Retrieves the current charities associated with the user.
 *
 * @returns {Promise<Array<string>>} A promise that resolves to an array of current charities.
 */
const getUserCurrentCharities = async () => {
  await dbConnect();

  const { userId } = auth();

  if (!userId) return;

  const user = await User.findOne({ clerkUserId: userId });

  if (!user) return;

  const accountType = user.accountType;

  switch (accountType) {
    case "individual":
      const individual = await Individual.findOne({
        userId: user._id as string,
      });

      if (!individual) return;

      return individual.currentCharities;
    case "company":
      const company = await Company.findOne({
        userId: user._id as string,
      });

      if (!company) return;

      return company.currentCharities;
  }
};

export default getUserCurrentCharities;
