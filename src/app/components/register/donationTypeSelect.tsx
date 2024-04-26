"use client";
import { useState } from "react";
import saveDonationSchedule from "~/app/server-actions/user/saveDonationSchedule";


interface IProps {
    id: string;
}

const DonationTypeSelect: React.FC<IProps> = ({ id }) => {
      const [donationType, setDonationType] = useState<string>("");

      const buttonStyles =
        "shadow-md size-[150px] md:size-[200px] rounded-xl text-brand-orange border border-brand-orange hover:text-white hover:bg-brand-orange text-xl font-medium";
      return (
        <div className="w-full rounded-lg bg-white p-4">
          <h1 className="my-10 text-center text-2xl md:text-3xl">
            What Donation Schedule Fits Best?
          </h1>
          <form
            action={saveDonationSchedule}
            className="flex flex-col items-center justify-center gap-6"
          >
            <input
              type="hidden"
              name="donation-schedule"
              value={donationType}
            />
            <input type="hidden" name="id" value={id} />
            <div className="flex flex-wrap justify-center gap-6">
              <button
                onClick={() => setDonationType("single")}
                className={buttonStyles}
              >
                One Time
              </button>
              <button
                onClick={() => setDonationType("monthly")}
                className={buttonStyles}
              >
                Monthly
              </button>
            </div>
          </form>
        </div>
      );
}

export default DonationTypeSelect