import { NavItemProps } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";
import { NavMenuProps as CoreNavMenuProps } from "@design-system-rte/core/components/side-nav/nav-menu/nav-menu.interface";
import { dividerAppearanceBySideNavAppearance } from "@design-system-rte/core/components/side-nav/side-nav.constants";
import {
  ARROW_DOWN_KEY,
  ARROW_UP_KEY,
  ENTER_KEY,
  ESCAPE_KEY,
  SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { forwardRef, HTMLAttributes, ReactNode, useState } from "react";

import { useActiveKeyboard } from "../../../hooks/useActiveKeyboard";
import Badge from "../../badge/Badge";
import Divider from "../../divider/Divider";
import Icon from "../../icon/Icon";
import Tooltip from "../../tooltip/Tooltip";
import { concatClassNames } from "../../utils";
import NavItem from "../navItem/NavItem";

import style from "./NavMenu.module.scss";

interface NavMenuProps extends CoreNavMenuProps, Omit<HTMLAttributes<HTMLLIElement>, "onClick"> {
  children?: ReactNode;
  isNested?: boolean;
  parentMenuOpen?: boolean;
}

interface NavMenuContentProps {
  link?: string;
  label: string;
  tabIndex: number;
  onClick: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void;
  children: ReactNode;
}

const NavMenuContent = ({ link, label, tabIndex, onClick, onKeyDown, children }: NavMenuContentProps) => {
  const commonProps = {
    className: style.navMenu,
    onClick,
    tabIndex,
    label,
    onKeyDown: onKeyDown as React.KeyboardEventHandler<HTMLElement>,
  };

  if (link) {
    return (
      <a href={link} {...commonProps}>
        {children}
      </a>
    );
  }

  return (
    <span aria-label={label} {...commonProps}>
      {children}
    </span>
  );
};

const NavMenu = forwardRef<HTMLLIElement, NavMenuProps>(
  (
    {
      icon,
      showIcon = true,
      onClick,
      label,
      collapsed,
      link,
      items = [],
      open: controlledOpen,
      showMenuIcon = true,
      isNested,
      parentMenuOpen,
      appearance = "brand",
      badge,
      showDivider,
      ...props
    }: NavMenuProps,
    ref,
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
        <div className={style.menuContentLeft}>
          <NavMenuLabel icon={icon} showIcon={showIcon} label={label} collapsed={collapsed} isNested={isNested} />
        </div>
        <div className={style.menuContentRight}>
          {badge && <Badge badgeType={badge.badgeType} size={badge.size} content={badge.content} count={badge.count} />}
          {chevronIcon}
        </div>
      </>
    );

    const listItem = (
      <li
        className={concatClassNames(
          style.navMenuContainer,
          appearance && style[appearance],
          collapsed && style.collapsed,
          isOpen && style.open,
          isNested && style.nested,
        )}
        ref={ref}
        {...props}
      >
        <NavMenuContent link={link} label={label} tabIndex={tabIndex} onClick={toggleMenu} onKeyDown={onKeyDown}>
          {menuContent}
        </NavMenuContent>
        {shouldShowMenu && (
          <ul className={concatClassNames(style.nestedMenu, isOpen && style.nestedMenuOpen)}>
            {items.map((item: NavItemProps) => {
              const hasNestedItems = !!item.items?.length;
              if (hasNestedItems) {
                return (
                  <NavMenu
                    key={item.id || item.label}
                    label={item.label}
                    icon={item.icon}
                    showIcon={item.showIcon}
                    collapsed={collapsed}
                    link={item.link}
                    onClick={item.onClick}
                    items={item.items || []}
                    showMenuIcon={showMenuIcon}
                    isNested={true}
                    parentMenuOpen={nestedItemsParentMenuOpen}
                    appearance={appearance}
                    badge={item.badge}
                  />
                );
              }
              return (
                <>
                  <li key={item.id || item.label}>
                    <NavItem
                      label={item.label}
                      icon={item.icon}
                      showIcon={item.showIcon}
                      collapsed={collapsed}
                      link={item.link}
                      onClick={item.onClick}
                      isNested={true}
                      parentMenuOpen={nestedItemsParentMenuOpen}
                      appearance={appearance}
                      badge={item.badge}
                    />
                  </li>
                  {item.showDivider && <Divider appearance={dividerAppearanceBySideNavAppearance[appearance]} />}
                </>
              );
            })}
          </ul>
        )}
      </li>
    );

    if (collapsed && label) {
      return (
        <>
          <Tooltip
            label={label}
            position="right"
            alignment="center"
            arrow={false}
            shouldFocusTrigger={false}
            triggerStyles={{ outline: "none" }}
            gap={12}
          >
            {listItem}
          </Tooltip>
          {showDivider && <Divider appearance={dividerAppearanceBySideNavAppearance[appearance]} />}
        </>
      );
    }

    return (
      <>
        {listItem}
        {showDivider && <Divider appearance={dividerAppearanceBySideNavAppearance[appearance]} />}
      </>
    );
  },
);

const NavMenuLabel = ({ isNested, ...props }: Omit<NavMenuProps, "children" | "items" | "open" | "showMenuIcon">) => {
  const iconSize = isNested ? 16 : props.collapsed ? 24 : 20;
  return (
    <>
      {props.showIcon && props.icon && <Icon name={props.icon} className={style.icon} size={iconSize} />}
      {props.collapsed ? null : <span>{props.label}</span>}
    </>
  );
};

export default NavMenu;
