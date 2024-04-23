/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

interface ICharityList {
  classie_id: string;
  name: string;
  uuid: string;
  parent_id: string | null;
  parent_list: string[];
  data: {
    uuid: string;
    Name: string;
    ProgramBeneficiaries: any[]; // Assuming ProgramBeneficiaries can be any type of array
    ProgramCountries: any[]; // Assuming ProgramCountries can be any type of array
    ProgramLocations: any[]; // Assuming ProgramLocations can be any type of array
    ProgramClassie: any[]; // Assuming ProgramClassie can be any type of array
    CharityName: string;
    CharityUuid: string;
    _score: number;
  };
}

/**
 * Retrieves a list of charities based on the specified category.
 *
 * @param parentId - The ID of the parent category. Optional.
 * @returns A promise that resolves to an array of ICharityList objects, or null if an error occurs.
 * @throws An error if the charity table fails to fetch.
 */
export const getCharitiesByCatagory = async (
  parentId?: string,
): Promise<ICharityList[] | null> => {
  try {
    const requestUrl = `https://www.acnc.gov.au/api/dynamics/search/program?classie=${parentId}`;

    const response = await fetch(requestUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch charity table");
    }

    const data = await response.json();
    //console.log(data.results);
    return data.results;
  } catch (error) {
    console.error("Error fetching charity table:", error);
    return null;
    throw error;
  }
};
