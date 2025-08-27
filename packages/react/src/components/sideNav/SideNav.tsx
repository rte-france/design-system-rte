// Placeholder for SideNav component imports

// Placeholder for SideNav component props

import { sideNavPanelSize } from "@design-system-rte/core/components/side-nav/side-nav.constants";
import { SideNavProps as CoreSideNavProps } from "@design-system-rte/core/components/side-nav/side-nav.interface";
import React, { ForwardedRef, useState } from "react";

import { IconButton } from "../..";
import { concatClassNames } from "../utils";

import style from "./SideNav.module.scss";

interface SideNavProps extends CoreSideNavProps, Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {}

const SideNav = React.forwardRef<HTMLElement | HTMLDivElement, SideNavProps>(({ size = "m" }, ref) => {
  // Placeholder for SideNav state and refs

  // Placeholder for SideNav effects

  const [isCollapsed, setIsCollapsed] = useState(false);

  const collapseSideNav = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav
      // Placeholder for SideNav container className
      ref={ref as ForwardedRef<HTMLDivElement>}
      className={concatClassNames(style.sideNavContainer)}
      style={{
        width: isCollapsed ? 50 : sideNavPanelSize[size],
      }}
    >
      <div className={style.sideNav}>
        {/* Placeholder for SideNav content */}
        <div className={style.sideNavHeader}>{isCollapsed ? null : <h2>I'm a Header</h2>}</div>
        <div className={style.sideNavContent}>{isCollapsed ? null : <h2>I'm a Content</h2>}</div>
        <div className={style.sideNavFooter}>
          {isCollapsed ? null : <h2>I'm a Footer</h2>}
          <IconButton appearance="filled" size="s" name="arrow-alt-right" onClick={collapseSideNav} />
        </div>
      </div>
    </nav>
  );
});

export default SideNav;
