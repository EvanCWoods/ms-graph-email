/* eslint-disable @typescript-eslint/no-unsafe-call */
"use server";

import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Company from "~/models/Company";
import User from "~/models/User";
import dbConnect from "~/utils/dbConnect";

const saveCompanyDetails = async (formData: FormData) => {
    await dbConnect();
    console.log("Saving company details")

    const { userId } = auth();
    console.log({ userId })
    if (!userId) return;
    
    const companyName = formData.get("companyName") as string;
    const abn = formData.get("abn") as string;

    console.log({ companyName, abn });

    // Save the company details to the database
    const user = await User.findOne({clerkUserId: userId});
    console.log({ user })
    if (!user) return;
    
    const company = await Company.findOneAndUpdate(
        {userId: user.id as string},
        {companyName, companyAbn: abn},
    );
    console.log({ company })
    if (!company) return;
    
    await company.save();
    user.signUpStep = 4;
    await user.save();
    redirect("/register?step=4")
}

export default saveCompanyDetails;