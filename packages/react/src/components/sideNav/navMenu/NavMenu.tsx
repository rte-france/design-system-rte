import { NavItemProps } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";
import { NavMenuProps as CoreNavMenuProps } from "@design-system-rte/core/components/side-nav/nav-menu/nav-menu.interface";
import { dividerAppearanceBySideNavAppearance } from "@design-system-rte/core/components/side-nav/side-nav.constants";
import { forwardRef, Fragment, HTMLAttributes, ReactNode, useState } from "react";

import Badge from "../../badge/Badge";
import Divider from "../../divider/Divider";
import Icon from "../../icon/Icon";
import NavItem from "../navItem/NavItem";
import NavContentWrapper from "../shared/NavContentWrapper";
import NavLabel from "../shared/NavLabel";
import NavTooltipWrapper from "../shared/NavTooltipWrapper";
import { getNavTabIndex } from "../shared/navUtils";
import useNavKeyboard from "../shared/useNavKeyboard";

import style from "./NavMenu.module.scss";

interface NavMenuProps extends CoreNavMenuProps, Omit<HTMLAttributes<HTMLLIElement>, "onClick"> {
  children?: ReactNode;
  isNested?: boolean;
  parentMenuOpen?: boolean;
}

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

    function toggleMenu() {
      if (!isControlled) {
        setInternalOpen(!internalOpen);
      }
      if (onClick) {
        onClick();
      }
    }

    function handleEscape() {
      if (isOpen && !isControlled) {
        setInternalOpen(false);
      }
    }

    const { onKeyDown } = useNavKeyboard<HTMLElement>({
      onEnterOrSpace: toggleMenu,
      onEscape: handleEscape,
      includeArrowKeys: true,
      includeEscape: true,
    });

    const hasNestedItems = items.length;
    const shouldShowMenu = !collapsed && hasNestedItems;
    const nestedItemsParentMenuOpen = isOpen;
    const tabIndex = getNavTabIndex(parentMenuOpen);

    const chevronIcon =
      shouldShowMenu && showMenuIcon ? (
        <Icon name="arrow-chevron-right" className={style.menuIcon} data-open={isOpen} />
      ) : null;

    const menuContent = (
      <>
        <div className={style.menuContentLeft}>
          <NavLabel
            icon={icon}
            showIcon={showIcon}
            label={label}
            collapsed={collapsed}
            isNested={isNested}
            styleType="menu"
          />
        </div>
        <div className={style.menuContentRight}>
          {!collapsed && badge && (
            <Badge badgeType={badge.badgeType} size={badge.size} content={badge.content} count={badge.count} />
          )}
          {chevronIcon}
        </div>
      </>
    );

    const listItem = (
      <li
        className={style.navMenuContainer}
        data-collapsed={collapsed}
        data-appearance={appearance}
        data-nested={isNested}
        data-open={isOpen}
        ref={ref}
        {...props}
      >
        <NavContentWrapper
          link={link}
          label={label}
          tabIndex={tabIndex}
          onClick={toggleMenu}
          onKeyDown={onKeyDown}
          styleType="menu"
        >
          {menuContent}
        </NavContentWrapper>
        {shouldShowMenu && (
          <ul className={style.nestedMenu} data-open={isOpen}>
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
                    showDivider={item.showDivider}
                    isNested={true}
                    parentMenuOpen={nestedItemsParentMenuOpen}
                    appearance={appearance}
                    badge={item.badge}
                  />
                );
              }
              return (
                <Fragment key={item.id || item.label}>
                  <li>
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
                </Fragment>
              );
            })}
          </ul>
        )}
      </li>
    );

    const wrappedListItem = (
      <NavTooltipWrapper label={label} collapsed={collapsed}>
        {listItem}
      </NavTooltipWrapper>
    );

    return (
      <>
        {wrappedListItem}
        {showDivider && <Divider appearance={dividerAppearanceBySideNavAppearance[appearance]} />}
      </>
    );
  },
);

export default NavMenu;
