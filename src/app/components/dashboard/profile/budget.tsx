import getAccountBudgetData from "~/app/server-actions/user/getAccountBudgetData";
import PieChart from "../../core/pieChart";
import getUserCharityRatios from "~/app/server-actions/user/getUserDonationValue";
import EditBudget from "./editBudget";
// import updateUserBudget from "~/app/server-actions/user/updateUserBudget";

/**
 * Renders the budget component.
 *
 * This component displays the total budget, used budget, remaining budget, and the percentage of budget used.
 * It fetches the budget data using the 'getAccountBudgetData' function and renders the data in an input form and a progress bar.
 *
 * @returns {JSX.Element} The rendered budget component.
 */
const Budget = async () => {
  const budget = await getAccountBudgetData();
  const {charitiesNames, charitiesPercentage} = await getUserCharityRatios() ?? { charitiesNames: [], charitiesPercentage: [] };
  const renderBudget = () => {
    if (!budget) return null; // Return null to not render anything when budget is not yet loaded

    // Calculate budget usage as a percentage
    const budgetUsage =
      budget.budget === 0
        ? 0
        : ((budget.allocatedBudget / budget.budget) * 100).toFixed(2); // Avoid division by zero and round to two decimals

    return (
      <div className="w-full px-4">
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <div className="relative">
            <label
              htmlFor="budget"
              className="flex text-sm font-medium text-gray-700"
            >
              <span>Total Budget:</span>
              <span className="h-[15px] w-[15px]">
                <EditBudget currentBudget={budget.budget} allocatedBudget={budget.budget - budget.remainingBudget}/>
              </span>
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                name="budget"
                id="budget"
                defaultValue={budget.budget / 100}
                disabled
                min={5}
                className="block w-full rounded-md border-gray-300 pl-7 pr-12 sm:text-sm"
              />
            </div>
          </div>
          <div className="relative">
            <label
              htmlFor="usedBudget"
              className="block text-sm font-medium text-gray-700"
            >
              Used Budget:
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                disabled
                type="number"
                name="usedBudget"
                id="usedBudget"
                defaultValue={budget.allocatedBudget / 100}
                className="block w-full rounded-md border-gray-300 pl-7 pr-12 sm:text-sm"
              />
            </div>
          </div>
          <div className="relative">
            <label
              htmlFor="remainingBudget"
              className="block text-sm font-medium text-gray-700"
            >
              Remaining Budget:
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                disabled
                type="text"
                name="remainingBudget"
                id="remainingBudget"
                defaultValue={budget.remainingBudget / 100}
                className="block w-full rounded-md border-gray-300 pl-7 pr-12 sm:text-sm"
              />
            </div>
          </div>
        </div>
        <div className="mt-4 h-[15px] w-full rounded-lg border bg-brand-lightOrange">
          <div
            style={{ width: `${budgetUsage}%` }}
            className="h-[15px] rounded-lg bg-brand-orange"
          ></div>
          <p className="mt-2 text-center">{budgetUsage}% of your budget Used</p>
        </div>
      </div>
    );
  };

  return (
    <div className="my-10 flex flex-col flex-wrap gap-4 rounded-lg border px-5 py-3 shadow-lg md:flex-row">
      <h1 className="text-2xl text-gray-600 text-center w-full">My Monthly Donation Budget</h1>
      <div className="mb-2 w-full border-b"></div>
      {/* Budget side */}
      <div className="flex w-4/5 flex-wrap items-center justify-center">
        <div className="w-full pb-3">{renderBudget()}</div>
      </div>
      {/* Areas of allocation */}
      <div className="flex w-1/5 flex-1 items-center justify-center">
        <div className="h-[130px] w-full flex justify-center">
          <PieChart labels={charitiesNames ?? []} data={charitiesPercentage ?? []} showLegend={false} />
        </div>
      </div>
    </div>
  );
};

export default Budget;
