import React from "react";

interface IProps {
  governmentGrants: string;
  otherRevenue: string;
  donations: string;
  goods: string;
  investments: string;
  expensesDonationsInAus: string;
  expensesDonationsOutAus: string;
  expensesInterest: string;
  expensesEmployee: string;
  expensesOther: string;
  lastDateReported: string;
  nextDateToReport: string;
}

const CharityFinancialInfo = ({
  governmentGrants,
  otherRevenue,
  donations,
  goods,
  investments,
  expensesDonationsInAus,
  expensesDonationsOutAus,
  expensesEmployee,
  expensesInterest,
  expensesOther,
  lastDateReported,
  nextDateToReport,
}: IProps) => {
  const dateReported = new Date(lastDateReported);
  const formattedDateReported = dateReported.toLocaleDateString("en-GB");

  const dateToReport = new Date(nextDateToReport);
  const formattedDateToReport = dateToReport.toLocaleDateString("en-GB");
  return (
    <div className="p-3 shadow text-center">
      <h2 className="mb-2 text-xl font-medium text-brand-orange">Financial Information</h2>
      <h3 className="mb-2">Last Reported: {formattedDateReported}</h3>
      <h3 className="mb-2">Next Report Due: {formattedDateToReport}</h3>
      <div className="mb-8 mt-4 grid columns-1 gap-4 md:flex justify-center">
        <div className="w-full md:w-[45%] shadow p-3">
          <p className="mb-2 text-lg font-medium">
            Income: $
            {(
              Number(governmentGrants) +
              Number(otherRevenue) +
              Number(donations) +
              Number(goods) +
              Number(investments)
            ).toFixed(2)}
          </p>
          <ul className="list-disc pl-6 text-sm">
            <li>Government Grants - ${governmentGrants}</li>
            <li>Other Revenues - ${otherRevenue}</li>
            <li>Donations - ${donations}</li>
            <li>Goods and Services - ${goods}</li>
            <li>Investments - ${investments}</li>
          </ul>
        </div>
        <div className="w-full md:w-[45%] shadow p-3">
          <h2 className="mb-2 text-lg font-medium">
            Expenditure: $
            {(
              Number(expensesDonationsInAus) +
              Number(expensesDonationsOutAus) +
              Number(expensesInterest) +
              Number(expensesEmployee) +
              Number(expensesOther)
            ).toFixed(2)}
          </h2>
          <ul className="list-disc pl-6 text-sm">
            <li>
              Grants and Donations Inside Australia - ${expensesDonationsInAus}
            </li>
            <li>
              Grants and Donations Outside Australia - $
              {expensesDonationsOutAus}
            </li>
            <li>Interest Payments - ${expensesInterest}</li>
            <li>Employees - ${expensesEmployee}</li>
            <li>Other Expenses - ${expensesOther}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharityFinancialInfo;
