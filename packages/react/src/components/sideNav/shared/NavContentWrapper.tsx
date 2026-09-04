import { ReactNode, KeyboardEvent } from "react";

import { useNavigationLinkComponent } from "../../../provider/NavigationContext";
import navItemStyle from "../navItem/NavItem.module.scss";
import navMenuStyle from "../navMenu/NavMenu.module.scss";

interface NavContentWrapperProps {
  link?: string;
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

  const commonProps = {
    className,
    tabIndex,
    "aria-label": label,
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
      <LinkComponent href={link} {...commonProps}>
        {children}
      </LinkComponent>
    );
  }

  return <span {...commonProps}>{children}</span>;
}

export default NavContentWrapper;
