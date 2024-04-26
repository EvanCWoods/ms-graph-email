/* eslint-disable @typescript-eslint/no-empty-interface */
import mongoose from "mongoose";

/**
 * Defines the monthly allocation schema for a charity.
 *
 * @property {string} charityId - The ID of the charity.
 * @property {string} charityAbn - The ABN (Australian Business Number) of the charity.
 * @property {string} charityName - The name of the charity.
 * @property {number} amount - The allocated amount for the charity.
 */
const monthlyAllocation = new mongoose.Schema({
  charityId: {
    type: String,
    required: true,
  },
  charityName: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

export interface IMonthlyAllocation {
  charityId: string;
  charityName: string;
  amount: number;
}

/**
 * Defines a mongoose schema for a company.
 *
 * @property {mongoose.Types.ObjectId} userId - The user ID associated with the company.
 * @property {number} monthlyBudget - The monthly budget of the company.
 * @property {string[]} currentCharities - The current charities associated with the company.
 */
const companySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  monthlyBudget: {
    type: Number,
  },
  currentCharities: {
    type: [monthlyAllocation],
  },
  donationSchedule: {
    type: String,
  }
});

export interface ICompany {
  userId: mongoose.Types.ObjectId;
  monthlyBudget: number;
  currentCharities: IMonthlyAllocation[];
  donationSchedule: string;
}

export interface ICompanyDocument extends ICompany, mongoose.Document {}
export interface ICompanyModel extends mongoose.Model<ICompanyDocument> {}

// const User: IUserModel =
//   mongoose.models.User ?? mongoose.model<IUserModel>("User", userSchema);

const User: ICompanyModel =
  mongoose.models.Company ??
  mongoose.model<ICompanyDocument>("Company", companySchema);

export default User;
