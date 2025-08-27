// Placeholder for SideNav component imports

// Placeholder for SideNav component props

import { sideNavCollapsedSize, sideNavPanelSize } from "@design-system-rte/core/components/side-nav/side-nav.constants";
import { SideNavProps as CoreSideNavProps } from "@design-system-rte/core/components/side-nav/side-nav.interface";
import React, { ForwardedRef, ReactNode, useState } from "react";

import { concatClassNames } from "../utils";

import NavItem from "./navItem/NavItem";
import style from "./SideNav.module.scss";

interface SideNavProps
  extends Partial<Omit<CoreSideNavProps, "items">>,
    Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
}

const SideNav = React.forwardRef<HTMLElement | HTMLDivElement, SideNavProps>(
  ({ size = "m", header, body, footer, showHeader = true, showFooter = true, collapsible, children }, ref) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const collapseSideNav = () => {
      setIsCollapsed(!isCollapsed);
    };

    const collapseIcon = isCollapsed ? "arrow-double-right" : "arrow-double-left";

    return (
      <div className={style.sideNavContainer}>
        <nav
          ref={ref as ForwardedRef<HTMLDivElement>}
          className={concatClassNames(style.sideNav, isCollapsed ? style.collapsed : "")}
          style={{
            minWidth: isCollapsed ? sideNavCollapsedSize : sideNavPanelSize[size],
          }}
        >
          {showHeader && header && <div className={style.sideNavHeader}>{isCollapsed ? null : header}</div>}

          {body && <div className={style.sideNavBody}>{isCollapsed ? null : body}</div>}

          {showFooter && footer && <div className={style.sideNavFooter}>{isCollapsed ? null : footer}</div>}

          {collapsible && (
            <div className={style.collapsibleSection}>
              <NavItem icon={collapseIcon} showIcon={true} collapsed={isCollapsed} onClick={collapseSideNav}>
                {!isCollapsed && <span>Réduire le menu</span>}
              </NavItem>
            </div>
          )}
        </nav>
        {children && <div className={style.sideNavContent}>{children}</div>}
      </div>
    );
  },
);

SideNav.displayName = "SideNav";

export default SideNav;

/*

import styles from "./sideNav.module.scss";

import Icon from "../icon/Icon";
import Badge from "../badge/Badge";
import Divider from "../divider/Divider";
import IconButton from "../iconButton/IconButton";
import Button from "../button/Button";
import { useState } from "react";


// TOOD - let's start from the idea of just an "over" mode, let's not develop into push and side for the moment

interface SideNavProps {

  // TODO - Maybe collapsed would synthetise this idea better than the two enums of appearance ? 
  appearance?: "default" | "compact";


  collapsed?: boolean;
  size?: "small" | "medium" | "large";
  variant?: "default" | "primary" | "secondary" | "tertiary" | "quaternary";
  shape?: "default" | "rounded" | "pill";
  disabled?: boolean;
  readOnly?: boolean;
  onChange?: (value: string) => void;
  onSelect?: (value: string) => void;

} */

// TODO - Proposed API suggested by AI for reference

/* type SidenavMode = 'modal' | 'push' | 'side';
type SidenavSide = 'left' | 'right' | 'top' | 'bottom';

interface SidenavProps {
  open: boolean;                 // controlled
  defaultOpen?: boolean;         // uncontrolled
  onOpenChange?(open: boolean, reason?: 'backdrop'|'escape'|'programmatic');

  mode?: SidenavMode;            // default 'modal'
  side?: SidenavSide;            // default 'left'
  width?: number | string;       // e.g. 320 | '20rem'
  breakpoint?: string;           // e.g. 'lg' to auto-switch mode
  hasBackdrop?: boolean;         // override per mode
  trapFocus?: boolean;           // default true for modal/push
  restoreFocus?: boolean;        // default true
  closeOnEscape?: boolean;       // default true (modal/push)
  closeOnBackdrop?: boolean;     // default true (modal)
  keepMounted?: boolean;         // performance trade-off (MUI exposes this) 

  // Accessibility hooks
  labelledBy?: string;           // ID for heading element
  role?: 'dialog' | 'navigation';// defaults by mode
  ariaDescribedby?: string;



  Permanent Version Only:

  width?: number | string;       // e.g. 280 | '18rem' (default 280)
  railWidth?: number | string;   // when collapsed (default 72)
  collapsed?: boolean;           // rail mode
  className?: string;            // custom styling
  children: React.ReactNode;     // nav tree, etc.
  labelledBy?: string;           // optional heading id
  ariaLabel?: string;            // or provide an aria-label


  <SidenavContainer>
    <SideNav
      header={<div className="site-header">
        <h1>Site Title</h1>
      </div>}
      content={<div className="site-content">
        ...
      </div>}
      footer={<div className="site-footer">
        <p>Nav Footer</p>
      </div>}
    >
    <div className="site-content">
      ...
    </div>
  </SidenavContainer>




} */
