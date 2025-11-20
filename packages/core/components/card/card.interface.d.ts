import { Size } from "../common/common-types";

export type CardType = "default" | "outlined";

export interface CardProps {
  size?: Size;
  cardType?: CardType;
  selectable?: boolean;
  disabled?: boolean;
}
