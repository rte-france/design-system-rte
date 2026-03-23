import { computeCheckedIdsAfterToggle, resetMovingTabIndex } from "@design-system-rte/core";
import { TreeviewItemProps } from "@design-system-rte/core/components/treeview/treeview-item.interface";
import { Fragment, useEffect, useRef, useState } from "react";

import { useSelectItem } from "./hooks/useSelectItem";
import styles from "./Treeview.module.scss";
import TreeviewItem from "./treeviewItem/TreeviewItem";
import { onFocusIn, onFocusOut, onKeyDown } from "./treeviewService";

interface TreeviewProps extends Omit<React.HTMLAttributes<HTMLUListElement>, "onChange"> {
  items: TreeviewItemProps[];
  isCompact?: boolean;
  selectedId?: string;
  onChange?: (id: string) => void;
  onCheckedIdsChange?: (checkedIds: string[]) => void;
  selectedPath?: string;
  hasCheckbox?: boolean;
  id?: string;
}

const Treeview = ({
  items,
  isCompact,
  selectedId,
  onChange,
  selectedPath,
  hasCheckbox,
  id = "treeview",
}: TreeviewProps) => {
  const { internalSelectedId, setInternalSelectedId } = useSelectItem(selectedId!, selectedPath, items);
  const [checkedIds, setCheckedIds] = useState<string[]>([]);
  const treeRef = useRef<HTMLUListElement>(null);

  const handleCheckedIdsChange = (node: TreeviewItemProps) => {
    const res = Array.from(computeCheckedIdsAfterToggle(new Set(checkedIds), node, items));
    setCheckedIds(res);
  };

  useEffect(() => {
    if (treeRef.current) {
      const treeElement = treeRef.current;
      resetMovingTabIndex(treeElement);

      const handleKeyDown = (event: KeyboardEvent): void => {
        onKeyDown(event, treeElement);
      };

      const handleFocusIn = (event: FocusEvent): void => {
        onFocusIn(treeElement, event);
      };

      const handleFocusOut = (event: FocusEvent): void => {
        onFocusOut(treeElement, event);
      };

      treeElement.addEventListener("keydown", handleKeyDown, true);
      treeElement.addEventListener("focusin", handleFocusIn);
      treeElement.addEventListener("focusout", handleFocusOut);

      return () => {
        treeElement.removeEventListener("keydown", handleKeyDown, true);
        treeElement.removeEventListener("focusin", handleFocusIn);
        treeElement.removeEventListener("focusout", handleFocusOut);
      };
    }
  }, []);

  const hasCheckedItems = () => {
    return false;
  };

  const handleItemChange = (id: string) => {
    setInternalSelectedId(id);
    onChange?.(id);
  };

  return (
    <ul
      className={styles["rte-treeview"]}
      data-compact={isCompact}
      data-has-checked-items={hasCheckedItems()}
      role="tree"
      ref={treeRef}
    >
      {items.map((item, index) => (
        <Fragment key={(item.id || item.labelText) + index}>
          <TreeviewItem
            treeId={id}
            key={item.id}
            {...item}
            isCompact={isCompact}
            onChange={handleItemChange}
            selectedId={internalSelectedId!}
            hasCheckbox={item.hasCheckbox ?? hasCheckbox}
            onCheckedIdsChange={handleCheckedIdsChange}
            checkedIds={checkedIds}
          />
        </Fragment>
      ))}
    </ul>
  );
};

export default Treeview;
