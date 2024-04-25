import Budget from "./budget";
import CurrentCharities from "./currentCharities";
import Reports from "./reports";
import Transactions from "./transactions";

/**
 * Renders the profile page.
 *
 * @returns {JSX.Element} The profile page component.
 */
const Profile = () => {
  return (
    <div>
      <Budget />
      <CurrentCharities />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-10">
        <Transactions />
        <Reports />
      </div>
    </div>
  );
};

export default Profile;
