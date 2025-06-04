import {
  GridProps as CoreGridProps,
  ColProps as CoreColProps,
} from "@design-system-rte/core/components/grid/grid.interface";

import { concatClassNames } from "../utils";
import "@design-system-rte/core/components/grid/grid.scss";

interface GridProps extends CoreGridProps, Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  children: React.ReactNode[];
}

interface ColProps extends CoreColProps, Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  children?: React.ReactNode;
}

const Col = ({ children, className, xxs, xs, s, m, l, xl, ...props }: ColProps) => {
  const generateColumnClass = (prefix: string, size?: number) => (size ? `${prefix}-${size}` : "");

  const colClasses = concatClassNames(
    "col",
    generateColumnClass("col-xxs", xxs),
    generateColumnClass("col-xs", xs),
    generateColumnClass("col-s", s),
    generateColumnClass("col-m", m),
    generateColumnClass("col-l", l),
    generateColumnClass("col-xl", xl),
    className,
  );

  return (
    <div className={colClasses} {...props}>
      {children}
    </div>
  );
};

const Grid = ({ gridType = "fluid", className, children }: GridProps) => {
  const gridClasses = concatClassNames("grid", className);

  return (
    <div className={gridClasses} data-gridtype={gridType}>
      {children}
    </div>
  );
};

Grid.Col = Col;

export default Grid;
