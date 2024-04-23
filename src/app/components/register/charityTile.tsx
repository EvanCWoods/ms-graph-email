import Link from "next/link";
import React from "react";

interface ICharityButtonProps {
  name: string;
  parentId: string;
}

/**
 * Renders a CharityButton component.
 *
 * @param {string} name - The name of the charity.
 * @param {string} parentId - The ID of the parent.
 * @returns {JSX.Element} The rendered CharityButton component.
 */
const CharityButton: React.FC<ICharityButtonProps> = ({ name, parentId }) => {
  const classes = `bg-brand-lightOrange text-center justify-center items-center flex w-[200px] h-[200px] overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg rounded-lg p-4 m-2`;

  return (
    <Link
      href={`/register?step=5&parent=${parentId}`}
      className={classes}
      style={{ whiteSpace: "nowrap" }}
    >
      {name}
    </Link>
  );
};

export default CharityButton;
