"use client";
import MenuIcon from "~/assets/icons/menuIcon";
import { useState } from "react";
import OneTimeDonationButton from "../../core/oneTimeDonationButton";
import CancelDonationsButton from "../../core/cancelDonationsButton";
import PauseDonationButtons from "../../core/pauseDonationsButton";
import ResumeDonationButton from "../../core/resumeDonationButton";


interface IProps {
    charityId: string;
    charityName: string;
    subscriptionId: string;
    paused: boolean;
}

const MenuButton: React.FC<IProps> = ({ subscriptionId, paused  }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-full">
      <button className="h-full w-[30px]" onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon />
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-48 space-y-3 rounded-lg bg-white py-2 shadow-md">
          <OneTimeDonationButton charityId={""} charityName={""} />
          {paused ? (
            <ResumeDonationButton subscriptionId={subscriptionId} />
          ) : (
            <PauseDonationButtons subscriptionId={subscriptionId} />
          )}
          <CancelDonationsButton subscriptionId={subscriptionId} />
        </div>
      )}
    </div>
  );
};

export default MenuButton;
