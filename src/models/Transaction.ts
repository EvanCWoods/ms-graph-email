/* eslint-disable @typescript-eslint/no-empty-interface */
import mongoose from "mongoose";

/**
 * Creates a new mongoose schema for transactions.
 *
 * @param stripeCustomerId - The ID of the Stripe customer.
 * @param paymentId - The ID of the payment (optional).
 * @param createdAt - The creation date of the transaction (default: current date).
 * @param updatedAt - The update date of the transaction (default: current date).
 * @param status - The status of the transaction.
 * @param amount - The amount of the transaction.
 *
 * @returns The transaction schema.
 */
const transactionSchema = new mongoose.Schema({
  stripeCustomerId: {
    type: String,
    required: true,
  },
  paymentId: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  status: {
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
  charityName: {
    type: String,
    required: false,
  },
  charityId: {
    type: String,
    required: false,
  },
  receivedAccountId: {
    type: String,
    required: false,
  },
  isDgrRegistered: {
    type: Boolean,
    required: false,
  },
});

export interface ITransaction {
  stripeCustomerId: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
  status: string;
  amount: number;
  subscriptionId: string | null;
  charityName: string | null;
  charityId: string | null;
  receivedAccountId: string;
  isDgrRegistered: boolean;
}

export interface ITransactionDocument extends ITransaction, mongoose.Document {}
export interface ITransactionModel
  extends mongoose.Model<ITransactionDocument> {}

const Transaction: ITransactionModel =
  mongoose.models.Transaction ??
  mongoose.model<ITransactionDocument>("Transaction", transactionSchema);

export default Transaction;
