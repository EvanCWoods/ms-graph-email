import UnverifiedCharities from "~/app/components/admin/unVerifiedCharities";
import WebsiteStats from "~/app/components/admin/websiteStats";
import AccountBanner from "~/app/components/core/accountBanner";

/**
 * Renders the admin page with account banner, website stats, and unverified charities.
 *
 * @returns {JSX.Element} The rendered admin page.
 */
const AdminPage = async () => {
  return (
    <div>
      <AccountBanner />
      {/* Show the website data */}
      <div className="mx-5">
        <WebsiteStats />
        <UnverifiedCharities />
      </div>
    </div>
  );
};

export default AdminPage;
