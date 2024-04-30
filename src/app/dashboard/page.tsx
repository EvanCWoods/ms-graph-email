/* eslint-disable @typescript-eslint/no-unsafe-call */
import AccountBanner from "~/app/components/core/accountBanner";
import CharityDashboard from "~/app/components/dashboard/charity/charityDashboard";
import Profile from "~/app/components/dashboard/profile/profile";
import getUserAccountType from "~/app/server-actions/user/getUserAccountType";


/**
 * Renders the dashboard page based on the user's account type.
 *
 * @returns {JSX.Element} The rendered dashboard page.
 */
const DashboardPage = async () => {
  const accountType = await getUserAccountType();

  const renderDashboard = () => {
    if (!accountType) return;

    if (accountType === "individual" || accountType === "company") {
      return <Profile />;
    }
    if (accountType === "charity") {
      return <CharityDashboard />;
    }
  };
  return (
    <div>
      <AccountBanner />
      <div className=" mx-5 md:mx-20 my-10">{renderDashboard()}</div>
    </div>
  );
};

export default DashboardPage;
