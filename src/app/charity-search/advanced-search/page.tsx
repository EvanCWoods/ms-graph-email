import Table from "~/app/components/charitySearch/advanced/table";

interface IProps {
  searchParams: {
    search: string;
    location: string;
    beneficiaries: string;
    state: string;
    countries: string;
  };
}


const searchPage: React.FC<IProps> = ({ searchParams }) => {
  return (
    <div className="w-full flex md:px-5">
      <Table searchParams={searchParams} />
    </div>
  );
};

export default searchPage;
