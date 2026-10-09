import { BadgeHolderProps } from "../../badge/badge.interface";
import type { ButtonIconAppearance } from "../button.interface";
import type {
  ButtonSize,
  ButtonVariant,
  IconButtonAppearanceInput,
  IconButtonHierarchy,
} from "../common/common-button";

export interface IconButtonProps extends BadgeHolderProps {
  appearance?: IconButtonAppearanceInput;
  hierarchy?: IconButtonHierarchy;
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
