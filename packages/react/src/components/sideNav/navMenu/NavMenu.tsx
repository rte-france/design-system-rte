import { NavItemProps } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";
import { shouldDisplaySideNavBadge } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.utils";
import { NavMenuProps as CoreNavMenuProps } from "@design-system-rte/core/components/side-nav/nav-menu/nav-menu.interface";
import type { NavMenuProps as CoreNavMenuItemProps } from "@design-system-rte/core/components/side-nav/nav-menu/nav-menu.interface";
import { getDividerAppearanceBySideNavTheme } from "@design-system-rte/core/components/side-nav/side-nav.constants";
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
      id,
      icon,
      hasLeadingIcon = true,
      onClick,
      label,
      isCollapsed,
      link,
      items = [],
      open: controlledOpen,
      onOpenChange,
      hasMenuIcon = true,
      isNested,
      parentMenuOpen,
      appearance = "brand",
      contrast = "high",
      badge,
      hasDivider,
      active,
      ...props
    }: NavMenuProps,
    ref,
  ) => {
    const dividerAppearance = getDividerAppearanceBySideNavTheme(appearance, contrast);
    const [internalOpen, setInternalOpen] = useState(false);
    const isOpen = controlledOpen ?? internalOpen;
    const isControlled = controlledOpen !== undefined;

    function toggleMenu() {
      const nextOpen = !isOpen;
      if (onClick) {
        onClick();
      }
      if (isControlled) {
        onOpenChange?.(nextOpen);
      } else {
        setInternalOpen(nextOpen);
      }
    }

    function handleEscape() {
      if (!isOpen) {
        return;
      }
      if (isControlled) {
        onOpenChange?.(false);
      } else {
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
    const shouldShowMenu = !isCollapsed && hasNestedItems;
    const nestedItemsParentMenuOpen = isOpen;
    const tabIndex = getNavTabIndex(parentMenuOpen);

    const chevronIcon =
      shouldShowMenu && hasMenuIcon ? (
        <Icon name="arrow-chevron-right" className={style.menuIcon} data-open={isOpen} />
      ) : null;

    const showMenuContentRight = !isCollapsed && (shouldDisplaySideNavBadge(badge) || !!chevronIcon);

    const menuContent = (
      <>
        <div className={style.menuContentLeft}>
          <NavLabel
            icon={icon}
            hasLeadingIcon={hasLeadingIcon}
            label={label}
            isCollapsed={isCollapsed}
            isNested={isNested}
            styleType="menu"
            badge={badge}
          />
        </div>
        {showMenuContentRight && (
          <div className={style.menuContentRight}>
            {badge && shouldDisplaySideNavBadge(badge) && (
              <Badge badgeType={badge.badgeType} size={badge.size} content={badge.content} count={badge.count} />
            )}
            {chevronIcon}
          </div>
        )}
      </>
    );

    const listItem = (
      <li
        id={id}
        className={style.navMenuContainer}
        data-collapsed={isCollapsed}
        data-appearance={appearance}
        data-nested={isNested}
        data-open={isOpen}
        data-active={active}
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
                    id={item.id}
                    label={item.label}
                    icon={item.icon}
                    hasLeadingIcon={item.hasLeadingIcon}
                    isCollapsed={isCollapsed}
                    link={item.link}
                    onClick={item.onClick}
                    items={item.items || []}
                    open={(item as CoreNavMenuItemProps).open}
                    onOpenChange={(item as CoreNavMenuItemProps).onOpenChange}
                    active={item.active}
                    hasMenuIcon={hasMenuIcon}
                    hasDivider={item.hasDivider}
                    isNested={true}
                    parentMenuOpen={nestedItemsParentMenuOpen}
                    appearance={appearance}
                    contrast={contrast}
                    badge={item.badge}
                  />
                );
              }
              return (
                <Fragment key={item.id || item.label}>
                  <li>
                    <NavItem
                      id={item.id}
                      label={item.label}
                      icon={item.icon}
                      hasLeadingIcon={item.hasLeadingIcon}
                      isCollapsed={isCollapsed}
                      link={item.link}
                      onClick={item.onClick}
                      isNested={true}
                      parentMenuOpen={nestedItemsParentMenuOpen}
                      appearance={appearance}
                      active={item.active}
                      badge={item.badge}
                    />
                  </li>
                  {item.hasDivider && <Divider appearance={dividerAppearance} />}
                </Fragment>
              );
            })}
          </ul>
        )}
      </li>
    );

    const wrappedListItem = (
      <NavTooltipWrapper label={label} isCollapsed={isCollapsed}>
        {listItem}
      </NavTooltipWrapper>
    );

    return (
      <>
        {wrappedListItem}
        {hasDivider && <Divider appearance={dividerAppearance} />}
      </>
    );
  },
);

export default NavMenu;
