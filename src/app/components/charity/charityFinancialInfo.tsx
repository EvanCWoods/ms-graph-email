import React from "react";
import PieChart from "../core/pieChart";

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
}: IProps) => {

  return (
    <div>
      {/* <h2 className="mb-2 text-xl font-medium text-brand-orange">
        Financial Information
      </h2>
      <h3 className="mb-2">Last Reported: {formattedDateReported}</h3>
      <h3 className="mb-2">Next Report Due: {formattedDateToReport}</h3> */}
      <div className="mb-8 mt-4 grid columns-1 justify-center gap-4 md:flex">
        <div className="w-full p-3 shadow md:w-[50%] rounded-lg border">
          <p className="mb-2 text-lg font-medium text-center">
            Income: $
            {(
              Number(governmentGrants) +
              Number(otherRevenue) +
              Number(donations) +
              Number(goods) +
              Number(investments)
            ).toFixed(2)}
          </p>
          <div className="flex w-full items-center justify-center">
            <div className="my-4">
              <PieChart
                labels={[
                  "Government Grants",
                  "Other Revenues",
                  "Donations",
                  "Goods and Services",
                  "Investments",
                ]}
                data={[
                  governmentGrants,
                  otherRevenue,
                  donations,
                  goods,
                  investments,
                ]}
              />
            </div>
          </div>
        </div>
        <div className="w-full p-3 shadow md:w-[50%] rounded-lg border">
          <h2 className="mb-2 text-lg font-medium text-center">
            Expenditure: $
            {(
              Number(expensesDonationsInAus) +
              Number(expensesDonationsOutAus) +
              Number(expensesInterest) +
              Number(expensesEmployee) +
              Number(expensesOther)
            ).toFixed(2)}
          </h2>
          <div className="flex w-full items-center justify-center">
            <div className="my-4">
              <PieChart
                labels={[
                  "Grants and Donations Inside Australia",
                  "Grants and Donations Outside Australia",
                  "Interest Payments",
                  "Employees",
                  "Other Expenses",
                ]}
                data={[
                  expensesDonationsInAus,
                  expensesDonationsOutAus,
                  expensesInterest,
                  expensesEmployee,
                  expensesOther,
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharityFinancialInfo;
