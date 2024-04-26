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
          className="m-2 flex h-[140px]  w-[140px] transform items-center justify-center overflow-hidden rounded-lg border shadow-lg  text-black bg-white p-4 text-center transition duration-300 ease-in-out hover:scale-105 hover:bg-brand-orange hover:text-white hover:shadow-lg md:h-[180px] md:w-[180px]"
        >
          {program.name}
        </Link>
      </button>
    ));
  };

  return (
    <div>
      <h1 className="text-3xl w-full text-center mt-16 mb-10">Choose a Program</h1>
      <div className="flex flex-wrap items-center justify-center gap-5 px-32">
        {renderCharityPrograms()}
      </div>
      {parentId && programs?.length === 0 && (
        <CharityListByProgram parentId={parentId} />
      )}
    </div>
  );
};

export default SimpleCharityFilter;
