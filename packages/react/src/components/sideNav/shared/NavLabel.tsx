import { getNavItemLabelIconSize } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.utils";
import { ReactNode } from "react";

import Icon from "../../icon/Icon";
import navItemStyle from "../navItem/NavItem.module.scss";
import navMenuStyle from "../navMenu/NavMenu.module.scss";

interface NavLabelProps {
  icon?: string;
  showIcon?: boolean;
  label: string;
  collapsed?: boolean;
  isNested?: boolean;
  styleType?: "item" | "menu";
}

function NavLabel({ icon, showIcon = true, label, collapsed, isNested, styleType = "item" }: NavLabelProps): ReactNode {
  const iconSize = getNavItemLabelIconSize(isNested, collapsed);
  const style = styleType === "menu" ? navMenuStyle : navItemStyle;

  return (
    <>
      {showIcon && icon && <Icon name={icon} className={style.icon} size={iconSize} />}
      {collapsed ? null : <span>{label}</span>}
    </>
  );
}

export default NavLabel;
