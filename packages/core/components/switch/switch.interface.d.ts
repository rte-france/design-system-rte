export type SwitchAppearance = "brand" | "neutral";

export interface SwitchProps {
  appearance?: SwitchAppearance;
  showIcon?: boolean;
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
}
