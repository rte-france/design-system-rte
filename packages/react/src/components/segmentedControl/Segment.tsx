import { getSegmentAriaLabel } from "@design-system-rte/core";
import { shouldDisplayBadge } from "@design-system-rte/core/components/badge/badge.utils";
import {
  focusNextSegmentElement,
  focusPreviousSegmentElement,
} from "@design-system-rte/core/components/segmented-control/segmented-control-utils";
import { SegmentProps as CoreSegmentProps } from "@design-system-rte/core/components/segmented-control/segmented-control.interface";
import {
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY,
  ENTER_KEY,
  SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { useRef } from "react";

import { useActiveKeyboard } from "../../hooks/useActiveKeyboard";
import Badge from "../badge/Badge";
import Icon from "../icon/Icon";

import style from "./SegmentedControl.module.scss";

interface SegmentProps extends CoreSegmentProps {
  onClick?: (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void;
  segmentTabIndex: 0 | -1;
  onSegmentFocus?: () => void;
}

const Segment = ({
  id,
  icon,
  labelText,
  ariaLabel,
  position,
  isSelected,
  onClick,
  badgeCount,
  badgeContent,
  badgeIcon,
  badgeType,
  badgeSize,
  showBadge,
  appearance,
  isCompact,
  segmentTabIndex,
  onSegmentFocus,
  ...props
}: SegmentProps) => {
  const segmentAriaLabel = getSegmentAriaLabel({
    id,
    ariaLabel,
    labelText,
    icon,
    showBadge,
    badgeCount,
    badgeContent,
    badgeIcon,
  });

  const ref = useRef<HTMLDivElement>(null);

  const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === SPACE_KEY || event.key === ENTER_KEY) {
      handleClick?.(event);
    } else if (event.key === ARROW_LEFT_KEY || event.key === ARROW_RIGHT_KEY) {
      const segmentedControlElement = ref.current?.parentElement?.parentElement;
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

  const { onBlur, onKeyDown, onKeyUp } = useActiveKeyboard<HTMLDivElement>(
    { onKeyUp: handleKeyUp },
    {
      id,
      interactiveKeyCodes: [SPACE_KEY, ENTER_KEY, ARROW_LEFT_KEY, ARROW_RIGHT_KEY],
    },
  );

  const handleClick = (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onClick?.(event);
  };

  const handleFocus = () => {
    onSegmentFocus?.();
  };

  return (
    <div
      className={style["segment-container"]}
      data-position={position}
      {...props}
      data-appearance={appearance}
      data-compact-spacing={isCompact}
    >
      <div
        id={id}
        role="radio"
        aria-checked={isSelected}
        aria-label={segmentAriaLabel}
        className={style.segment}
        data-segment-type={icon ? "icon" : "label"}
        data-selected={isSelected}
        data-compact-spacing={isCompact}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onBlur={onBlur}
        onFocus={handleFocus}
        onClick={handleClick}
        tabIndex={segmentTabIndex}
        ref={ref}
      >
        {isSelected && (
          <Icon
            name="check-small"
            appearance="filled"
            size={isCompact ? 20 : 24}
            className={style["selected-icon"]}
            data-compact-spacing={isCompact}
          />
        )}
        <div className={style["segment-content"]}>
          {icon ? (
            <Icon name={icon} appearance={isSelected ? "filled" : "outlined"} size={isCompact ? 20 : 24} />
          ) : (
            <span className={style["segment-label"]}>{labelText}</span>
          )}
        </div>
        {shouldDisplayBadge({ showBadge: !!showBadge, badgeContent, badgeCount, badgeIcon }) && (
          <Badge count={badgeCount} content={badgeContent} icon={badgeIcon} badgeType={badgeType} size={badgeSize} />
        )}
      </div>
    </div>
  );
};

export default Segment;
