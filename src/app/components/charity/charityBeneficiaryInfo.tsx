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
      <li key={beneficiary.uuid} className="mb-2">
        <span className="text-sm">{beneficiary.Name}</span>
        {beneficiary.Description ?? ""}
      </li>
    ));
  };
  return (
    <div className="flex flex-col p-3 shadow">
      <div className="w-full">
        <h2 className="mb-2 text-xl font-medium">Charity Activities</h2>
        <p className="mb-4 text-sm">{activitySummary}</p>
      </div>
      <div className="w-full">
        <h2 className="mb-2 text-xl font-medium">Who the charity helps</h2>
        <ul className="list-disc pl-6">{renderBeneficiaries()}</ul>
      </div>
    </div>
  );
};

export default CharityBeneficiaryInfo;
