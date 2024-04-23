/* eslint-disable @typescript-eslint/no-empty-interface */
import mongoose from "mongoose";

/**
 * Creates a new mongoose schema for the user model.
 *
 * @param clerkUserId - The clerk user ID.
 * @param accountType - The account type.
 * @param signUpStep - The sign up step.
 * @param stripeCustomerId - The Stripe customer ID.
 * @param name - The user's name.
 * @param email - The user's email.
 * @returns The user schema.
 */
const userSchema = new mongoose.Schema({
  clerkUserId: {
    type: String,
    required: false,
  },
  accountType: {
    type: String,
    required: true,
  },
  signUpStep: {
    type: Number,
    default: 3,
  },
  stripeCustomerId: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
});

export interface IUser {
  clerkUserId: string;
  stripeCustomerId: string;
  accountType: string;
  signUpStep: number;
  name: string;
  email: string;
}

export interface IUserDocument extends IUser, mongoose.Document {}
export interface IUserModel extends mongoose.Model<IUserDocument> {}

// const User: IUserModel =
//   mongoose.models.User ?? mongoose.model<IUserModel>("User", userSchema);

const User: IUserModel =
  mongoose.models.User ?? mongoose.model<IUserDocument>("User", userSchema);

export default User;
