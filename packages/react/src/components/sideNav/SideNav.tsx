import { SideNavProps as CoreSideNavProps } from "@design-system-rte/core/components/side-nav/side-nav.interface";
import React, { ReactNode, useState } from "react";


import BaseSideNav from "./baseSideNav/BaseSideNav";
import NavItem from "./navItem/NavItem";
import style from "./SideNav.module.scss";

interface SideNavProps
  extends Partial<CoreSideNavProps>,
    Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
  children?: ReactNode;
}

const SideNav = React.forwardRef<HTMLElement | HTMLDivElement, SideNavProps>(
  ({ size = "m", collapsible, children, headerConfig, items }: SideNavProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const collapseSideNav = () => {
      setIsCollapsed(!isCollapsed);
    };

    const collapseIcon = isCollapsed ? "arrow-double-right" : "arrow-double-left";

    return (
      <BaseSideNav
        size={size}
        collapsible={collapsible}
        collapsed={isCollapsed}
        header={
          <div className={style.sideNavHeader}>
            <div className={style.sideNavHeaderTitle}>
              {/* {headerConfig?.icon && <Icon name={headerConfig.icon} />} */}
              <h1>{headerConfig?.title}</h1>
            </div>
            <div className={style.sideNavHeaderVersion}>
              <span>{headerConfig?.version}</span>
            </div>
          </div>
        }
        body={
          <>
            {items?.map((item) => (
              <NavItem
                key={item.label}
                label={item.label}
                icon={item.icon}
                showIcon={item.showIcon}
                collapsed={isCollapsed}
                onClick={item.onClick}
              >
                <span>{item.label}</span>
              </NavItem>
            ))}
          </>
        }
        footer={
          <div className={style.sideNavFooter}>
            {collapsible && (
              <div className={style.collapsibleSection}>
                <NavItem icon={collapseIcon} showIcon={true} collapsed={isCollapsed} onClick={collapseSideNav}>
                  {!isCollapsed && <span>Réduire le menu</span>}
                </NavItem>
              </div>
            )}
          </div>
        }
      >
        {children && <div className={style.sideNavContent}>{children}</div>}
      </BaseSideNav>
    );
  },
);

SideNav.displayName = "SideNav";

export default SideNav;
