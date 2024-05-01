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
    <div className="mx-2 flex flex-col items-center justify-center rounded-lg border bg-white shadow md:w-[80%]">
      <div className="flex w-full flex-col items-center justify-between p-5 md:w-[90%] md:flex-row xl:w-[85%]">
        <div className="text-center md:text-left">
          <h3 className="mb-3 text-xl xl:text-4xl">{name}</h3>
          <p className="whitespace-normal text-wrap text-base xl:text-lg">
            {description}
          </p>
        </div>
        <div className="ml-5">
          <OneTimeDonationButton charityId={""} charityName={""} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCharityCard;
