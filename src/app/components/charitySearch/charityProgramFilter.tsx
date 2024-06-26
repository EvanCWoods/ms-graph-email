/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";
import Link from "next/link";
import React from "react";
import { getCharityPrograms } from "~/app/server-actions/charity/getCharityPrograms";
import CharityListByProgram from "~/app/components/register/charityListByProgram";
import BreadCrumbs from "./breadcrumbs";

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
    if (!programs.results) return null;
    return programs.results.map((program: any) => (
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
      <h1 className="mb-10 mt-16 w-full text-center text-3xl">
        Choose a Category
      </h1>
      <div>
        <div className="px-10">
          <BreadCrumbs programs={programs} />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5">
          {renderCharityPrograms()}
        </div>
      </div>
      {parentId && programs.results?.length === 0 && (
        <CharityListByProgram parentId={parentId} />
      )}
    </div>
  );
};

export default SimpleCharityFilter;
