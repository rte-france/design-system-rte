import { AccordionIconSizeMap } from "@design-system-rte/core/components/accordion/accordion.constants";
import { AccordionProps as coreAccordionProps } from "@design-system-rte/core/components/accordion/accordion.interface";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import useAnimatedMount from "../../hooks/useAnimatedMount";
import Divider from "../divider/Divider";
import Icon from "../icon/Icon";

import styles from "./Accordion.module.scss";

interface AccordionProps extends coreAccordionProps, React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | React.ReactNode[];
}

const Accordion = ({
  id,
  children,
  icon,
  alignement = "right",
  disabled = false,
  isOpen,
  appearance = "brand",
  compactSpacing = false,
  size = "small",
  onClick,
}: AccordionProps) => {
  const [isInternalOpen, setIsInternalOpen] = useState(isOpen ?? false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsInternalOpen(isOpen ?? false);
  }, [isOpen]);

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    setIsInternalOpen((prev) => !prev);
    if (onClick) onClick(e);
  };

  const { isAnimating } = useAnimatedMount(isInternalOpen, 120);

  return (
    <>
      <div className={styles["accordion"]} data-open={isInternalOpen}>
        <button
          data-testid="accordion-button"
          data-appearance={appearance}
          data-compact-spacing={compactSpacing}
          data-size={size}
          className={styles["accordion-summary-container"]}
          onClick={handleOnClick}
          disabled={disabled}
          aria-expanded={isInternalOpen}
          aria-controls={`accordion-content-${id ?? uuidv4()}`}
        >
          <div className={styles["accordion-summary"]} id={`accordion-summary-${id ?? uuidv4()}`}>
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
              Accordion title
            </span>{" "}
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
        <div
          ref={contentRef}
          className={styles["accordion-content"]}
          data-open={isInternalOpen}
          data-animating={isAnimating}
          data-disabled={disabled}
          aria-hidden={!isInternalOpen}
          style={{ height: isAnimating ? contentRef.current?.scrollHeight : 0 }}
        >
          {children}
        </div>
        <Divider thickness="light" />
      </div>
    </>
  );
};

export default Accordion;
