export interface ITableHeadColumns {
  columns: string[];
}

const TableHead: React.FC<ITableHeadColumns> = ({ columns }) => {
  const renderColumns = () => {
    if (!columns) return null;
    return columns.map((column) => (
      <th
        key={column}
        className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
      >
        {column}
      </th>
    ));
  };
  return (
    <thead>
      <tr>{renderColumns()} </tr>
    </thead>
  );
};

export default TableHead;
