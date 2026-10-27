import {
  IconButtonGroupProps as CoreIconButtonGroupProps,
  computeNextIconButtonSelection,
  getIconButtonId,
  logWarn,
  normalizeIconButtonSelection,
  validateIconButtonConfiguration,
  validateIconButtonSelection,
} from "@design-system-rte/core";
import { useState, forwardRef } from "react";

import styles from "./IconButtonGroup.module.scss";
import IconButtonGroupItem from "./iconButtonGroupItem/IconButtonGroupItem";
import { computedDividerAppearance } from "./utils/iconButtonGroup.utils";

type IconButtonGroupProps = CoreIconButtonGroupProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "className">;

const IconButtonGroup = forwardRef<HTMLDivElement, IconButtonGroupProps>(
  (
    {
      iconButtons,
      selectedId,
      defaultSelectedId,
      selectedIds,
      defaultSelectedIds,
      onSelectionChange,
      selectionMode,
      isDisabled,
      orientation = "horizontal",
      tooltipPosition = "top",
      isCompact = false,
      appearance = "brand",
      ["aria-label"]: ariaLabel,
      ...props
    }: IconButtonGroupProps,
    ref,
  ) => {
    const iconButtonIds = iconButtons.map(getIconButtonId);
    const controlledSelection = selectionMode === "multiple" ? selectedIds : selectedId;
    const defaultSelection = selectionMode === "multiple" ? defaultSelectedIds : defaultSelectedId;
    const isControlled = controlledSelection !== undefined;
    const toSelectedIds = (selection: string | null | readonly string[] | undefined): readonly string[] =>
      selection == null ? [] : typeof selection === "string" ? [selection] : selection;
    const [internalSelectedIds, setInternalSelectedIds] = useState<readonly string[]>(() =>
      normalizeIconButtonSelection({
        ids: iconButtonIds,
        selectedIds: toSelectedIds(defaultSelection),
        selectionMode,
      }),
    );
    const configurationIssue = validateIconButtonConfiguration(iconButtonIds);
    const effectiveSelectedIds = isControlled
      ? toSelectedIds(controlledSelection)
      : normalizeIconButtonSelection({
          ids: iconButtonIds,
          selectedIds: internalSelectedIds,
          selectionMode,
        });

    if (
      !isControlled &&
      (internalSelectedIds.length !== effectiveSelectedIds.length ||
        internalSelectedIds.some((id, index) => id !== effectiveSelectedIds[index]))
    ) {
      setInternalSelectedIds(effectiveSelectedIds);
    }

    if (isControlled && defaultSelection !== undefined) {
      logWarn(
        "IconButtonGroup",
        selectionMode === "multiple"
          ? "Use selectedIds or defaultSelectedIds, not both. selectedIds takes precedence."
          : "Use selectedId or defaultSelectedId, not both. selectedId takes precedence.",
      );
    }

    const selectionShapeIssue =
      isControlled &&
      (selectionMode === "multiple"
        ? !Array.isArray(controlledSelection)
        : controlledSelection !== null && typeof controlledSelection !== "string")
        ? selectionMode === "multiple"
          ? "In multiple mode, selectedIds must be an array."
          : "In single modes, selectedId must be a string or null."
        : undefined;
    const issue =
      configurationIssue ??
      selectionShapeIssue ??
      (isControlled
        ? validateIconButtonSelection({ ids: iconButtonIds, selectedIds: effectiveSelectedIds, selectionMode })
        : undefined);

    if (issue) {
      logWarn("IconButtonGroup", issue);
      return null;
    }

    if (ariaLabel?.trim() === "" || ariaLabel === undefined) {
      logWarn("IconButtonGroup", "Missing required aria-label for accessibility.");
      return null;
    }

    const computedTooltipPosition = orientation === "vertical" && tooltipPosition === "auto" ? "left" : tooltipPosition;

    const handleOnClick = (id: string) => {
      if (isDisabled) return;
      const nextIds = computeNextIconButtonSelection({
        ids: iconButtonIds,
        selectedIds: effectiveSelectedIds,
        clickedId: id,
        selectionMode,
      });
      if (
        nextIds.length === effectiveSelectedIds.length &&
        nextIds.every((selectedId) => effectiveSelectedIds.includes(selectedId))
      ) {
        return;
      }
      if (!isControlled) setInternalSelectedIds(nextIds);
      if (selectionMode === "multiple") {
        onSelectionChange?.([...nextIds]);
      } else {
        onSelectionChange?.(nextIds[0] ?? null);
      }
    };

    return (
      <div
        ref={ref}
        className={styles["rte-icon-button-group"]}
        role="group"
        data-is-disabled={isDisabled}
        data-orientation={orientation}
        data-compact-spacing={isCompact}
        data-appearance={appearance}
        aria-label={ariaLabel}
        {...props}
      >
        {iconButtons.map(({ isDisabled: buttonIsDisabled, ...button }, index) => (
          <IconButtonGroupItem
            key={iconButtonIds[index]}
            button={button}
            buttonId={iconButtonIds[index]}
            isDisabled={isDisabled || buttonIsDisabled}
            computedTooltipPosition={computedTooltipPosition}
            isCompact={isCompact}
            index={index}
            isLast={index === iconButtons.length - 1}
            orientation={orientation}
            appearance={appearance}
            isIconActive={effectiveSelectedIds.includes(iconButtonIds[index])}
            isNextIconActive={effectiveSelectedIds.includes(iconButtonIds[index + 1])}
            dividerAppearance={computedDividerAppearance({
              leftDisabled: buttonIsDisabled,
              rightDisabled: iconButtons[index + 1] ? iconButtons[index + 1].isDisabled : false,
              leftActive: effectiveSelectedIds.includes(iconButtonIds[index]),
              rightActive: effectiveSelectedIds.includes(iconButtonIds[index + 1]),
              isDisabled: isDisabled,
              appearance: appearance,
            })}
            onClick={handleOnClick}
          />
        ))}
      </div>
    );
  },
);

export default IconButtonGroup;
