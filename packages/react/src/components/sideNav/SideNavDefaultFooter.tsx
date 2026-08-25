import { DividerAppearance } from "@design-system-rte/core/components/divider/divider.interface";
import { SideNavAppearance } from "@design-system-rte/core/components/side-nav/side-nav.interface";
import { ReactNode } from "react";

import Divider from "../divider/Divider";

import NavItem from "./navItem/NavItem";
import style from "./SideNav.module.scss";

interface SideNavDefaultFooterProps {
  footerItemsContent: ReactNode;
  collapsible?: boolean;
  isCollapsed: boolean;
  appearance: SideNavAppearance;
  dividerAppearance: DividerAppearance;
  collapseIcon: string;
  onCollapse: () => void;
}

function SideNavDefaultFooter({
  footerItemsContent,
  collapsible,
  isCollapsed,
  appearance,
  dividerAppearance,
  collapseIcon,
  onCollapse,
}: SideNavDefaultFooterProps) {
  return (
    <div className={style.sideNavFooterContainer}>
      {footerItemsContent && <div className={style.sideNavFooterItems}>{footerItemsContent}</div>}
      <Divider appearance={dividerAppearance} />
      <div className={style.sideNavFooter}>
        {collapsible && (
          <div className={style.collapsibleSection}>
            <NavItem
              id="collapse-button"
              icon={collapseIcon}
              hasLeadingIcon={true}
              isCollapsed={isCollapsed}
              onClick={onCollapse}
              label={isCollapsed ? "Ouvrir le menu" : "Réduire le menu"}
              appearance={appearance}
              role="button"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default SideNavDefaultFooter;
