/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";
import registerAsPayee from "../server-actions/stripe/registerAsPayee";
import sendPayouts from "../server-actions/stripe/sendPayout";

const testPage = async () => {
  await sendPayouts();
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-2xl rounded-lg border bg-white px-6 py-8 text-center shadow-lg md:px-12">
        <div className="mb-6">
          <h1 className="text-4xl font-semibold text-brand-orange">
            Become a Payee
          </h1>
          <p className="mb-8 mt-4 text-lg text-gray-700">
            As a charity, you are required to register as a payee with Stripe to
            receive donations. This registration process will ensure that all
            donations received are directly transferred to your bank account
            securely and efficiently.
          </p>
        </div>
        <ul className="mb-8 text-center text-gray-600">
          <li className="flex items-center gap-2">
            <svg
              className="h-6 w-6 text-brand-orange"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Fast and secure way to receive funds.</span>
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="h-6 w-6 text-brand-orange"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Direct integration with your financial tracking tools.</span>
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="h-6 w-6 text-brand-orange"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Compliance with regulatory standards.</span>
          </li>
        </ul>
        <form action={registerAsPayee}>
          <button className="rounded-lg border border-brand-orange bg-white px-5 py-2 text-lg text-brand-orange transition-colors duration-300 hover:bg-brand-orange hover:text-white">
            Become a Payee
          </button>
        </form>
      </div>
    </div>
  );
};

export default testPage;
