import type { IPopularDonationAmount } from "~/types/interfaces";
import DonationTile from "./DonationTile";
import { popularDonationAmounts } from "~/constants/popularDonationAmounts";
import CustomDonationAmount from "./customDonationAmount";

/**
 * Renders the UpdateBudget component.
 *
 * This component displays a form for updating the budget. It includes a list of popular donation amounts and a custom donation amount input field.
 *
 * @returns {React.ReactNode} The rendered UpdateBudget component.
 */
const UpdateBudget = async () => {
  const renderPopularDonationAmounts = () => {
    return popularDonationAmounts.map((donation: IPopularDonationAmount) => {
      return (
        <DonationTile
          key={donation.amount}
          label={donation.label}
          amount={donation.amount}
        />
      );
    });
  };

  return (
    <div className="container mx-auto">
      <div className="lg:grid lg:grid-cols-3 lg:gap-4">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2">
            {renderPopularDonationAmounts()}
          </div>
        </div>
        <div>
          <CustomDonationAmount />
        </div>
      </div>
    </div>
  );
};

export default UpdateBudget;
