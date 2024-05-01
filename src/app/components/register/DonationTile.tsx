import updateDonationAmount from "~/app/server-actions/user/updateDonationAmount";
import type { IPopularDonationAmount } from "~/types/interfaces";
// import Button from "../core/button";

/**
 * Renders a donation tile component.
 *
 * @component
 * @param {number} amount - The donation amount.
 * @param {string} label - The label for the donation amount.
 * @returns {JSX.Element} - The rendered donation tile component.
 */
const DonationTile: React.FC<IPopularDonationAmount> = ({ amount, label }) => {
  return (
    <form action={updateDonationAmount}>
      <button type="submit" className="group mr-2 flex max-w-[350px] flex-wrap justify-center rounded-lg border bg-white px-5 py-5 font-bold text-gray-800 shadow-md hover:cursor-pointer hover:bg-brand-orange">
        <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full border-2 border-brand-orange bg-white ">
          {/* Add group-hover:text-orange-500 to change the text color on hover */}
          <h3 className="text-grey-700 text-xl group-hover:text-black">
            ${amount}
          </h3>
          <input type="hidden" name="donation-amount" value={amount * 100} />
        </div>
        <p className="my-4 text-center font-medium group-hover:text-white">
          {label}
        </p>
        <div className="my-2">
          {/* The button is commented out, if you want to use it, uncomment and it should work with the group hover as well */}
          {/* <button className="rounded-lg border border-brand-orange text-brand-orange bg-white hover:text-white hover:bg-brand-orange hover:border-brand-orange px-4 py-2">Select</button> */}
        </div>
      </button>
    </form>
  );
};

export default DonationTile;
