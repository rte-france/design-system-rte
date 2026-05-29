import { sideNavCollapsedSize, sideNavPanelSize } from "@design-system-rte/core/components/side-nav/side-nav.constants";
import { BaseSideNavProps as CoreSideNavProps } from "@design-system-rte/core/components/side-nav/side-nav.interface";
import { forwardRef, ReactNode } from "react";

import style from "./BaseSideNav.module.scss";

interface BaseSideNavProps
  extends Partial<Omit<CoreSideNavProps, "items">>, Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
}

const BaseSideNav = forwardRef<HTMLElement | HTMLDivElement, BaseSideNavProps>(
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
      contrast = "high",
      collapsed,
      className,
      ...props
    },
    ref,
  ) => {
    const containerClassName = [style.sideNavContainer, className].filter(Boolean).join(" ");

    return (
      <div className={containerClassName} {...props}>
        <nav
          ref={ref}
          className={style.sideNav}
          data-collapsed={collapsed}
          data-appearance={appearance}
          data-contrast={contrast}
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

export default BaseSideNav;
