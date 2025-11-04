import { NavItemProps as CoreNavItemProps } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";
import { ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from "react";

import { Icon } from "../../..";
import { concatClassNames } from "../../utils";

interface NavItemProps extends CoreNavItemProps, Omit<HTMLAttributes<HTMLLIElement>, "onClick"> {
  children?: ReactNode;
}

import style from "./NavItem.module.scss";

const NavItem = forwardRef<HTMLElement | HTMLLIElement, NavItemProps>(
  (
    { icon, showIcon, onClick, label, collapsed, link, ...props }: NavItemProps,
    ref: ForwardedRef<HTMLElement | HTMLLIElement>,
  ) => {
    return (
      <li
        className={concatClassNames(style.navItemContainer, collapsed && style.collapsed)}
        onClick={onClick}
        ref={ref as ForwardedRef<HTMLLIElement>}
        {...props}
      >
        {link ? (
          <a href={link} className={style.navItem}>
            <NavItemLabel icon={icon} showIcon={showIcon} label={label} collapsed={collapsed}/>
          </a>
        ) : (
          <span className={style.navItem} tabIndex={0}>
            <NavItemLabel icon={icon} showIcon={showIcon} label={label} collapsed={collapsed} />
          </span>
        )}
      </li>
    );
  },
);

const NavItemLabel = (props: Omit<NavItemProps, "children">) => {
  return (
    <>
      {props.showIcon && props.icon && <Icon name={props.icon} className={style.icon} />}
      {props.collapsed ? null : <span>{props.label}</span>}
    </>
  );
};

NavItem.displayName = "NavItem";

export default NavItem;
