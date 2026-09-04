import {
  CARD_MISSING_ACCESSIBLE_NAME_ERROR,
  DEFAULT_CARD_WIDTH,
} from "@design-system-rte/core/components/card/card.constants";
import { CardProps as CardPropsCore } from "@design-system-rte/core/components/card/card.interface";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { logError } from "@design-system-rte/core/utils/log-handlers";
import { HTMLAttributes, forwardRef, useLayoutEffect, useRef, useState, KeyboardEvent } from "react";

import { useActiveKeyboard } from "../../hooks/useActiveKeyboard";

import styles from "./Card.module.scss";

interface CardProps extends CardPropsCore, Omit<HTMLAttributes<HTMLDivElement>, "onClick"> {
  onClick?: () => void;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      width = DEFAULT_CARD_WIDTH,
      height = "auto",
      cardType = "default",
      clickable = false,
      disabled = false,
      children,
      onClick,
      role,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby,
      ...props
    },
    ref,
  ) => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const [shouldRender, setShouldRender] = useState(true);

    useLayoutEffect(() => {
      if (clickable && !ariaLabel && !ariaLabelledby && !cardRef.current?.textContent?.trim()) {
        logError("Card", CARD_MISSING_ACCESSIBLE_NAME_ERROR);
        setShouldRender(false);
      }
    }, [ariaLabel, ariaLabelledby, clickable]);

    const keyboardHandler = (event: KeyboardEvent<HTMLDivElement>) => {
      if (!disabled && clickable && (event.key === SPACE_KEY || event.key === ENTER_KEY)) {
        event.preventDefault();
        onClick?.();
      }
    };

    const handleOnClick = () => {
      if (!disabled && clickable) {
        onClick?.();
      }
    };

    const { onKeyDown, onKeyUp, onBlur } = useActiveKeyboard<HTMLDivElement>(
      { onKeyUp: keyboardHandler },
      {
        interactiveKeyCodes: [SPACE_KEY, ENTER_KEY],
      },
    );

    if (!shouldRender) {
      return null;
    }

    return (
      <div
        ref={(element) => {
          cardRef.current = element;
          if (typeof ref === "function") {
            ref(element);
          } else if (ref) {
            ref.current = element;
          }
        }}
        className={styles.card}
        style={{ width, height }}
        data-card-type={cardType}
        data-clickable={clickable}
        data-disabled={disabled}
        tabIndex={clickable ? 0 : -1}
        role={role ?? (clickable ? "button" : undefined)}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        onClick={handleOnClick}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onBlur={onBlur}
        {...props}
      >
        {children}
      </div>
    );
  },
);

export default Card;
