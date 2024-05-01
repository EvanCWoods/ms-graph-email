import React from "react";

interface IProps {
  name: string;
  established: string;
}

const CharityHeading = ({ name, established }: IProps) => {
  const dateEstablished = new Date(established);
  const formattedDateEstablished = dateEstablished.toLocaleDateString("en-GB");
  return (

    <div className="text-center my-8">
      <h1 className="text-xl md:text-5xl font-medium text-brand-orange text-center">
        {name}
      </h1>
      <h3 className="my-2 text-sm md:text-sm text-center">
        Est. {formattedDateEstablished}
      </h3>
    </div>

  );
};

export default CharityHeading;
