import { SideNavProps as CoreSideNavProps } from "@design-system-rte/core/components/side-nav/side-nav.interface";
import React, { ForwardedRef, ReactNode, useState } from "react";

import BaseSideNav from "./baseSideNav/BaseSideNav";
import NavItem from "./navItem/NavItem";
import style from "./SideNav.module.scss";
import { Divider } from "../..";
import { DividerAppearance } from "@design-system-rte/core/components/divider/divider.interface";
import { concatClassNames } from "../utils";

interface SideNavProps extends Partial<CoreSideNavProps>, Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
  children?: ReactNode;
}

const SideNav = React.forwardRef<HTMLElement | HTMLDivElement, SideNavProps>(
  ({ size = "m", collapsible, children, headerConfig, items, appearance = "brand" }: SideNavProps, ref) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const collapseSideNav = () => {
      setIsCollapsed(!isCollapsed);
    };

    const collapseIcon = isCollapsed ? "arrow-double-right" : "arrow-double-left";

    return (
      <BaseSideNav
        ref={ref as ForwardedRef<HTMLElement | HTMLDivElement>}
        size={size}
        collapsible={collapsible}
        collapsed={isCollapsed}
        appearance={appearance}
        header={
          <div className={style.sideNavHeaderContainer}>
            <div className={concatClassNames(style.sideNavHeader, style[appearance])}>
              <div className={style.sideNavHeaderTitleContainer} tabIndex={0}>
                <div className={style.sideNavHeaderTitle} >
                  <div className={style.sideNavHeaderIdentifier}>{headerConfig?.identifier}</div>
                  <h1>{isCollapsed ? "" : headerConfig?.title}</h1>
                </div>
              </div>
              <div className={style.sideNavHeaderVersion}>
                <span>{isCollapsed ? "" : headerConfig?.version}</span>
              </div>
              <Divider appearance={appearance as DividerAppearance}/>
            </div>
          </div>   
        }
        body={
          <div className={style.sideNavBody}>
            <ul>
              {items?.map((item) => (
                <NavItem
                  key={item.label}
                  label={item.label}
                  icon={item.icon}
                  showIcon={item.showIcon}
                  collapsed={isCollapsed}
                  link={item.link}
                  onClick={item.onClick}
                >
                </NavItem>
              ))}
            </ul>
            
          </div>
        }
        footer={collapsible && (
          <div className={style.sideNavFooter}>
            <div className={style.collapsibleSection}>
              <NavItem
                icon={collapseIcon}
                showIcon={true}
                collapsed={isCollapsed}
                onClick={collapseSideNav}
                label={isCollapsed ? "" : "Réduire le menu"}
              />
            </div>
          </div>
        )}
      >
        {children && <div className={style.sideNavContent}>{children}</div>}
      </BaseSideNav>
    );
  },
);

SideNav.displayName = "SideNav";

export default SideNav;
