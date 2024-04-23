/**
 * Renders a component displaying the total donations received.
 *
 * @returns {JSX.Element} The rendered component.
 */
const TotalDonationsRecieved = () => {
  return (
    <div className="m-3 flex h-[160px] w-[200px] flex-wrap justify-center rounded-lg p-5 shadow-lg">
      <h1 className="w-full text-center">Total Donations Recieved</h1>
      <p className="text-2xl">0</p>
    </div>
  );
};

export default TotalDonationsRecieved;
