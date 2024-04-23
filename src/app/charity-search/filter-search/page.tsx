import SimpleCharityFilter from "~/app/components/charitySearch/charityProgramFilter";

interface IProps {
  searchParams: {
    parent?: string;
  };
}

const searchPage: React.FC<IProps> = async ({ searchParams }) => {
  const { parent } = searchParams;

  return (
    <div>
      <SimpleCharityFilter parentId={parent} />
    </div>
  );
};

export default searchPage;
