import "./Table.scss";

interface TableProps {
  options: {
    headers: string[];
    lines: string[][];
  };
}

const Table = ({ options }: TableProps) => {
  return (
    <div className="rte-stories table-wrapper">
      <table className="rte-stories-table">
        <thead>
          <tr>
            {options.headers.map((header, index) => (
              <th scope="col" key={index}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {options.lines.map((line, index) => (
            <tr key={index + line[index]}>
              {line.map((cell, cellIndex) => {
                if (cellIndex === 0) {
                  return (
                    <th scope="row" key={cellIndex}>
                      {cell}
                    </th>
                  );
                } else {
                  return <td key={cellIndex}>{cell}</td>;
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
