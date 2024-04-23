"use server";
import getAccountBudgetData from "~/app/server-actions/user/getAccountBudgetData";
import updateUserBudget from "~/app/server-actions/user/updateUserBudget";

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

  const renderBudget = () => {
    if (!budget) return null; // Return null to not render anything when budget is not yet loaded

    // Calculate budget usage as a percentage
    const budgetUsage =
      budget.budget === 0
        ? 0
        : ((budget.allocatedBudget / budget.budget) * 100).toFixed(2); // Avoid division by zero and round to two decimals

    return (
      <div className="w-full">
        <div className="flex flex-col justify-evenly md:flex-row">
          <div>
            <p>Total Budget:</p>
            <span className="absolute translate-x-1">$</span>
            <form action={updateUserBudget}>
              <input
                type="number"
                name="budget"
                id="budget"
                defaultValue={budget.budget / 100}
                step={0.5}
                min={5}
                className="px-4"
              />
              <button type="submit">Save</button>
            </form>
          </div>
          <div>
            <p>Used Budget:</p>
            <input
              disabled
              type="number"
              name="usedBudget"
              id="usedBudget"
              defaultValue={budget.allocatedBudget / 100}
            />
          </div>
          <div>
            <p>Remaining Budget:</p>
            <input
              disabled
              type="text"
              name="remainingBudget"
              id="remainingBudget"
              defaultValue={budget.remainingBudget / 100}
            />
          </div>
        </div>
        <div className="mt-4 h-[15px] w-full rounded-lg bg-brand-lightOrange">
          <div
            style={{ width: `${budgetUsage}%` }}
            className="h-[15px] rounded-lg bg-brand-orange"
          ></div>
          <p>{budgetUsage}% of your budget Used</p>
        </div>
      </div>
    );
  };

  return (
    <div className="my-5 flex flex-col gap-4 rounded-lg px-5 py-3 shadow-lg md:flex-row">
      {/* Budget side */}
      <div className="flex w-4/5 items-center justify-center">
        <div className="w-full">{renderBudget()}</div>
      </div>
      {/* Areas of allocation */}
      <div className="flex w-1/5 flex-1 items-center justify-center">
        <div className="h-[120px] w-[120px] rounded-full bg-brand-orange"></div>
      </div>
    </div>
  );
};

export default Budget;
