"use server";

import Transaction from "~/models/Transaction";
import dbConnect from "~/utils/dbConnect";

const getAllTransactions = async () => {
  await dbConnect();
  const transactions = await Transaction.find({});
  return transactions;
};

export default getAllTransactions;
