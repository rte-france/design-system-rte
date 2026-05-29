import { getNavItemLabelIconSize } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.utils";
import { ReactNode } from "react";

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
}

function NavLabel({
  icon,
  hasLeadingIcon = true,
  label,
  isCollapsed,
  isNested,
  styleType = "item",
}: NavLabelProps): ReactNode {
  const iconSize = getNavItemLabelIconSize(isNested, isCollapsed);
  const style = styleType === "menu" ? navMenuStyle : navItemStyle;

  return (
    <>
      {hasLeadingIcon && icon && <Icon name={icon} className={style.icon} size={iconSize} />}
      {isCollapsed ? null : <span>{label}</span>}
    </>
  );
}

export default NavLabel;
