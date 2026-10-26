export type IconButtonGroupSelectionMode = "single" | "single-strict" | "multiple";
type Orientation = "horizontal" | "vertical";
type TooltipPosition = import("../tooltip").TooltipProps["position"];

interface IconButtonGroupBaseProps {
  iconButtons: IconButtonItem[];
  isDisabled?: boolean;
  orientation?: Orientation;
  tooltipPosition?: TooltipPosition;
  isCompact?: boolean;
  appearance?: "brand" | "neutral";
}

export type IconButtonGroupProps = IconButtonGroupBaseProps &
  (
    | {
        selectionMode: "single" | "single-strict";
        selectedId?: string | null;
        defaultSelectedId?: string | null;
        selectedIds?: never;
        defaultSelectedIds?: never;
        onSelectionChange?: (selectedId: string | null) => void;
      }
    | {
        selectionMode: "multiple";
        selectedIds?: readonly string[];
        defaultSelectedIds?: readonly string[];
        selectedId?: never;
        defaultSelectedId?: never;
        onSelectionChange?: (selectedIds: string[]) => void;
      }
  );

export interface IconButtonItem {
  id?: string;
  name: string;
  label: string;
}
