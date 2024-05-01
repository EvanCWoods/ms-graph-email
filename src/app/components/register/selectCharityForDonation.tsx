"use client";

import { useState } from "react";
import saveCharitySelection from "~/app/server-actions/user/saveCharitySelection";

interface ISelectCharityForDonationProps {
  remainingBudget: number | undefined;
  charityId: string;
}

/**
 * Renders a button to select a charity for donation and displays a modal for entering the donation amount.
 *
 * @param {number | undefined} remainingBudget - The remaining budget for donations.
 * @param {string} charityId - The ID of the selected charity.
 * @returns {ReactElement} The rendered component.
 */
const SelectCharityForDonation: React.FC<ISelectCharityForDonationProps> = ({
  remainingBudget,
  charityId,
}) => {
  const [openDonationModal, setOpenDonationModal] = useState(false);
  const handleSelect = () => {
    setOpenDonationModal(true);
  };

  const handleClose = () => {
    setOpenDonationModal(false);
  };

  return (
    <div>
      <button className="bg-brand-orange text-[#fff] shadow-md hover:shadow-lg px-4 py-1 text-base rounded-md text-nowrap" onClick={handleSelect}>Select Charity</button>

      {openDonationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-lg bg-white p-4 shadow-lg">
            <form action={saveCharitySelection}>
              <input type="hidden" name="charity-id" value={charityId} />
              <label>Donation Amount</label>
              <input
                className="w-full rounded border border-gray-300 px-2 py-1"
                type="number"
                name="donation-amount"
                min={5}
                max={remainingBudget ?? undefined}
              />
              <div className="mt-4 flex w-full justify-end">
                <button
                  className="mx-2 rounded  px-4 py-1 text-black"
                  onClick={handleClose}
                >
                  Close
                </button>
                <button
                  className="rounded-[100px] bg-brand-orange px-4 py-1 text-white"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectCharityForDonation;
