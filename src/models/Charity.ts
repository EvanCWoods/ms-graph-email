/* eslint-disable @typescript-eslint/no-empty-interface */
import mongoose from "mongoose";

/**
 * Creates a new mongoose schema for the charity model.
 *
 * @param userId - The ID of the user associated with the charity.
 * @param accountName - The name of the charity's account.
 * @param abn - The Australian Business Number of the charity.
 * @param accountNumber - The account number of the charity.
 * @param bsb - The Bank State Branch code of the charity's bank.
 * @param verified - Indicates if the charity is verified.
 * @param charityName - The name of the charity.
 * @param charityId - The ID of the charity.
 * @param featured - Indicates if the charity is featured.
 * @param featureDescription - The description of the charity's feature.
 *
 * @returns A new mongoose schema for the charity model.
 */
const charitySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  accountName: {
    type: String,
    required: false,
  },
  abn: {
    type: String,
    required: false,
  },
  accountNumber: {
    type: String,
    required: false,
  },
  bsb: {
    type: String,
    required: false,
  },
  verified: {
    type: Boolean,
    required: true,
    default: false,
  },
  charityName: {
    type: String,
    required: false,
  },
  charityId: {
    type: String,
    required: false,
  },
  featured: {
    type: Boolean,
    required: true,
    default: false,
  },
  featureDescription: {
    type: String,
    required: false,
  },
  stripeAccountId: {
    type: String,
    required: false,
  },
  dgrRegistered: {
    type: Boolean,
  },
});

export interface ICharity {
  userId: mongoose.Types.ObjectId;
  abn: string;
  accountNumber: string;
  accountName: string;
  bsb: string;
  verified: boolean;
  charityName: string;
  charityId: string;
  featured: boolean;
  featureDescription: string;
  stripeAccountId: string;
  dgrRegistered: boolean;
}

export interface ICharityDocument extends ICharity, mongoose.Document {}
export interface IICharityModel extends mongoose.Model<ICharityDocument> {}

// const User: IUserModel =
//   mongoose.models.User ?? mongoose.model<IUserModel>("User", userSchema);

const Charity: IICharityModel =
  mongoose.models.Charity ??
  mongoose.model<ICharityDocument>("Charity", charitySchema);

export default Charity;
