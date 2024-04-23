/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-floating-promises */
"use client";

import { useState } from "react";
import searchCharitiesOnAcnc from "~/app/server-actions/admin/searchCharitiesOnAcnc";
import updateCharityAbn from "~/app/server-actions/charity/updateCharityAbn";

/**
 * Renders a component for adding charity details.
 *
 * This component allows the user to search for charities using a search term and displays the search results in a table. The user can select a charity from the search results and submit the selected charity's ABN (Australian Business Number) using a form.
 *
 * @returns {JSX.Element} The rendered component for adding charity details.
 */
const AddCharityDetails = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [charities, setCharities] = useState<any>([]);
  const [selectedCharity, setSelectedCharity] = useState<any>(null);

  const search = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: any = await searchCharitiesOnAcnc(searchTerm);
    setCharities(data);
  };

  const handleClickCharity = (e: React.MouseEvent<HTMLTableRowElement>) => {
    e.stopPropagation();
    setSelectedCharity(e.currentTarget.dataset.abn);
  };

  const disabledClass = "bg-grey-300 text-grey-500 cursor-not-allowed";
  const enabledClass = "bg-brand-orange text-white cursor-pointer";

  return (
    <div className="flex h-full w-full flex-wrap items-center justify-center">
      <form onSubmit={search}>
        <div className="mt-10 flex flex-wrap justify-center">
          <label className="w-full text-center text-xl">
            Find your charity so we know who you are
          </label>
          <input
            className="border-grey-100 mt-3 h-[35px] w-full rounded-md border text-lg"
            placeholder="Search by name or ABN"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value.trim())
            }
          />
        </div>
        <div className="w-full text-center">
          <button
            type="submit"
            className="my-2 rounded-lg bg-brand-orange px-6 py-1 text-white"
          >
            Search
          </button>
        </div>
      </form>
      <div className="mt-10 flex w-full justify-center">
        {charities && charities.length > 0 && (
          <>
            <table className="w-2/3 table-auto">
              <thead className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                <tr>
                  <th>Name</th>
                  <th>ABN</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {charities.map((charity: any) => (
                  <tr
                    key={charity.abn}
                    className={`h-[35px] cursor-pointer hover:bg-gray-100 ${selectedCharity === charity.abn ? "bg-brand-lightOrange" : ""}`}
                    onClick={handleClickCharity}
                    data-abn={charity.abn}
                  >
                    <td className="text-left">{charity.name}</td>
                    <td className="text-left">{charity.abn}</td>
                    <td className="text-left">{charity.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
      {charities && charities.length > 0 && (
        <form action={updateCharityAbn}>
          <input type="hidden" name="charity-abn" value={selectedCharity} />
          <button
            type="submit"
            disabled={!selectedCharity}
            className={`my-2 rounded-lg px-6 py-1 ${selectedCharity ? enabledClass : disabledClass}`}
          >
            Select
          </button>
        </form>
      )}
    </div>
  );
};

export default AddCharityDetails;
