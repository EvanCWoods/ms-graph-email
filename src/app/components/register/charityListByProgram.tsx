/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use server";
import Link from "next/link";
import React from "react";
import { getCharitiesByCatagory } from "~/app/server-actions/charity/getCharitiesByCatagory";
import Table from "../core/table/table";
import { cn } from "~/utils/cn";

interface IProps {
  parentId: string | undefined;
}

/**
 * Renders a list of charities by program.
 *
 * @param {string} parentId - The ID of the parent program.
 * @returns {React.ReactNode} - The rendered list of charities.
 */
const CharityListByProgram: React.FC<IProps> = async ({ parentId }) => {
  const charityList = await getCharitiesByCatagory(parentId);
  const tableRowClasses = "border p-2 text-sm md:text-base";
  const renderCharityList = () => {
    if (!charityList) return null;
    return charityList.map((charity) => (
      <tr key={charity.uuid}>
        <td className={tableRowClasses}>
          <Link
            className="hover:text-brand-orange hover:underline"
            href={`/charity/${charity.data.CharityUuid}`}
          >
            {charity.data.CharityName}
          </Link>
        </td>
        <td className={cn(tableRowClasses, "text-xs md:text-sm")}>
          {charity.data.Name}
        </td>
        <td className={cn(tableRowClasses, "text-xs md:text-sm")}>
          {charity.data.ProgramLocations[0].DisplayName}
        </td>
      </tr>
    ));
  };
  return (
    <div>
      {/* Call the renderCharityPrograms function*/}
      <Table columns={["Charity Name", "Project Name", "Project Location"]}>
        <tbody>
          {renderCharityList()}
          {!charityList ||
            (charityList.length < 1 && (
              <p className="p-4 text-center">No Charities found</p>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CharityListByProgram;
