import { IconSize } from "@design-system-rte/core";

import Divider from "../../components/divider/Divider";
import Icon from "../../components/icon/Icon";
import IconButton from "../../components/iconButton/IconButton";

import styles from "./BaseHeader.module.scss";

interface BaseHeaderProps {
  id: string;
  title: string;
  icon?: string;
  iconAppearance?: "outlined" | "filled";
  onClose: () => void;
  isClosable: boolean;
}

const BaseHeader = ({ id, title, icon, iconAppearance, onClose, isClosable = true }: BaseHeaderProps) => {
  return (
    <div className={styles["base-header"]}>
      <div className={styles["base-header-text"]}>
        {icon && <Icon name={icon} size={IconSize["xl"]} appearance={iconAppearance} />}
        <h2 id={`${id}-modal-title`} className={styles["base-header-title"]}>
          {title}
        </h2>
        {isClosable && (
          <IconButton
            data-testid="modal-close-button"
            name="close"
            size="l"
            className={styles["close-icon"]}
            variant="neutral"
            onClick={onClose}
            aria-label={`Close modal ${id}`}
          />
        )}
      </div>
      <Divider />
    </div>
  );
};

export default BaseHeader;
