import { AccordionIconSizeMap } from "@design-system-rte/core/components/accordion/accordion.constants";
import { AccordionProps as coreAccordionProps } from "@design-system-rte/core/components/accordion/accordion.interface";
import { forwardRef, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import useAnimatedMount from "../../hooks/useAnimatedMount";
import Divider from "../divider/Divider";
import Icon from "../icon/Icon";
import { concatClassNames } from "../utils";

import styles from "./Accordion.module.scss";

interface AccordionProps extends coreAccordionProps, Omit<React.HTMLAttributes<HTMLButtonElement>, "title"> {
  children?: React.ReactNode | React.ReactNode[];
}

const Accordion = forwardRef<HTMLButtonElement, AccordionProps>(
  (
    {
      id,
      children,
      icon,
      alignement = "right",
      disabled = false,
      isOpen,
      appearance = "brand",
      compactSpacing = false,
      size = "small",
      title,
      onClick,
      className,
      ...props
    }: AccordionProps,
    ref,
  ) => {
    const [isInternalOpen, setIsInternalOpen] = useState(isOpen ?? false);
    const innerContentRef = useRef<HTMLDivElement>(null);

    const baseIdRef = useRef<string>(id ?? uuidv4());
    const summaryId = `accordion-summary-${baseIdRef.current}`;
    const contentId = `accordion-content-${baseIdRef.current}`;

    useEffect(() => {
      setIsInternalOpen(isOpen ?? false);
    }, [isOpen]);

    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;
      setIsInternalOpen((prev) => !prev);
      if (onClick) onClick(e);
    };

    const { shouldRender, isAnimating } = useAnimatedMount(isInternalOpen, 120);

    return (
      <>
        <div className={styles["accordion"]} data-open={isInternalOpen}>
          <button
            ref={ref}
            type="button"
            data-testid="accordion-button"
            data-appearance={appearance}
            data-compact-spacing={compactSpacing}
            data-size={size}
            className={concatClassNames(styles["accordion-summary-container"], className)}
            onClick={handleOnClick}
            disabled={disabled}
            aria-expanded={isInternalOpen}
            aria-controls={contentId}
            {...props}
          >
            <div className={styles["accordion-summary"]} id={summaryId}>
              {alignement === "left" && (
                <Icon
                  className={styles["accordion-chevron"]}
                  data-animating={isAnimating}
                  name={"arrow-chevron-down"}
                  size={AccordionIconSizeMap[size]}
                />
              )}
              {icon && <Icon name={icon} size={AccordionIconSizeMap[size]} />}
              <span className={styles["accordion-title"]} data-size={size}>
                {title}
              </span>
              {alignement === "right" && (
                <Icon
                  className={styles["accordion-chevron"]}
                  data-animating={isAnimating}
                  name={"arrow-chevron-down"}
                  size={AccordionIconSizeMap[size]}
                />
              )}
            </div>
          </button>
          {shouldRender && (
            <>
              <div
                className={styles["accordion-content"]}
                data-open={isInternalOpen}
                data-animating={isAnimating}
                data-disabled={disabled}
                id={contentId}
                aria-hidden={!isInternalOpen}
                aria-labelledby={summaryId}
                role="region"
                style={{ height: isInternalOpen ? innerContentRef.current?.scrollHeight : 0 }}
              >
                <div ref={innerContentRef}>{children}</div>
              </div>
            </>
          )}
          <Divider thickness="light" />
        </div>
      </>
    );
  },
);

export default Accordion;
