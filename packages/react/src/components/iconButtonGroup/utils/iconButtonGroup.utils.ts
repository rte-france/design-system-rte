import { DividerAppearance } from "@design-system-rte/core";

type DividerAppearanceConfig = {
  leftActive: boolean;
  rightActive: boolean;
  leftDisabled?: boolean;
  rightDisabled?: boolean;
  appearance: "brand" | "neutral";
  isDisabled?: boolean;
};

export const computedDividerAppearance = ({
  leftActive,
  rightActive,
  leftDisabled,
  rightDisabled,
  isDisabled,
  appearance,
}: DividerAppearanceConfig): DividerAppearance => {
  if (leftDisabled && rightDisabled) return "neutral";
  if (isDisabled) return "neutral";
  if (leftActive && rightActive) return "inverse";
  return appearance;
};
