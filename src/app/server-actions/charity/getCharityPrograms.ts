/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";

/**
 * Retrieves charity programs from the ACNC API.
 *
 * @param parentId - Optional. The ID of the parent program.
 * @returns A promise that resolves to an array of charity programs, or null if there was an error.
 * @throws An error if the API request fails.
 */
export const getCharityPrograms = async (
  parentId?: string,
) => {
  try {
    let requestUrl;
    if (parentId) {
      requestUrl = `https://www.acnc.gov.au/api/classie/search?parent=${parentId}`;
    } else {
      requestUrl = `https://www.acnc.gov.au/api/classie/search`;
    }
    const response = await fetch(requestUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch charity programs");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching charity programs:", error);
    return null;
  }
};
