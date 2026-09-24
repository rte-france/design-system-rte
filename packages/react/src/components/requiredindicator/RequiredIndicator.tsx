import { REQUIREMENT_INDICATOR_VALUE } from "@design-system-rte/core/components/required-indicator/required-indicator.constant";
import { RequiredIndicatorProps } from "@design-system-rte/core/components/required-indicator/required-indicator.interface";

import Icon from "../icon/Icon";

import styles from "./RequiredIndicator.module.scss";

const RequiredIndicator = ({ required, showLabelRequirement }: RequiredIndicatorProps) => {
  const computedRequirementIndicatorValue = required
    ? showLabelRequirement
      ? REQUIREMENT_INDICATOR_VALUE.required
      : REQUIREMENT_INDICATOR_VALUE.requiredIcon
    : REQUIREMENT_INDICATOR_VALUE.optional;

  return (
    <>
      {(showLabelRequirement || required) && (
        <span
          className={styles["requirement-indicator"]}
          data-required={required}
          data-show-label-requirement={showLabelRequirement}
          aria-hidden="true"
        >
          {computedRequirementIndicatorValue === REQUIREMENT_INDICATOR_VALUE.requiredIcon ? (
            <Icon name="asterisk" size={8} />
          ) : (
            computedRequirementIndicatorValue
          )}
        </span>
      )}
    </>
  );
};

export default RequiredIndicator;
