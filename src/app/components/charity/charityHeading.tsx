import React from "react";

interface IProps {
  name: string;
  size: string;
  established: string;
}

const CharityHeading = ({ name, size, established }: IProps) => {
  const dateEstablished = new Date(established);
  const formattedDateEstablished = dateEstablished.toLocaleDateString("en-GB");
  return (
    <div>
      <h1 className="text-xl font-medium md:text-2xl">
        {name} - {size} Charity
      </h1>
      <h3 className="my-2 text-lg md:text-xl">
        Est. {formattedDateEstablished}
      </h3>
    </div>
  );
};

export default CharityHeading;
