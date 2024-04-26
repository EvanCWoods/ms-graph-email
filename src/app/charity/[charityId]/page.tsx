/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import CharityBeneficiaryInfo from "~/app/components/charity/charityBeneficiaryInfo";
import CharityFinancialInfo from "~/app/components/charity/charityFinancialInfo";
import CharityHeading from "~/app/components/charity/charityHeading";
import getOneCharityById from "~/app/server-actions/charity/getOneCharity";

interface IProps {
  params: {
    charityId: string;
  };
}


/**
 * Renders the CharityPage component.
 *
 * @param {Object} params - The parameters object.
 * @param {string} params.charityId - The ID of the charity.
 * @returns {JSX.Element} The rendered CharityPage component.
 */
const CharityPage: React.FC<IProps> = async ({ params }) => {
  const { charityId } = params;
  const data = await getOneCharityById(charityId);

  return (
    <div className="grid gap-2 p-4">
      <CharityHeading
        name={data.Name}
        size={data.CharitySize}
        established={data.DateEstablished}
      />
      <CharityBeneficiaryInfo
        activitySummary={data.SummaryOfActivities}
        beneficiaries={data.Beneficiaries}
      />
      <CharityFinancialInfo
        governmentGrants={data.TotalGrossIncomeGovernmentGrants}
        otherRevenue={data.TotalGrossIncomeOtherRevenues}
        donations={data.TotalGrossIncomeDonationsAndRequests}
        goods={data.TotalGrossIncomeGoodsOrServices}
        investments={data.TotalGrossIncomeInvestments}
        expensesDonationsInAus={data.TotalExpensesGrantsAndDonationsInAustralia}
        expensesDonationsOutAus={
          data.TotalExpensesGrantsAndDonationsOutsideAustralia
        }
        expensesInterest={data.TotalExpensesInterest}
        expensesEmployee={data.TotalExpensesEmployee}
        expensesOther={data.TotalExpensesOther}
        lastDateReported={data.LastReported}
        nextDateToReport={data.NextReportDue}
      />
      <div className="p-3 shadow">
        <h2 className="mb-2 text-xl font-medium">Programs</h2>
        <ul className="list-disc pl-6">
          {data.Programs.map((program: any) => (
            <li key={program.uuid} className="mb-2 text-sm font-light">
              <span className="text-base font-normal">{program.Name}</span> -{" "}
              {program.ProgramClassification}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-3 shadow">
        <h2 className="mb-2 text-xl font-medium">Contact Information</h2>
        <ul className="list-disc pl-6 text-sm">
          <li>
            Address - {data.AddressLine1 ?? ""}, {data.AddressLine2 ?? ""},{" "}
            {data.AddressSuburb ?? ""}, {data.AddressStateOrProvince ?? ""},{" "}
            {data.AddressPostalCode ?? ""}
          </li>
          <li>Website- {data.Website}</li>
          <li>Phone - {data.Phone}</li>
          <li>Email - {data.Email}</li>
          <li>ABN - {data.Abn}</li>
        </ul>
      </div>
    </div>
  );
};

export default CharityPage;
