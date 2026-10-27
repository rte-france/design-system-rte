import type { IconButtonItem, Orientation } from "@design-system-rte/core";
import { Position } from "@design-system-rte/core/components/common/common-types";

import Icon from "../../icon/Icon";
import Tooltip from "../../tooltip/Tooltip";
import styles from "../IconButtonGroup.module.scss";

interface IconButtonGroupItemProps {
  button: IconButtonItem;
  buttonId: string;
  isDisabled?: boolean;
  computedTooltipPosition: Position;
  isCompact?: boolean;
  index: number;
  isLast: boolean;
  orientation: Orientation;
  appearance?: "brand" | "neutral";
  isIconActive: boolean;
  isNextIconActive: boolean;
  isAllDisabled?: boolean;
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
  isAllDisabled,
  onClick,
}: IconButtonGroupItemProps) => {
  const { name: iconName, label } = button;

  const handleOnClick = () => {
    onClick(buttonId);
  };

  return (
    <>
      <Tooltip
        label={label}
        shouldFocusTrigger={false}
        preventOpening={isDisabled || isAllDisabled}
        position={computedTooltipPosition}
      >
        <button
          className={styles["rte-icon-button-group__item"]}
          type="button"
          data-compact-spacing={isCompact}
          data-first={index === 0}
          data-last={isLast}
          data-orientation={orientation}
          aria-label={label}
          aria-pressed={isIconActive}
          disabled={isDisabled || isAllDisabled}
          data-active={isIconActive}
          data-appearance={appearance}
          data-is-all-disabled={isAllDisabled}
          onClick={handleOnClick}
        >
          <Icon name={iconName} size={isCompact ? 20 : 24} />
        </button>
      </Tooltip>
    </>
  );
};

export default IconButtonGroupItem;
