import {
  isNavAction,
  isNavGroup,
  isNavLink,
} from "@design-system-rte/core/components/side-nav/nav-item/nav-item.guards";
import type { NavItem } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";
import { NavMenuComponentProps } from "@design-system-rte/core/components/side-nav/nav-menu/nav-menu.interface";
import { getDividerAppearanceBySideNavTheme } from "@design-system-rte/core/components/side-nav/side-nav.constants";
import { forwardRef, Fragment, HTMLAttributes, ReactNode, useId, useState } from "react";

import Badge from "../../badge/Badge";
import Divider from "../../divider/Divider";
import Icon from "../../icon/Icon";
import NavItem from "../navItem/NavItem";
import NavLabel from "../shared/NavLabel";
import NavLinkShell, { NavLinkRenderer } from "../shared/NavLinkShell";
import NavTooltipWrapper from "../shared/NavTooltipWrapper";
import { getNavTabIndex } from "../shared/navUtils";
import useNavKeyboard from "../shared/useNavKeyboard";

import style from "./NavMenu.module.scss";

interface NavMenuProps extends NavMenuComponentProps, Omit<HTMLAttributes<HTMLLIElement>, "onClick"> {
  children?: ReactNode;
  isNested?: boolean;
  parentMenuOpen?: boolean;
  onNavigate?: (route: string) => void;
  renderLink?: NavLinkRenderer;
  onItemClick?: (itemId: string) => void;
}

const NavMenu = forwardRef<HTMLLIElement, NavMenuProps>(
  (
    {
      id,
      icon,
      hasLeadingIcon = true,
      label,
      isCollapsed,
      route,
      external = false,
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
      onNavigate,
      renderLink,
      onItemClick,
      ...props
    }: NavMenuProps,
    ref,
  ) => {
    const dividerAppearance = getDividerAppearanceBySideNavTheme(appearance, contrast);
    const [internalOpen, setInternalOpen] = useState(false);
    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
    const isControlled = controlledOpen !== undefined;
    const generatedNestedMenuId = useId();
    const nestedMenuId = `nested-menu-${id || generatedNestedMenuId}`;
    const hasRoute = !!route;

    function setOpen(nextOpen: boolean): void {
      if (isControlled) {
        onOpenChange?.(nextOpen);
      } else {
        setInternalOpen(nextOpen);
      }
    }

    function toggleMenu(): void {
      setOpen(!isOpen);
    }

    function openMenu(): void {
      if (!isOpen) {
        setOpen(true);
      }
    }

    function handleLabelNavigateClick(): void {
      onItemClick?.(id || label);
      openMenu();
    }

    function handleChevronClick(event: React.MouseEvent<HTMLButtonElement>): void {
      event.stopPropagation();
      toggleMenu();
    }

    function handleEscape(): void {
      if (!isOpen) {
        return;
      }
      setOpen(false);
    }

    const { onKeyDown: disclosureKeyDown } = useNavKeyboard<HTMLButtonElement>({
      onEnterOrSpace: toggleMenu,
      onEscape: handleEscape,
      includeArrowKeys: true,
      includeEscape: true,
    });

    const { onKeyDown: chevronKeyDown } = useNavKeyboard<HTMLButtonElement>({
      onEnterOrSpace: toggleMenu,
      onEscape: handleEscape,
      includeEscape: true,
    });

    const hasNestedItems = items.length > 0;
    const shouldShowMenu = !isCollapsed && hasNestedItems;
    const nestedItemsParentMenuOpen = isOpen;
    const tabIndex = getNavTabIndex(parentMenuOpen);

    const chevronIcon =
      shouldShowMenu && hasMenuIcon ? (
        <Icon name="arrow-chevron-right" className={style.menuIcon} data-open={isOpen} />
      ) : null;

    const labelContent = (
      <>
        <div className={style.menuContentLeft}>
          <NavLabel
            icon={icon}
            hasLeadingIcon={hasLeadingIcon}
            label={label}
            isCollapsed={isCollapsed}
            isNested={isNested}
            styleType="menu"
          />
        </div>
        {!isCollapsed && badge && (
          <div className={style.menuContentRight}>
            <Badge badgeType={badge.badgeType} size={badge.size} content={badge.content} count={badge.count} />
          </div>
        )}
      </>
    );

    const menuHeader = hasRoute ? (
      <div className={`${style.navMenu} ${style.navMenuSplit}`}>
        <NavLinkShell
          route={route}
          label={label}
          active={active}
          external={external}
          className={style.navMenuLabel}
          onNavigate={onNavigate}
          renderLink={renderLink}
          onClick={handleLabelNavigateClick}
        >
          {labelContent}
        </NavLinkShell>
        {!isCollapsed && shouldShowMenu && hasMenuIcon && (
          <button
            type="button"
            className={style.navMenuChevron}
            aria-expanded={isOpen}
            aria-controls={nestedMenuId}
            aria-label={`Toggle ${label} submenu`}
            onClick={handleChevronClick}
            onKeyDown={chevronKeyDown}
          >
            {chevronIcon}
          </button>
        )}
      </div>
    ) : (
      <button
        type="button"
        className={style.navMenu}
        tabIndex={tabIndex}
        aria-expanded={shouldShowMenu ? isOpen : undefined}
        aria-controls={shouldShowMenu ? nestedMenuId : undefined}
        aria-label={label}
        onClick={toggleMenu}
        onKeyDown={disclosureKeyDown}
      >
        {labelContent}
        {!isCollapsed && shouldShowMenu && hasMenuIcon && <div className={style.menuContentRight}>{chevronIcon}</div>}
      </button>
    );

    function handleNestedItemClick(itemId: string, item: NavItem): void {
      if (isNavAction(item)) {
        item.onClick();
      }
      onItemClick?.(itemId);
    }

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
        {menuHeader}
        {shouldShowMenu && (
          <ul id={nestedMenuId} className={style.nestedMenu} data-open={isOpen}>
            {isOpen &&
              items.map((item: NavItem) => {
                if (isNavGroup(item)) {
                  return (
                    <NavMenu
                      key={item.id || item.label}
                      {...item}
                      isCollapsed={isCollapsed}
                      hasMenuIcon={hasMenuIcon}
                      isNested={true}
                      parentMenuOpen={nestedItemsParentMenuOpen}
                      appearance={appearance}
                      contrast={contrast}
                      onNavigate={onNavigate}
                      renderLink={renderLink}
                      onItemClick={onItemClick}
                    />
                  );
                }
                if (isNavLink(item)) {
                  return (
                    <Fragment key={item.id || item.label}>
                      <li>
                        <NavItem
                          id={item.id}
                          kind="link"
                          label={item.label}
                          icon={item.icon}
                          hasLeadingIcon={item.hasLeadingIcon}
                          isCollapsed={isCollapsed}
                          route={item.route}
                          external={item.external}
                          isNested={true}
                          parentMenuOpen={nestedItemsParentMenuOpen}
                          appearance={appearance}
                          active={item.active}
                          badge={item.badge}
                          onNavigate={onNavigate}
                          renderLink={renderLink}
                          onClick={() => handleNestedItemClick(item.id || item.label, item)}
                        />
                      </li>
                      {item.hasDivider && <Divider appearance={dividerAppearance} />}
                    </Fragment>
                  );
                }
                if (isNavAction(item)) {
                  return (
                    <Fragment key={item.id || item.label}>
                      <li>
                        <NavItem
                          id={item.id}
                          kind="action"
                          label={item.label}
                          icon={item.icon}
                          hasLeadingIcon={item.hasLeadingIcon}
                          isCollapsed={isCollapsed}
                          isNested={true}
                          parentMenuOpen={nestedItemsParentMenuOpen}
                          appearance={appearance}
                          active={item.active}
                          badge={item.badge}
                          onClick={() => handleNestedItemClick(item.id || item.label, item)}
                        />
                      </li>
                      {item.hasDivider && <Divider appearance={dividerAppearance} />}
                    </Fragment>
                  );
                }
                return null;
              })}
          </ul>
        )}
      </li>
    );

    return (
      <>
        <NavTooltipWrapper label={label} isCollapsed={isCollapsed}>
          {listItem}
        </NavTooltipWrapper>
        {hasDivider && <Divider appearance={dividerAppearance} />}
      </>
    );
  },
);

export default NavMenu;
