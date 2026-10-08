import { ButtonAppearance, ButtonHierarchy, ButtonVariant } from "./common-button";

export interface ResolvedButtonStyle {
  appearance: ButtonAppearance;
  hierarchy: ButtonHierarchy;
  isCritical: boolean;
  isReversed: boolean;
}

export interface ButtonStyleInput {
  variant?: ButtonVariant;
  appearance?: ButtonAppearance;
  hierarchy?: ButtonHierarchy;
  isCritical?: boolean;
  isReversed?: boolean;
}

const DEFAULT_BUTTON_STYLE: ResolvedButtonStyle = {
  appearance: "brand",
  hierarchy: "primary",
  isCritical: false,
  isReversed: false,
};

export function variantToPartialStyle(variant: ButtonVariant): Partial<ResolvedButtonStyle> {
  switch (variant) {
    case "primary":
      return { appearance: "brand", hierarchy: "primary" };
    case "secondary":
      return { appearance: "brand", hierarchy: "secondary" };
    case "text":
      return { appearance: "brand", hierarchy: "text" };
    case "transparent":
      return { appearance: "brand", hierarchy: "transparent" };
    case "danger":
      return { appearance: "brand", hierarchy: "primary", isCritical: true };
    case "reverse":
      return { appearance: "brand", hierarchy: "primary", isReversed: true };
    case "neutral":
      return { appearance: "neutral", hierarchy: "text" };
    default:
      return {};
  }
}

export function resolveButtonStyle(input: ButtonStyleInput): ResolvedButtonStyle {
  const fromVariant = input.variant ? variantToPartialStyle(input.variant) : {};

  return {
    appearance: input.appearance ?? fromVariant.appearance ?? DEFAULT_BUTTON_STYLE.appearance,
    hierarchy: input.hierarchy ?? fromVariant.hierarchy ?? DEFAULT_BUTTON_STYLE.hierarchy,
    isCritical: input.isCritical ?? fromVariant.isCritical ?? DEFAULT_BUTTON_STYLE.isCritical,
    isReversed: input.isReversed ?? fromVariant.isReversed ?? DEFAULT_BUTTON_STYLE.isReversed,
  };
}
