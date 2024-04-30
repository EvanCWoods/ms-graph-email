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
      <li key={beneficiary.uuid} className="shadow mb-2 mx-3 w-[200px]">
        <span className="text-sm">{beneficiary.Name}</span>
        {beneficiary.Description ?? ""}
      </li>
    ));
  };
  return (
    <div className="flex flex-col p-3 shadow text-center">
      <div className="w-full">
        <h2 className="mb-2 text-xl font-medium text-brand-orange">Charity Activities</h2>
        <p className="mb-4 text-sm">{activitySummary}</p>
      </div>
      <div className="w-full">
        <h2 className="mb-2 text-xl font-medium text-brand-orange">Who the charity helps</h2>
        <ul className="justify-center flex flex-wrap">{renderBeneficiaries()}</ul>
      </div>
    </div>
  );
};

export default CharityBeneficiaryInfo;
