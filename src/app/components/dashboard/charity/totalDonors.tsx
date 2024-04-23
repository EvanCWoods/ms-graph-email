/**
 * Renders a component displaying the total number of donors.
 *
 * @returns {JSX.Element} The rendered component.
 */
const TotalDonors = async () => {
  return (
    <div className="m-3 flex h-[160px] w-[200px] flex-wrap justify-center rounded-lg p-5 shadow-lg">
      <h1 className="w-full text-center">Total Donors</h1>
      <p className="text-2xl">0</p>
    </div>
  );
};

export default TotalDonors;
