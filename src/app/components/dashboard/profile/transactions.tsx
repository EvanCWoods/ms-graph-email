import getUserTransactions from "~/app/server-actions/user/getUserTransactions";

/**
 * Renders a list of transactions for a user.
 *
 * @returns {ReactElement} The rendered component.
 */
const Transactions = async () => {
  const transactions = await getUserTransactions();

  const renderTransactions = () => {
    if (!transactions) return;

    return transactions.map((transaction) => {
      // Determine the background color based on the transaction status
      const statusColor =
        transaction.status === "complete"
          ? "bg-yellow-500"
          : transaction.status === "distributed"
            ? "bg-brand-utilityGreen"
            : "bg-red-500"; // Default to red for failed or other statuses

      return (
        <div
          key={transaction._id as string}
          className="my-1 flex w-full justify-between px-5 py-3"
        >
          <div>
            <p className="ml-1 max-w-[330px] overflow-hidden text-ellipsis whitespace-nowrap  text-sm">
              {transaction.charityName ?? "--"}
            </p>
            <div className="flex items-center">
              <p
                className={`rounded-full px-3 py-2 text-sm text-white ${statusColor}`}
              >
                {transaction.status === "complete" ? "Collected" : transaction.status === "distributed" ? "Distributed" : transaction.status}
              </p>
              <p className="ml-5 text-sm">${transaction.amount / 100}</p>{" "}
              <p className="ml-5 text-nowrap text-sm">
                {transaction.subscriptionId ? "Subscription" : "One Off"}
              </p>
              {/* Added margin for spacing */}
              <p className="ml-5 text-sm">
                {new Date(transaction.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="flex items-end">
            <button className="rounded-3xl border-2 px-5 py-2 text-sm text-brand-neutral">
              Receipt
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="flex max-h-[300px] w-full flex-wrap justify-center rounded-lg border pb-5 pt-2 shadow-lg">
      <h1 className="text-2xl text-gray-600">My Transactions</h1>
      <div className="my-2 w-full border-b"></div>
      <div className="max-h-[220px] w-full overflow-y-scroll">
        {renderTransactions()}
      </div>
    </div>
  );
};

export default Transactions;
