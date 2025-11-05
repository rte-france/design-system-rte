import { NavItemProps as CoreNavItemProps } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { ForwardedRef, forwardRef, HTMLAttributes, ReactNode, useRef } from "react";

import { Icon } from "../../..";
import { useActiveKeyboard } from "../../../hooks/useActiveKeyboard";
import Tooltip from "../../tooltip/Tooltip";
import { concatClassNames } from "../../utils";

interface NavItemProps extends CoreNavItemProps, Omit<HTMLAttributes<HTMLLIElement>, "onClick"> {
  children?: ReactNode;
  parentMenuOpen?: boolean;
}

import style from "./NavItem.module.scss";

interface NavItemContentProps {
  link?: string;
  tabIndex: number;
  onKeyDown?: (e: React.KeyboardEvent<HTMLSpanElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  children: ReactNode;
}

const NavItemContent = ({ link, tabIndex, onKeyDown, onFocus, onBlur, children }: NavItemContentProps) => {
  const commonProps = {
    className: style.navItem,
    tabIndex,
    onFocus,
    onBlur,
  };

  if (link) {
    return (
      <a href={link} {...commonProps}>
        {children}
      </a>
    );
  }

  return (
    <span {...commonProps} onKeyDown={onKeyDown}>
      {children}
    </span>
  );
};

const NavItem = forwardRef<HTMLElement | HTMLLIElement, NavItemProps>(
  (
    { icon, showIcon, onClick, label, collapsed, link, parentMenuOpen, ...props }: NavItemProps,
    ref: ForwardedRef<HTMLElement | HTMLLIElement>,
  ) => {
    const listItemRef = useRef<HTMLLIElement | null>(null);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
      if ([SPACE_KEY, ENTER_KEY].includes(e.key)) {
        e.preventDefault();
        if (onClick) {
          onClick();
        }
      }
    };

    const { onKeyDown } = useActiveKeyboard<HTMLSpanElement>(
      { onKeyDown: handleKeyDown },
      {
        interactiveKeyCodes: [SPACE_KEY, ENTER_KEY],
      },
    );

    const handleFocus = () => {
      listItemRef.current?.classList.add(style.focused);
    };

    const handleBlur = () => {
      listItemRef.current?.classList.remove(style.focused);
    };

    const tabIndex = parentMenuOpen === false ? -1 : 0;

    const labelContent = <NavItemLabel icon={icon} showIcon={showIcon} label={label} collapsed={collapsed} />;

    const listItem = (
      <li
        className={concatClassNames(style.navItemContainer, collapsed && style.collapsed)}
        onClick={onClick}
        ref={(node) => {
          listItemRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref && "current" in ref) {
            (ref as { current: HTMLElement | HTMLLIElement | null }).current = node;
          }
        }}
        {...props}
      >
        <NavItemContent
          link={link}
          tabIndex={tabIndex}
          onKeyDown={link ? undefined : onKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {labelContent}
        </NavItemContent>
      </li>
    );

    if (collapsed && label) {
      return (
        <Tooltip
          label={label}
          position="right"
          alignment="center"
          arrow={false}
          shouldFocusTrigger={false}
          triggerStyles={{ outline: "none" }}
        >
          {listItem}
        </Tooltip>
      );
    }

    return listItem;
  },
);

const NavItemLabel = (props: Omit<NavItemProps, "children">) => {
  return (
    <>
      {props.showIcon && props.icon && <Icon name={props.icon} className={style.icon} />}
      {props.collapsed ? null : <span>{props.label}</span>}
    </>
  );
};

NavItem.displayName = "NavItem";

export default NavItem;
