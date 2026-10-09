import type { ButtonIconAppearance } from "../button.interface";

import type { ButtonAppearance, ButtonVariant, IconButtonAppearanceInput, IconButtonHierarchy } from "./common-button";

export interface ResolveIconButtonVisualParams {
  variant?: ButtonVariant;
  appearance?: IconButtonAppearanceInput;
  hierarchy?: IconButtonHierarchy;
  isCritical?: boolean;
  isReversed?: boolean;
  iconAppearance?: ButtonIconAppearance;
}

export interface ResolvedIconButtonVisual {
  appearance: ButtonAppearance;
  hierarchy: IconButtonHierarchy;
  isCritical: boolean;
  isReversed: boolean;
  iconAppearance: ButtonIconAppearance;
}

interface ShellVisual {
  appearance: ButtonAppearance;
  hierarchy: IconButtonHierarchy;
  isCritical: boolean;
  isReversed: boolean;
}

function shellFromVariant(variant: ButtonVariant): ShellVisual {
  switch (variant) {
    case "secondary":
      return { appearance: "brand", hierarchy: "secondary", isCritical: false, isReversed: false };
    case "text":
      return { appearance: "brand", hierarchy: "text", isCritical: false, isReversed: false };
    case "transparent":
      return { appearance: "brand", hierarchy: "transparent", isCritical: false, isReversed: false };
    case "danger":
      return { appearance: "brand", hierarchy: "primary", isCritical: true, isReversed: false };
    case "reverse":
      return { appearance: "brand", hierarchy: "transparent", isCritical: false, isReversed: true };
    case "neutral":
      return { appearance: "neutral", hierarchy: "text", isCritical: false, isReversed: false };
    default:
      return { appearance: "brand", hierarchy: "primary", isCritical: false, isReversed: false };
  }
}

function isShellAppearance(value: IconButtonAppearanceInput): value is ButtonAppearance {
  return value === "brand" || value === "neutral";
}

function isLegacyIconAppearance(value: IconButtonAppearanceInput): value is ButtonIconAppearance {
  return value === "filled" || value === "outlined";
}

export function resolveIconButtonVisual(params: ResolveIconButtonVisualParams): ResolvedIconButtonVisual {
  const base = params.variant !== undefined ? shellFromVariant(params.variant) : shellFromVariant("primary");

  let appearance = base.appearance;
  let hierarchy = base.hierarchy;
  let isCritical = base.isCritical;
  let isReversed = base.isReversed;

  if (params.appearance !== undefined && isShellAppearance(params.appearance)) {
    appearance = params.appearance;
  }
  if (params.hierarchy !== undefined) {
    hierarchy = params.hierarchy;
  }
  if (params.isCritical !== undefined) {
    isCritical = params.isCritical;
  }
  if (params.isReversed !== undefined) {
    isReversed = params.isReversed;
  }

  let iconAppearance: ButtonIconAppearance = "outlined";
  if (params.iconAppearance !== undefined) {
    iconAppearance = params.iconAppearance;
  } else if (params.appearance !== undefined && isLegacyIconAppearance(params.appearance)) {
    iconAppearance = params.appearance;
  }

  return {
    appearance,
    hierarchy,
    isCritical,
    isReversed,
    iconAppearance,
  };
}
