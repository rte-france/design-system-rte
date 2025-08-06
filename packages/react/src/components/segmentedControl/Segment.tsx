import {
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY,
  ENTER_KEY,
  SPACE_KEY,
  TAB_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { useRef } from "react";

import { useActiveKeyboard } from "../../hooks/useActiveKeyboard";
import { useSelectFocusableElements } from "../../hooks/useSelectFocusableElements";
import Icon from "../icon/Icon";

import { SegmentProps } from "./SegmentedControl";
import style from "./SegmentedControl.module.scss";
import {
  focusNextNotSegmentElement,
  focusNextSegmentElement,
  focusPreviousNotSegmentElement,
  focusPreviousSegmentElement,
} from "./SegmentedControlUtils";

const Segment = ({ id, icon, iconAppearance, label, position, selected, onClick, ...props }: SegmentProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const allFocusableElement = useSelectFocusableElements();

  const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (event.key === SPACE_KEY || event.key === ENTER_KEY) {
      handleClick?.(event);
    } else if (event.key === ARROW_LEFT_KEY || event.key === ARROW_RIGHT_KEY) {
      const segmentedControlElement = ref.current?.parentElement;
      const allSegmentElements = Array.from(
        segmentedControlElement?.querySelectorAll("." + style.segment) ?? [],
      ) as HTMLElement[];

      const currentActiveSegmentElementIndex = allSegmentElements.findIndex(
        (element) => element === document.activeElement,
      );

      if (event.key === ARROW_RIGHT_KEY) {
        focusNextSegmentElement(currentActiveSegmentElementIndex, allSegmentElements);
      } else if (event.key === ARROW_LEFT_KEY) {
        focusPreviousSegmentElement(currentActiveSegmentElementIndex, allSegmentElements);
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === TAB_KEY) {
      const currentActiveSegmentElement = document.activeElement;
      const currentActiveSegmentElementIndex = Array.from(allFocusableElement).indexOf(
        currentActiveSegmentElement as HTMLDivElement,
      );

      if (event.shiftKey) {
        focusPreviousNotSegmentElement(currentActiveSegmentElementIndex, allFocusableElement);
      } else {
        focusNextNotSegmentElement(currentActiveSegmentElementIndex, allFocusableElement);
      }
    }
  };

  const { onBlur, onKeyDown, onKeyUp } = useActiveKeyboard<HTMLDivElement>(
    { onKeyUp: handleKeyUp, onKeyDown: handleKeyDown },
    {
      id,
      interactiveKeyCodes: [SPACE_KEY, ENTER_KEY, TAB_KEY, ARROW_LEFT_KEY, ARROW_RIGHT_KEY],
    },
  );

  const handleClick = (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClick?.(e);
  };

  return (
    <div ref={ref} className={style["segment-container"]} data-position={position} {...props}>
      <div
        id={id}
        role="radio"
        aria-checked={selected}
        aria-label={label}
        className={style.segment}
        data-segment-type={icon ? "icon" : "label"}
        data-selected={selected}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onBlur={onBlur}
        onClick={handleClick}
        tabIndex={0}
        ref={ref}
      >
        {selected && <Icon name="check-small" appearance="filled" size={24} className={style["selected-icon"]} />}
        <div className={style["segment-content"]}>
          {icon ? (
            <Icon name={icon} appearance={(iconAppearance ?? selected) ? "filled" : "outlined"} size={24} />
          ) : (
            <span className={style["segment-label"]}>{label}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Segment;
