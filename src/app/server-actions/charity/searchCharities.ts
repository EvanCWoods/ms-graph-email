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
  location: string,
  beneficiaries: string,
  state:string,
  countries: string,
): Promise<Charity[]> => {
  console.log({
    search,
    location,
    beneficiaries,
    state,
    countries,
  });

  // Create a new URL object and set the initial parameters
  const url = new URL("https://www.acnc.gov.au/api/dynamics/search/charity");

  url.searchParams.append("f[]", `status:Registered`);

  if (search) {
    url.searchParams.set("search", search);
  }
  if (location) {
    url.searchParams.set("location", location);
  }
  if (beneficiaries) {
    url.searchParams.append("f[]", `beneficiaries:${beneficiaries}`);
  }
  if (state) {
    url.searchParams.append("f[]", `operating_state:${state}`);
  }
  if (countries) {
    url.searchParams.append("f[]", `countries:${countries}`);
  }
  console.log(url);
  const response = await fetch(url);

  const data = await response.json();

  return data.results;
};

export default searchCharities;
