import { NavItemProps as CoreNavItemProps } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";
import { shouldDisplaySideNavBadge } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.utils";
import { ForwardedRef, forwardRef, HTMLAttributes, ReactNode, useRef } from "react";

import { useNavigationLinkComponent } from "../../../provider/NavigationContext";
import Badge from "../../badge/Badge";
import NavContentWrapper from "../shared/NavContentWrapper";
import NavLabel from "../shared/NavLabel";
import NavTooltipWrapper from "../shared/NavTooltipWrapper";
import { getNavTabIndex } from "../shared/navUtils";
import useNavKeyboard from "../shared/useNavKeyboard";

import style from "./NavItem.module.scss";

interface NavItemProps extends CoreNavItemProps, Omit<HTMLAttributes<HTMLDivElement>, "onClick" | "id"> {
  children?: ReactNode;
  onActiveItemChange?: (id: string | undefined) => void;
}

const NavItem = forwardRef<HTMLDivElement, NavItemProps>(
  (
    {
      id,
      icon,
      hasLeadingIcon = true,
      onClick,
      label,
      isCollapsed,
      link,
      href,
      isNested,
      parentMenuOpen,
      appearance = "brand",
      active,
      badge,
      onActiveItemChange,
      ...props
    }: NavItemProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const LinkComponent = useNavigationLinkComponent();
    const listItemRef = useRef<HTMLDivElement | null>(null);
    const linkItemRef = useRef<HTMLAnchorElement | null>(null);

    const hasLink = !!(href || link);

    const { onKeyDown } = useNavKeyboard<HTMLSpanElement>({
      onEnterOrSpace: onClick,
    });

    function handleFocus() {
      listItemRef.current?.setAttribute("data-focused", "true");
      linkItemRef.current?.setAttribute("data-focused", "true");
    }

    function handleBlur() {
      listItemRef.current?.removeAttribute("data-focused");
      linkItemRef.current?.removeAttribute("data-focused");
    }

    const tabIndex = getNavTabIndex(parentMenuOpen);

    const labelContent = (
      <>
        <div className={style.navItemLeft}>
          <NavLabel
            icon={icon}
            hasLeadingIcon={hasLeadingIcon}
            label={label}
            isCollapsed={isCollapsed}
            isNested={isNested}
            styleType="item"
            badge={badge}
          />
        </div>
        <div className={style.navItemRight}>
          {!isCollapsed && badge && shouldDisplaySideNavBadge(badge) && (
            <Badge badgeType={badge.badgeType} size={badge.size} content={badge.content} count={badge.count} />
          )}
        </div>
      </>
    );

    const listItem = hasLink ? (
      <LinkComponent
        id={id}
        aria-label={label}
        className={style.navItemContainer}
        data-collapsed={isCollapsed}
        data-appearance={appearance}
        data-nested={isNested}
        data-active={active}
        href={href ?? link}
        to={href ?? link}
        onClick={() => onActiveItemChange?.(id)}
        onBlur={handleBlur}
        ref={linkItemRef}
      >
        {labelContent}
      </LinkComponent>
    ) : (
      <div
        id={id}
        className={style.navItemContainer}
        data-collapsed={isCollapsed}
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
      <NavTooltipWrapper label={label} isCollapsed={isCollapsed}>
        {listItem}
      </NavTooltipWrapper>
    );
  },
);

export default NavItem;
