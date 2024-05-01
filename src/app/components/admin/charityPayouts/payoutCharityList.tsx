/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { getPayouts } from "~/app/server-actions/transactions/getPayouts";

const PayoutCharityList = async () => {
  const data = await getPayouts();
  console.log(data)

  const renderData = () => {
    if (!data) return null;
    return data.map((charity: any) => (
      <div
        key={charity.charityId}
        className="flex flex-col gap-3 rounded-xl border px-5 py-3 shadow-lg"
      >
        <div className="flex justify-between">
          <p className="text-xl">{charity.charityName}</p>
          <p
            className={`rounded-[20px] px-3 py-2 ${charity.verified ? "bg-green-700" : "bg-red-700"} text-white cursor-default`}
            title={
              charity.verified
                ? ""
                : "Donations cannot be distributed to the charity automatically"
            }
          >
            {charity.verified ? "Registered" : "Un-Registered"}
          </p>
        </div>
        <p className="text-xl">
          Total: <span className="font-bold">${charity.sum / 100}</span>
        </p>
      </div>
    ));
  };
  return (
    <div className="flex flex-col gap-3">
      {renderData()}
    </div>
  );
};

export default PayoutCharityList;
