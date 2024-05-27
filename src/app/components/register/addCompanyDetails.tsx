import saveCompanyDetails from "~/app/server-actions/user/saveCompanyDetails";

interface IProps {
  id: string;
  schedule: string;
}

const AddCompanyDetails: React.FC<IProps> = async ({ id, schedule }) => {
    return (
      <div className="flex w-full flex-wrap items-center justify-center lg:mt-24">
        {/* Title for the page */}
        {/* Form for the company name and ABN */}
        <div className="min-h-[300px] rounded-xl border px-5 py-5 shadow-lg">
          <h1 className="mb-5 w-full text-3xl">
            Let&apos;s get your company set up.
          </h1>
          <form action={saveCompanyDetails}>
            <div className="my-8 flex flex-wrap">
              <input type="hidden" name="id" value={id} />
              <input type="hidden" name="schedule" value={schedule} />
              <label className="w-full">Company Name</label>
              <input
                type="text"
                name="companyName"
                className="border-grey-300 h-[40px] w-full rounded-lg border text-lg"
              />
            </div>
            <div className="my-8 flex flex-wrap">
              <label className="w-full">ABN</label>
              <input
                type="text"
                name="abn"
                className="border-grey-300 h-[40px] w-full rounded-lg border text-lg"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded-lg border border-brand-orange py-2 text-brand-orange hover:bg-brand-orange hover:text-white"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default AddCompanyDetails;;