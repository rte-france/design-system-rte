import { NavItemProps } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";
import { NavMenuProps as CoreNavMenuProps } from "@design-system-rte/core/components/side-nav/nav-menu/nav-menu.interface";
import {
  ARROW_DOWN_KEY,
  ARROW_UP_KEY,
  ENTER_KEY,
  ESCAPE_KEY,
  SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { ForwardedRef, forwardRef, HTMLAttributes, ReactNode, useState } from "react";

import { Icon } from "../../..";
import { useActiveKeyboard } from "../../../hooks/useActiveKeyboard";
import { concatClassNames } from "../../utils";
import NavItem from "../navItem/NavItem";

import style from "./NavMenu.module.scss";

interface NavMenuProps extends CoreNavMenuProps, Omit<HTMLAttributes<HTMLLIElement>, "onClick"> {
  children?: ReactNode;
  parentMenuOpen?: boolean;
}

const NavMenuComponent = forwardRef<HTMLElement | HTMLLIElement, NavMenuProps>(
  (
    {
      icon,
      showIcon,
      onClick,
      label,
      collapsed,
      link,
      items = [],
      open: controlledOpen,
      showMenuIcon = true,
      parentMenuOpen,
      ...props
    }: NavMenuProps,
    ref: ForwardedRef<HTMLElement | HTMLLIElement>,
  ) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
    const isControlled = controlledOpen !== undefined;

    const toggleMenu = () => {
      if (!isControlled) {
        setInternalOpen(!internalOpen);
      }
      if (onClick) {
        onClick();
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
      if ([SPACE_KEY, ENTER_KEY].includes(e.key)) {
        e.preventDefault();
        toggleMenu();
      }
      if (e.key === ESCAPE_KEY && isOpen) {
        e.preventDefault();
        if (!isControlled) {
          setInternalOpen(false);
        }
      }
    };

    const { onKeyDown: onKeyDownAnchor } = useActiveKeyboard<HTMLAnchorElement>(
      { onKeyDown: handleKeyDown as React.KeyboardEventHandler<HTMLAnchorElement> },
      {
        interactiveKeyCodes: [SPACE_KEY, ENTER_KEY, ESCAPE_KEY, ARROW_DOWN_KEY, ARROW_UP_KEY],
      },
    );

    const { onKeyDown: onKeyDownSpan } = useActiveKeyboard<HTMLSpanElement>(
      { onKeyDown: handleKeyDown as React.KeyboardEventHandler<HTMLSpanElement> },
      {
        interactiveKeyCodes: [SPACE_KEY, ENTER_KEY, ESCAPE_KEY, ARROW_DOWN_KEY, ARROW_UP_KEY],
      },
    );

    const hasNestedItems = items.length;
    const shouldShowMenu = !collapsed && hasNestedItems;
    const nestedItemsParentMenuOpen = isOpen;
    const tabIndex = parentMenuOpen === false ? -1 : 0;

    return (
      <li
        className={concatClassNames(style.navMenuContainer, collapsed && style.collapsed, isOpen && style.open)}
        ref={ref as ForwardedRef<HTMLLIElement>}
        {...props}
      >
        {link ? (
          <a href={link} className={style.navMenu} onClick={toggleMenu} tabIndex={tabIndex} onKeyDown={onKeyDownAnchor}>
            <NavMenuLabel icon={icon} showIcon={showIcon} label={label} collapsed={collapsed} />
            {shouldShowMenu && showMenuIcon && (
              <Icon
                name="arrow-chevron-right"
                className={concatClassNames(style.menuIcon, isOpen && style.menuIconOpen)}
              />
            )}
          </a>
        ) : (
          <span className={style.navMenu} onClick={toggleMenu} tabIndex={tabIndex} onKeyDown={onKeyDownSpan}>
            <NavMenuLabel icon={icon} showIcon={showIcon} label={label} collapsed={collapsed} />
            {shouldShowMenu && showMenuIcon && (
              <Icon
                name="arrow-chevron-right"
                className={concatClassNames(style.menuIcon, isOpen && style.menuIconOpen)}
              />
            )}
          </span>
        )}
        {shouldShowMenu && (
          <ul className={concatClassNames(style.nestedMenu, isOpen && style.nestedMenuOpen)}>
            {items.map((item: NavItemProps) => {
              const hasNestedItems = !!item.items?.length;
              if (hasNestedItems) {
                return (
                  <NavMenuComponent
                    key={item.label}
                    label={item.label}
                    icon={item.icon}
                    showIcon={item.showIcon}
                    collapsed={collapsed}
                    link={item.link}
                    onClick={item.onClick}
                    items={item.items || []}
                    showMenuIcon={showMenuIcon}
                    parentMenuOpen={nestedItemsParentMenuOpen}
                  />
                );
              }
              return (
                <NavItem
                  key={item.label}
                  label={item.label}
                  icon={item.icon}
                  showIcon={item.showIcon}
                  collapsed={collapsed}
                  link={item.link}
                  onClick={item.onClick}
                  parentMenuOpen={nestedItemsParentMenuOpen}
                />
              );
            })}
          </ul>
        )}
      </li>
    );
  },
);

const NavMenuLabel = (props: Omit<NavMenuProps, "children" | "items" | "open" | "showMenuIcon">) => {
  return (
    <>
      {props.showIcon && props.icon && <Icon name={props.icon} className={style.icon} />}
      {props.collapsed ? null : <span>{props.label}</span>}
    </>
  );
};

NavMenuComponent.displayName = "NavMenu";

const NavMenu = NavMenuComponent;

export default NavMenu;
