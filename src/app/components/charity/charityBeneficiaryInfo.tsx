import React from "react";

export type Beneficiary = {
  uuid: string;
  Name: string;
  Description: string;
};

interface IProps {
  activitySummary: string;
  beneficiaries: Beneficiary[];
}

const CharityBeneficiaryInfo = ({ activitySummary, beneficiaries }: IProps) => {
  const renderBeneficiaries = () => {
    return beneficiaries.map((beneficiary: Beneficiary) => (
      <li key={beneficiary.uuid} className="border border-brand-orange text-grey-700 p-5 w-[150px] h-[150px] flex justify-center items-center rounded-lg">
        <span className="text-sm">{beneficiary.Name}</span>
      </li>
    ));
  };
  return (
    <div className="flex flex-col p-5 shadow text-center border rounded-lg">
      <div className="w-full mb-5">
        <h2 className="mb-2 text-xl font-medium text-brand-orange">Charity Activities</h2>
        <p className="mb-4 text-sm">{activitySummary}</p>
      </div>
      <div className="w-full">
        <h2 className="mb-2 text-xl font-medium text-brand-orange">Who the charity helps</h2>
        <ul className="justify-center flex flex-wrap gap-2">{renderBeneficiaries()}</ul>
      </div>
    </div>
  );
};

export default CharityBeneficiaryInfo;
