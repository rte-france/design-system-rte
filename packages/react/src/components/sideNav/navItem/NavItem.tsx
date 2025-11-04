import { NavItemProps as CoreNavItemProps } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from "react";

import { Icon } from "../../..";
import { useActiveKeyboard } from "../../../hooks/useActiveKeyboard";
import { concatClassNames } from "../../utils";

interface NavItemProps extends CoreNavItemProps, Omit<HTMLAttributes<HTMLLIElement>, "onClick"> {
  children?: ReactNode;
  parentMenuOpen?: boolean;
}

import style from "./NavItem.module.scss";

const NavItem = forwardRef<HTMLElement | HTMLLIElement, NavItemProps>(
  (
    { icon, showIcon, onClick, label, collapsed, link, parentMenuOpen, ...props }: NavItemProps,
    ref: ForwardedRef<HTMLElement | HTMLLIElement>,
  ) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
      if ([SPACE_KEY, ENTER_KEY].includes(e.key)) {
        e.preventDefault();
        if (onClick) {
          onClick();
        }
      }
    };

    const { onKeyDown } = useActiveKeyboard<HTMLSpanElement>(
      { onKeyDown: handleKeyDown },
      {
        interactiveKeyCodes: [SPACE_KEY, ENTER_KEY],
      },
    );

    const tabIndex = parentMenuOpen === false ? -1 : 0;

    return (
      <li
        className={concatClassNames(style.navItemContainer, collapsed && style.collapsed)}
        onClick={onClick}
        ref={ref as ForwardedRef<HTMLLIElement>}
        {...props}
      >
        {link ? (
          <a href={link} className={style.navItem} tabIndex={tabIndex}>
            <NavItemLabel icon={icon} showIcon={showIcon} label={label} collapsed={collapsed} />
          </a>
        ) : (
          <span className={style.navItem} tabIndex={tabIndex} onKeyDown={onKeyDown}>
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
