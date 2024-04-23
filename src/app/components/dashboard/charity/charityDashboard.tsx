import MonthlyDonations from "./MonthlyDonations";
import AccountStatus from "./accountStatus";
import TotalDonationsRecieved from "./totalDonationsRecieved";
import TotalDonors from "./totalDonors";

/**
 * Renders the Charity Dashboard component.
 *
 * This component displays the account status, total donors, monthly donations, and total donations received.
 * It is responsible for rendering the main dashboard layout and organizing the different components.
 *
 * @returns {JSX.Element} The rendered Charity Dashboard component.
 */
const CharityDashboard = () => {
  return (
    <div>
      {/* Account status */}
      <div className="my-10 flex w-full items-center justify-evenly">
        <AccountStatus />
        <TotalDonors />
        <MonthlyDonations />
        <TotalDonationsRecieved />
      </div>
    </div>
  );
};

export default CharityDashboard;
