import "server-only";
import Charity from "~/models/Charity";
import Transaction from "~/models/Transaction";
import dbConnect from "~/utils/dbConnect";

export interface PayoutByCharity {
  charityId?: string | null;
  charityName?: string | null;
  dgrAmount?: number | null;
  nonDgrAmount?: number | null;
  verified?: boolean | null;
  dgrTransactionIds?: string[]; // DGR transaction IDs
  nonDgrTransactionIds?: string[]; // Non-DGR transaction IDs
}

export const getPayoutByCharityId = async (
  charityId: string,
): Promise<PayoutByCharity> => {
  await dbConnect();
  try {
    const charity = await Charity.findOne({ charityId, verified: true });
    if (!charity) {
      console.log("Charity not found or not verified");
      return {}; // Return empty object if charity is not verified or not found
    }

    // Fetch all transactions for the specified charityId with status 'complete' and updatedAt is greater than 28 days ago
    const transactions = await Transaction.find({
      charityId: charityId,
      status: "complete",
      // updatedAt: {
      //   $lte: new Date(new Date().setDate(new Date().getDate() - 28)),
      // },
    });
    console.log("Transactions:", transactions);
    // Separate transactions into DGR and non-DGR
    const dgrTransactions = transactions.filter(
      (transaction) =>
        transaction.receivedAccountId == process.env.STRIPE_DGR_ACCOUNT_ID,
    );
    const nonDgrTransactions = transactions.filter(
      (transaction) =>
        transaction.receivedAccountId == process.env.STRIPE_NON_DGR_ACCOUNT_ID,
    );

    // Calculate the total amount for DGR and non-DGR transactions
    const dgrAmount = dgrTransactions.reduce(
      (acc, transaction) => acc + transaction.amount,
      0,
    );
    const nonDgrAmount = nonDgrTransactions.reduce(
      (acc, transaction) => acc + transaction.amount,
      0,
    );

    // Collect transaction IDs
    const dgrTransactionIds = dgrTransactions.map(
      (transaction) => transaction._id as string,
    );
    const nonDgrTransactionIds = nonDgrTransactions.map(
      (transaction) => transaction._id as string,
    );

    // Construct the result
    const result: PayoutByCharity = {
      charityId: charity.charityId,
      dgrAmount,
      nonDgrAmount,
      verified: true,
      dgrTransactionIds,
      nonDgrTransactionIds,
    };

    console.log("Payout result:", result);
    return result;
  } catch (err) {
    console.error("Error retrieving transactions:", err);
    return {};
  }
};
