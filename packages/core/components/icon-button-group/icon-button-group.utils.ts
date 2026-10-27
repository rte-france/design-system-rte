import type { IconButtonGroupSelectionMode, IconButtonItem } from "./icon-button-group.interface";

export type ValidateIconButtonSelectionConfig = {
  ids: readonly string[];
  selectedIds: readonly string[];
  selectionMode: IconButtonGroupSelectionMode;
};

export type NormalizeIconButtonSelectionConfig = {
  ids: readonly string[];
  selectedIds: readonly string[];
  selectionMode: IconButtonGroupSelectionMode;
};

export type ComputeNextIconButtonSelectionConfig = {
  ids: readonly string[];
  selectedIds: readonly string[];
  clickedId: string;
  selectionMode: IconButtonGroupSelectionMode;
};

export const getIconButtonId = (button: IconButtonItem): string => button.id ?? button.name;

export const validateIconButtonConfiguration = (ids: readonly string[]): string | undefined => {
  if (ids.length < 2) return "The component requires at least 2 icon buttons.";
  if (ids.some((id) => id.trim().length === 0)) return "Icon button IDs must not be empty.";
  if (new Set(ids).size !== ids.length) return "Icon button IDs must be unique.";
};

export const validateIconButtonSelection = ({
  ids,
  selectedIds,
  selectionMode,
}: ValidateIconButtonSelectionConfig): string | undefined => {
  if (new Set(selectedIds).size !== selectedIds.length) return "Selected IDs must be unique.";
  if (selectedIds.some((id) => !ids.includes(id))) return "Selected IDs must belong to the icon button group.";
  if (selectionMode === "single-strict" && selectedIds.length !== 1) {
    return "In single-strict mode, exactly one icon button must be selected.";
  }
  if (selectionMode === "single" && selectedIds.length > 1) {
    return "In single mode, at most one icon button must be selected.";
  }
};

export const normalizeIconButtonSelection = ({
  ids,
  selectedIds,
  selectionMode,
}: NormalizeIconButtonSelectionConfig): string[] => {
  const selection = ids.filter((id) => selectedIds.includes(id));
  if (selectionMode === "multiple") return selection;
  if (selection.length > 0) return selection.slice(0, 1);
  return selectionMode === "single-strict" ? ids.slice(0, 1) : [];
};

export const computeNextIconButtonSelection = ({
  ids,
  selectedIds,
  clickedId,
  selectionMode,
}: ComputeNextIconButtonSelectionConfig): string[] => {
  if (!ids.includes(clickedId)) return [...selectedIds];
  if (selectionMode === "single-strict") return [clickedId];
  if (selectionMode === "single") return selectedIds.includes(clickedId) ? [] : [clickedId];
  return ids.filter((id) => (id === clickedId ? !selectedIds.includes(id) : selectedIds.includes(id)));
};
