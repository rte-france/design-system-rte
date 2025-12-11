import { InputProps } from "../common/input-props";

export interface SelectProps extends InputProps {
  onClear?: () => void;
  options: { value: string; label: string }[];
  showResetButton?: boolean;
  width?: number;
}
