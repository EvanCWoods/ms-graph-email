"use client";
import { redirect } from "next/navigation";
import { useState } from "react";
import cancelStripeSubscription from "~/app/server-actions/stripe/cancelStripeSubscription";

interface ICancelDonationsButtonProps {
  subscriptionId: string;
}

const CancelDonationsButton: React.FC<ICancelDonationsButtonProps> = ({
  subscriptionId,
}) => {
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);

  const handleCancelSubscription = async () => {
    try {
    await cancelStripeSubscription(subscriptionId);
      setShowConfirmModal(false); // Close the modal on successful cancellation
      redirect("/dashboard");
    } catch (error) {
      console.error("Cancellation error:", error);
    }
  };

  return (
    <div>
      <button
        onClick={() => setShowConfirmModal(true)}
        className="w-full text-nowrap rounded-lg border border-brand-orange bg-white py-1 text-brand-orange hover:border-brand-orange hover:bg-brand-orange hover:text-white"
      >
        Cancel Donations
      </button>
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="m-auto max-w-md rounded-lg bg-white p-4 shadow-lg">
            <p>Are you sure you want to cancel your donation subscription?</p>
            <div className="text-right">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="mx-5 rounded-lg px-4 py-2 text-brand-orange hover:bg-brand-lightOrange"
              >
                No, Keep It
              </button>
              <button
                onClick={handleCancelSubscription}
                className="rounded-lg bg-brand-orange px-4 py-2 text-white hover:bg-red-700"
              >
                Yes, Cancel It
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CancelDonationsButton;
