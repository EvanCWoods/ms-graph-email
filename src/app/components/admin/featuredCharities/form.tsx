import redirectForCharitySearch from "~/app/server-actions/admin/redirectForCharitySearch";

/**
 * Renders a form for searching charities to feature.
 *
 * @returns {JSX.Element} The rendered form component.
 */
const Form = async () => {
  return (
    <form action={redirectForCharitySearch}>
      <div className="mt-10 flex flex-wrap justify-center">
        <label className="w-full text-center text-xl">
          Search charities to feature
        </label>
        <input
          className="border-grey-100 mt-3 h-[35px] w-full rounded-md border text-lg"
          placeholder="Search by name"
          name="search-input"
        />
      </div>
      <div className="w-full text-center">
        <button
          type="submit"
          className="my-2 rounded-lg bg-brand-orange px-6 py-1 text-white"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Form;
