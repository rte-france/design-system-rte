import {
  getDrawerConfigurationIssues,
  DRAWER_PADDING,
  DRAWER_TRANSITION_DURATION,
  shouldUseDrawerDefaultFooter,
  shouldUseDrawerDefaultHeader,
} from "@design-system-rte/core";
import { DrawerProps as coreDrawerProps } from "@design-system-rte/core/components/drawer/drawer.interface";
import { computeTransform } from "@design-system-rte/core/components/drawer/drawer.utils";
import { RefObject, useRef } from "react";

import Backdrop from "../../abstract/backdrop/Backdrop";
import BaseFooter from "../../abstract/baseFooter/BaseFooter";
import BaseHeader from "../../abstract/baseHeader/BaseHeader";
import useAnimatedMount from "../../hooks/useAnimatedMount";
import { useClickAway } from "../../hooks/useClickAway";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { useKeydownEscape } from "../../hooks/useKeydownEscape";
import Button from "../button/Button";
import Divider from "../divider/Divider";
import IconButton from "../iconButton/IconButton";
import useFreezeNavigation from "../modal/hooks/useFreezeNavigation";
import { Overlay } from "../overlay/Overlay";

import styles from "./Drawer.module.scss";

interface DrawerProps extends coreDrawerProps, Omit<React.HTMLAttributes<HTMLDivElement>, "id" | "content"> {
  header?: React.ReactNode | React.ReactNode[];
  footer?: React.ReactNode | React.ReactNode[];
  content?: React.ReactNode | React.ReactNode[];
  children?: React.ReactNode | React.ReactNode[];
  width?: string;
}

const PADDING = 4;

const Header = ({
  isCollapsible,
  iconToggleCloseContainerRef,
  isOpen,
  isAnimating,
  handleOnClickToggle,
  shouldDisplayDefaultHeader,
  id,
  title,
  icon,
  iconAppearance,
  onClose,
  isClosable,
  header,
  drawerLeftPosition,
}: {
  isCollapsible: boolean;
  iconToggleCloseContainerRef: RefObject<HTMLButtonElement>;
  isOpen: boolean;
  isAnimating: boolean;
  handleOnClickToggle: () => void;
  shouldDisplayDefaultHeader: boolean;
  id: string;
  title?: string;
  icon?: string;
  iconAppearance?: "outlined" | "filled";
  onClose: () => void;
  isClosable: boolean;
  header?: React.ReactNode | React.ReactNode[];
  drawerLeftPosition: number;
}) => (
  <>
    {isCollapsible && (
      <IconButton
        ref={iconToggleCloseContainerRef}
        className={styles["drawer-toggle"]}
        style={{
          transition: "none",
          transform: computeTransform(isAnimating, drawerLeftPosition, PADDING),
        }}
        name={isOpen ? "right-panel-close" : "right-panel-open"}
        size="l"
        variant="primary"
        onClick={handleOnClickToggle}
        aria-label={`Close drawer ${id}`}
      />
    )}
    {shouldDisplayDefaultHeader ? (
      <BaseHeader
        id={id}
        title={title!}
        icon={icon}
        iconAppearance={iconAppearance}
        onClose={onClose}
        isClosable={isClosable}
      />
    ) : (
      <>{header}</>
    )}
  </>
);

const Content = ({
  content,
  fixedHeader,
}: {
  content?: React.ReactNode | React.ReactNode[];
  fixedHeader?: boolean;
}) => (
  <div className={styles["drawer-content"]} data-fixed-header={fixedHeader} tabIndex={-1}>
    {content}
  </div>
);

const HeaderWithContent = ({
  fixedHeader,
  id,
  title,
  icon,
  iconAppearance,
  isCollapsible,
  iconToggleCloseContainerRef,
  isOpen,
  isAnimating,
  handleOnClickToggle,
  shouldDisplayDefaultHeader,
  onClose,
  isClosable,
  header,
  drawerLeftPosition,
  content,
}: {
  fixedHeader?: boolean;
  id: string;
  title?: string;
  icon?: string;
  iconAppearance?: "outlined" | "filled";
  isCollapsible: boolean;
  iconToggleCloseContainerRef: RefObject<HTMLButtonElement>;
  isOpen: boolean;
  isAnimating: boolean;
  handleOnClickToggle: () => void;
  shouldDisplayDefaultHeader: boolean;
  onClose: () => void;
  isClosable: boolean;
  header?: React.ReactNode | React.ReactNode[];
  drawerLeftPosition: number;
  content?: React.ReactNode | React.ReactNode[];
}) => (
  <>
    {fixedHeader ? (
      <>
        <Header
          id={id}
          title={title}
          icon={icon}
          iconAppearance={iconAppearance}
          isCollapsible={isCollapsible}
          iconToggleCloseContainerRef={iconToggleCloseContainerRef}
          isOpen={isOpen}
          isAnimating={isAnimating}
          handleOnClickToggle={handleOnClickToggle}
          shouldDisplayDefaultHeader={!!shouldDisplayDefaultHeader}
          onClose={onClose}
          isClosable={isClosable}
          header={header}
          drawerLeftPosition={drawerLeftPosition}
        />
        <Content content={content} fixedHeader={fixedHeader} />
      </>
    ) : (
      <div className={styles["drawer-header-content"]}>
        <Header
          id={id}
          title={title}
          icon={icon}
          iconAppearance={iconAppearance}
          isCollapsible={isCollapsible}
          iconToggleCloseContainerRef={iconToggleCloseContainerRef}
          isOpen={isOpen}
          isAnimating={isAnimating}
          handleOnClickToggle={handleOnClickToggle}
          shouldDisplayDefaultHeader={!!shouldDisplayDefaultHeader}
          onClose={onClose}
          isClosable={isClosable}
          header={header}
          drawerLeftPosition={drawerLeftPosition}
        />
        <Content content={content} />
      </div>
    )}
  </>
);

const Footer = ({
  fixedHeader,
  shouldDisplayDefaultFooter,
  primaryButtonLabel,
  secondaryButtonLabel,
  footer,
  onClickPrimaryButton,
  onClickSecondaryButton,
}: {
  fixedHeader?: boolean;
  shouldDisplayDefaultFooter: boolean;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  footer?: React.ReactNode | React.ReactNode[];
  onClickPrimaryButton?: () => void;
  onClickSecondaryButton?: () => void;
}) => (
  <div className={styles["drawer-footer"]} data-fixed-header={fixedHeader}>
    {shouldDisplayDefaultFooter ? (
      <BaseFooter
        primaryButton={<Button label={primaryButtonLabel!} variant="primary" onClick={onClickPrimaryButton} />}
        secondaryButton={
          secondaryButtonLabel ? (
            <Button label={secondaryButtonLabel} variant="secondary" onClick={onClickSecondaryButton} />
          ) : undefined
        }
      />
    ) : (
      footer && <>{footer}</>
    )}
  </div>
);

const Drawer = ({
  id,
  title,
  icon,
  iconAppearance,
  isOpen,
  onClose,
  onClickToggle,
  closeOnOverlayClick = false,
  primaryButtonLabel,
  secondaryButtonLabel,
  isCollapsible = false,
  content,
  header,
  footer,
  position,
  width,
  children,
  fixedHeader,
  closeOnEscape = false,
  isClosable = true,
  onClickPrimaryButton,
  onClickSecondaryButton,
  ...props
}: DrawerProps) => {
  const { shouldRender, isAnimating } = useAnimatedMount(isOpen, DRAWER_TRANSITION_DURATION);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const iconToggleOpenContainerRef = useRef<HTMLButtonElement | null>(null);
  const iconToggleCloseContainerRef = useRef<HTMLButtonElement | null>(null);

  const drawerLeftPosition = drawerRef.current?.clientWidth || 0;

  useClickAway(closeOnOverlayClick && position === "modal" ? onClose : () => {}, drawerRef.current!);
  useKeydownEscape(closeOnEscape ? onClose : () => {});
  useFocusTrap(drawerRef.current!, shouldRender);
  useFreezeNavigation(position === "modal" && isOpen);

  const shouldDisplayDefaultHeader = shouldUseDrawerDefaultHeader(header, title);
  const shouldDisplayDefaultFooter = shouldUseDrawerDefaultFooter(footer, primaryButtonLabel);

  const configurationIssues = getDrawerConfigurationIssues({
    hasCustomHeader: header !== undefined,
    hasTitle: !!title,
    hasCustomFooter: footer !== undefined,
    hasPrimaryButtonLabel: !!primaryButtonLabel,
    position,
    hasMainContent: !!children,
  });
  if (configurationIssues) {
    console.warn(configurationIssues);
    return null;
  }

  const computeTransform = (padding: number = 0) => {
    return isAnimating ? `translateX(-${drawerLeftPosition + padding}px)` : "none";
  };

  const handleOnClickToggle = () => {
    if (isOpen && iconToggleOpenContainerRef.current) {
      iconToggleOpenContainerRef.current.focus();
    }
    if (!isOpen && iconToggleCloseContainerRef.current) {
      iconToggleCloseContainerRef.current.focus();
    }
    onClickToggle();
  };

  const headerWithContentProps = {
    fixedHeader,
    id,
    title,
    icon,
    iconAppearance,
    isCollapsible,
    iconToggleCloseContainerRef,
    isOpen,
    isAnimating,
    handleOnClickToggle,
    shouldDisplayDefaultHeader: !!shouldDisplayDefaultHeader,
    onClose,
    isClosable,
    header,
    drawerLeftPosition,
    content,
  };

  const footerProps = {
    fixedHeader,
    shouldDisplayDefaultFooter: !!shouldDisplayDefaultFooter,
    primaryButtonLabel,
    secondaryButtonLabel,
    footer,
    onClickPrimaryButton,
    onClickSecondaryButton,
  };

  return (
    <>
      {position === "responsive" ? (
        <>
          <div className={styles["drawer-responsive-container"]}>
            {isCollapsible && (
              <IconButton
                className={styles["drawer-toggle"]}
                style={{
                  position: "absolute",
                  top: 24,
                  right: 4,
                  transition: "transform 240ms ease-out",
                  opacity: isAnimating ? 0 : 1,
                  transform: computeTransform(DRAWER_PADDING),
                }}
                name="right-panel-open"
                size="l"
                variant="primary"
                onClick={handleOnClickToggle}
                aria-label={`Close drawer ${id}`}
              />
            )}
            <Divider
              orientation="vertical"
              style={{
                position: "absolute",
                right: "0px",
                transition: "transform 240ms ease-out",
                visibility: isAnimating ? "visible" : "hidden",
                transform: computeTransform(),
              }}
            />
            <div
              className={styles["drawer"]}
              ref={drawerRef}
              data-open={isAnimating}
              role="region"
              aria-labelledby={`${id}-drawer-title`}
              data-position={position}
              data-fixed-header={fixedHeader}
              style={{
                width,
                transform: isAnimating ? `none` : `translateX(${width || "100%"})`,
                visibility: isAnimating ? "visible" : "hidden",
              }}
              {...props}
            >
              <HeaderWithContent {...headerWithContentProps} />
              <Footer {...footerProps} />
            </div>
            <div
              className={styles["drawer-children"]}
              data-open={isAnimating}
              style={{
                height: "100%",
                transition: "margin-right 240ms ease-out",
                marginRight: isAnimating ? width : 0,
                maxHeight: isAnimating ? "100vh" : undefined,
                overflowY: isAnimating ? "auto" : undefined,
              }}
            >
              {children}
            </div>
          </div>
        </>
      ) : (
        <>
          {isCollapsible && (
            <IconButton
              ref={iconToggleOpenContainerRef}
              className={styles["drawer-toggle"]}
              style={{
                position: "absolute",
                top: 24,
                right: 4,
                opacity: isAnimating ? 0 : 1,
              }}
              name={"right-panel-open"}
              size="l"
              variant="primary"
              onClick={handleOnClickToggle}
              aria-label={`Close drawer ${id}`}
            />
          )}
          {shouldRender && (
            <Overlay>
              <Backdrop isAnimating={isAnimating} />
              <div
                ref={drawerRef}
                className={styles["drawer"]}
                data-open={isAnimating}
                data-fixed-header={fixedHeader}
                role="dialog"
                aria-modal="true"
                aria-labelledby={`${id}-drawer-title`}
                style={{
                  width,
                }}
                {...props}
              >
                <HeaderWithContent {...headerWithContentProps} />
                <Footer {...footerProps} />
              </div>
            </Overlay>
          )}
        </>
      )}
    </>
  );
};

export default Drawer;
