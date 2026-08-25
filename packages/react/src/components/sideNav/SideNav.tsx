import { NavItemProps } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";
import { NavMenuProps } from "@design-system-rte/core/components/side-nav/nav-menu/nav-menu.interface";
import { getDividerAppearanceBySideNavTheme } from "@design-system-rte/core/components/side-nav/side-nav.constants";
import { SideNavProps as CoreSideNavProps } from "@design-system-rte/core/components/side-nav/side-nav.interface";
import {
  getSideNavConfigurationIssues,
  shouldShowSideNavFooter,
  shouldShowSideNavHeader,
  shouldUseSideNavDefaultFooter,
  shouldUseSideNavDefaultHeader,
} from "@design-system-rte/core/components/side-nav/side-nav.utils";
import { forwardRef, Fragment, ReactNode, useCallback, useEffect, useState } from "react";

import Divider from "../divider/Divider";

import BaseSideNav from "./baseSideNav/BaseSideNav";
import NavItem from "./navItem/NavItem";
import NavMenu from "./navMenu/NavMenu";
import style from "./SideNav.module.scss";
import SideNavDefaultFooter from "./SideNavDefaultFooter";
import SideNavDefaultHeader from "./SideNavDefaultHeader";
import SideNavHeaderContainer from "./SideNavHeaderContainer";

interface SideNavProps extends Partial<CoreSideNavProps>, Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
  children?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  defaultCollapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  onActiveItemChange?: (id: string | undefined) => void;
}

const TRANSITION_DURATION = 300;

const SideNav = forwardRef<HTMLElement | HTMLDivElement, SideNavProps>(
  (
    {
      size = "m",
      collapsible,
      children,
      header,
      footer,
      headerConfig,
      items,
      footerItems,
      isCollapsed: controlledIsCollapsed,
      defaultCollapsed = false,
      onCollapsedChange,
      onActiveItemChange,
      appearance = "brand",
      contrast = "high",
      activeItem,
    }: SideNavProps,
    ref,
  ) => {
    const [isCollapsed, setIsCollapsed] = useState(controlledIsCollapsed ?? defaultCollapsed);
    const [shouldShowTitle, setShouldShowTitle] = useState(true);
    const [menuOpenOverrides, setMenuOpenOverrides] = useState<Record<string, boolean>>({});

    const [activeItemState, setActiveItem] = useState<string | undefined>(activeItem);

    const handleMenuOpenChange = useCallback((menuId: string, open: boolean) => {
      setMenuOpenOverrides((previous) => ({ ...previous, [menuId]: open }));
    }, []);

    const resolveMenuOpen = useCallback(
      (item: NavItemProps): boolean | undefined => {
        if (item.id && item.id in menuOpenOverrides) {
          return menuOpenOverrides[item.id];
        }

        return (item as NavMenuProps).open;
      },
      [menuOpenOverrides],
    );

    const handleOnActiveItemChange = useCallback(
      (id: string | undefined) => {
        setActiveItem(id);
        onActiveItemChange?.(id);
      },
      [onActiveItemChange],
    );

    useEffect(() => {
      setMenuOpenOverrides({});
    }, [items]);

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

    const shouldDisplayDefaultHeader = shouldUseSideNavDefaultHeader(header, headerConfig);
    const shouldDisplayDefaultFooter = shouldUseSideNavDefaultFooter(footer, footerItems, collapsible);
    const showHeader = shouldShowSideNavHeader(header, headerConfig);
    const showFooter = shouldShowSideNavFooter(footer, footerItems, collapsible);

    useEffect(() => {
      const configurationIssue = getSideNavConfigurationIssues({
        hasCustomHeader: !!header,
        hasHeaderConfig: !!headerConfig,
        hasCustomFooter: !!footer,
        hasFooterItems: !!footerItems?.length,
        collapsible,
      });

      if (configurationIssue) {
        console.warn(configurationIssue);
      }
    }, [header, headerConfig, footer, footerItems, collapsible]);

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
                  id={item.id}
                  badge={item.badge}
                  label={item.label}
                  icon={item.icon}
                  hasLeadingIcon={item.hasLeadingIcon}
                  isCollapsed={isCollapsed}
                  link={item.link}
                  onClick={item.onClick}
                  items={item.items || []}
                  open={resolveMenuOpen(item)}
                  onMenuOpenChange={handleMenuOpenChange}
                  getMenuOpen={resolveMenuOpen}
                  active={item.active}
                  appearance={appearance}
                  contrast={contrast}
                  hasDivider={item.hasDivider}
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
                    hasLeadingIcon={item.hasLeadingIcon}
                    isCollapsed={isCollapsed}
                    link={item.href ?? item.link}
                    onClick={item.onClick}
                    appearance={appearance}
                    active={item.active ?? (item.id === activeItemState && !!activeItemState)}
                    onActiveItemChange={handleOnActiveItemChange}
                  />
                </li>
                {item.hasDivider && <Divider appearance={dividerAppearance} />}
              </Fragment>
            );
          })}
        </ul>
      );
    }

    function buildHeaderContent(): ReactNode {
      if (!showHeader) {
        return null;
      }

      if (shouldDisplayDefaultHeader && headerConfig) {
        return (
          <SideNavDefaultHeader
            headerConfig={headerConfig}
            isCollapsed={isCollapsed}
            shouldShowTitle={shouldShowTitle}
            appearance={appearance}
            dividerAppearance={dividerAppearance}
          />
        );
      }

      return (
        <SideNavHeaderContainer isCollapsed={isCollapsed} appearance={appearance} dividerAppearance={dividerAppearance}>
          {header}
        </SideNavHeaderContainer>
      );
    }

    function buildFooterContent(): ReactNode {
      if (!showFooter) {
        return null;
      }

      if (shouldDisplayDefaultFooter) {
        return (
          <SideNavDefaultFooter
            footerItemsContent={renderNavItems(footerItems)}
            collapsible={collapsible}
            isCollapsed={isCollapsed}
            appearance={appearance}
            dividerAppearance={dividerAppearance}
            collapseIcon={collapseIcon}
            onCollapse={collapseSideNav}
          />
        );
      }

      return footer ?? null;
    }

    return (
      <BaseSideNav
        ref={ref}
        size={size}
        isCollapsed={isCollapsed}
        appearance={appearance}
        contrast={contrast}
        header={buildHeaderContent()}
        body={<div className={style.sideNavBody}>{renderNavItems(items)}</div>}
        footer={buildFooterContent()}
      >
        {children}
      </BaseSideNav>
    );
  },
);

export default SideNav;
