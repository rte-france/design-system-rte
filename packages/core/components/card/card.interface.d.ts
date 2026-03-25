export type CardType = "default" | "outlined";

export interface CardProps {
  width?: string;
  cardType?: CardType;
  clickable?: boolean;
  disabled?: boolean;
}
