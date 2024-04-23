/* eslint-disable @typescript-eslint/no-floating-promises */
"use client";
import { useState } from "react";
import { saveUserAccountType } from "~/app/server-actions/user/saveUserAccountType";

/**
 * AccountTypeCard component.
 *
 * This component renders a form with buttons for selecting the account type (individual, company, charity).
 * When the form is submitted, it calls the saveUserAccountType function to save the selected account type.
 *
 * @returns {React.FC} The AccountTypeCard component.
 */
const AccountTypeCard: React.FC = () => {
  const [accountType, setAccountType] = useState<string>("");

  const buttonStyles =
    "shadow-md size-[150px] md:size-[200px] rounded-md text-brand-orange text-xl font-medium";
  return (
    <div className="w-full rounded-lg bg-white p-4">
      <h1 className="my-10 text-center text-2xl md:text-3xl">
        What kind of account best fits you?
      </h1>
      <form
        action={saveUserAccountType}
        className="flex flex-col items-center justify-center gap-6"
      >
        <input type="hidden" name="account-type" value={accountType} />
        <div className="flex flex-wrap justify-center gap-6">
          <button
            onClick={() => setAccountType("individual")}
            className={buttonStyles}
          >
            Individual
          </button>
          <button
            onClick={() => setAccountType("company")}
            className={buttonStyles}
          >
            Company
          </button>
          <button
            onClick={() => setAccountType("charity")}
            className={buttonStyles}
          >
            Charity
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountTypeCard;
