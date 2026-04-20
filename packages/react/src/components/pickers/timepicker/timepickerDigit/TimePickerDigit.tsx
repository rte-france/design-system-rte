import { forwardRef } from "react";

import Icon from "../../../icon/Icon";

import styles from "./TimePickerDigit.module.scss";

export type TimePickerDigitProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  increase?: () => void;
  decrease?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  unit: "h" | "m" | "s";
  withSeparator?: boolean;
  readOnly?: boolean;
};

const TimePickerDigit = forwardRef<HTMLInputElement, TimePickerDigitProps>(
  ({ value, onChange, increase, decrease, onKeyDown, unit, withSeparator, readOnly }, ref) => {
    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (readOnly) return;
      onKeyDown?.(e);
    };

    const handleOnClickIncrease = () => {
      if (readOnly) return;
      increase?.();
    };

    const handleOnClickDecrease = () => {
      if (readOnly) return;
      decrease?.();
    };

    return (
      <>
        <div className={styles["rte-time-picker-segment-container"]}>
          <div className={styles["rte-time-picker-segment-controls"]}>
            <button
              className={styles["rte-time-picker-segment-controls-button"]}
              onClick={handleOnClickIncrease}
              tabIndex={-1}
              type="button"
              aria-label={`Increase ${unit === "h" ? "hours" : unit === "m" ? "minutes" : "seconds"} value`}
            >
              <Icon name="arrow-chevron-up" appearance="outlined" size={24} />
            </button>
            <input
              ref={ref}
              type="text"
              value={value ?? "00"}
              onChange={onChange}
              onKeyDown={handleOnKeyDown}
              tabIndex={readOnly ? -1 : 0}
              className={styles["rte-time-picker-segment-input"]}
              readOnly={readOnly}
            />
            <button
              className={styles["rte-time-picker-segment-controls-button"]}
              onClick={handleOnClickDecrease}
              tabIndex={-1}
              type="button"
              aria-label={`Decrease ${unit === "h" ? "hours" : unit === "m" ? "minutes" : "seconds"} value`}
            >
              <Icon name="arrow-chevron-down" appearance="outlined" size={24} />
            </button>
          </div>
          <span>{unit}</span>
        </div>
        {withSeparator && <span className={styles["rte-time-picker-segment-separator"]}>:</span>}
      </>
    );
  },
);

export default TimePickerDigit;
