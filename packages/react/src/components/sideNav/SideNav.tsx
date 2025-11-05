import { DividerAppearance } from "@design-system-rte/core/components/divider/divider.interface";
import { NavItemProps } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";
import { SideNavProps as CoreSideNavProps } from "@design-system-rte/core/components/side-nav/side-nav.interface";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import React, { ForwardedRef, ReactNode, useState, useEffect } from "react";

import { Divider } from "../..";
import { useActiveKeyboard } from "../../hooks/useActiveKeyboard";
import { concatClassNames } from "../utils";

import BaseSideNav from "./baseSideNav/BaseSideNav";
import NavItem from "./navItem/NavItem";
import NavMenu from "./navMenu/NavMenu";
import style from "./SideNav.module.scss";

interface SideNavProps extends Partial<CoreSideNavProps>, Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
  children?: ReactNode;
}

const TRANSITION_DURATION = 300;

const SideNav = React.forwardRef<HTMLElement | HTMLDivElement, SideNavProps>(
  (
    { size = "m", collapsible, children, headerConfig, items, collapsed = false, appearance = "brand" }: SideNavProps,
    ref,
  ) => {
    const [isCollapsed, setIsCollapsed] = useState(collapsed);
    const [shouldShowTitle, setShouldShowTitle] = useState(true);

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
      setIsCollapsed(!isCollapsed);
    };

    const collapseIcon = isCollapsed ? "arrow-double-right" : "arrow-double-left";

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
        <h1>{shouldShowTitle ? headerConfig?.title : ""}</h1>
      </div>
    );

    const ariaLabel = headerConfig?.ariaLabel;

    const headerTitle = headerConfig?.link ? (
      <a
        href={headerConfig.link}
        className={style.sideNavHeaderTitleContainer}
        onClick={headerConfig?.onClick}
        aria-label={ariaLabel}
      >
        {headerTitleContent}
      </a>
    ) : headerConfig?.onClick ? (
      <div
        className={style.sideNavHeaderTitleContainer}
        tabIndex={0}
        onClick={headerConfig.onClick}
        onKeyDown={headerOnKeyDown}
        role="button"
        aria-label={ariaLabel}
      >
        {headerTitleContent}
      </div>
    ) : (
      <div className={style.sideNavHeaderTitleContainer}>{headerTitleContent}</div>
    );

    return (
      <BaseSideNav
        ref={ref as ForwardedRef<HTMLElement | HTMLDivElement>}
        size={size}
        collapsible={collapsible}
        collapsed={isCollapsed}
        appearance={appearance}
        header={
          <div className={style.sideNavHeaderContainer}>
            <div className={concatClassNames(style.sideNavHeader, style[appearance], isCollapsed && style.collapsed)}>
              {headerTitle}
              <div className={concatClassNames(style.sideNavHeaderVersion, !shouldShowTitle && style.hidden)}>
                <span>{headerConfig?.version}</span>
              </div>
              <Divider appearance={appearance as DividerAppearance} />
            </div>
          </div>
        }
        body={
          <div className={style.sideNavBody}>
            <ul>
              {items?.map((item: NavItemProps) => {
                const hasNestedItems = item.items && item.items.length > 0;
                if (hasNestedItems) {
                  return (
                    <NavMenu
                      key={item.label}
                      label={item.label}
                      icon={item.icon}
                      showIcon={item.showIcon}
                      collapsed={isCollapsed}
                      link={item.link}
                      onClick={item.onClick}
                      items={item.items || []}
                    />
                  );
                }
                return (
                  <NavItem
                    key={item.label}
                    label={item.label}
                    icon={item.icon}
                    showIcon={item.showIcon}
                    collapsed={isCollapsed}
                    link={item.link}
                    onClick={item.onClick}
                  />
                );
              })}
            </ul>
          </div>
        }
        footer={
          collapsible && (
            <div className={style.sideNavFooter}>
              <div className={style.collapsibleSection}>
                <ul>
                  <NavItem
                    icon={collapseIcon}
                    showIcon={true}
                    collapsed={isCollapsed}
                    onClick={collapseSideNav}
                    label={isCollapsed ? "" : "Réduire le menu"}
                  />
                </ul>
              </div>
            </div>
          )
        }
      >
        {children && <div className={style.sideNavContent}>{children}</div>}
      </BaseSideNav>
    );
  },
);

SideNav.displayName = "SideNav";

export default SideNav;
