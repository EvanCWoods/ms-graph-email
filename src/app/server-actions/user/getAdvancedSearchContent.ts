/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";

const getCharitiesBySearch = async () => {
  const url = new URL("https://www.acnc.gov.au/api/dynamics/search/charity");
  url.searchParams.append("f[]", `status:Registered`);
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

  return data;
};

export default getCharitiesBySearch;
