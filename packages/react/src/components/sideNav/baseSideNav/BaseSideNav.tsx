import { sideNavCollapsedSize, sideNavPanelSize } from "@design-system-rte/core/components/side-nav/side-nav.constants";
import { SideNavProps as CoreSideNavProps } from "@design-system-rte/core/components/side-nav/side-nav.interface";
import React, { ForwardedRef, ReactNode } from "react";

import { concatClassNames } from "../../utils";

import style from "./BaseSideNav.module.scss";

interface BaseSideNavProps
  extends Partial<Omit<CoreSideNavProps, "items">>,
    Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
}

const BaseSideNav = React.forwardRef<HTMLElement | HTMLDivElement, BaseSideNavProps>(
  (
    {
      size = "m",
      header,
      body,
      footer,
      showHeader = true,
      showFooter = true,
      children,
      appearance = "brand",
      collapsed,
    },
    ref,
  ) => {
    return (
      <div className={style.sideNavContainer}>
        <nav
          ref={ref as ForwardedRef<HTMLDivElement>}
          className={concatClassNames(style.sideNav, collapsed ? style.collapsed : "", appearance && style[appearance])}
          style={{
            minWidth: collapsed ? sideNavCollapsedSize : sideNavPanelSize[size],
          }}
        >
          {showHeader && header && <div className={style.sideNavHeader}>{header}</div>}

          {body && <div className={style.sideNavBody}>{body}</div>}

          {showFooter && footer && <div className={style.sideNavFooter}>{footer}</div>}
        </nav>
        {children && <div className={style.sideNavContent}>{children}</div>}
      </div>
    );
  },
);

BaseSideNav.displayName = "BaseSideNav";

export default BaseSideNav;
