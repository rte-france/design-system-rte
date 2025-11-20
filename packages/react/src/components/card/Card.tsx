import { cardSize } from "@design-system-rte/core/components/card/card.constats";
import { CardProps as CardPropsCore } from "@design-system-rte/core/components/card/card.interface";

import styles from "./Card.module.scss";

interface CardProps extends CardPropsCore {
  children?: React.ReactNode;
  onClick?: () => void;
}

const Card = ({ size, cardType, clickable, disabled, children, onClick }: CardProps) => {
  return (
    <div
      className={styles.card}
      style={{ width: cardSize[size] }}
      data-card-type={cardType}
      data-clickable={clickable}
      data-disabled={disabled}
      tabIndex={clickable ? 0 : -1}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
