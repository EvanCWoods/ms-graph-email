"use server";

import { auth } from "@clerk/nextjs";
import User from "~/models/User";
import dbConnect from "~/utils/dbConnect";

const checkIsUserCreated = async () => {
  await dbConnect();

  const { userId } = auth();

  if (!userId) {
    return false;
  }

  const user = await User.findOne({ clerkUserId: userId });

  if (!user) {
    return false;
  }
  return true;
};

export default checkIsUserCreated;
