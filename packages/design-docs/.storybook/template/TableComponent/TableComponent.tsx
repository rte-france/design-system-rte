import style from "./TableComponent.module.scss";

interface TableRow {
  label: string;
  value?: string | number;
  value2?: string | number;
  value3?: string | number;
  values?: (string | number)[];
}

interface TableComponentProps {
  headers: string[];
  rows: TableRow[];
}

function TableComponent({ headers, rows }: TableComponentProps) {
  function getRowValues(row: TableRow): (string | number)[] {
    if (row.values) {
      return row.values;
    }
    const values: (string | number)[] = [];
    if (row.value !== undefined) {
      values.push(row.value);
    }
    if (row.value2 !== undefined) {
      values.push(row.value2);
    }
    if (row.value3 !== undefined) {
      values.push(row.value3);
    }
    return values;
  }

  return (
    <table className={style.table}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className={style.headerCell}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          const values = getRowValues(row);
          return (
            <tr key={index} className={style.row}>
              <td className={style.cell}>{row.label}</td>
              {values.map((value, valueIndex) => (
                <td key={valueIndex} className={style.cell}>
                  {value}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableComponent;
