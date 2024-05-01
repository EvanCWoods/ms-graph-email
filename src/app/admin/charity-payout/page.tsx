import { Suspense } from "react";
import PayoutCharityList from "~/app/components/admin/charityPayouts/payoutCharityList";
import Loading from "~/app/loading";

export const metadata = {
  title: "Charity Payouts",
};

const CharityPayoutPage = () => {
  const renderListLoading = () => {
    return (
        <Loading />
    );
  };
  return (
    <div className="flex h-screen w-full flex-col items-center gap-4">
      <h1 className="text-3xl">Future Payouts</h1>
      <Suspense fallback={renderListLoading()}>
        <div className="w-full max-w-4xl p-4">
          <PayoutCharityList />
        </div>
      </Suspense>
    </div>
  );
};

export default CharityPayoutPage;
