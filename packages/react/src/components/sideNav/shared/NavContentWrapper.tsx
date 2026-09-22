import { appendExternalLinkHint, EXTERNAL_LINK_HINT } from "@design-system-rte/core/components/link";
import { KeyboardEvent, ReactNode } from "react";

import { useNavigationLinkComponent } from "../../../provider/NavigationContext";
import navItemStyle from "../navItem/NavItem.module.scss";
import navMenuStyle from "../navMenu/NavMenu.module.scss";

interface NavContentWrapperProps {
  link?: string;
  externalLink?: boolean;
  isCollapsed?: boolean;
  label: string;
  tabIndex: number;
  onKeyDown?: (e: KeyboardEvent<HTMLElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onClick?: () => void;
  children: ReactNode;
  styleType?: "item" | "menu";
  ariaExpanded?: boolean;
  ariaControls?: string;
  role?: "button";
}

function NavContentWrapper({
  link,
  externalLink,
  isCollapsed,
  label,
  tabIndex,
  onKeyDown,
  onFocus,
  onBlur,
  onClick,
  children,
  styleType = "item",
  ariaExpanded,
  ariaControls,
  role,
}: NavContentWrapperProps): ReactNode {
  const LinkComponent = useNavigationLinkComponent();
  const style = styleType === "menu" ? navMenuStyle : navItemStyle;
  const className = styleType === "menu" ? style.navMenu : style.navItem;

  const ariaLabel = link ? (isCollapsed ? (externalLink ? appendExternalLinkHint(label) : label) : undefined) : label;

  const commonProps = {
    className,
    tabIndex,
    ...(ariaLabel !== undefined && { "aria-label": ariaLabel }),
    ...(ariaExpanded !== undefined && { "aria-expanded": ariaExpanded }),
    ...(ariaControls && { "aria-controls": ariaControls }),
    ...(role && { role }),
    ...(onFocus && { onFocus }),
    ...(onBlur && { onBlur }),
    ...(onClick && { onClick }),
    ...(onKeyDown && { onKeyDown: onKeyDown as React.KeyboardEventHandler<HTMLElement> }),
  };

  if (link) {
    return (
      <LinkComponent
        href={link}
        to={link}
        target={externalLink ? "_blank" : undefined}
        rel={externalLink ? "noopener noreferrer" : undefined}
        {...commonProps}
      >
        {children}
        {externalLink && !isCollapsed && <span className={navItemStyle.srOnly}>, {EXTERNAL_LINK_HINT}</span>}
      </LinkComponent>
    );
  }

  return <span {...commonProps}>{children}</span>;
}

export default NavContentWrapper;
