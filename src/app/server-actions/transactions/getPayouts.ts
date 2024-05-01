import "server-only";
import Charity from "~/models/Charity";
import Transaction from "~/models/Transaction";
import dbConnect from "~/utils/dbConnect";

export interface payoutByCharity {
  charityId?: string | null;
  charityName?: string | null;
  amount?: number | null;
}

export interface GetPayoutRequest {
  charityId: string;
}

export const getPayouts = async (): Promise<payoutByCharity[]> => {
  await dbConnect();
  try {
    //* Create an array to store all of the transaction data {charityName: string; charityId: string; amount: number}
    const transactionData = [];

    //* Get all unique charityIds from the transactions
    const uniqueCharityIds = await Transaction.distinct("charityId", {
      status: "complete",
    });

    //* Group transactions by charityId
    for (const charityId of uniqueCharityIds) {
      const transactions = await Transaction.find({
        charityId: charityId,
        status: "complete",
      });
      //* Sum the amount of the transactions for each charityId
      const charityName = transactions[0]?.charityName;
      const sum = transactions.reduce(
        (acc, transaction) => acc + transaction.amount,
        0,
      );
      if (!charityId) return [];
      // Check if the charity exists in the database and is verified -> return true or false
      const charity = await Charity.findOne({charityId: charityId, verified: true});
      //* Return the sum of the transactions for each charityId
      transactionData.push({ charityName, charityId, sum, verified: charity ? true : false});
    }
    return transactionData;
  } catch (err) {
    console.error(err);
    return [];
  }
};
