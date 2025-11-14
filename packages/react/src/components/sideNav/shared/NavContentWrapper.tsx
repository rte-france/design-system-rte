import { ReactNode, KeyboardEvent } from "react";

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
}: NavContentWrapperProps): ReactNode {
  const style = styleType === "menu" ? navMenuStyle : navItemStyle;
  const className = styleType === "menu" ? style.navMenu : style.navItem;

  const commonProps = {
    className,
    tabIndex,
    "aria-label": label,
    ...(onFocus && { onFocus }),
    ...(onBlur && { onBlur }),
    ...(onClick && { onClick }),
    ...(onKeyDown && { onKeyDown: onKeyDown as React.KeyboardEventHandler<HTMLElement> }),
  };

  if (link) {
    return (
      <a href={link} {...commonProps}>
        {children}
      </a>
    );
  }

  return <span {...commonProps}>{children}</span>;
}

export default NavContentWrapper;
