import React from "react";
import OneTimeDonationButton from "../core/oneTimeDonationButton";

interface IProps {
  name: string;
  description: string;
}

/**
 * Renders a featured charity card component.
 *
 * @param name - The name of the charity.
 * @param description - The description of the charity.
 * @returns The rendered featured charity card component.
 */
const FeaturedCharityCard: React.FC<IProps> = ({ name, description }) => {
  return (
    <div className="mx-2 flex flex-col items-center justify-center rounded-lg shadow md:w-[80%] border">
      <div className="flex flex-col w-full items-center justify-between p-5 md:flex-row md:w-[90%] xl:w-[85%]">
        <div className="text-center md:text-left">
          <h3 className="text-xl xl:text-4xl mb-3">{name}</h3>
          <p className="text-base xl:text-lg">{description}</p>
        </div>
        <OneTimeDonationButton charityId={""} charityName={""} />
      </div>
    </div>
  );
};

export default FeaturedCharityCard;
