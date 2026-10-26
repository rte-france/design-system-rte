import { DividerAppearance } from "@design-system-rte/core";

type DividerAppearanceConfig = {
  leftActive: boolean;
  rightActive: boolean;
  appearance: "brand" | "neutral";
  isDisabled?: boolean;
};

export const computedDividerAppearance = ({
  leftActive,
  rightActive,
  isDisabled,
  appearance,
}: DividerAppearanceConfig): DividerAppearance => {
  if (isDisabled) return "neutral";
  if (leftActive && rightActive) return "inverse";
  return appearance;
};
