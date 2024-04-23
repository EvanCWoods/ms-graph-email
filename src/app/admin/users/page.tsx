import Table from "~/app/components/admin/table";
import TableFilters from "~/app/components/admin/tableFilters";

interface IProps {
  searchParams: {
    page: number;
    name?: string;
    email?: string;
    accountType?: string;
  };
}

/**
 * Renders the admin users page.
 *
 * @param {Object} searchParams - The search parameters for filtering the users.
 * @param {number} searchParams.page - The page number.
 * @param {string} [searchParams.name] - The name of the user.
 * @param {string} [searchParams.email] - The email of the user.
 * @param {string} [searchParams.accountType] - The account type of the user.
 * @returns {ReactElement} The rendered admin users page.
 */
const AdminUsersPage: React.FC<IProps> = async ({ searchParams }) => {
  const { page, name, email, accountType } = searchParams;

  return (
    <div className="flex h-screen">
      {/* Collapsable sidebar with filtering on the left */}
      <TableFilters />
      {/* Table on the right */}
      <div className="h-full w-3/4 overflow-auto">
        {/* Allows scrolling if content exceeds height */}
        <Table
          page={page}
          name={name}
          email={email}
          accountType={accountType}
        />
        {/* Here you can add a component to render a table */}
      </div>
    </div>
  );
};

export default AdminUsersPage;
