import { BadgeHolderProps } from "../../badge/badge.interface";
import type { ButtonIconAppearance } from "../button.interface";
import type { ButtonHierarchy, ButtonSize, ButtonVariant, IconButtonAppearanceInput } from "../common/common-button";

export interface IconButtonProps extends BadgeHolderProps {
  appearance?: IconButtonAppearanceInput;
  hierarchy?: ButtonHierarchy;
  isCritical?: boolean;
  isReversed?: boolean;
  iconAppearance?: ButtonIconAppearance;
  variant?: ButtonVariant;
  size?: ButtonSize;
  compactSpacing?: boolean;
  disabled?: boolean;
  name: string;
}

export interface IconButtonToggleProps extends Omit<IconButtonProps, "iconAppearance"> {
  selected?: boolean;
  defaultSelected?: boolean;
}
