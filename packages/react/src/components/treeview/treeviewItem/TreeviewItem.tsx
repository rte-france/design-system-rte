import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core";
import { TreeviewItemProps as coreTreeviewItem } from "@design-system-rte/core/components/treeview/treeview-item.interface";
import {
  buildTreeviewNodeId,
  BuildTreeviewNodeIdParams,
  computeCheckboxId,
  computeConnectorBorderTypes,
  getChildBorderTypes,
  hasChildren,
  isNodeIndeterminate,
} from "@design-system-rte/core/components/treeview/treeview.utils";
import { useState } from "react";

import Badge from "../../badge/Badge";
import Checkbox from "../../checkbox/Checkbox";
import Dropdown from "../../dropdown/Dropdown";
import DropdownItem from "../../dropdown/dropdownItem/DropdownItem";
import Icon from "../../icon/Icon";
import { concatClassNames } from "../../utils";
import TreeviewItemBorder from "../treeviewItemBorder/TreeviewItemBorder";
import { computeIsChecked } from "../treeviewUtil";

import styles from "./TreeviewItem.module.scss";

interface TreeviewItemProps
  extends coreTreeviewItem, Omit<React.HTMLAttributes<HTMLLIElement>, "onChange" | "onClick"> {
  onOpenChange?: (id: string, isOpen: boolean) => void;
  onChange?: (id: string) => void;
  isSelected?: boolean;
  selectedId?: string;
  onActionIconClick?: (id: string) => void;
  itemIndex?: number;
  onCheckedIdsChange?: (node: TreeviewItemProps) => void;
  checkedIds?: string[];
  isChecked?: boolean;
  onClick?: (id: string) => void;
}

const TreeviewItem = ({
  id,
  treeId,
  itemIndex,
  labelText,
  icon,
  disabled,
  isCompact,
  hasCheckbox,
  isOpen,
  hasIcon,
  hasBadge,
  items,
  borderTypes,
  actionIcon,
  actionMenuItems,
  depth,
  onOpenChange,
  onChange,
  onActionIconClick,
  onCheckedIdsChange,
  selectedId,
  checkedIds,
}: TreeviewItemProps) => {
  const [internalDepth] = useState(depth || 0);
  const [isOpenInternal, setIsOpenInternal] = useState(isOpen || false);
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);

  const itemId = id || labelText;

  const isChecked = computeIsChecked(itemId, labelText, items ?? [], checkedIds ?? []);
  const isIndeterminate = isNodeIndeterminate(
    { id: itemId, labelText: labelText, items: items ?? [] },
    new Set(checkedIds),
  );

  const handleActionIconClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    onActionIconClick?.(itemId);
  };

  const handleActionIconKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      event.stopPropagation();
      onActionIconClick?.(itemId);
    }
  };

  const handleItemClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    event.stopPropagation();
    onChange?.(itemId);
  };

  const resolvedBorderTypes = () => {
    return borderTypes ? borderTypes : [];
  };

  const connectorBorderType = computeConnectorBorderTypes({
    depth: internalDepth,
    isCompact: isCompact,
    resolvedBorderTypes: resolvedBorderTypes(),
    hasChildren: hasChildren(items),
  });

  const toggleOpen = () => {
    setIsOpenInternal((prev) => !prev);
    onOpenChange?.(itemId, !isOpenInternal);
  };

  const handleActionMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setIsActionMenuOpen(true);
  };

  const handleActionMenuKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if ([SPACE_KEY, ENTER_KEY].includes(event.key)) {
      event.stopPropagation();
      event.preventDefault();
      setIsActionMenuOpen(true);
    }
  };

  const getNodeUid = () => {
    return buildTreeviewNodeId({
      treeId: treeId,
      path: [itemIndex],
      itemId: itemId,
    } as BuildTreeviewNodeIdParams);
  };

  const checkboxId = computeCheckboxId(getNodeUid());

  const handleOnKeyDownCheckbox = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if ([SPACE_KEY, ENTER_KEY].includes(event.key)) {
      event.preventDefault();
      handleCheckedIdsChange();
    }
  };

  const handleCheckedIdsChange = () => {
    onCheckedIdsChange?.({ id: itemId, labelText: labelText, items: items });
  };

  const handleContentKeydown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if ([SPACE_KEY, ENTER_KEY].includes(event.key)) {
      event.preventDefault();
      onChange?.(itemId);
    }
  };

  return (
    <li
      className={concatClassNames(styles["rte-treeview-item"], "treeview-item")}
      data-disabled={disabled}
      data-item-id={itemId}
      data-has-children={hasChildren(items)}
      data-is-expanded={isOpenInternal && hasChildren(items)}
      data-is-compact={isCompact}
      data-root-depth={internalDepth === 0}
      data-is-selected={selectedId === itemId}
      data-depth={internalDepth}
      role="treeitem"
      aria-expanded={hasChildren(items) ? isOpenInternal : undefined}
      aria-selected={selectedId === itemId}
      aria-level={internalDepth + 1}
      data-has-checked-items={checkedIds && checkedIds.length > 0}
    >
      <div className={styles["rte-treeview-item-row"]}>
        {hasCheckbox && (
          <div
            className={styles["rte-treeview-item-checkbox"]}
            role="input"
            data-treeview-focusable="checkbox"
            aria-checked={isIndeterminate ? "mixed" : isChecked ? "true" : "false"}
            aria-label={labelText}
            tabIndex={-1}
            onKeyDown={handleOnKeyDownCheckbox}
          >
            <Checkbox
              id={checkboxId}
              label={labelText}
              showLabel={false}
              tabIndex={-1}
              disabled={disabled}
              onChange={handleCheckedIdsChange}
              checked={isChecked}
              indeterminate={isIndeterminate}
            />
          </div>
        )}
        <div className={styles["rte-treeview-item-borders-container"]}>
          {connectorBorderType.map((type, index) => (
            <TreeviewItemBorder key={index} isCompact={!!isCompact} borderType={type} />
          ))}
          {hasChildren(items) && (
            <button
              type="button"
              className={concatClassNames(
                styles["rte-treeview-item-chevron"],
                isOpenInternal ? styles["rte-treeview-item-chevron-open"] : "",
              )}
              onClick={toggleOpen}
              aria-label={`${isOpenInternal ? "Fermer" : "Ouvrir"} les enfants de ${labelText}`}
              disabled={disabled}
              tabIndex={-1}
              data-treeview-focusable="chevron"
            >
              <Icon name={isOpenInternal ? "arrow-chevron-down" : "arrow-chevron-right"} size={16} />
            </button>
          )}
        </div>
        <div className={styles["rte-treeview-item-content-wrapper"]}>
          <div
            className={styles["rte-treeview-item-main-content"]}
            onClick={handleItemClick}
            onKeyDown={handleContentKeydown}
            data-testid={`treeview-item-main-content-${id}`}
          >
            {hasIcon && icon && !isCompact && (
              <Icon name={icon} className={styles["rte-treeview-item-icon"]} size={16} />
            )}
            <div
              className={concatClassNames(
                styles["rte-treeview-item-content"],
                isCompact ? styles["rte-treeview-item-content-compact"] : "",
              )}
              data-treeview-focusable="content"
              tabIndex={-1}
            >
              <span className={styles["rte-treeview-item-label"]}> {labelText} </span>
            </div>
            {hasBadge && <Badge badgeType="indicator" content="empty" size="s" />}
            {actionIcon && (
              <>
                {actionMenuItems ? (
                  <div className={styles["rte-treeview-item-action"]}>
                    <Dropdown
                      dropdownId={`${itemId}-action-menu`}
                      isOpen={isActionMenuOpen}
                      autoClose={true}
                      onClose={() => {
                        setIsActionMenuOpen(false);
                      }}
                      trigger={
                        <button
                          type="button"
                          className={styles["rte-treeview-item-action-button"]}
                          data-treeview-focusable="action"
                          tabIndex={-1}
                          aria-label={`Action pour ${labelText}`}
                          disabled={disabled}
                          onClick={handleActionMenuClick}
                          onKeyDown={handleActionMenuKeyDown}
                        >
                          <Icon name={actionIcon} size={16} />
                        </button>
                      }
                    >
                      {actionMenuItems.map(({ label, leftIcon, hasSeparator, onClick }, index) => (
                        <DropdownItem
                          key={index}
                          label={label}
                          leftIcon={leftIcon}
                          hasSeparator={hasSeparator}
                          onClick={onClick}
                          disabled={disabled}
                        />
                      ))}
                    </Dropdown>
                  </div>
                ) : (
                  <button
                    type="button"
                    className={styles["rte-treeview-item-action-button"]}
                    data-treeview-focusable="action"
                    tabIndex={-1}
                    aria-label={`Actions pour ${labelText}`}
                    disabled={disabled}
                    onClick={handleActionIconClick}
                    onKeyDown={handleActionIconKeyDown}
                  >
                    <Icon name={actionIcon} size={16}></Icon>
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      {hasChildren(items) && (
        <ul
          className={concatClassNames(
            styles["rte-treeview-item-children"],
            isOpenInternal ? styles["rte-treeview-item-children-open"] : "",
            "treeview-item-children",
            isOpenInternal ? "treeview-item-children-open" : "",
          )}
          role="group"
          data-open={isOpen}
        >
          {items!.map((child, index) => (
            <TreeviewItem
              key={child.id}
              {...child}
              depth={internalDepth + 1}
              borderTypes={getChildBorderTypes(resolvedBorderTypes(), index === items!.length - 1)}
              isCompact={isCompact}
              onChange={(id) => onChange?.(id)}
              selectedId={selectedId}
              hasCheckbox={child.hasCheckbox ?? hasCheckbox}
              onCheckedIdsChange={onCheckedIdsChange}
              checkedIds={checkedIds}
              onActionIconClick={child.onActionIconClick}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default TreeviewItem;
