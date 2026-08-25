import { DividerAppearance } from "@design-system-rte/core/components/divider/divider.interface";
import { SideNavAppearance } from "@design-system-rte/core/components/side-nav/side-nav.interface";
import { ReactNode } from "react";

import Divider from "../divider/Divider";

import style from "./SideNav.module.scss";

interface SideNavHeaderContainerProps {
  isCollapsed: boolean;
  appearance: SideNavAppearance;
  dividerAppearance: DividerAppearance;
  isCompact?: boolean;
  children: ReactNode;
}

function SideNavHeaderContainer({
  isCollapsed,
  appearance,
  dividerAppearance,
  isCompact = false,
  children,
}: SideNavHeaderContainerProps) {
  return (
    <div className={style.sideNavHeaderContainer} data-compact={isCompact} data-collapsed={isCollapsed}>
      <div
        className={style.sideNavHeader}
        data-collapsed={isCollapsed}
        data-appearance={appearance}
        data-compact={isCompact}
      >
        {children}
      </div>
      <Divider appearance={dividerAppearance} />
    </div>
  );
}

export default SideNavHeaderContainer;
