import { Size } from "../common/common-types";

export type CardType = "default" | "outlined";

export interface CardProps {
  size?: Size;
  cardType?: CardType;
  clickable?: boolean;
  disabled?: boolean;
}
