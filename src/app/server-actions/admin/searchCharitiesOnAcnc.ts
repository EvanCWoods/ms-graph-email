/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";

interface ICharity {
  name: string;
  abn: string;
  address: string;
}

/**
 * Searches for charities on the ACNC API based on a search term.
 *
 * @param searchTerm - The search term to filter the charities by. Optional.
 * @returns A promise that resolves to an array of charity objects.
 */
const searchCharitiesOnAcnc = async (
  searchTerm?: string,
): Promise<ICharity[]> => {
  console.log(searchTerm);

  // Make a request to the ACNC API
  const response = await fetch(
    `https://www.acnc.gov.au/api/dynamics/search/charity?search=${searchTerm}`,
  );

  const charityList: ICharity[] = [];

  // Parse the response
  const data = await response.json();
  data.results.map((charity: any) => {
    console.log(charity);
    const data = {
      name: charity.data.Name,
      abn: charity.data.Abn,
      address: `${charity.data.AddressSuburb}, ${charity.data.AddressStateOrProvince}`,
      id: charity.uuid,
    };
    charityList.push(data);
  });
  return charityList;
};

export default searchCharitiesOnAcnc;
