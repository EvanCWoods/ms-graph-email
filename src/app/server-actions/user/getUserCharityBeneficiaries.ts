/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { auth } from "@clerk/nextjs";
import Company from "~/models/Company";
import Individual from "~/models/Individual";
import User from "~/models/User";
import dbConnect from "~/utils/dbConnect";
import getOneCharityById from "../charity/getOneCharity";

interface LabelData {
  labels: string[];
  data: number[];
}

function countUniqueLabels(dataList: string[]): LabelData {
  const labelCounts: Record<string, number> = {};

  dataList.forEach((item) => {
    labelCounts[item] = (labelCounts[item] ?? 0) + 1;
  });

  return {
    labels: Object.keys(labelCounts),
    data: Object.values(labelCounts),
  };
}



const getAllocations = async (user: any) => {
  const allocations = user.currentCharities;
  return allocations;
};

const getIndividualCharityBeneficiaries = async (userId: string) => {
  const beneficiariesList: string[] = [];

  const individual = await Individual.findOne({ userId: userId });
  const allocations = await getAllocations(individual);
  for (const allocation of allocations) {
    // Get charity data from the ACNC
    const allocationData = await getOneCharityById(allocation.charityId);
    for (const beneficiary of allocationData.Beneficiaries) {
      // Group the beneficiaries
      beneficiariesList.push(beneficiary.Name);
    }
  }
  return beneficiariesList;
};

const getCompanyCharityBeneficiaries = async (userId: string) => {
  const beneficiariesList: string[] = [];
  
  const company = await Company.findOne({ userId: userId });
  const allocations = await getAllocations(company);
  for (const allocation of allocations) {
    // Get charity data from the ACNC
    const allocationData = await getOneCharityById(allocation.charityId);
    for (const beneficiary of allocationData.Beneficiaries) {
      // Group the beneficiaries
      beneficiariesList.push(beneficiary.Name);
    }
  }
  return beneficiariesList;
};

const getUserCharityBeneficiaries = async () => {
  await dbConnect();
  const { userId } = auth();

  if (!userId) return;

  // Get the user from the database
  const user = await User.findOne({ clerkUserId: userId });

  if (!user) return;
  // If it is an individual or company
  switch (user.accountType) {
    case "individual":
      const individualData = await getIndividualCharityBeneficiaries(
        user._id as string,
      );
      const individualResponse = countUniqueLabels(individualData);
      return individualResponse;
    case "company":
      const companyData = await getCompanyCharityBeneficiaries(
        user._id as string,
      );
      const companyResponse = countUniqueLabels(companyData);
      return companyResponse;
    default:
      return;
  }
  // For each monthlyAllocation, get the charity data from the ACNC
  // Group the beneficaries of all charities with the count.
  // Return the grouped data.
};

export default getUserCharityBeneficiaries;
