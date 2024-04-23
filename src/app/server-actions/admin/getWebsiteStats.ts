"server only";

import Charity from "~/models/Charity";
import Company from "~/models/Company";
import Individual from "~/models/Individual";
import User from "~/models/User";
import dbConnect from "~/utils/dbConnect";

/**
 * Retrieves website statistics including the number of users, individuals, companies, and charities.
 *
 * @returns {Promise<Array<{name: string, count: number, redirectUrl: string}>>} An array of objects containing the name, count, and redirect URL for each statistic.
 */
const getWebsiteStats = async () => {
  await dbConnect();

  // Get the number of users individuals, companies, charities
  const userCount = await User.countDocuments();
  const individualCount = await Individual.countDocuments();
  const companyCount = await Company.countDocuments();
  const charityCount = await Charity.countDocuments();

  return [
    {
      name: "Users",
      count: userCount,
      redirectUrl: "/admin/users?page=1",
    },
    {
      name: "Individuals",
      count: individualCount,
      redirectUrl: "/admin/users?page=1&accountType=individual",
    },
    {
      name: "Companies",
      count: companyCount,
      redirectUrl: "/admin/users?page=1&accountType=company",
    },
    {
      name: "Charities",
      count: charityCount,
      redirectUrl: "/admin/users?page=1&accountType=charity",
    },
  ];
};

export default getWebsiteStats;
