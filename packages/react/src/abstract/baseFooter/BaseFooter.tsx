import Button from "../../components/button/Button";

import styles from "./BaseFooter.module.scss";

export type DSButtonElement = React.ReactElement<React.ComponentProps<typeof Button>, typeof Button>;

interface BaseFooterProps {
  primaryButton: DSButtonElement;
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
