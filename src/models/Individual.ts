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
  subscriptionId: {
    type: String,
    required: false,
  },
  paused: {
    type: Boolean,
    required: false,
    default: false
  }
});

export interface IMonthlyAllocation {
  charityId: string;
  charityName: string;
  amount: number;
  subscriptionId: string;
  paused: boolean;
}

const individualSchema = new mongoose.Schema({
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

export interface IIndividual {
  userId: mongoose.Types.ObjectId;
  monthlyBudget: number;
  currentCharities: IMonthlyAllocation[];
  donationSchedule: string;
}

export interface IIndividualDocument extends IIndividual, mongoose.Document {}
export interface IIndividualModel extends mongoose.Model<IIndividualDocument> {}

// const User: IUserModel =
//   mongoose.models.User ?? mongoose.model<IUserModel>("User", userSchema);

const User: IIndividualModel =
  mongoose.models.Individual ??
  mongoose.model<IIndividualDocument>("Individual", individualSchema);

export default User;
