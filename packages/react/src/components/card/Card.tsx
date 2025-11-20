import { cardSize } from "@design-system-rte/core/components/card/card.constats";
import { CardProps as CardPropsCore } from "@design-system-rte/core/components/card/card.interface";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { useActiveKeyboard } from "../../hooks/useActiveKeyboard";

import styles from "./Card.module.scss";

interface CardProps extends CardPropsCore {
  children?: React.ReactNode;
  onClick?: () => void;
}

const Card = ({
  size = "m",
  cardType = "default",
  clickable = false,
  disabled = false,
  children,
  onClick,
  ...props
}: CardProps) => {
  const keyboardHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!disabled && clickable && (event.key === SPACE_KEY || event.key === ENTER_KEY)) {
      event.preventDefault();
      onClick?.();
    }
  };

  const { onKeyDown, onKeyUp, onBlur } = useActiveKeyboard<HTMLDivElement>(
    { onKeyUp: keyboardHandler },
    {
      interactiveKeyCodes: [SPACE_KEY, ENTER_KEY],
    },
  );

  return (
    <div
      className={styles.card}
      style={{ width: cardSize[size] }}
      data-card-type={cardType}
      data-clickable={clickable}
      data-disabled={disabled}
      tabIndex={clickable ? 0 : -1}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onBlur={onBlur}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
