import saveCharityBankDetails from "~/app/server-actions/charity/saveCharityBankDetails";

/**
 * Renders a form for adding charity bank details.
 *
 * @returns {JSX.Element} The rendered component.
 */
const AddCharityBankData = () => {
  return (
    <div>
      <div className="flex  flex-wrap items-center justify-center">
        <div className="h-full w-1/3 rounded-md p-3 py-8 shadow">
          <h2 className="mb-2 justify-center text-center text-xl font-semibold">
            Now comes the exciting part, getting Donations
          </h2>
          <form action={saveCharityBankDetails}>
            <div>
              <input
                type="text"
                name="account-name"
                className="border-grey-100 mt-3 h-[35px] w-full rounded-md border text-lg"
                placeholder="Account Name"
              />
            </div>
            <div>
              <input
                type="text"
                name="account-number"
                className="border-grey-100 mt-3 h-[35px] w-full rounded-md border text-lg"
                placeholder="Account Number"
              />
            </div>
            <div>
              <input
                type="text"
                name="bsb"
                className="border-grey-100 my-3 h-[35px] w-full rounded-md border text-lg"
                placeholder="BSB"
              />
            </div>
            <div className="w-full text-center">
              <button
                type="submit"
                className="mt-4 rounded-lg bg-brand-orange px-6 py-1 text-white"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCharityBankData;
