"use client";
import MenuIcon from "~/assets/icons/menuIcon";
import { useState } from "react";
import OneTimeDonationButton from "../core/oneTimeDonationButton";
import SelectCharityForDonation from "../register/selectCharityForDonation";

interface IProps {
  donationSchedule: string;
  charityId: string;
  charityName: string;
  remainingBudget: number;
  charityAbn: string;
}

const CharityActions: React.FC<IProps> = ({
  donationSchedule,
  charityId,
  charityName,
  remainingBudget,
  charityAbn,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-full">
      <button className="h-full w-[30px]" onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon />
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-48 space-y-3 rounded-lg bg-white py-2 shadow-md">
          <OneTimeDonationButton
            charityId={charityId}
            charityName={charityName}
            charityAbn={charityAbn}
          />
          {donationSchedule === "monthly" && (
            <SelectCharityForDonation
              remainingBudget={remainingBudget}
              charityId={charityId}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default CharityActions;
