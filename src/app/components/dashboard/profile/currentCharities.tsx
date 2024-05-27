// import OneTimeDonationButton from "~/app/components/core/oneTimeDonationButton";
import getUserCurrentCharities from "~/app/server-actions/user/getUserCurrentCharities";
import CurrentCharityActions from "./currentCharityActions";

/**
 * Renders the current charities component.
 *
 * This component retrieves the current charities from the server and renders them in a list format.
 * Each charity is displayed with its name and the amount donated.
 * The component also includes a button to make a one-time donation to a specific charity.
 *
 * @returns {React.ReactNode} The rendered current charities component.
 */
const CurrentCharities = async () => {
  const currentCharities = await getUserCurrentCharities();

  const renderCharities = () => {
    if (!currentCharities) return;

    return currentCharities.map((charity) => {
      return (
        <div
          key={charity.charityId}
          className="flex w-full items-center justify-between px-5 py-2"
        >
          <div className="flex-grow">
            <span className="mr-4 font-medium">{charity.charityName}</span>
            <span className="font-semibold">${charity.amount / 100}</span>
          </div>
          <div className="flex">
            <CurrentCharityActions charityId={charity.charityId} charityName={charity.charityName} subscriptionId={charity.subscriptionId} paused={charity.paused} />
          </div>
        </div>
      );
    });
  };
  return (
    <div className=" flex w-full flex-wrap justify-center rounded-lg border pt-2 shadow-lg">
      <h1 className="text-2xl text-gray-600">My Charities</h1>
      <div className="my-2 w-full border-b"></div>
      <div className="max-h-[250px] w-full overflow-y-scroll">
        {renderCharities()}
      </div>
    </div>
  );
};

export default CurrentCharities;
