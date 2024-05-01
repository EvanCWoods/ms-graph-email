"use server";
import { auth } from "@clerk/nextjs";
import Company from "~/models/Company";
import Individual from "~/models/Individual";
import User from "~/models/User";
import dbConnect from "~/utils/dbConnect";

const checkDonationSchedule = async () => {
  await dbConnect();
  const { userId } = auth();

  if (!userId) return null;

  const user = await User.findOne({ clerkUserId: userId }).select(
    "accountType",
  );

  if (!user) return null;

  switch (user.accountType) {
    case "individual":
      const individual = await Individual.findOne({
        userId: user.id as string,
      }).select("donationSchedule");
      return individual?.donationSchedule;
    case "company":
      const company = await Company.findOne({
        userId: user.id as string,
      }).select("donationSchedule");
      return company?.donationSchedule;
  }
};

export default checkDonationSchedule;
