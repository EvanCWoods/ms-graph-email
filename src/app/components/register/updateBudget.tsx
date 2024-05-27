import type { IPopularDonationAmount } from "~/types/interfaces";
import DonationTile from "./DonationTile";
import { popularDonationAmounts } from "~/constants/popularDonationAmounts";
import CustomDonationAmount from "./customDonationAmount";
import checkDonationSchedule from "~/app/server-actions/user/checkDonationSchedule";
import { redirect } from "next/navigation";
import getUserAccountType from "~/app/server-actions/user/getUserAccountType";


/**
 * Renders the UpdateBudget component.
 *
 * This component displays a form for updating the budget. It includes a list of popular donation amounts and a custom donation amount input field.
 *
 * @returns {React.ReactNode} The rendered UpdateBudget component.
 */
const UpdateBudget = async () => {

    const donationSchedule = await checkDonationSchedule();
    const accountType = await getUserAccountType();

    if (donationSchedule === "single") {
      redirect(`/charity-search`);
    }
  const renderPopularDonationAmounts = () => {
    if (accountType === "individual"){
    return popularDonationAmounts.individual.map((donation: IPopularDonationAmount) => {
      return (
        <DonationTile
          key={donation.amount}
          label={donation.label}
          amount={donation.amount}
        />
      );
    });
    } else {
       return popularDonationAmounts.company.map((donation: IPopularDonationAmount) => {
         return (
           <DonationTile
             key={donation.amount}
             label={donation.label}
             amount={donation.amount}
           />
         );
       });
    }
  };

  return (
    <div className="container mx-auto">
      <div className="my-12">
        <h2 className="mb-8 text-center text-2xl text-grey-600 md:text-2xl">
          Select a popular donation amount, or enter a custom one.
        </h2>
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
    </div>
  );
};

export default UpdateBudget;
