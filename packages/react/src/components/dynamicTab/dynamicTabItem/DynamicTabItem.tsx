import { BadgeHolderProps } from "@design-system-rte/core";

import Badge from "../../badge/Badge";
import Icon from "../../icon/Icon";
import { isValidIconName } from "../../icon/IconMap";

import styles from "./DynamicTabItem.module.scss";

interface DynamicTabItemProps extends BadgeHolderProps {
  id?: string;
  title: string;
  appearance?: "neutral" | "brand";
  isActive?: boolean;
  onClick?: () => void;
  iconName?: string;
  compactSpacing?: boolean;
}

const DynamicTabItem = ({
  id,
  title,
  appearance = "neutral",
  isActive = false,
  onClick,
  compactSpacing = false,
  badgeContent,
  badgeCount,
  badgeIcon,
  badgeSize,
  badgeType,
  iconName,
}: DynamicTabItemProps) => {
  const shouldDisplayBadge =
    (badgeCount && badgeCount > 0 && badgeContent === "number") || (badgeContent === "icon" && badgeIcon);

  const shouldDisplayIcon = iconName && isValidIconName(iconName);

  console.log("iconName", iconName, "shouldDisplayIcon", shouldDisplayIcon);

  return (
    <button
      id={id}
      className={styles["rte-dynamic-tab-item"]}
      data-appearance={appearance}
      data-active={isActive}
      data-compact-spacing={compactSpacing}
      onClick={onClick}
    >
      {shouldDisplayIcon && <Icon name={iconName} appearance={isActive ? "filled" : "outlined"} />}
      <div className={styles["rte-dynamic-tab-item__title"]}>{title}</div>
      {shouldDisplayBadge && (
        <Badge content={badgeContent} count={badgeCount} icon={badgeIcon} size={badgeSize} badgeType={badgeType} />
      )}
      <button className={styles["rte-dynamic-tab-item__close-button"]} aria-label={`Close ${title} tab`}>
        <Icon name="close" />
      </button>
    </button>
  );
};

export default DynamicTabItem;
