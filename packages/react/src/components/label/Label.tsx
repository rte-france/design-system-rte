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
    <label htmlFor={htmlFor ?? id} className={styles["rte-label"]}>
      {label}
      <RequiredIndicator required={required} showLabelRequirement={showLabelRequirement} />
    </label>
  );
};

export default Label;
