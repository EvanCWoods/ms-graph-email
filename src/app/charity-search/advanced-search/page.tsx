import Table from "~/app/components/charitySearch/advanced/table";

interface IProps {
  searchParams: {
    search: string;
    postcode: string;
    beneficiaries: string;
    countries: string;
  };
}

const searchPage: React.FC<IProps> = ({ searchParams }) => {
  return <Table searchParams={searchParams} />;
};

export default searchPage;
