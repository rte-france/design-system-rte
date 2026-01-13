import { CSSProperties } from "react";
import "./Table.scss";

type ColumnSizeConfig = number | "auto" | "flex" | { min?: number; max?: number; width?: number };

interface TableProps {
  options: {
    headers: string[];
    lines: string[][];
  };
  columnWidths?: ColumnSizeConfig[];
}

function getColumnStyle(width: ColumnSizeConfig): CSSProperties {
  if (typeof width === "number") {
    return { width: `${width}px` };
  }
  if (width === "flex") {
    return {};
  }
  if (typeof width === "object") {
    const style: CSSProperties = {};
    if (width.width !== undefined) {
      style.width = `${width.width}px`;
    }
    if (width.min !== undefined) {
      style.minWidth = `${width.min}px`;
    }
    if (width.max !== undefined) {
      style.maxWidth = `${width.max}px`;
    }
    return style;
  }
  return {};
}

function getColumnClassName(width: ColumnSizeConfig): string {
  if (width === "flex") {
    return "rte-stories-table-col-flex";
  }
  if (typeof width === "object" && width.min !== undefined && width.width === undefined) {
    return "rte-stories-table-col-min-width";
  }
  return "";
}

function getCellStyle(width: ColumnSizeConfig): CSSProperties {
  if (typeof width === "object" && width.min !== undefined) {
    return { minWidth: `${width.min}px` };
  }
  return {};
}

const Table = ({ options, columnWidths: columnSizeConfigs }: TableProps) => {
  const hasCustomWidths = !!columnSizeConfigs?.length;
  const isTwoColumnTable = !hasCustomWidths && options.headers.length === 2;
  const allFixedWidths =
    hasCustomWidths &&
    columnSizeConfigs.every(
      (columnSizeConfig) =>
        typeof columnSizeConfig === "number" ||
        (typeof columnSizeConfig === "object" &&
          columnSizeConfig.width !== undefined &&
          columnSizeConfig.min === undefined),
    );
  const tableLayout = allFixedWidths || isTwoColumnTable ? "fixed" : "auto";

  return (
    <div className="rte-stories table-wrapper">
      <table
        className={`rte-stories-table ${isTwoColumnTable ? "rte-stories-table-two-columns sb-unstyled" : "sb-unstyled"}`}
        style={{ tableLayout }}
      >
        {hasCustomWidths && (
          <colgroup>
            {columnSizeConfigs.map((width, index) => (
              <col key={index} style={getColumnStyle(width)} className={getColumnClassName(width)} />
            ))}
          </colgroup>
        )}
        {isTwoColumnTable && (
          <colgroup>
            <col style={{ width: "50%" }} />
            <col style={{ width: "50%" }} />
          </colgroup>
        )}
        <thead>
          <tr>
            {options.headers.map((header, index) => {
              const cellStyle =
                hasCustomWidths && columnSizeConfigs[index] ? getCellStyle(columnSizeConfigs[index]) : {};
              return (
                <th scope="col" key={index} style={cellStyle}>
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {options.lines.map((line, index) => (
            <tr key={index + line[index]}>
              {line.map((cell, cellIndex) => {
                const cellStyle =
                  hasCustomWidths && columnSizeConfigs[cellIndex] ? getCellStyle(columnSizeConfigs[cellIndex]) : {};
                if (cellIndex === 0) {
                  return (
                    <th scope="row" key={cellIndex} style={cellStyle}>
                      {cell}
                    </th>
                  );
                } else {
                  return (
                    <td key={cellIndex} style={cellStyle}>
                      {cell}
                    </td>
                  );
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
