export type SwitchAppearance = "brand" | "neutral";

export interface SwitchProps {
  appearance?: SwitchAppearance;
  showLabel?: boolean;
  showIcon?: boolean;
  label?: string;
  checked?: boolean;
}
