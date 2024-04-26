/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";

/**
 * Retrieves a single charity by its ID.
 *
 * @param {string} charityId - The ID of the charity to retrieve.
 * @returns {Promise<any>} - A promise that resolves to the data of the retrieved charity.
 */
const getOneCharityById = async (charityId: string) => {
  const response = await fetch(
    `https://www.acnc.gov.au/api/dynamics/entity/${charityId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const data = await response.json();
 console.log(data);
  return data.data;
};

export default getOneCharityById;
