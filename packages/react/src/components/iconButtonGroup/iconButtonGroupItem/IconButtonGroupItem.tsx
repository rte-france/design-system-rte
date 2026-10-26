import type { IconButtonItem } from "@design-system-rte/core";
import { CSSProperties } from "react";

import Divider from "../../divider/Divider";
import Icon from "../../icon/Icon";
import Tooltip from "../../tooltip/Tooltip";
import styles from "../IconButtonGroup.module.scss";

interface IconButtonGroupItemProps {
  button: IconButtonItem;
  buttonId: string;
  isDisabled?: boolean;
  computedTooltipPosition: "auto" | "top" | "bottom" | "left" | "right";
  isCompact?: boolean;
  index: number;
  isLast: boolean;
  orientation: "horizontal" | "vertical";
  appearance?: "brand" | "neutral";
  isIconActive: boolean;
  isNextIconActive: boolean;
  dividerAppearance?: "brand" | "neutral" | "inverse";
  onClick: (id: string) => void;
}

const IconButtonGroupItem = ({
  button,
  buttonId,
  isDisabled,
  computedTooltipPosition,
  isCompact,
  index,
  isLast,
  orientation,
  appearance,
  isIconActive,
  isNextIconActive,
  dividerAppearance,
  onClick,
}: IconButtonGroupItemProps) => {
  const { name: iconName, label } = button;

  const computedDividerStyle = (): CSSProperties => {
    const style: CSSProperties = { boxSizing: "border-box", zIndex: 1 };

    if (isCompact) {
      return {
        ...style,
        height: orientation === "horizontal" ? "30px" : "auto",
        width: orientation === "vertical" ? "30px" : "1px",
      };
    }

    return {
      ...style,
      height: orientation === "horizontal" ? "38px" : "auto",
      width: orientation === "vertical" ? "38px" : "1px",
    };
  };

  const handleOnClick = () => {
    onClick(buttonId);
  };

  return (
    <>
      <Tooltip label={label} shouldFocusTrigger={false} preventOpening={isDisabled} position={computedTooltipPosition}>
        <button
          className={styles["rte-icon-button-group__item"]}
          type="button"
          data-compact-spacing={isCompact}
          data-first={index === 0}
          data-last={isLast}
          data-orientation={orientation}
          aria-label={label}
          aria-pressed={isIconActive}
          disabled={isDisabled}
          data-active={isIconActive}
          data-appearance={appearance}
          onClick={handleOnClick}
        >
          <Icon name={iconName} />
        </button>
      </Tooltip>
      {!isLast && (
        <Divider
          style={computedDividerStyle()}
          data-is-left-item-active={isIconActive}
          data-is-right-item-active={isNextIconActive}
          data-left-item-index={index}
          data-right-item-index={index + 1}
          orientation={orientation === "vertical" ? "horizontal" : "vertical"}
          appearance={dividerAppearance}
          endPoint="square"
        />
      )}
    </>
  );
};

export default IconButtonGroupItem;
