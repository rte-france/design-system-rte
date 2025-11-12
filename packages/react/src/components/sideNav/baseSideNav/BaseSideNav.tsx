import { sideNavCollapsedSize, sideNavPanelSize } from "@design-system-rte/core/components/side-nav/side-nav.constants";
import { SideNavProps as CoreSideNavProps } from "@design-system-rte/core/components/side-nav/side-nav.interface";
import { forwardRef, ReactNode, useLayoutEffect, useRef } from "react";

import { concatClassNames } from "../../utils";

import style from "./BaseSideNav.module.scss";

interface BaseSideNavProps
  extends Partial<Omit<CoreSideNavProps, "items">>,
    Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
  containerClassName?: string;
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
      collapsed,
      containerClassName,
    },
    ref,
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
      const containerEl = containerRef.current;
      const contentEl = contentRef.current;
      if (!containerEl || !contentEl) return;

      const setHeightVar = () => {
        const height = contentEl.offsetHeight;
        containerEl.style.setProperty("--content-height", `${height}px`);
      };

      setHeightVar();

      const resizeObserver = new ResizeObserver(() => setHeightVar());
      resizeObserver.observe(contentEl);

      window.addEventListener("resize", setHeightVar);

      return () => {
        resizeObserver.disconnect();
        window.removeEventListener("resize", setHeightVar);
      };
    }, [children]);

    return (
      <div ref={containerRef} className={concatClassNames(style.sideNavContainer, containerClassName)}>
        <nav
          ref={ref}
          className={concatClassNames(style.sideNav, collapsed ? style.collapsed : "", appearance && style[appearance])}
          style={{
            minWidth: collapsed ? sideNavCollapsedSize : sideNavPanelSize[size],
          }}
        >
          {showHeader && header && <div className={style.sideNavHeader}>{header}</div>}
          {body && <div className={style.sideNavBody}>{body}</div>}
          {showFooter && footer && <div className={style.sideNavFooter}>{footer}</div>}
        </nav>

        {children && (
          <div ref={contentRef} className={style.sideNavContent}>
            {children}
          </div>
        )}
      </div>
    );
  },
);

BaseSideNav.displayName = "BaseSideNav";
export default BaseSideNav;
