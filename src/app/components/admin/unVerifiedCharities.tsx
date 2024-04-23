import getUnverifiedCharities from "~/app/server-actions/charity/getUnverifiedCharities";
import verifyCharity from "~/app/server-actions/admin/verifyCharity";

/**
 * Renders a list of unverified charities.
 *
 * @returns {JSX.Element} The rendered component.
 */
const UnverifiedCharities = async () => {
  const charities = await getUnverifiedCharities();

  const renderCharities = () => {
    if (!charities) return null;

    return charities.map((charity) => (
      <tr key={charity._id as string} className="border-b border-gray-200">
        <td className="p-5">{charity.charityName}</td>
        <td className="p-5">{charity.abn}</td>
        <td className="p-5">{charity.accountName}</td>
        <td className="p-5">{charity.accountNumber}</td>
        <td className="p-5">{charity.bsb}</td>
        <td className="p-5">
          <form action={verifyCharity}>
            <input type="hidden" name="id" value={charity._id as string} />
            <button
              type="submit"
              className="rounded-lg bg-brand-utilityGreen px-2 py-1 text-white"
            >
              Verify
            </button>
          </form>
        </td>
      </tr>
    ));
  };

  return (
    <div className="max-h-[500px] w-full overflow-auto rounded-lg p-5 shadow-xl">
      <h1 className="mb-3 text-xl">Unverified Charities</h1>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
            <th className="px-5 py-3">Charity Name</th>
            <th className="px-5 py-3">ABN</th>
            <th className="px-5 py-3">Account Name</th>
            <th className="px-5 py-3">Account Number</th>
            <th className="px-5 py-3">BSB</th>
            <th className="px-5 py-3">Verify</th>
          </tr>
        </thead>
        <tbody>{renderCharities()}</tbody>
      </table>
    </div>
  );
};

export default UnverifiedCharities;
