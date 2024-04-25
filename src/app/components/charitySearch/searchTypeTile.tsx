import React from "react";
import Link from "next/link";

interface ISearchTileProps {
  text: string;
  redirectUrl: string;
}

/**
 * Renders a search tile component.
 *
 * @param {string} text - The text to be displayed in the search tile.
 * @param {string} redirectUrl - The URL to redirect to when the search tile is clicked.
 * @returns {JSX.Element} The rendered search tile component.
 */
const SearchTile: React.FC<ISearchTileProps> = ({ text, redirectUrl }) => {
  const classes = `bg-white text-brand-orange border hover:text-white hover:bg-brand-orange justify-center items-center flex w-[150px] h-[150px] md:h-[200px] md:w-[200px] overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg rounded-lg p-4 m-2 border-brand-orange hover:border-brand-orange`;

  return (
    <Link
      href={redirectUrl}
      className={classes}
      style={{ whiteSpace: "nowrap" }}
    >
      {text}
    </Link>
  );
};

export default SearchTile;
