import Button from "../../components/button/Button";
import SplitButton from "../../components/splitButton/SplitButton";

import styles from "./BaseFooter.module.scss";

export type DSButtonElement = React.ReactElement<React.ComponentProps<typeof Button>, typeof Button>;

export type DSSplitButtonElement = React.ReactElement<React.ComponentProps<typeof SplitButton>, typeof SplitButton>;

export type DSFooterActionElement = DSButtonElement | DSSplitButtonElement;

interface BaseFooterProps {
  primaryButton: DSFooterActionElement;
  secondaryButton?: DSButtonElement;
}

const BaseFooter = ({ primaryButton, secondaryButton }: BaseFooterProps) => {
  return (
    <div className={styles["base-footer"]}>
      {secondaryButton}
      {primaryButton}
    </div>
  );
};

export default BaseFooter;
