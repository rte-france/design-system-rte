import { TreeviewBorderType } from "@design-system-rte/core/components/treeview/treeview-item.interface";
import {
  TREEVIEW_BORDER_SVG_MAP,
  TREEVIEW_BORDER_SVG_MAP_COMPACT,
} from "@design-system-rte/core/components/treeview/treeview.constants";
import { Fragment } from "react/jsx-runtime";

import { concatClassNames } from "../../utils";

import styles from "./TreeviewItemBorder.module.scss";

const TreeviewItemBorder = ({ isCompact, borderType }: { isCompact: boolean; borderType: TreeviewBorderType }) => {
  const getSvgConfig = () => {
    const elements = isCompact ? TREEVIEW_BORDER_SVG_MAP_COMPACT : TREEVIEW_BORDER_SVG_MAP;
    return elements[borderType];
  };

  return (
    <div className={styles["rte-treeview-item-border-container"]} data-is-compact={isCompact}>
      <svg
        className={concatClassNames(styles["rte-treeview-item-border"])}
        fill="none"
        aria-hidden="true"
        width={getSvgConfig().width}
        height={getSvgConfig().height}
        viewBox={getSvgConfig().viewBox}
      >
        {getSvgConfig().elements.map((element, index) => (
          <Fragment key={index}>
            {element.kind === "path" ? (
              <path className={styles["rte-treeview-item-border-path"]} key={index} d={element.d} />
            ) : (
              <line
                className={styles["rte-treeview-item-border-path"]}
                key={index}
                x1={element.x1}
                y1={element.y1}
                x2={element.x2}
                y2={element.y2}
              />
            )}
          </Fragment>
        ))}
      </svg>
    </div>
  );
};

export default TreeviewItemBorder;
