import updateDonationAmount from "~/app/server-actions/user/updateDonationAmount";

/**
 * Renders a form for the user to enter their donation amount.
 *
 * @returns {JSX.Element} The rendered form component.
 */
const CustomDonationAmount = async () => {
  return (
    <div className="mx-5 h-full rounded-lg px-5 py-10 shadow-lg border">
      <p className="py-5 text-center text-xl font-medium text-gray-700">
        Enter Your Donation Amount
      </p>

      <form action={updateDonationAmount}>
        <input
          type="number"
          name="donation-amount"
          placeholder="e.g. $25"
          className="my-3 w-full rounded-md border-2 border-gray-300 p-2 text-gray-700 focus:border-brand-orange focus:ring focus:ring-brand-orange focus:ring-opacity-50"
        />
       <div className="flex justify-center">
       <button
          type="submit"
          className="rounded bg-brand-orange px-4 py-2 text-base text-[#fff] shadow-md hover:shadow-lg"
        >
          Save & Continue
        </button>
       </div>
      </form>
    </div>
  );
};

export default CustomDonationAmount;
