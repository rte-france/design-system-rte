import {
  isNavAction,
  isNavGroup,
  isNavLink,
} from "@design-system-rte/core/components/side-nav/nav-item/nav-item.guards";
import type { NavItem } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";
import { getDividerAppearanceBySideNavTheme } from "@design-system-rte/core/components/side-nav/side-nav.constants";
import { SideNavProps as CoreSideNavProps } from "@design-system-rte/core/components/side-nav/side-nav.interface";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { forwardRef, Fragment, ReactNode, useEffect, useState } from "react";

import { useActiveKeyboard } from "../../hooks/useActiveKeyboard";
import Divider from "../divider/Divider";

import BaseSideNav from "./baseSideNav/BaseSideNav";
import NavItem from "./navItem/NavItem";
import NavMenu from "./navMenu/NavMenu";
import NavLinkShell, { NavLinkRenderer } from "./shared/NavLinkShell";
import style from "./SideNav.module.scss";

interface SideNavProps extends Partial<CoreSideNavProps>, Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
  children?: ReactNode;
  defaultCollapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  onNavigate?: (route: string) => void;
  renderLink?: NavLinkRenderer;
  onItemClicked?: (itemId: string) => void;
}

const TRANSITION_DURATION = 300;

const SideNav = forwardRef<HTMLElement | HTMLDivElement, SideNavProps>(
  (
    {
      size = "m",
      collapsible,
      children,
      headerConfig,
      items,
      footerItems,
      isCollapsed: controlledIsCollapsed,
      defaultCollapsed = false,
      onCollapsedChange,
      appearance = "brand",
      contrast = "high",
      activeItem,
      onNavigate,
      renderLink,
      onItemClicked,
    }: SideNavProps,
    ref,
  ) => {
    const [isCollapsed, setIsCollapsed] = useState(controlledIsCollapsed ?? defaultCollapsed);
    const [shouldShowTitle, setShouldShowTitle] = useState(true);

    useEffect(() => {
      if (controlledIsCollapsed !== undefined) {
        setIsCollapsed(controlledIsCollapsed);
      }
    }, [controlledIsCollapsed]);

    useEffect(() => {
      if (isCollapsed) {
        setShouldShowTitle(false);
      } else {
        const timer = setTimeout(() => {
          setShouldShowTitle(true);
        }, TRANSITION_DURATION);
        return () => clearTimeout(timer);
      }
    }, [isCollapsed]);

    const collapseSideNav = () => {
      const newCollapsed = !isCollapsed;
      if (controlledIsCollapsed === undefined) {
        setIsCollapsed(newCollapsed);
      }
      onCollapsedChange?.(newCollapsed);
    };

    const collapseIcon = isCollapsed ? "arrow-double-right" : "arrow-double-left";

    const dividerAppearance = getDividerAppearanceBySideNavTheme(appearance, contrast);

    const handleHeaderKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if ([SPACE_KEY, ENTER_KEY].includes(event.key)) {
        event.preventDefault();
        if (headerConfig?.onClick) {
          headerConfig.onClick();
        }
      }
    };

    const { onKeyDown: headerOnKeyDown } = useActiveKeyboard<HTMLButtonElement>(
      { onKeyDown: handleHeaderKeyDown },
      {
        interactiveKeyCodes: [SPACE_KEY, ENTER_KEY],
      },
    );

    const headerTitleContent = (
      <div className={style.sideNavHeaderTitle}>
        <div className={style.sideNavHeaderIdentifier}>{headerConfig?.identifier}</div>
        {isCollapsed ? "" : <h1 data-hidden={!shouldShowTitle}>{headerConfig?.title}</h1>}
      </div>
    );

    const ariaLabel = headerConfig?.ariaLabel;
    const headerRoute =
      headerConfig?.route === null || headerConfig?.route === undefined || headerConfig?.route === ""
        ? undefined
        : headerConfig.route;

    let headerTitle: ReactNode;

    if (headerRoute && !headerConfig?.external) {
      headerTitle = (
        <NavLinkShell
          route={headerRoute}
          label={headerConfig?.title ?? ""}
          className={style.sideNavHeaderTitleContainer}
          onNavigate={onNavigate}
          renderLink={renderLink}
          onClick={
            headerConfig?.onClick
              ? () => {
                  headerConfig.onClick?.();
                }
              : undefined
          }
        >
          {headerTitleContent}
        </NavLinkShell>
      );
    } else if (headerRoute && headerConfig?.external) {
      headerTitle = (
        <NavLinkShell
          route={headerRoute}
          label={headerConfig?.title ?? ""}
          external={true}
          className={style.sideNavHeaderTitleContainer}
          onClick={
            headerConfig?.onClick
              ? () => {
                  headerConfig.onClick?.();
                }
              : undefined
          }
        >
          {headerTitleContent}
        </NavLinkShell>
      );
    } else if (headerConfig?.onClick) {
      headerTitle = (
        <button
          type="button"
          className={style.sideNavHeaderTitleContainer}
          onClick={headerConfig.onClick}
          onKeyDown={headerOnKeyDown}
          aria-label={ariaLabel}
        >
          {headerTitleContent}
        </button>
      );
    } else {
      headerTitle = <div className={style.sideNavHeaderTitleContainer}>{headerTitleContent}</div>;
    }

    function handleItemActivate(item: NavItem, itemId: string): void {
      if (isNavAction(item)) {
        item.onClick();
      }
      onItemClicked?.(itemId);
    }

    function renderNavItems(itemsToRender: NavItem[] | undefined) {
      if (!itemsToRender?.length) {
        return null;
      }

      return (
        <ul>
          {itemsToRender.map((item: NavItem) => {
            if (isNavGroup(item)) {
              return (
                <NavMenu
                  key={item.id || item.label}
                  {...item}
                  isCollapsed={isCollapsed}
                  appearance={appearance}
                  contrast={contrast}
                  onNavigate={onNavigate}
                  renderLink={renderLink}
                  onItemClick={(itemId) => {
                    onItemClicked?.(itemId);
                  }}
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
                      badge={item.badge}
                      label={item.label}
                      icon={item.icon}
                      hasLeadingIcon={item.hasLeadingIcon}
                      isCollapsed={isCollapsed}
                      route={item.route}
                      external={item.external}
                      appearance={appearance}
                      active={item.active ?? (item.id === activeItem && !!activeItem)}
                      onNavigate={onNavigate}
                      renderLink={renderLink}
                      onClick={() => handleItemActivate(item, item.id || item.label)}
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
                      badge={item.badge}
                      label={item.label}
                      icon={item.icon}
                      hasLeadingIcon={item.hasLeadingIcon}
                      isCollapsed={isCollapsed}
                      appearance={appearance}
                      active={item.active ?? (item.id === activeItem && !!activeItem)}
                      onClick={() => handleItemActivate(item, item.id || item.label)}
                    />
                  </li>
                  {item.hasDivider && <Divider appearance={dividerAppearance} />}
                </Fragment>
              );
            }
            return null;
          })}
        </ul>
      );
    }

    return (
      <BaseSideNav
        ref={ref}
        size={size}
        isCollapsed={isCollapsed}
        appearance={appearance}
        contrast={contrast}
        className={style.sideNavContainer}
        header={
          <div className={style.sideNavHeaderContainer} data-compact={headerConfig?.isCompact ?? false}>
            <div
              className={style.sideNavHeader}
              data-collapsed={isCollapsed}
              data-appearance={appearance}
              data-compact={headerConfig?.isCompact ?? false}
            >
              {headerTitle}
              {!headerConfig?.isCompact && (
                <div className={style.sideNavHeaderVersion} data-hidden={!shouldShowTitle}>
                  <span>{headerConfig?.version}</span>
                </div>
              )}
            </div>
            <Divider appearance={dividerAppearance} />
          </div>
        }
        body={<div className={style.sideNavBody}>{renderNavItems(items)}</div>}
        footer={
          (footerItems?.length || collapsible) && (
            <div className={style.sideNavFooterContainer}>
              {footerItems?.length && <div className={style.sideNavFooterItems}>{renderNavItems(footerItems)}</div>}
              <Divider appearance={dividerAppearance} />
              <div className={style.sideNavFooter}>
                {collapsible && (
                  <div className={style.collapsibleSection}>
                    <NavItem
                      id="collapse-button"
                      kind="action"
                      icon={collapseIcon}
                      hasLeadingIcon={true}
                      isCollapsed={isCollapsed}
                      onClick={collapseSideNav}
                      label={isCollapsed ? "Ouvrir le menu" : "Réduire le menu"}
                      appearance={appearance}
                      role="button"
                    />
                  </div>
                )}
              </div>
            </div>
          )
        }
      >
        {children}
      </BaseSideNav>
    );
  },
);

export default SideNav;
export type { NavLinkRenderer, NavLinkRenderProps } from "./shared/NavLinkShell";
