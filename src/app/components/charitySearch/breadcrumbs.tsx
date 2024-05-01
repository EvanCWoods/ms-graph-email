/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";

const BreadCrumbs: React.FC<any> = ({ programs }) => {
  const renderBreadcrumbs = () => {
    const dataArray = [];

    if (programs.results && programs.results.length > 0) {
      for (const key in programs.results[0].parent_list) {
        dataArray.push({
          id: key,
          name: programs.results[0].parent_list[key],
        });
      }
    }

    if (programs.parent?.parent_list && programs.results.length < 1) {
      for (const key in programs.parent.parent_list) {
        console.log(key, programs.parent.parent_list[key]);
        dataArray.push({
          id: key,
          name: programs.parent.parent_list[key],
        });
      }
      if (programs.results.length < 1) {
        dataArray.push({
          id: programs.parent.classie_id,
          name: programs.parent.name,
        });
      }
    }

    return dataArray.map((item, index) => (
      <span key={item.id}>
        {index > 0 && <span className="mx-2">/</span>}
        <span
          className={
            index === dataArray.length - 1 ? "text-brand-orange" : "text-gray-500"
          }
        >
          <Link href={`/charity-search/filter-search?parent=${item.id}`}>
            {item.name}
          </Link>
        </span>
      </span>
    ));
  };

  return (
    <div className="mb-1 w-full">
      <span className="text-gray-500">
        <Link href={`/charity-search/filter-search`}>Filter Search</Link>
      </span>
      <span className="mx-2">/</span>
      {renderBreadcrumbs()}
    </div>
  );
};

export default BreadCrumbs;
