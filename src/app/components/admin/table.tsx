import getAllFilteredUsers from "~/app/server-actions/user/getAllFilteredUsers";

interface IProps {
  page: number;
  name?: string;
  email?: string;
  accountType?: string;
}

/**
 * Renders a table component displaying a list of users based on the provided filters.
 *
 * @param {number} page - The page number for pagination.
 * @param {string} name - The name filter for users.
 * @param {string} email - The email filter for users.
 * @param {string} accountType - The account type filter for users.
 * @returns {ReactElement} The rendered table component.
 */
const Table: React.FC<IProps> = async ({ page, name, email, accountType }) => {
  // get all users, using the filters in the url
  const users = await getAllFilteredUsers(page, name, email, accountType);

  const renderUsers = () => {
    if (!users) return;

    return users.map((user) => {
      return (
        <tr
          key={user._id as string}
          className="border-b border-gray-200 hover:bg-gray-100"
        >
          <td className="px-5 py-5">{user.name ?? "--"}</td>
          <td className="px-5 py-5">{user.email ?? "--"}</td>
          <td className="px-5 py-5">{user.accountType}</td>
        </tr>
      );
    });
  };

  return (
    <div className="mx-auto w-4/5">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
            <th className="px-5 py-3">Name</th>
            <th className="px-5 py-3">Email</th>
            <th className="px-5 py-3">Account Type</th>
          </tr>
        </thead>
        <tbody>{renderUsers()}</tbody>
      </table>
    </div>
  );
};

export default Table;
