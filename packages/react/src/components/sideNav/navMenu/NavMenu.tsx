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
import Tooltip from "../../tooltip/Tooltip";
import { concatClassNames } from "../../utils";
import NavItem from "../navItem/NavItem";

import style from "./NavMenu.module.scss";

interface NavMenuProps extends CoreNavMenuProps, Omit<HTMLAttributes<HTMLLIElement>, "onClick"> {
  children?: ReactNode;
  parentMenuOpen?: boolean;
}

interface NavMenuContentProps {
  link?: string;
  tabIndex: number;
  onClick: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void;
  children: ReactNode;
}

const NavMenuContent = ({ link, tabIndex, onClick, onKeyDown, children }: NavMenuContentProps) => {
  const commonProps = {
    className: style.navMenu,
    onClick,
    tabIndex,
    onKeyDown: onKeyDown as React.KeyboardEventHandler<HTMLElement>,
  };

  if (link) {
    return (
      <a href={link} {...commonProps}>
        {children}
      </a>
    );
  }

  return <span {...commonProps}>{children}</span>;
};

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
      appearance,
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

    const { onKeyDown } = useActiveKeyboard<HTMLElement>(
      { onKeyDown: handleKeyDown },
      {
        interactiveKeyCodes: [SPACE_KEY, ENTER_KEY, ESCAPE_KEY, ARROW_DOWN_KEY, ARROW_UP_KEY],
      },
    );

    const hasNestedItems = items.length;
    const shouldShowMenu = !collapsed && hasNestedItems;
    const nestedItemsParentMenuOpen = isOpen;
    const tabIndex = parentMenuOpen === false ? -1 : 0;

    const chevronIcon =
      shouldShowMenu && showMenuIcon ? (
        <Icon name="arrow-chevron-right" className={concatClassNames(style.menuIcon, isOpen && style.menuIconOpen)} />
      ) : null;

    const menuContent = (
      <>
        <NavMenuLabel icon={icon} showIcon={showIcon} label={label} collapsed={collapsed} />
        {chevronIcon}
      </>
    );

    const listItem = (
      <li
        className={concatClassNames(
          style.navMenuContainer,
          appearance && style[appearance],
          collapsed && style.collapsed,
          isOpen && style.open,
          parentMenuOpen && style.nested,
        )}
        ref={ref as ForwardedRef<HTMLLIElement>}
        {...props}
      >
        <NavMenuContent link={link} tabIndex={tabIndex} onClick={toggleMenu} onKeyDown={onKeyDown}>
          {menuContent}
        </NavMenuContent>
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
                    appearance={appearance}
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
                  appearance={appearance}
                />
              );
            })}
          </ul>
        )}
      </li>
    );

    if (collapsed && label) {
      return (
        <Tooltip
          label={label}
          position="right"
          alignment="center"
          arrow={false}
          shouldFocusTrigger={false}
          triggerStyles={{ outline: "none" }}
        >
          {listItem}
        </Tooltip>
      );
    }

    return listItem;
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
