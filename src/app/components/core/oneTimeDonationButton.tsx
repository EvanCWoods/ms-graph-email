"use client";
import { useState } from "react";
import createStripeCheckout from "~/app/server-actions/stripe/createStripeCheckout";

interface IOneTimeDonationButtonProps {
  charityId: string;
  charityName: string;
  charityAbn: string;
}

const popularDonationAmounts = [
  { amount: 5, label: "$5" },
  { amount: 10, label: "$10" },
  { amount: 25, label: "$25" },
  { amount: 50, label: "$50" },
];

const OneTimeDonationButton: React.FC<IOneTimeDonationButtonProps> = ({
  charityId,
  charityName,
  charityAbn,
}) => {
  const [openDonationModal, setOpenDonationModal] = useState<boolean>(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");

  const handleSelectAmount = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount(""); // Clear custom amount when a popular amount is selected
  };

  const handleCustomAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCustomAmount(event.target.value);
    setSelectedAmount(null); // Deselect any popular amount when typing a custom amount
  };

  const renderPopularDonationAmounts = () => {
    return popularDonationAmounts.map((donationAmount) => (
      <button
        key={donationAmount.amount}
        onClick={() => handleSelectAmount(donationAmount.amount)}
        className={`rounded-lg px-4 py-2 text-black transition-colors ${
          selectedAmount === donationAmount.amount
            ? "bg-brand-orange text-white"
            : "bg-brand-lightOrange"
        }`}
      >
        {donationAmount.label}
      </button>
    ));
  };

  return (
    <div>
      <button
        onClick={() => setOpenDonationModal(true)}
        className="w-full text-nowrap rounded-lg border border-brand-orange bg-white py-1 text-brand-orange hover:border-brand-orange hover:bg-brand-orange hover:text-white"
      >
        Donate Now
      </button>
      {openDonationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          {/* This div centers content and takes up the entire viewport */}
          <div className="m-auto max-w-md rounded-lg bg-white p-4 shadow-lg">
            <p>Donate To {charityName}</p>
            <div className="my-5 flex justify-evenly">
              {renderPopularDonationAmounts()}
            </div>

            <input
              className="mb-5 w-full rounded-lg border border-gray-300 p-2"
              type="number"
              placeholder="Custom Amount"
              value={customAmount}
              onChange={handleCustomAmountChange}
            />
            <div className="text-right">
              <form action={createStripeCheckout}>
                <input
                  type="hidden"
                  name="amount"
                  value={selectedAmount ?? customAmount}
                />
                <input type="hidden" name="charityId" value={charityId} />
                <input type="hidden" name="charityName" value={charityName} />
                <input type="hidden" name="charityAbn" value={charityAbn} />
                <button
                  className="mx-5"
                  onClick={() => setOpenDonationModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-brand-orange px-4 py-2 text-white"
                >
                  Confirm Donation
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OneTimeDonationButton;
