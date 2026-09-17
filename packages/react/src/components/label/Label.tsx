import { forwardRef } from "react";

import RequiredIndicator from "../requiredindicator/RequiredIndicator";

import styles from "./Label.module.scss";

const Label = forwardRef<
  HTMLDivElement,
  {
    id?: string;
    label: string;
    htmlFor?: string;
    required?: boolean;
    showLabelRequirement?: boolean;
  }
>(({ id, label, htmlFor, required = false, showLabelRequirement = false }, ref) => {
  return (
    <div ref={ref} className={styles["rte-label-container"]} data-show-label-requirement={showLabelRequirement}>
      <label id={id} htmlFor={htmlFor} className={styles["rte-label"]}>
        {label}
      </label>
      <RequiredIndicator required={required} showLabelRequirement={showLabelRequirement} />
    </div>
  );
});

export default Label;
