/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";
import Individual from "~/models/Individual";
import Company from "~/models/Company";
import dbConnect from "~/utils/dbConnect";
import { auth } from "@clerk/nextjs";
import User from "~/models/User";
import getAccountBudgetData from "./getAccountBudgetData";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAllocations = async (user: any) => {
    const allocations = user.currentCharities;
    return allocations;
  };


 const getIndividualCharityAmounts = async (userId: string) => {
     const charitiesNames:string[] = [];
     const charitiesPercentage:string[] = [];
    const individual = await Individual.findOne({ userId: userId });
    const allocations = await getAllocations(individual);
    const budgetData: any = await getAccountBudgetData();
     for (const allocation of allocations) {
        const allocationAmount = allocation.amount;
        const allocationName = allocation.charityName
        const percentage = Math.floor((allocationAmount / budgetData.allocatedBudget) * 100 * 100) / 100;
        charitiesNames.push(allocationName,);
        charitiesPercentage.push(percentage.toString());
    }
    return {charitiesNames, charitiesPercentage};
   };

   const getCompanyCharityAmounts = async (userId: string) => {
    const charitiesNames:string[] = [];
    const charitiesPercentage:string[] = [];
   const company = await Company.findOne({ userId: userId });
   const allocations = await getAllocations(company);
   const budgetData: any = await getAccountBudgetData();
    for (const allocation of allocations) {
       const allocationAmount = allocation.amount;
       const allocationName = allocation.charityName
       const percentage = Math.floor((allocationAmount / budgetData.allocatedBudget) * 100 * 100) / 100;
       charitiesNames.push(allocationName,);
       charitiesPercentage.push(percentage.toString());
   }
   return {charitiesNames, charitiesPercentage};
  };

  const getUserCharityRatios = async () => {
     await dbConnect();
     const { userId } = auth();
  
     if (!userId) return;
  
//     // Get the user from the database
    const user = await User.findOne({ clerkUserId: userId });
  
     if (!user) return;
//     // If it is an individual or company
     switch (user.accountType) {
       case "individual":
         const individualData = await getIndividualCharityAmounts(
           user._id as string,
         );
         return individualData;
         
       case "company":
         const companyData = await getCompanyCharityAmounts(
           user._id as string,
         );
         return companyData;
       default:
         return;
     }
   };

  export default getUserCharityRatios;
