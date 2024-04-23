/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import "server-only";

type CharityData = {
  Name: string;
  Abn: string;
  charitySize: string;
  AddressSuburb: string;
  AddressStateOrProvince: string;
};

type Charity = {
  id: string;
  uuid: string;
  data: CharityData;
};

const searchCharities = async (
  search: string,
  postCode: string,
  beneficiaries: string,
  location: string,
): Promise<Charity[]> => {
  console.log({
    search,
    postCode,
    beneficiaries,
    location,
  });

  // Create a new URL object and set the initial parameters
  const url = new URL("https://www.acnc.gov.au/api/dynamics/search/charity");

  url.searchParams.append("f[]", `status:Registered`);

  if (search) {
    url.searchParams.set("search", search);
  }
  if (postCode) {
    url.searchParams.set("location", postCode);
  }

  const response = await fetch(url);

  const data = await response.json();

  return data.results;
};

export default searchCharities;
