import type { ButtonIconAppearance } from "../button.interface";

import { ButtonAppearance, ButtonHierarchy, ButtonVariant, IconButtonAppearanceInput } from "./common-button";

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
  const VARIANT_TO_STYLE_MAP: Record<ButtonVariant, Partial<ResolvedButtonStyle>> = {
    primary: { appearance: "brand", hierarchy: "primary" },
    secondary: { appearance: "brand", hierarchy: "secondary" },
    text: { appearance: "brand", hierarchy: "text" },
    transparent: { appearance: "brand", hierarchy: "transparent" },
    danger: { appearance: "brand", hierarchy: "primary", isCritical: true },
    reverse: { appearance: "brand", hierarchy: "transparent", isReversed: true },
    neutral: { appearance: "neutral", hierarchy: "transparent" },
  };

  return VARIANT_TO_STYLE_MAP[variant] || {};
}

export function resolveButtonStyle(input: ButtonStyleInput): ResolvedButtonStyle {
  const { variant, appearance, hierarchy, isCritical, isReversed } = input;
  const fromVariant = variant ? variantToPartialStyle(variant) : {};

  return {
    appearance: appearance ?? fromVariant.appearance ?? DEFAULT_BUTTON_STYLE.appearance,
    hierarchy: hierarchy ?? fromVariant.hierarchy ?? DEFAULT_BUTTON_STYLE.hierarchy,
    isCritical: isCritical ?? fromVariant.isCritical ?? DEFAULT_BUTTON_STYLE.isCritical,
    isReversed: isReversed ?? fromVariant.isReversed ?? DEFAULT_BUTTON_STYLE.isReversed,
  };
}

export interface IconButtonStyleInput {
  variant?: ButtonVariant;
  appearance?: IconButtonAppearanceInput;
  hierarchy?: ButtonHierarchy;
  isCritical?: boolean;
  isReversed?: boolean;
  iconAppearance?: ButtonIconAppearance;
}

export interface ResolvedIconButtonStyle extends ResolvedButtonStyle {
  iconAppearance: ButtonIconAppearance;
}

function shellAppearanceFromInput(appearance: IconButtonAppearanceInput | undefined): ButtonAppearance | undefined {
  if (appearance === "brand" || appearance === "neutral") {
    return appearance;
  }
}

function iconAppearanceFromInput(input: IconButtonStyleInput): ButtonIconAppearance {
  if (input.iconAppearance !== undefined) {
    return input.iconAppearance;
  }

  if (input.appearance === "filled" || input.appearance === "outlined") {
    return input.appearance;
  }

  return "outlined";
}

export function resolveIconButtonStyle(input: IconButtonStyleInput): ResolvedIconButtonStyle {
  const shell = resolveButtonStyle({
    variant: input.variant,
    appearance: shellAppearanceFromInput(input.appearance),
    hierarchy: input.hierarchy,
    isCritical: input.isCritical,
    isReversed: input.isReversed,
  });

  return {
    ...shell,
    iconAppearance: iconAppearanceFromInput(input),
  };
}
