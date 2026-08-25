import { DividerAppearance } from "@design-system-rte/core/components/divider/divider.interface";
import { SideNavAppearance, SideNavHeaderConfig } from "@design-system-rte/core/components/side-nav/side-nav.interface";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { ReactNode, useMemo } from "react";

import { useActiveKeyboard } from "../../hooks/useActiveKeyboard";
import { useNavigationLinkComponent } from "../../provider/NavigationContext";

import NavTooltipWrapper from "./shared/NavTooltipWrapper";
import style from "./SideNav.module.scss";
import SideNavHeaderContainer from "./SideNavHeaderContainer";

interface SideNavDefaultHeaderProps {
  headerConfig: SideNavHeaderConfig;
  isCollapsed: boolean;
  shouldShowTitle: boolean;
  appearance: SideNavAppearance;
  dividerAppearance: DividerAppearance;
}

function SideNavDefaultHeader({
  headerConfig,
  isCollapsed,
  shouldShowTitle,
  appearance,
  dividerAppearance,
}: SideNavDefaultHeaderProps) {
  const LinkComponent = useNavigationLinkComponent();

  const handleHeaderKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if ([SPACE_KEY, ENTER_KEY].includes(event.key)) {
      event.preventDefault();
      headerConfig.onClick?.();
    }
  };

  const { onKeyDown: headerOnKeyDown } = useActiveKeyboard<HTMLDivElement>(
    { onKeyDown: handleHeaderKeyDown },
    {
      interactiveKeyCodes: [SPACE_KEY, ENTER_KEY],
    },
  );

  const headerTitleContent = (
    <div className={style.sideNavHeaderTitle}>
      <div className={style.sideNavHeaderIdentifier}>{headerConfig.identifier}</div>
      {!isCollapsed && <h1>{headerConfig.title}</h1>}
    </div>
  );

  const ariaLabel = headerConfig.ariaLabel;

  const headerTitleLink = (
    <LinkComponent
      href={headerConfig.link ?? ""}
      className={style.sideNavHeaderTitleContainer}
      onClick={headerConfig.onClick}
      aria-label={ariaLabel}
    >
      {headerTitleContent}
    </LinkComponent>
  );

  const clickableHeaderTitle = (
    <div
      className={style.sideNavHeaderTitleContainer}
      tabIndex={0}
      onClick={headerConfig.onClick}
      onKeyDown={headerOnKeyDown}
      role="button"
      aria-label={ariaLabel}
    >
      {headerTitleContent}
    </div>
  );

  const staticHeaderTitle = <div className={style.sideNavHeaderTitleContainer}>{headerTitleContent}</div>;

  function resolveHeaderTitle(): ReactNode {
    if (headerConfig.link) {
      return headerTitleLink;
    }
    if (headerConfig.onClick) {
      return clickableHeaderTitle;
    }
    return staticHeaderTitle;
  }

  const headerTooltip = useMemo(
    () => headerConfig.tooltip ?? headerConfig.title ?? "",
    [headerConfig.tooltip, headerConfig.title],
  );

  const headerTitleWithTooltip = (
    <NavTooltipWrapper label={headerTooltip} isCollapsed={isCollapsed}>
      {resolveHeaderTitle()}
    </NavTooltipWrapper>
  );

  return (
    <SideNavHeaderContainer
      isCollapsed={isCollapsed}
      isCompact={!!headerConfig.isCompact}
      appearance={appearance}
      dividerAppearance={dividerAppearance}
    >
      {headerTitleWithTooltip}
      {!headerConfig.isCompact && (
        <div className={style.sideNavHeaderVersion} data-hidden={!shouldShowTitle}>
          <span>{headerConfig.version}</span>
        </div>
      )}
    </SideNavHeaderContainer>
  );
}

export default SideNavDefaultHeader;
