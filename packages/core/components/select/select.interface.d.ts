import { InputProps } from "../common/input-props";

export type OptionToDisplay = "first-selected" | "last-selected" | "highest-selected";

export interface SelectProps extends InputProps {
  onClear?: () => void;
  options: { value: string; label: string }[];
  showResetButton?: boolean;
  width?: number;
  multiple?: boolean;
  withSelectAll?: boolean;
  optionToDisplay?: OptionToDisplay;
}
