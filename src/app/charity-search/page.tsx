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

const SearchPage: React.FC<IProps> = async ( { searchParams }) => {

  // const [openModal, setOpenModal] = useState(false);

  // const handleOpenCharitiesModal = () => {
  //   setOpenModal(true);
  // };

  // const handleCloseModal = () => {
  //   setOpenModal(false);
  // };

  return (
    <div>
      <div className="mt-16 flex w-full items-center justify-between px-10">
        <h1 className="flex-1 text-center text-3xl">Find Charities</h1>
        <Link
          href="/charity-search?open=true"
          className="flex h-12 w-12 items-center justify-center"
        >
          <YourCharitiesIcon />
        </Link>
      </div>
      <div className="width-full my-20 flex flex-wrap justify-center gap-5">
        <SearchTile
          redirectUrl="charity-search/advanced-search"
          text="Search"
        />
        <SearchTile redirectUrl="charity-search/filter-search" text="Filter" />
      </div>
      {searchParams.open && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
          <div className="min-w-[300px] rounded-lg bg-white shadow-lg">
            <div className="flex justify-end">
              <Link
                href="/charity-search"
                className="mt-4  px-4 py-2 text-brand-orange"
              >
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
