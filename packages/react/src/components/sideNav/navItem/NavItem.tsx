import { BadgeProps } from "@design-system-rte/core/components/badge/badge.interface";
import { SideNavAppearance } from "@design-system-rte/core/components/side-nav/side-nav.interface";
import { ForwardedRef, forwardRef, HTMLAttributes, ReactNode, useRef } from "react";

import Badge from "../../badge/Badge";
import NavLabel from "../shared/NavLabel";
import NavLinkShell from "../shared/NavLinkShell";
import type { NavLinkRenderer } from "../shared/NavLinkShell";
import NavTooltipWrapper from "../shared/NavTooltipWrapper";
import { getNavTabIndex } from "../shared/navUtils";
import useNavKeyboard from "../shared/useNavKeyboard";

import style from "./NavItem.module.scss";

export type NavItemComponentKind = "link" | "action";

interface NavItemProps extends Omit<HTMLAttributes<HTMLDivElement>, "onClick" | "id"> {
  children?: ReactNode;
  id?: string;
  kind?: NavItemComponentKind;
  icon?: string;
  hasLeadingIcon?: boolean;
  label: string;
  isCollapsed?: boolean;
  route?: string;
  external?: boolean;
  onClick?: () => void;
  isNested?: boolean;
  parentMenuOpen?: boolean;
  appearance?: SideNavAppearance;
  active?: boolean;
  badge?: BadgeProps;
  onNavigate?: (route: string) => void;
  renderLink?: NavLinkRenderer;
}

const NavItem = forwardRef<HTMLDivElement, NavItemProps>(
  (
    {
      id,
      kind = "action",
      icon,
      hasLeadingIcon = true,
      onClick,
      label,
      isCollapsed,
      route,
      external = false,
      isNested,
      parentMenuOpen,
      appearance = "brand",
      active,
      badge,
      onNavigate,
      renderLink,
      ...props
    }: NavItemProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const listItemRef = useRef<HTMLDivElement | null>(null);
    const isLink = kind === "link" && !!route;

    const { onKeyDown } = useNavKeyboard<HTMLButtonElement>({
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
            hasLeadingIcon={hasLeadingIcon}
            label={label}
            isCollapsed={isCollapsed}
            isNested={isNested}
            styleType="item"
          />
        </div>
        <div className={style.navItemRight}>
          {!isCollapsed && badge && (
            <Badge badgeType={badge.badgeType} size={badge.size} content={badge.content} count={badge.count} />
          )}
        </div>
      </>
    );

    const containerClassName = style.navItemContainer;
    const containerDataProps = {
      "data-collapsed": isCollapsed,
      "data-appearance": appearance,
      "data-nested": isNested,
      "data-active": active,
    };

    let listItem: ReactNode;

    if (isLink) {
      listItem = (
        <NavLinkShell
          route={route!}
          label={label}
          active={active}
          external={external}
          className={containerClassName}
          onNavigate={onNavigate}
          renderLink={renderLink}
          onClick={
            onClick
              ? () => {
                  onClick();
                }
              : undefined
          }
        >
          <span id={id} {...containerDataProps} aria-hidden="true">
            {labelContent}
          </span>
        </NavLinkShell>
      );
    } else {
      listItem = (
        <button
          type="button"
          id={id}
          className={containerClassName}
          {...containerDataProps}
          tabIndex={tabIndex}
          aria-label={label}
          onClick={onClick}
          onKeyDown={onKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={(node) => {
            listItemRef.current = node as unknown as HTMLDivElement;
            if (typeof ref === "function") {
              ref(node as unknown as HTMLDivElement);
            } else if (ref && "current" in ref) {
              (ref as { current: HTMLDivElement | null }).current = node as unknown as HTMLDivElement;
            }
          }}
          {...(props as object)}
        >
          {labelContent}
        </button>
      );
    }

    return (
      <NavTooltipWrapper label={label} isCollapsed={isCollapsed}>
        {listItem}
      </NavTooltipWrapper>
    );
  },
);

export default NavItem;
