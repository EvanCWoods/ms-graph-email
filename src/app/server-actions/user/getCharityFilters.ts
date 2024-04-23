/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";

/**
 * This code snippet represents an asynchronous function called getCharityFilters.
 * It makes a GET request to the specified URL and retrieves data from the response.
 * The function returns a Promise that resolves to an object containing various filters related to charities.
 * These filters include beneficiaries, countries, charity size, and operating state in Australia.
 *
 * @returns {Promise<Object>} A Promise that resolves to an object containing charity filters.
 */
const getCharityFilters = async () => {
  const response = await fetch(
    `https://www.acnc.gov.au/api/dynamics/search/charity`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const data = await response.json();
  /**
   * This code snippet assigns values to variables representing different filters related to charities.
   * The variables beneficiaries, countries, charitySize, and ausState are assigned the corresponding items from the data object.
   * These filters are then combined into an object called filters.
   * The filters object is returned by the code snippet.
   */
  const beneficiaries = data.facets.beneficiaries.items;
  const countries = data.facets.countries.items;
  const charitySize = data.facets.size.items;
  const ausState = data.facets.operating_state.items;
  const filters = {
    beneficiaries,
    countries,
    charitySize,
    ausState,
  };
  return filters;
};

export default getCharityFilters;
