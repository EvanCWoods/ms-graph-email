import React from "react";

interface IProps {
  name: string;
  // id: string;
  description: string;
}

/**
 * Renders a featured charity card component.
 *
 * @param name - The name of the charity.
 * @param id - The ID of the charity.
 * @param description - The description of the charity.
 * @returns The rendered featured charity card component.
 */
const FeaturedCharityCard: React.FC<IProps> = ({ name, description }) => {
  return (
    <div className="mx-2 flex items-center justify-center rounded-lg border shadow md:w-[80%]">
      <div className=" flex min-h-[200px] w-full items-center justify-between rounded-lg p-5 md:w-[90%] xl:w-[85%]">
        <div>
          <h3 className="text-xl xl:text-4xl">{name}</h3>
          <p className="text-base  xl:text-lg">{description}</p>
        </div>
        <button className="rounded-md border border-brand-orange bg-white p-2 text-sm text-brand-orange md:p-4 md:text-base">
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default FeaturedCharityCard;
