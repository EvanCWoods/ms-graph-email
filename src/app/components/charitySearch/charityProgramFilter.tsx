"use server";
import Link from "next/link";
import React from "react";
import { getCharityPrograms } from "~/app/server-actions/charity/getCharityPrograms";
import CharityListByProgram from "~/app/components/register/charityListByProgram";

interface IProps {
  parentId: string | undefined;
}

/**
 * Renders a filter component for charity programs.
 *
 * @param {string | undefined} parentId - The ID of the parent program.
 * @returns {React.ReactNode} - The rendered filter component.
 */
const SimpleCharityFilter: React.FC<IProps> = async ({ parentId }) => {
  const programs = await getCharityPrograms(parentId);

  const renderCharityPrograms = () => {
    if (!programs) return null;
    return programs.map((program) => (
      <button key={program.classie_id} className="focus:outline-none">
        <Link
          href={`/charity-search/filter-search?parent=${program.classie_id}`}
          className="bg-white text-center hover:text-brand-orange justify-center items-center flex w-[140px] h-[140px] md:h-[180px] md:w-[180px] overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg rounded-lg p-4 m-2 border hover:border-brand-orange"
        >
          {program.name}
        </Link>
      </button>
    ));
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center">
        {renderCharityPrograms()}
      </div>
      {parentId && programs?.length === 0 && (
        <CharityListByProgram parentId={parentId} />
      )}
    </div>
  );
};

export default SimpleCharityFilter;
