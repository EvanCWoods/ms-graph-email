import FeatureCharityButton from "~/app/components/admin/featuredCharities/featureCharityButton";
import getAllCharitiesFromDb from "~/app/server-actions/charity/getAllCharitiesFromDb";

export const metadata = {
  title: "Featured Charities",
};

const AdminFeaturedCharitiesPage = async () => {
  const data = await getAllCharitiesFromDb();

  const renderData = () => {
    if (!data || data.length === 0) return null;
    return (
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="w-1/3 border px-4 py-2">Name</th>
            <th className="w-1/3 border px-4 py-2">ABN</th>
            <th className="w-1/3 border px-4 py-2">Feature</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i} className="border">
              <td className=" px-4 py-2">{item.charityName}</td>
              <td className=" px-4 py-2">{item.abn}</td>
              <td className=" px-4 py-2">
                <FeatureCharityButton id={item._id as string} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="flex h-screen w-full flex-wrap justify-center">
      {/* <Form /> */}
      <div className="w-full max-w-4xl p-4">{renderData()}</div>
    </div>
  );
};

export default AdminFeaturedCharitiesPage;
