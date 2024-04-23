import type { IPopularDonationAmount } from "~/types/interfaces";
import Button from "../core/button";

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
    <div className="mr-2 flex max-w-[350px] flex-wrap justify-center rounded-lg bg-brand-lightOrange px-5 py-5 font-bold text-gray-800 shadow-md">
      <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-white">
        <h3 className="text-xl">${amount}</h3>
      </div>
      <p className="my-4 text-center">{label}</p>
      <div className="my-2">
        <Button
          text="Select"
          size="md"
          redirectUrl="/register?step=5"
          variant="secondary"
        />
      </div>
    </div>
  );
};

export default DonationTile;
