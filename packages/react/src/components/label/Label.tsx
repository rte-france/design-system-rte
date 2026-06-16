import RequiredIndicator from "../requiredindicator/RequiredIndicator";

import styles from "./Label.module.scss";

const Label = ({
  id,
  label,
  htmlFor,
  required = false,
  showLabelRequirement = false,
}: {
  id?: string;
  label: string;
  htmlFor?: string;
  required?: boolean;
  showLabelRequirement?: boolean;
}) => {
  return (
    <div className={styles["rte-label-container"]} data-show-label-requirement={showLabelRequirement}>
      <label id={id} htmlFor={htmlFor} className={styles["rte-label"]}>
        {label}
      </label>
      <RequiredIndicator required={required} showLabelRequirement={showLabelRequirement} />
    </div>
  );
};

export default Label;
