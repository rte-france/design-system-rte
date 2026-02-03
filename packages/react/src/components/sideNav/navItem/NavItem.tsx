import { NavItemProps as CoreNavItemProps } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";
import { ForwardedRef, forwardRef, HTMLAttributes, ReactNode, useRef } from "react";

import Badge from "../../badge/Badge";
import NavContentWrapper from "../shared/NavContentWrapper";
import NavLabel from "../shared/NavLabel";
import NavTooltipWrapper from "../shared/NavTooltipWrapper";
import { getNavTabIndex } from "../shared/navUtils";
import useNavKeyboard from "../shared/useNavKeyboard";

import style from "./NavItem.module.scss";

interface NavItemProps extends CoreNavItemProps, Omit<HTMLAttributes<HTMLDivElement>, "onClick" | "id"> {
  children?: ReactNode;
}

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
      appearance = "brand",
      active,
      badge,
      ...props
    }: NavItemProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const listItemRef = useRef<HTMLDivElement | null>(null);

    const { onKeyDown } = useNavKeyboard<HTMLSpanElement>({
      onEnterOrSpace: onClick,
    });

    function handleFocus() {
      listItemRef.current?.setAttribute("data-focused", "true");
    }

    function handleBlur() {
      listItemRef.current?.removeAttribute("data-focused");
    }

    const tabIndex = getNavTabIndex(parentMenuOpen);

    const labelContent = (
      <>
        <div className={style.navItemLeft}>
          <NavLabel
            icon={icon}
            showIcon={showIcon}
            label={label}
            collapsed={collapsed}
            isNested={isNested}
            styleType="item"
          />
        </div>
        <div className={style.navItemRight}>
          {!collapsed && badge && (
            <Badge badgeType={badge.badgeType} size={badge.size} content={badge.content} count={badge.count} />
          )}
        </div>
      </>
    );

    const listItem = link ? (
      <a
        id={id}
        aria-label={label}
        className={style.navItemContainer}
        data-collapsed={collapsed}
        data-appearance={appearance}
        data-nested={isNested}
        href={link}
      >
        {labelContent}
      </a>
    ) : (
      <div
        id={id}
        className={style.navItemContainer}
        data-collapsed={collapsed}
        data-appearance={appearance}
        data-nested={isNested}
        data-active={active}
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
        <NavContentWrapper
          label={label}
          tabIndex={tabIndex}
          onKeyDown={onKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          styleType="item"
        >
          {labelContent}
        </NavContentWrapper>
      </div>
    );

    return (
      <NavTooltipWrapper label={label} collapsed={collapsed}>
        {listItem}
      </NavTooltipWrapper>
    );
  },
);

export default NavItem;
