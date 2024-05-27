/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */

const checkDGRStatus = async (abn: string): Promise<boolean | null> => {
  const url = `https://www.abr.business.gov.au/ABN/View/${abn}`;

  const response = await fetch(url);
  console.log({ url });

  // TODO: Check for
  const status = !(await response.text()).includes(
    "Not entitled to receive tax deductible gifts",
  );

  console.log({ status });

  if (typeof status !== "boolean") {
    return null;
  }
  return status;
};

export default checkDGRStatus;
