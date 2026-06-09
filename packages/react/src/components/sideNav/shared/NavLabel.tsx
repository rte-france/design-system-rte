import { BadgeProps } from "@design-system-rte/core/components/badge/badge.interface";
import {
  getCollapsedSideNavBadgeType,
  getNavItemLabelIconSize,
  shouldDisplaySideNavBadge,
} from "@design-system-rte/core/components/side-nav/nav-item/nav-item.utils";
import { ReactNode } from "react";

import Badge from "../../badge/Badge";
import Icon from "../../icon/Icon";
import navItemStyle from "../navItem/NavItem.module.scss";
import navMenuStyle from "../navMenu/NavMenu.module.scss";

interface NavLabelProps {
  icon?: string;
  hasLeadingIcon?: boolean;
  label: string;
  isCollapsed?: boolean;
  isNested?: boolean;
  styleType?: "item" | "menu";
  badge?: BadgeProps;
}

function NavLabel({
  icon,
  hasLeadingIcon = true,
  label,
  isCollapsed,
  isNested,
  styleType = "item",
  badge,
}: NavLabelProps): ReactNode {
  const iconSize = getNavItemLabelIconSize(isNested, isCollapsed);
  const style = styleType === "menu" ? navMenuStyle : navItemStyle;

  function renderIcon(): ReactNode {
    if (!hasLeadingIcon || !icon) {
      return null;
    }

    const iconNode = <Icon name={icon} className={style.icon} size={iconSize} />;

    if (isCollapsed && badge && shouldDisplaySideNavBadge(badge)) {
      return (
        <Badge badgeType={getCollapsedSideNavBadgeType(badge)} size="xs" content="empty">
          {iconNode}
        </Badge>
      );
    }

    return iconNode;
  }

  return (
    <>
      {renderIcon()}
      {isCollapsed ? null : <span>{label}</span>}
    </>
  );
}

export default NavLabel;
