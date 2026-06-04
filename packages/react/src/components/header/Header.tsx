import {
  DropdownItemProps,
  HEADER_DEFAULT_BREADCRUMBS_ARIA_LABEL,
  HEADER_DEFAULT_NAV_ARIA_LABEL,
  HeaderActionButtonConfig,
  HeaderAvatarConfig,
  HeaderIconButtonConfig,
  HeaderNavigationItem,
  HeaderSubHeaderConfig,
} from "@design-system-rte/core";

import Avatar from "../avatar/Avatar";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import Button from "../button/Button";
import Divider from "../divider/Divider";
import IconButton from "../iconButton/IconButton";
import Searchbar from "../searchbar/Searchbar";

import styles from "./Header.module.scss";
import HeaderMobile from "./headerMobile/HeaderMobile";
import { useBreakpoints } from "./hooks/useBreakpoints";
import useHeaderScrollBehavior from "./hooks/useScrollBehavior";

interface HeaderProps {
  logoSrc?: string;
  applicationName?: string;
  compactSpacing?: boolean;
  hasLeftSection?: boolean;
  appearance?: "brand" | "neutral";
  hasRightSection?: boolean;
  leftSectionContent?: React.ReactNode;
  rightSectionContent?: React.ReactNode;
  hasDivider?: boolean;
  subHeaderConfig?: HeaderSubHeaderConfig;
  hasSearchbar?: boolean;
  searchbarProps?: React.ComponentProps<typeof Searchbar>;
  actionButton?: HeaderActionButtonConfig;
  iconButtons?: HeaderIconButtonConfig[];
  navigationAriaLabel?: string;
  navigationItems?: HeaderNavigationItem[];
  hasAvatar?: boolean;
  avatarProps?: HeaderAvatarConfig;
  onClickAvatar?: () => void;
  isSticky?: boolean;
  showAtScrollUp?: boolean;
  homeLink?: string;
  mobileSearchButtonAriaLabel?: string;
  onActionButtonClick?: () => void;
  onIconButtonClick?: (iconName: string) => void;
  onSearchActiveChange?: (isActive: boolean) => void;
  mobileMenuContent?: React.ReactNode;
  onMobileMenuClick?: () => void;
  isMobileMenuOpen?: boolean;
  mobileMenuItems?: DropdownItemProps[];
  onMobileMenuClose?: () => void;
  mobileMenuIconProps?: HeaderIconButtonConfig;
}

const Header = ({
  logoSrc,
  applicationName,
  leftSectionContent,
  hasLeftSection = true,
  hasRightSection = true,
  appearance = "brand",
  compactSpacing = false,
  rightSectionContent,
  hasDivider = false,
  subHeaderConfig,
  hasSearchbar = true,
  searchbarProps,
  actionButton,
  iconButtons,
  navigationAriaLabel = HEADER_DEFAULT_NAV_ARIA_LABEL,
  navigationItems = [],
  hasAvatar = true,
  avatarProps,
  onClickAvatar,
  isSticky = false,
  showAtScrollUp = false,
  homeLink = "/",
  mobileSearchButtonAriaLabel = "Rechercher",
  onSearchActiveChange,
  mobileMenuContent,
  onMobileMenuClick,
  isMobileMenuOpen = false,
  mobileMenuItems,
  onMobileMenuClose,
  mobileMenuIconProps,
  onActionButtonClick,
  onIconButtonClick,
}: HeaderProps) => {
  const { isMobile } = useBreakpoints();

  const hasIconButtons = iconButtons && iconButtons.length > 0;

  const hasMiddleSection = navigationItems && navigationItems.length > 0;

  const { isVisible } = useHeaderScrollBehavior({ isSticky, showAtScrollUp });

  const handleAvatarOnClick = () => {
    if (avatarProps?.isInteractive) {
      onClickAvatar?.();
    }
  };

  return (
    <header
      role="banner"
      className={styles["rte-header"]}
      data-compact={compactSpacing}
      data-appearance={appearance}
      data-sticky={isSticky}
      data-visible={isVisible}
    >
      <div className={styles["rte-header-main"]} data-compact={compactSpacing}>
        {isMobile ? (
          <HeaderMobile
            logoSrc={logoSrc}
            applicationName={applicationName}
            hasLeftSection={hasLeftSection}
            leftSectionContent={leftSectionContent}
            compactSpacing={compactSpacing}
            appearance={appearance}
            mobileSearchButtonAriaLabel={mobileSearchButtonAriaLabel}
            onSearchActiveChange={onSearchActiveChange}
            mobileMenuContent={mobileMenuContent}
            onMobileMenuClick={onMobileMenuClick}
            isMobileMenuOpen={isMobileMenuOpen}
            mobileMenuItems={mobileMenuItems}
            onMobileMenuClose={onMobileMenuClose}
            mobileMenuIconProps={mobileMenuIconProps}
          />
        ) : (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
            <div className={styles["rte-header-left"]}>
              {hasLeftSection ? (
                leftSectionContent || (
                  <a href={homeLink} className={styles["rte-header-home"]}>
                    {logoSrc && <img src={logoSrc} alt="Logo" className={styles["rte-header-logo"]} />}
                    {applicationName && <span className={styles["rte-header-app-name"]}>{applicationName}</span>}
                  </a>
                )
              ) : (
                <></>
              )}
            </div>
            {hasMiddleSection && (
              <div className={styles["rte-header-middle"]}>
                <div className={styles["rte-header-nav"]} aria-label={navigationAriaLabel}>
                  <ul className={styles["rte-header-nav-list"]}>
                    {navigationItems.map((item, index) => (
                      <li key={index} className={styles["rte-header-nav-item"]}>
                        <a
                          href={item.href}
                          aria-label={item.ariaLabel || item.label}
                          className={styles["rte-header-nav-link"]}
                          aria-disabled={item.disabled}
                          aria-current={item.active ? "page" : undefined}
                          tabIndex={item.disabled ? -1 : 0}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {hasRightSection && (
              <div className={styles["rte-header-right"]}>
                <div>
                  {hasSearchbar && (
                    <Searchbar
                      {...searchbarProps}
                      appearance={appearance === "brand" ? "primary" : "secondary"}
                      compactSpacing={compactSpacing}
                    />
                  )}
                </div>
                {actionButton && (
                  <Button
                    type="button"
                    label={actionButton.label}
                    icon={actionButton.iconName}
                    disabled={actionButton.disabled}
                    size={compactSpacing ? "s" : "m"}
                    variant={appearance === "brand" ? "primary" : "neutral"}
                    onClick={onActionButtonClick}
                  />
                )}
                {hasIconButtons && (
                  <div className={styles["rte-header-icon-buttons"]}>
                    {iconButtons.map((iconButton, index) => (
                      <div key={index} className={styles["rte-header-icon-button-wrapper"]}>
                        <IconButton
                          name={iconButton.iconName}
                          aria-label={iconButton.ariaLabel}
                          disabled={iconButton.disabled}
                          size={compactSpacing ? "m" : "l"}
                          variant={appearance === "brand" ? "text" : "neutral"}
                          badgeCount={iconButton.badge?.count}
                          badgeContent={iconButton.badge?.content}
                          badgeIcon={iconButton.badge?.icon}
                          badgeType={iconButton.badge?.badgeType}
                          onClick={() => onIconButtonClick?.(iconButton.iconName)}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {hasAvatar && avatarProps && (
                  <Avatar
                    size={compactSpacing ? 24 : 32}
                    imgSrc={avatarProps.imgSrc}
                    alt={avatarProps.alt}
                    initials={avatarProps.initials}
                    onClick={handleAvatarOnClick}
                    colorType={avatarProps.colorType}
                    layout={avatarProps.layout}
                  />
                )}
                {rightSectionContent}
              </div>
            )}
          </div>
        )}
      </div>
      {hasDivider && <Divider />}

      <div className={styles["rte-header-subheader"]} data-is-compact={compactSpacing}>
        <nav
          className={styles["rte-header-breadcrumbs"]}
          aria-label={subHeaderConfig?.ariaLabel || HEADER_DEFAULT_BREADCRUMBS_ARIA_LABEL}
        >
          <Breadcrumbs
            items={subHeaderConfig?.items || []}
            aria-label={subHeaderConfig?.ariaLabel || HEADER_DEFAULT_BREADCRUMBS_ARIA_LABEL}
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
