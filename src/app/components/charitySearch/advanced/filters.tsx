/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Button from "~/app/components/core/button";
import getCharityFilters from "~/app/server-actions/user/getCharityFilters";
import setAdvancedSearchFilters from "~/app/server-actions/user/setAdvancedSearchFilters";
interface IFilter {
  label: string;
  value: string;
}

const Filters = async () => {
  const data = await getCharityFilters();
  //console.log(data)
  const labelStyles = "mb-2 mt-3 block text-sm font-medium text-gray-700";
  const inputStyles =
    "border-grey-100 h-[35px] w-full rounded-md border text-base px-2";
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="h-full w-full rounded-md p-3 py-4 shadow">
        <h2 className="mb-2 text-center text-xl font-medium">
          Find the communities you want to support
        </h2>
        <form action={setAdvancedSearchFilters}>
          <div className="flex w-full flex-col">
            <div className="px-2">
              <label className={labelStyles}>
                Search by Charity Name or ABN
              </label>
              <input type="text" name="search-text" className={inputStyles} />
            </div>
            <div className="px-2">
              <label className={labelStyles}>
                Charity Location by Post Code
              </label>
              <input type="text" name="postcode" className={inputStyles} />
            </div>
            <div className="px-2">
              <label className={labelStyles}>Who the Charity Helps</label>
              <select
                className={inputStyles}
                defaultValue={""}
                name="beneficiaries"
              >
                <option value="" disabled>
                  Select Beneficiaries
                </option>
                {data.beneficiaries.map((beneficiary: IFilter) => (
                  <option key={beneficiary.value} value={beneficiary.value}>
                    {beneficiary.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="px-2">
              <label className={labelStyles}>Countries of Operation</label>
              <select
                className={inputStyles}
                defaultValue={""}
                name="countries"
              >
                <option value="" disabled className="text-red-500">
                  Select Countries
                </option>
                {data.countries.map((country: IFilter) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
            </div>
            {/* <div className="px-2">
                <label className={labelStyles}>
                  States of Operation (AUS)
                </label>
                <select
                  className={inputStyles}
                  defaultValue={""}
                  name="state"
                >
                  <option value="" disabled>
                    Select States(AUS)
                  </option>
                  {data.ausState.map((state: IFilter) => (
                    <option key={state.value} value={state.value}>
                      {state.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="px-2">
                <label className={labelStyles}>
                  Charity Size
                </label>
                <select
                  className={inputStyles}
                  defaultValue={""}
                  name="size"
                >
                  <option value="" disabled>
                    Select Charity Size
                  </option>
                  {data.charitySize.map((size: IFilter) => (
                    <option key={size.value} value={size.value}>
                      {size.label}
                    </option>
                  ))}
                </select>
              </div> */}
          </div>
          <div className="mt-4 flex w-full items-center gap-2">
            <Button
              text="Clear Filters"
              redirectUrl="/charity-search/advanced-search"
              variant="tertiary"
              className="w-full rounded-lg p-1 text-center"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-brand-orange px-6 py-1 text-white hover:shadow-lg"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filters;
