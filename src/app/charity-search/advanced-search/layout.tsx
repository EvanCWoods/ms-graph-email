import Filters from "~/app/components/charitySearch/advanced/filters";
import "~/styles/globals.css";

export const metadata = {
  title: "Advanced Search",
};

export default function AdvancedSearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-4 flex flex-wrap">
      <div className="mb-4 w-full min-w-[300px] md:w-[350px]">
        <Filters />
      </div>
      <div className="w-full md:w-[60%] lg:w-[65%]">{children}</div>
    </div>
  );
}
