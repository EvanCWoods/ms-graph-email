import searchCharities from "~/app/server-actions/charity/searchCharities";
import Link from "next/link";
import Table from "../../core/table/table";
import ButtonPair from "../../core/table/donateButtons";
import checkDonationSchedule from "~/app/server-actions/user/checkDonationSchedule";

interface ITableProps {
  searchParams: {
    search: string;
    postcode: string;
    beneficiaries: string;
    countries: string;
  };
}

const PageResults: React.FC<ITableProps> = async ({ searchParams }) => {
  const { search, postcode, beneficiaries, countries } = searchParams;
  console.log(searchParams);

  try {
    const charities = await searchCharities(
      search,
      postcode,
      beneficiaries,
      countries,
    );
    const donationSchedule = await checkDonationSchedule()
    const renderCharities = () => {
      if(!charities) return null;
      return charities.map((charity) => (
        <tr key={charity.id} className="border-b">
          <td className="p-2">
            <Link
              className="text-sm font-medium text-gray-600 hover:text-brand-orange hover:underline md:text-base"
              href={`/charity/${charity.uuid}`}
            >
              {charity.data.Name}
            </Link>
          </td>
          <td className="px-4 py-2  text-sm font-light text-gray-600">
            {charity.data.Abn}
          </td>
          <td className=" px-4 py-2 text-sm font-light text-gray-600">
            {`${charity.data.AddressSuburb}, ${charity.data.AddressStateOrProvince}`}
          </td>
          <td>
          <ButtonPair
            params={donationSchedule!}
            remainingBudget={10000}
            charityId={charity.uuid}
          />
        </td>
        </tr>
      ));
    };

    return (
      <div className="w-full">
        <Table columns={["Charity Name", "ABN", "Location", "Action"]}>
          <tbody className="bg-white">
            {charities.length < 1 && (
              <p className="p-4 text-center">No Charities found</p>
            )}
            {renderCharities()}
          </tbody>
        </Table>
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch charities:", error);
    return <p>Failed to load charities. Please try again later.</p>;
  }
};

export default PageResults;
