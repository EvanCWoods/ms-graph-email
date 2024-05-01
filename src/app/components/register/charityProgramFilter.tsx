/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";
import Link from "next/link";
import React from "react";
import { getCharityPrograms } from "~/app/server-actions/charity/getCharityPrograms";
import CharityListByProgram from "./charityListByProgram";

interface IProps {
  parentId: string | undefined;
  isRegistering?: boolean;
}

/**
 * Renders a filter component for charity programs.
 *
 * @param {string | undefined} parentId - The ID of the parent program.
 * @returns {React.ReactNode} - The rendered filter component.
 */
const CharityProgramFilter: React.FC<IProps> = async ({
  parentId,
  isRegistering,
}) => {
  const programs = await getCharityPrograms(parentId);

  const renderCharityPrograms = () => {
    if (!programs) return null;
    return programs.map((program: any) => (
      <button key={program.classie_id} className="focus:outline-none">
        <Link
          href={`/register?step=5&parent=${program.classie_id}`}
          className="m-2 flex h-[200px] w-[200px] transform items-center justify-center overflow-hidden rounded-lg bg-brand-lightOrange p-4 text-center transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
        >
          {program.name}
        </Link>
      </button>
    ));
  };

  return (
    <div>
      {isRegistering && (
        <div className="flex w-full justify-end px-6">
          <Link
            className="rounded-md border border-brand-orange p-2 text-brand-orange hover:text-white hover:bg-brand-orange"
            href={"/dashboard"}
          >
            Skip for now
          </Link>
        </div>
      )}
      <div className="flex flex-wrap items-center justify-center">
        {renderCharityPrograms()}
      </div>
      {parentId && programs?.length === 0 && (
        <CharityListByProgram parentId={parentId} />
      )}
    </div>
  );
};

export default CharityProgramFilter;
