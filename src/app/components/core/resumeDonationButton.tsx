"use client";
import { redirect } from "next/navigation";
import { useState } from "react";
import resumeStripeSubscription from "~/app/server-actions/stripe/resumeStripeSubscription";

interface IProps {
  subscriptionId: string;
}

const PauseDonationButtons: React.FC<IProps> = ({ subscriptionId }) => {
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);

  const handleResumeDonations = async () => {
    // Logic to pause donations
    await resumeStripeSubscription(subscriptionId);
    setShowConfirmModal(false); // Close the modal
    redirect("/dashboard");
  };

  return (
    <div>
      <button
        onClick={() => setShowConfirmModal(true)}
        className="w-full text-nowrap rounded-lg border border-brand-orange bg-white py-1 text-brand-orange hover:border-brand-orange hover:bg-brand-orange hover:text-white"
      >
        Resume Donations
      </button>
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="m-auto max-w-md rounded-lg bg-white p-4 shadow-lg">
            <p>Are you sure you want to Resume your donations?</p>
            <div className="text-right">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="mx-5 rounded-lg px-4 py-2 text-brand-orange hover:bg-brand-lightOrange"
              >
                No
              </button>
              <button
                onClick={handleResumeDonations}
                className="rounded-lg bg-brand-orange px-4 py-2 text-white hover:bg-red-700"
              >
                Yes, Resume Them
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PauseDonationButtons;
