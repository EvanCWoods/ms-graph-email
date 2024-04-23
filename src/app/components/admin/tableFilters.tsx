import Link from "next/link";
import setAdminSearchUsersFilters from "~/app/server-actions/admin/setAdminSearchUsersFilters";

/**
 * Renders a component for filtering table data.
 *
 * @returns {ReactNode} The rendered component.
 */
const TableFilters = async () => {
  return (
    <div className="h-full w-1/4 overflow-auto border border-x-2 px-5">
      <h1 className="my-3 text-center text-xl">Filters</h1>
      <form
        action={setAdminSearchUsersFilters}
        className="flex flex-col space-y-4"
      >
        {/* Updated for vertical spacing */}
        <div>
          <label className="block">Name</label>
          <input
            type="text"
            name="name"
            className="mt-1 w-full rounded-md border py-1 text-lg"
          />
          {/* Margin for spacing */}
        </div>
        <div>
          <label className="block">Email</label>
          <input
            type="text"
            name="email"
            className="mt-1 w-full rounded-md border py-1 text-lg"
          />
          {/* Margin for spacing */}
        </div>
        <div>
          <label className="block">Account Type</label>
          <select
            name="accountType"
            className="mt-1 w-full rounded-md border py-1 text-lg"
          >
            <option value="" disabled>
              Select
            </option>
            <option value="individual">Individual</option>
            <option value="company">Company</option>
            <option value="charity">Charity</option>
          </select>
        </div>
        {/* Additional filters can be added here */}
        <button
          type="submit"
          className="rounded-lg bg-brand-orange px-5 py-2 text-white"
        >
          Search
        </button>
        <Link
          href={"/admin/users?page=1"}
          type="button"
          className="rounded-lg border border-brand-orange px-5 py-2 text-center text-brand-orange"
        >
          Clear Filters
        </Link>
      </form>
    </div>
  );
};

export default TableFilters;
