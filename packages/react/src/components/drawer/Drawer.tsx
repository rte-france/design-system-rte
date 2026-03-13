import { DrawerProps as coreDrawerProps } from "@design-system-rte/core/components/drawer/drawer.interface";
import { useRef } from "react";

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
import { Overlay } from "../overlay/Overlay";

import styles from "./Drawer.module.scss";

interface DrawerProps extends coreDrawerProps, Omit<React.HTMLAttributes<HTMLDivElement>, "id" | "content"> {
  header?: React.ReactNode | React.ReactNode[];
  footer?: React.ReactNode | React.ReactNode[];
  content?: React.ReactNode | React.ReactNode[];
  children?: React.ReactNode | React.ReactNode[];
  width?: string;
}

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
  ...props
}: DrawerProps) => {
  const { shouldRender, isAnimating } = useAnimatedMount(isOpen, 240);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const iconToggleOpenContainerRef = useRef<HTMLButtonElement | null>(null);
  const iconToggleCloseContainerRef = useRef<HTMLButtonElement | null>(null);

  const drawerLeftPosition = drawerRef.current?.clientWidth || 0;

  const PADDING = 4;

  useClickAway(closeOnOverlayClick && position === "modal" ? onClose : () => {}, drawerRef.current!);
  useKeydownEscape(closeOnEscape ? onClose : () => {});
  useFocusTrap(drawerRef.current!, shouldRender);

  const shouldDisplayDefaultHeader = header === undefined && title;
  const shouldDisplayDefaultFooter = footer === undefined && primaryButtonLabel;
  if (!shouldDisplayDefaultHeader && !header) {
    console.warn("Drawer: You must provide either a title or a custom header.");
    return null;
  }

  if (position === "responsive" && !children) {
    console.warn(
      "Drawer: You should provide your content as children when using responsive position to avoid empty space next to the drawer.",
    );
    return null;
  }

  if (!footer && !primaryButtonLabel) {
    console.warn("Drawer: You must provide either a primaryButtonLabel or a custom footer.");
    return null;
  }

  if (position === "modal" && children) {
    console.warn("Drawer: You should not provide children when using modal position. ");
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

  const Header = () => (
    <>
      {isCollapsible && (
        <IconButton
          ref={iconToggleCloseContainerRef}
          className={styles["drawer-toggle"]}
          style={{
            transform: computeTransform(PADDING),
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

  const Content = () => (
    <div className={styles["drawer-content"]} data-fixed-header={fixedHeader} tabIndex={-1}>
      {content}
    </div>
  );

  const HeaderWithContent = () => (
    <>
      {fixedHeader ? (
        <>
          <Header />
          <Content />
        </>
      ) : (
        <div className={styles["drawer-header-content"]}>
          <Header />
          <Content />
        </div>
      )}
    </>
  );

  const Footer = () => (
    <div className={styles["drawer-footer"]} data-fixed-header={fixedHeader}>
      {shouldDisplayDefaultFooter ? (
        <BaseFooter
          primaryButton={<Button label={primaryButtonLabel!} variant="primary" />}
          secondaryButton={
            secondaryButtonLabel ? <Button label={secondaryButtonLabel} variant="secondary" /> : undefined
          }
        />
      ) : (
        footer && <>{footer}</>
      )}
    </div>
  );

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
                  opacity: isAnimating ? 0 : 1,
                  transform: computeTransform(PADDING),
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
              <HeaderWithContent />
              <Footer />
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
            <Overlay freezeNavigation={true}>
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
                <HeaderWithContent />
                <Footer />
              </div>
            </Overlay>
          )}
        </>
      )}
    </>
  );
};

export default Drawer;
