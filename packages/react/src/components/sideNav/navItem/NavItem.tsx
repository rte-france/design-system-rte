import { NavItemProps as CoreNavItemProps } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { ForwardedRef, forwardRef, HTMLAttributes, ReactNode, useRef } from "react";

import { useActiveKeyboard } from "../../../hooks/useActiveKeyboard";
import Badge from "../../badge/Badge";
import Icon from "../../icon/Icon";
import Tooltip from "../../tooltip/Tooltip";
import { concatClassNames } from "../../utils";

interface NavItemProps extends CoreNavItemProps, Omit<HTMLAttributes<HTMLDivElement>, "onClick" | "id"> {
  children?: ReactNode;
  isNested?: boolean;
  parentMenuOpen?: boolean;
}

import style from "./NavItem.module.scss";

interface NavItemContentProps {
  link?: string;
  label: string;
  tabIndex: number;
  onKeyDown?: (e: React.KeyboardEvent<HTMLSpanElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  children: ReactNode;
}

const NavItemContent = ({ link, label, tabIndex, onKeyDown, onFocus, onBlur, children }: NavItemContentProps) => {
  const commonProps = {
    className: style.navItem,
    tabIndex,
    onFocus,
    onBlur,
    label,
  };

  if (link) {
    return (
      <a href={link} aria-label={label} {...commonProps}>
        {children}
      </a>
    );
  }

  return (
    <span aria-label={label} {...commonProps} onKeyDown={onKeyDown}>
      {children}
    </span>
  );
};

const NavItem = forwardRef<HTMLDivElement, NavItemProps>(
  (
    {
      id,
      icon,
      showIcon = true,
      onClick,
      label,
      collapsed,
      link,
      isNested,
      parentMenuOpen,
      appearance,
      active,
      badge,
      ...props
    }: NavItemProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const listItemRef = useRef<HTMLDivElement | null>(null);

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

    const labelContent = (
      <>
        <div className={style.navItemLeft}>
          <NavItemLabel
            id={id}
            icon={icon}
            showIcon={showIcon}
            label={label}
            collapsed={collapsed}
            isNested={isNested}
          />
        </div>
        <div className={style.navItemRight}>
          {badge && <Badge badgeType={badge.badgeType} size={badge.size} content={badge.content} count={badge.count} />}
        </div>
      </>
    );

    const listItem = (
      <div
        id={id}
        className={concatClassNames(
          style.navItemContainer,
          appearance && style[appearance],
          collapsed && style.collapsed,
          isNested && style.nested,
          active && style.active,
        )}
        onClick={onClick}
        ref={(node) => {
          listItemRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref && "current" in ref) {
            (ref as { current: HTMLDivElement | null }).current = node;
          }
        }}
        {...props}
      >
        <NavItemContent
          link={link}
          label={label}
          tabIndex={tabIndex}
          onKeyDown={link ? undefined : onKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {labelContent}
        </NavItemContent>
      </div>
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
          gap={12}
        >
          {listItem}
        </Tooltip>
      );
    }

    return listItem;
  },
);

const NavItemLabel = ({ isNested, ...props }: Omit<NavItemProps, "children">) => {
  const iconSize = isNested ? 16 : props.collapsed ? 24 : 20;
  return (
    <>
      {props.showIcon && props.icon && <Icon name={props.icon} className={style.icon} size={iconSize} />}
      {props.collapsed ? null : <span>{props.label}</span>}
    </>
  );
};

NavItem.displayName = "NavItem";

export default NavItem;
