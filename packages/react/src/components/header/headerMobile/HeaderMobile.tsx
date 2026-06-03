import { Alignment, DropdownItemProps, HeaderIconButtonConfig, Position } from "@design-system-rte/core";
import { useState, useRef } from "react";

import useAnimatedMount from "../../../hooks/useAnimatedMount";
import { useClickAway } from "../../../hooks/useClickAway";
import { BaseDropdown } from "../../dropdown/BaseDropdown";
import Dropdown from "../../dropdown/Dropdown";
import DropdownItem from "../../dropdown/dropdownItem/DropdownItem";
import IconButton from "../../iconButton/IconButton";
import Searchbar from "../../searchbar/Searchbar";
import { concatClassNames } from "../../utils";

import styles from "./HeaderMobile.module.scss";

interface HeaderMobileProps {
  logoSrc?: string;
  applicationName?: string;
  compactSpacing?: boolean;
  hasLeftSection?: boolean;
  appearance?: "brand" | "neutral";
  hasMiddleSection?: boolean;
  hasRightSection?: boolean;
  leftSectionContent?: React.ReactNode;
  middleSectionContent?: React.ReactNode;
  rightSectionContent?: React.ReactNode;
  mobileSearchButtonAriaLabel: string;
  onSearchActiveChange?: (isActive: boolean) => void;
  mobileMenuContent: React.ReactNode;
  onMobileMenuClick?: () => void;
  isMobileMenuOpen?: boolean;
  mobileMenuItems?: DropdownItemProps[];
  onMobileMenuClose?: () => void;
  mobileMenuIconProps?: HeaderIconButtonConfig;
}

const HeaderMobile = ({
  hasLeftSection,
  leftSectionContent,
  logoSrc,
  applicationName,
  compactSpacing,
  appearance,
  mobileSearchButtonAriaLabel,
  onSearchActiveChange,
  mobileMenuContent,
  onMobileMenuClick,
  isMobileMenuOpen,
  mobileMenuItems,
  onMobileMenuClose,
  mobileMenuIconProps,
}: HeaderMobileProps) => {
  const [isSearchbarExpanded, setIsSearchbarExpanded] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useClickAway(() => {
    setIsSearchbarExpanded(false);
    onSearchActiveChange?.(false);
  }, headerRef.current!);

  const { isAnimating: isSearchbarExpandedAnimating } = useAnimatedMount(isSearchbarExpanded, 200);

  const dropdownProps = {
    id: "mobile-menu-dropdown",
    onClose: () => onMobileMenuClose?.(),
    isList: false,
    isOpen: isMobileMenuOpen,
    position: "bottom" as Position,
    alignment: "end" as Alignment,
    trigger: (
      <IconButton
        name={mobileMenuIconProps?.iconName || "menu"}
        aria-expanded={isMobileMenuOpen}
        aria-label={mobileMenuIconProps?.ariaLabel || "Menu"}
        variant="neutral"
        compactSpacing={compactSpacing}
        onClick={onMobileMenuClick}
      />
    ),
  };

  return (
    <div
      ref={headerRef}
      className={concatClassNames(styles["rte-header-mobile"], "rte-header-mobile")}
      data-compact={compactSpacing}
      data-search-state={isSearchbarExpanded ? "open" : "closed"}
    >
      <div className={styles["rte-header-left"]}>
        {hasLeftSection ? (
          leftSectionContent || (
            <>
              {logoSrc && (
                <a href="/" aria-label="Home" className={styles["rte-header-home"]}>
                  <img src={logoSrc} alt="Logo" className={styles["rte-header-logo"]} />
                </a>
              )}
            </>
          )
        ) : (
          <></>
        )}
      </div>
      <div className={styles["rte-header-middle"]}>
        {applicationName && (
          <span
            className={styles["rte-header-app-name"]}
            data-is-searchbar-expanded={isSearchbarExpandedAnimating}
            aria-hidden={isSearchbarExpandedAnimating}
          >
            {applicationName}
          </span>
        )}

        <div className={styles["rte-header-search"]}>
          <div
            className={styles["rte-search-icon-container"]}
            data-is-searchbar-expanded={isSearchbarExpandedAnimating}
          >
            <IconButton
              role="button"
              name="search"
              variant="text"
              onClick={() => {
                setIsSearchbarExpanded((prev) => {
                  const newState = !prev;
                  onSearchActiveChange?.(newState);
                  return newState;
                });
              }}
              compactSpacing={compactSpacing}
              aria-label={mobileSearchButtonAriaLabel}
            />
          </div>
          <div className={styles["rte-searchbar-container"]} data-is-searchbar-expanded={isSearchbarExpandedAnimating}>
            <Searchbar
              compactSpacing={compactSpacing}
              appearance={appearance === "brand" ? "primary" : "secondary"}
              width={"100%"}
            />
          </div>
        </div>
      </div>
      <div className={styles["rte-header-right"]}>
        {mobileMenuContent ? (
          <BaseDropdown {...dropdownProps}>{mobileMenuContent}</BaseDropdown>
        ) : mobileMenuItems ? (
          <Dropdown {...dropdownProps}>
            {mobileMenuItems.map((item, index) => (
              <DropdownItem key={index} {...item} />
            ))}
          </Dropdown>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default HeaderMobile;
