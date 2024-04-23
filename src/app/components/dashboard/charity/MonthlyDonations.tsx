/**
 * Renders a component displaying the number of monthly donors.
 *
 * @returns {JSX.Element} The rendered component.
 */
const MonthlyDonations = async () => {
  return (
    <div className="m-3 flex h-[160px] w-[200px] flex-wrap justify-center rounded-lg p-5 shadow-lg">
      <h1 className="w-full text-center">Monthly Donors</h1>
      <p className="text-2xl">0</p>
    </div>
  );
};

export default MonthlyDonations;
