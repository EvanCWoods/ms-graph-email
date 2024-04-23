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
          className="m-2 flex size-[150px] transform items-center justify-center overflow-hidden rounded-lg bg-brand-lightOrange p-4 text-center transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg md:size-[200px]"
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
