import { ASSISTIVE_TEXT_ICON_SIZE } from "@design-system-rte/core/components/assistive-text/assistive-text.constants";
import { AssistiveTextProps } from "@design-system-rte/core/components/assistive-text/assistive-text.interface";

import Icon from "../icon/Icon";
import Link from "../link/Link";

import styles from "./AssistiveText.module.scss";

const AssistiveText = ({ label, appearance, showIcon, href }: AssistiveTextProps) => {
  return (
    <div className={styles["assistive-text"]}>
      {showIcon && appearance === "error" && (
        <Icon
          name="error"
          appearance="outlined"
          className={styles["assistive-icon-error"]}
          size={ASSISTIVE_TEXT_ICON_SIZE}
        />
      )}
      {showIcon && appearance === "success" && (
        <Icon
          name="check-circle"
          appearance="outlined"
          className={styles["assistive-icon-success"]}
          size={ASSISTIVE_TEXT_ICON_SIZE}
        />
      )}
      {appearance === "link" ? (
        <Link label={label} href={href} />
      ) : (
        <p className={styles["assistive-label"]} data-appearance={appearance}>
          {label}
        </p>
      )}
    </div>
  );
};

export default AssistiveText;
