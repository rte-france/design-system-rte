import { ASSISTIVE_TEXT_ICON_SIZE } from "@design-system-rte/core/components/assistive-text/assistive-text.constants";
import { AssistiveTextProps } from "@design-system-rte/core/components/assistive-text/assistive-text.interface";
import { getIconNameFromAppearance } from "@design-system-rte/core/components/assistive-text/assistive-text.utils";

import Icon from "../icon/Icon";
import Link from "../link/Link";

import styles from "./AssistiveText.module.scss";

const AssistiveText = ({ label, appearance, showIcon, href, width }: AssistiveTextProps) => {
  const icon = getIconNameFromAppearance(appearance);

  return (
    <div className={styles["assistive-text"]} data-appearance={appearance} style={{ width: `${width}px` }}>
      {showIcon && icon && (
        <Icon
          name={icon}
          appearance="outlined"
          className={styles[`assistive-icon-${appearance}`]}
          size={ASSISTIVE_TEXT_ICON_SIZE}
        />
      )}
      {appearance === "link" ? <Link label={label} href={href} externalLink /> : <span>{label}</span>}
    </div>
  );
};

export default AssistiveText;
