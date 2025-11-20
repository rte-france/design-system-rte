import { cardSize } from "@design-system-rte/core/components/card/card.constats";
import { CardProps as CardPropsCore } from "@design-system-rte/core/components/card/card.interface";

import styles from "./Card.module.scss";

interface CardProps extends CardPropsCore {
  children?: React.ReactNode;
  onClick?: () => void;
}

const Card = ({
  size = "m",
  cardType = "default",
  selectable = false,
  disabled = false,
  children,
  onClick,
  ...props
}: CardProps) => {
  return (
    <div
      className={styles.card}
      style={{ width: cardSize[size] }}
      data-card-type={cardType}
      data-selectable={selectable}
      data-disabled={disabled}
      tabIndex={selectable ? 0 : -1}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
