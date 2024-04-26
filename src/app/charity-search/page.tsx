// "use client"
// import { useState } from "react";
import SearchTile from "~/app/components/charitySearch/searchTypeTile";
import YourCharitiesIcon from "~/assets/yourCharitiesIcon";
import CurrentCharities from "../components/dashboard/profile/currentCharities";
import Link from "next/link";


interface IProps {
  searchParams: {
    open?: boolean;
  };
}

const SearchPage: React.FC<IProps> = ( { searchParams }) => {
  // const [openModal, setOpenModal] = useState(false);

  // const handleOpenCharitiesModal = () => {
  //   setOpenModal(true);
  // };

  // const handleCloseModal = () => {
  //   setOpenModal(false);
  // };

  return (
    <div>
      <div className="flex justify-between items-center mt-16 w-full px-10">
        <h1 className="text-center text-3xl flex-1">Find Charities</h1>
        <Link href="/charity-search?open=true" className="flex justify-center items-center w-12 h-12">
          <YourCharitiesIcon />
        </Link>
      </div>
      <div className="width-full my-20 gap-5 flex flex-wrap justify-center">
        <SearchTile
          redirectUrl="charity-search/advanced-search"
          text="Advanced Search"
        />
        <SearchTile
          redirectUrl="charity-search/filter-search"
          text="Filter Search"
        />
      </div>
      { searchParams.open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg min-w-[300px]">
            <div className="flex justify-end">
            <Link href="/charity-search" className="mt-4  text-brand-orange px-4 py-2">
              Close
            </Link>
            </div>
            <CurrentCharities />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
