import { NavItemProps as CoreNavItemProps } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";
import { ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from "react";

import { Icon } from "../../..";
import { concatClassNames } from "../../utils";

interface NavItemProps extends CoreNavItemProps, Omit<HTMLAttributes<HTMLDivElement>, "onClick"> {
  children?: ReactNode;
}

import style from "./NavItem.module.scss";

const NavItem = forwardRef<HTMLElement | HTMLDivElement, NavItemProps>(
  (
    { icon, showIcon, onClick, children, collapsed, ...props }: NavItemProps,
    ref: ForwardedRef<HTMLElement | HTMLDivElement>,
  ) => {
    return (
      <div
        className={concatClassNames(style.navItemContainer, collapsed && style.collapsed)}
        onClick={onClick}
        ref={ref as ForwardedRef<HTMLDivElement>}
        {...props}
      >
        <div className={style.navItem}>
          {showIcon && icon && <Icon name={icon} className={style.icon} />}
          {children}
        </div>
      </div>
    );
  },
);

NavItem.displayName = "NavItem";

export default NavItem;
