import { DividerAppearance } from "@design-system-rte/core/components/divider/divider.interface";
import { getNavItemLabelIconSize } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.utils";
import { SideNavAppearance } from "@design-system-rte/core/components/side-nav/side-nav.interface";
import { ReactNode } from "react";

import Divider from "../divider/Divider";
import Icon from "../icon/Icon";

import navItemStyle from "./navItem/NavItem.module.scss";
import NavTooltipWrapper from "./shared/NavTooltipWrapper";
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
  const collapseLabel = isCollapsed ? "Ouvrir le menu" : "Réduire le menu";
  const collapseIconSize = getNavItemLabelIconSize(false, isCollapsed);

  return (
    <div className={style.sideNavFooterContainer}>
      {footerItemsContent && <div className={style.sideNavFooterItems}>{footerItemsContent}</div>}
      <Divider appearance={dividerAppearance} />
      <div className={style.sideNavFooter}>
        {collapsible && (
          <div className={style.collapsibleSection}>
            <NavTooltipWrapper label={collapseLabel} isCollapsed={isCollapsed}>
              <button
                type="button"
                id="collapse-button"
                className={`${navItemStyle.navItemContainer} ${style.collapseButton}`}
                data-collapsed={isCollapsed}
                data-appearance={appearance}
                aria-label={isCollapsed ? collapseLabel : undefined}
                onClick={onCollapse}
              >
                <span className={navItemStyle.navItem}>
                  <div className={navItemStyle.navItemLeft}>
                    <Icon name={collapseIcon} className={navItemStyle.icon} size={collapseIconSize} />
                    {!isCollapsed && <span>{collapseLabel}</span>}
                  </div>
                </span>
              </button>
            </NavTooltipWrapper>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideNavDefaultFooter;
