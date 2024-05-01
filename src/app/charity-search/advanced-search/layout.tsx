import Filters from "~/app/components/charitySearch/advanced/filters";
import "~/styles/globals.css";

export const metadata = {
  title: "Advanced Search",
  description: "Search for your favourite charities to support, from well known NFP's such as Australian Red Cross, to the charity that your neighbors runs from their spare room",
};

export default function AdvancedSearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-4 flex flex-wrap">
      <div className="mb-4 w-full min-w-[300px] flex-shrink-0 md:w-[30%]">
        <Filters />
      </div>
      <div className="w-full flex-grow md:w-[70%]">{children}</div>
    </div>
  );
}
