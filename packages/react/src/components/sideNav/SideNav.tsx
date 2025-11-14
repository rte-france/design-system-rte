import { NavItemProps } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";
import { dividerAppearanceBySideNavAppearance } from "@design-system-rte/core/components/side-nav/side-nav.constants";
import { SideNavProps as CoreSideNavProps } from "@design-system-rte/core/components/side-nav/side-nav.interface";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { forwardRef, Fragment, ReactNode, useEffect, useState } from "react";

import { useActiveKeyboard } from "../../hooks/useActiveKeyboard";
import Divider from "../divider/Divider";

import BaseSideNav from "./baseSideNav/BaseSideNav";
import NavItem from "./navItem/NavItem";
import NavMenu from "./navMenu/NavMenu";
import style from "./SideNav.module.scss";

interface SideNavProps extends Partial<CoreSideNavProps>, Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
  children?: ReactNode;
  defaultCollapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
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
      collapsed,
      defaultCollapsed = false,
      onCollapsedChange,
      appearance = "brand",
      activeItem,
    }: SideNavProps,
    ref,
  ) => {
    const [isCollapsed, setIsCollapsed] = useState(collapsed ?? defaultCollapsed);
    const [shouldShowTitle, setShouldShowTitle] = useState(true);

    useEffect(() => {
      if (collapsed !== undefined) {
        setIsCollapsed(collapsed);
      }
    }, [collapsed]);

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
      if (collapsed === undefined) {
        setIsCollapsed(newCollapsed);
      }
      onCollapsedChange?.(newCollapsed);
    };

    const collapseIcon = isCollapsed ? "arrow-double-right" : "arrow-double-left";

    const dividerAppearance = dividerAppearanceBySideNavAppearance[appearance];

    const handleHeaderKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if ([SPACE_KEY, ENTER_KEY].includes(e.key)) {
        e.preventDefault();
        if (headerConfig?.onClick) {
          headerConfig.onClick();
        }
      }
    };

    const { onKeyDown: headerOnKeyDown } = useActiveKeyboard<HTMLDivElement>(
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

    const headerTitleLink = (
      <a
        href={headerConfig?.link ?? ""}
        className={style.sideNavHeaderTitleContainer}
        onClick={headerConfig?.onClick}
        aria-label={ariaLabel}
      >
        {headerTitleContent}
      </a>
    );

    const clickableHeaderTitle = (
      <div
        className={style.sideNavHeaderTitleContainer}
        tabIndex={0}
        onClick={headerConfig?.onClick}
        onKeyDown={headerOnKeyDown}
        role="button"
        aria-label={ariaLabel}
      >
        {headerTitleContent}
      </div>
    );

    const headerTitle = headerConfig?.link ? (
      headerTitleLink
    ) : headerConfig?.onClick ? (
      clickableHeaderTitle
    ) : (
      <div className={style.sideNavHeaderTitleContainer}>{headerTitleContent}</div>
    );

    function renderNavItems(itemsToRender: NavItemProps[] | undefined) {
      if (!itemsToRender?.length) {
        return null;
      }

      return (
        <ul>
          {itemsToRender.map((item: NavItemProps) => {
            const hasNestedItems = item.items?.length;
            if (hasNestedItems) {
              return (
                <NavMenu
                  key={item.id}
                  badge={item.badge}
                  label={item.label}
                  icon={item.icon}
                  showIcon={item.showIcon}
                  collapsed={isCollapsed}
                  link={item.link}
                  onClick={item.onClick}
                  items={item.items || []}
                  appearance={appearance}
                  showDivider={item.showDivider}
                />
              );
            }
            return (
              <Fragment key={item.id}>
                <li>
                  <NavItem
                    id={item.id}
                    badge={item.badge}
                    label={item.label}
                    icon={item.icon}
                    showIcon={item.showIcon}
                    collapsed={isCollapsed}
                    link={item.link}
                    onClick={item.onClick}
                    appearance={appearance}
                    active={item.id === activeItem && !!activeItem}
                  />
                </li>
                {item.showDivider && <Divider appearance={dividerAppearance} />}
              </Fragment>
            );
          })}
        </ul>
      );
    }

    return (
      <BaseSideNav
        ref={ref}
        size={size}
        collapsed={isCollapsed}
        appearance={appearance}
        style={{ minHeight: "100vh" }}
        header={
          <div className={style.sideNavHeaderContainer}>
            <div className={style.sideNavHeader} data-collapsed={isCollapsed} data-appearance={appearance}>
              {headerTitle}
              <div className={style.sideNavHeaderVersion} data-hidden={!shouldShowTitle}>
                <span>{headerConfig?.version}</span>
              </div>
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
                      icon={collapseIcon}
                      showIcon={true}
                      collapsed={isCollapsed}
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
