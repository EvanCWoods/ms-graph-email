import getWebsiteStats from "~/app/server-actions/admin/getWebsiteStats";
import WebsiteStatCard from "./websiteStatCard";

/**
 * Retrieves website statistics and renders them as WebsiteStatCard components.
 *
 * @returns {React.ReactNode} The rendered WebsiteStatCard components.
 */
const WebsiteStats = async () => {
  const data = await getWebsiteStats();

  const renderData = () => {
    if (!data) return;

    return data.map((item, index: number) => (
      <div key={index}>
        <WebsiteStatCard
          name={item.name}
          count={item.count.toString()}
          redirectUrl={item.redirectUrl}
        />
      </div>
    ));
  };

  return (
    <div className="flex items-center justify-evenly text-center">
      {renderData()}
    </div>
  );
};

export default WebsiteStats;
