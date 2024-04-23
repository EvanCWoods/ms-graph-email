import TableHead from "./tableHead";

interface ITableProps {
  columns: string[];
  children: React.ReactNode;
}

const Table: React.FC<ITableProps> = ({ columns, children }) => {
  return (
    <table className="w-full">
      <TableHead columns={columns} />
      {children}
    </table>
  );
};

export default Table;
