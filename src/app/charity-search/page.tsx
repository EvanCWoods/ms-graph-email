import SearchTile from "~/app/components/charitySearch/searchTypeTile";

const searchPage = () => {
  return (
    <div>
      <h1 className="mt-16 text-center text-3xl">Find Charities</h1>
      <div className="width-full my-20 flex flex-wrap justify-center">
        <SearchTile
          redirectUrl="charity-search/advanced-search"
          text="Advanced Search"
        />
        <SearchTile
          redirectUrl="charity-search/filter-search"
          text="Filter Search"
        />
        <SearchTile
          redirectUrl="charity-search/your-charities"
          text="Your charities"
        />
      </div>
    </div>
  );
};

export default searchPage;
