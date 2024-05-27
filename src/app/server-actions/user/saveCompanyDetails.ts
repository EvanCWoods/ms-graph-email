/* eslint-disable @typescript-eslint/no-unsafe-call */
"use server";
import { redirect } from "next/navigation";
import Company from "~/models/Company";
import User from "~/models/User";
import dbConnect from "~/utils/dbConnect";

const saveCompanyDetails = async (formData: FormData) => {
    await dbConnect();
    console.log("Saving company details")
    
    const companyName = formData.get("companyName") as string;
    const schedule = formData.get("schedule") as string;
    const id = formData.get("id") as string;
    const abn = formData.get("abn") as string;

    console.log({ companyName, abn, id });

    // Save the company details to the database
    const user = await User.findById(id);
    console.log({ user })
    if (!user) return;
    
    const company = await Company.findOneAndUpdate(
        {userId: user.id as string},
        {companyName, companyAbn: abn},
    );
    console.log({ company })
    if (!company) return;
    
    await company.save();
    user.signUpStep = 3;
    await user.save();
    redirect(`/register?step=3&id=${id}&schedule=${schedule}`)
}

export default saveCompanyDetails;