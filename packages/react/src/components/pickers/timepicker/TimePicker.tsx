import {
  ARROW_DOWN_KEY,
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY,
  ARROW_UP_KEY,
  BACKSPACE_KEY,
  DELETE_KEY,
} from "@design-system-rte/core";
import {
  TIME_SEGMENT_MAX_FIRST_DIGIT,
  TIME_SEGMENT_MAX_VALUE,
  TIME_SEGMENT_ORDER,
} from "@design-system-rte/core/components/timepicker/timepicker.constants";
import { TimeSegmentEnum } from "@design-system-rte/core/components/timepicker/timepicker.interface.d";
import { TimePickerProps as coreTimePickerProps } from "@design-system-rte/core/components/timepicker/timepicker.interface.d";
import {
  buildDisplayValue,
  canSwitchToNextSegment,
  computeTimeSegmentRanges,
  formatNumberToDigitValue,
  getPrevSegment,
} from "@design-system-rte/core/components/timepicker/timepicker.utils";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";

import { useFocusTrap } from "../../../hooks/useFocusTrap";
import AssistiveText from "../../assistivetext/AssistiveText";
import { BaseDropdown } from "../../dropdown/BaseDropdown";
import RequiredIndicator from "../../requiredindicator/RequiredIndicator";
import BaseInputPicker from "../baseInputPicker/BaseInputPicker";

import { useNavigateBetweenTimeSegment } from "./hooks/useNavigateBetweenTimeSegment";
import useTimePickerDropdown from "./hooks/useTimePickerDropdown";
import useTimePickerInternalValue from "./hooks/useTimePickerInternalValue";
import styles from "./TimePicker.module.scss";
import TimePickerDigit from "./timepickerDigit/TimePickerDigit";

const numberRegex = /^\d*$/;

interface TimePickerProps
  extends
    coreTimePickerProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "id" | "onChange" | "value" | "defaultValue" | "placeholder"> {}

const TimePicker = forwardRef<HTMLInputElement, TimePickerProps>(
  (
    {
      id,
      labelId,
      value,
      onChange,
      label,
      showLabel,
      required = false,
      showLabelRequirement = false,
      readOnly,
      assistiveTextLabel,
      assistiveAppearance,
      showAssistiveIcon,
      assistiveTextLink,
      isError,
      disabled,
      isHourReadOnly = false,
      isMinuteReadOnly = false,
      isSecondReadOnly = false,
      hourIncrement = 1,
      minuteIncrement = 1,
      secondIncrement = 1,
    }: TimePickerProps,
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const timePickerRef = useRef<HTMLDivElement | null>(null);
    const timePickerInputRef = useRef<HTMLInputElement | null>(null);

    const { timePickerDrodownElement, timePickerDropdownRef } = useTimePickerDropdown(isOpen);

    const {
      moveToNextSegment,
      moveToPreviousSegment,
      setActiveTimeSegment,
      activeTimeSegment,
      prevSegment,
      nextSegment,
    } = useNavigateBetweenTimeSegment();

    const {
      internalTimeValue,
      updateTimeSegment,
      handleOnChangeHours,
      handleOnChangeMinutes,
      handleOnChangeSeconds,
      increaseMinutes,
      decreaseMinutes,
      increaseSeconds,
      decreaseSeconds,
      increaseHours,
      decreaseHours,
    } = useTimePickerInternalValue(value, {
      hourIncrement,
      minuteIncrement,
      secondIncrement,
    });

    useFocusTrap(timePickerDrodownElement!, isOpen);
    const displayValue = buildDisplayValue(internalTimeValue, activeTimeSegment);

    const shouldOpenDropdown = isOpen && !disabled;

    const getTimePickerInputRef = (element: HTMLInputElement) => {
      timePickerInputRef.current = element;
      if (typeof ref === "function") {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    };

    const isCurrentSegmentReadOnly = () => {
      if (activeTimeSegment === TimeSegmentEnum.HOURS) {
        return isHourReadOnly;
      } else if (activeTimeSegment === TimeSegmentEnum.MINUTES) {
        return isMinuteReadOnly;
      } else {
        return isSecondReadOnly;
      }
    };

    const handleOnChange = () => {
      if (isCurrentSegmentReadOnly()) return;
      onChange?.(internalTimeValue);
    };

    const handleOnKeyDownSeconds = (e: React.KeyboardEvent<HTMLInputElement>) => {
      const key = e.key;
      if (key === ARROW_UP_KEY) {
        e.preventDefault();
        increaseSeconds();
      } else if (key === ARROW_DOWN_KEY) {
        e.preventDefault();
        decreaseSeconds();
      }
    };

    const handleOnKeyDownMinutes = (e: React.KeyboardEvent<HTMLInputElement>) => {
      const key = e.key;
      if (key === ARROW_UP_KEY) {
        e.preventDefault();
        increaseMinutes();
      } else if (key === ARROW_DOWN_KEY) {
        e.preventDefault();
        decreaseMinutes();
      }
    };

    const handleOnKeyDownHours = (e: React.KeyboardEvent<HTMLInputElement>) => {
      const key = e.key;
      if (key === ARROW_UP_KEY) {
        e.preventDefault();
        increaseHours();
      } else if (key === ARROW_DOWN_KEY) {
        e.preventDefault();
        decreaseHours();
      }
    };

    const handleFunctionKey = (key: string) => {
      if (key === BACKSPACE_KEY || key === DELETE_KEY) {
        handleDeleteSegmentValue();
      }

      if (key === ARROW_LEFT_KEY) {
        moveToPreviousSegment();
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const prevTimeSegmentRange = computeTimeSegmentRanges(internalTimeValue)[prevSegment];
            timePickerInputRef.current?.setSelectionRange(prevTimeSegmentRange[0], prevTimeSegmentRange[1]);
          });
        });
      }

      if (key === ARROW_RIGHT_KEY) {
        if (canSwitchToNextSegment(internalTimeValue, activeTimeSegment)) {
          moveToNextSegment();
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              const nextTimeSegmentRange = computeTimeSegmentRanges(internalTimeValue)[nextSegment];
              timePickerInputRef.current?.setSelectionRange(nextTimeSegmentRange[0], nextTimeSegmentRange[1]);
            });
          });
        }
      }
    };

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      const key = e.key;

      if ([ARROW_UP_KEY, ARROW_DOWN_KEY, ARROW_LEFT_KEY, ARROW_RIGHT_KEY, BACKSPACE_KEY, DELETE_KEY].includes(key)) {
        e.preventDefault();
        handleFunctionKey(key);
        return;
      }

      if (!numberRegex.test(key)) {
        selectActiveSegment();
        return;
      }

      if (isCurrentSegmentReadOnly()) {
        selectActiveSegment();
        return;
      } else {
        const currentActiveTimeSegmentValue = internalTimeValue[activeTimeSegment];

        if (currentActiveTimeSegmentValue.length >= 2) {
          modifiyCurrentSegmentValue(currentActiveTimeSegmentValue, formatNumberToDigitValue(Number(key)));
        } else {
          const next = currentActiveTimeSegmentValue + key;
          const maxFirstDigit = TIME_SEGMENT_MAX_FIRST_DIGIT[activeTimeSegment];

          if (currentActiveTimeSegmentValue.length === 0 && Number(key) > maxFirstDigit) {
            updateTimeSegment(activeTimeSegment, formatNumberToDigitValue(Number(key)));
            moveToNextSegment();
          } else if (next.length === 2) {
            const clamped = formatNumberToDigitValue(Math.min(Number(next), TIME_SEGMENT_MAX_VALUE[activeTimeSegment]));
            updateTimeSegment(activeTimeSegment, clamped);
            moveToNextSegment();
          } else {
            updateTimeSegment(activeTimeSegment, formatNumberToDigitValue(Number(key)));
          }
        }
      }
    };

    const handleDeleteSegmentValue = () => {
      if (internalTimeValue[activeTimeSegment] !== "") {
        updateTimeSegment(activeTimeSegment, "");
      } else {
        const prev = getPrevSegment(activeTimeSegment);
        if (prev !== activeTimeSegment) {
          updateTimeSegment(prev, "");
          moveToPreviousSegment();
        }
      }
    };

    const modifiyCurrentSegmentValue = (currentActiveTimeSegmentValue: string, key: string) => {
      const currentTimeSegmentStartIndex = computeTimeSegmentRanges(internalTimeValue)[activeTimeSegment][0];
      const cursorPos = timePickerInputRef.current?.selectionStart ?? 0;
      const positionInSegment = cursorPos - currentTimeSegmentStartIndex;

      if (positionInSegment === 0) {
        if (currentActiveTimeSegmentValue[0] === "0") {
          const newValue = currentActiveTimeSegmentValue[1] + key[1];
          const formattedDigitValue = formatNumberToDigitValue(
            Math.min(Number(newValue), TIME_SEGMENT_MAX_VALUE[activeTimeSegment]),
          );
          updateTimeSegment(activeTimeSegment, formattedDigitValue);
          moveToNextSegment();
        } else {
          updateTimeSegment(activeTimeSegment, key);
        }
      } else {
        const newValue = Number(currentActiveTimeSegmentValue[0] + key);
        const formattedDigitValue = formatNumberToDigitValue(
          Math.min(newValue, TIME_SEGMENT_MAX_VALUE[activeTimeSegment]),
        );
        updateTimeSegment(activeTimeSegment, formattedDigitValue);
        moveToNextSegment();
      }
    };

    const handleOnMouseUp = () => {
      if (isOpen) {
        setIsOpen(false);
      }
      const currentCursorPosition = timePickerInputRef.current?.selectionStart ?? 0;
      const ranges = computeTimeSegmentRanges(internalTimeValue);
      const endIndex = 1;
      if (currentCursorPosition <= ranges[TimeSegmentEnum.HOURS][endIndex]) {
        setActiveTimeSegment(TimeSegmentEnum.HOURS);
      } else if (currentCursorPosition <= ranges[TimeSegmentEnum.MINUTES][endIndex]) {
        setActiveTimeSegment(TimeSegmentEnum.MINUTES);
      } else {
        setActiveTimeSegment(TimeSegmentEnum.SECONDS);
      }
    };

    const focusTimePicker = () => {
      if (!disabled) {
        setIsFocused(true);
        timePickerInputRef.current?.focus();
      }
    };

    const blurTimePicker = () => {
      setIsFocused(false);
    };

    const handleOnFocus = () => {
      focusTimePicker();
    };

    const initializeDisplayValueFromTimePickerValue = () => {
      Object.values(internalTimeValue).forEach((val, index) => {
        const segment = TIME_SEGMENT_ORDER[index];
        if (val === "") {
          updateTimeSegment(segment, formatNumberToDigitValue(0));
        } else {
          updateTimeSegment(segment, formatNumberToDigitValue(Number(val)));
        }
      });
    };

    const handleOpenTimePicker = () => {
      focusTimePicker();
      setIsOpen((prev) => !prev);
      initializeDisplayValueFromTimePickerValue();
    };

    const handleOnCloseTimePicker = () => {
      setIsOpen(false);
      blurTimePicker();
    };

    const selectActiveSegment = useCallback(() => {
      const segmentRanges = computeTimeSegmentRanges(internalTimeValue);
      const currentSegmentRange = segmentRanges[activeTimeSegment];
      requestAnimationFrame(() => {
        timePickerInputRef.current?.setSelectionRange(currentSegmentRange[0], currentSegmentRange[1]);
      });
    }, [activeTimeSegment, internalTimeValue]);

    useEffect(() => {
      selectActiveSegment();
    }, [selectActiveSegment]);

    if (readOnly && (internalTimeValue.hh === "" || internalTimeValue.mm === "" || internalTimeValue.ss === "")) {
      console.warn(
        "TimePicker is in readOnly mode but the value is not fully set. Please provide a value with all segments (hh, mm, ss) set to non-empty values to avoid unexpected behavior.",
      );
      return null;
    }

    if (isError && !assistiveTextLabel) {
      console.warn(
        "TimePicker is in error state but no assistiveTextLabel is provided. Please provide assistive text to explain the error.",
      );
      return null;
    }

    return (
      <>
        <div className={styles["rte-time-picker-header"]}>
          {showLabel && (
            <label htmlFor={id} id={labelId ?? label} className={styles["rte-time-picker-label"]}>
              {label}
              <RequiredIndicator required={required} showLabelRequirement={showLabelRequirement} />
            </label>
          )}
        </div>
        <BaseDropdown
          dropdownId="time-picker-dropdown"
          isList={false}
          onClose={handleOnCloseTimePicker}
          offset={8}
          style={{ width: timePickerRef.current?.offsetWidth }}
          trigger={
            <BaseInputPicker
              id={id}
              ariaLabelledBy={labelId}
              value={displayValue}
              readOnly={readOnly}
              onChange={handleOnChange}
              onFocus={handleOnFocus}
              onKeyDown={handleOnKeyDown}
              onMouseUp={handleOnMouseUp}
              pickerInputRef={getTimePickerInputRef}
              pickerRef={timePickerRef}
              isFocused={isFocused}
              onOpenPicker={handleOpenTimePicker}
              assistiveTextLabel={assistiveTextLabel}
              assistiveAppearance={assistiveAppearance}
              showAssistiveIcon={showAssistiveIcon}
              assistiveTextLink={assistiveTextLink}
              isError={isError}
              disabled={disabled}
            />
          }
          isOpen={shouldOpenDropdown}
        >
          <div className={styles["rte-time-picker-dropdown"]} ref={timePickerDropdownRef}>
            <TimePickerDigit
              value={internalTimeValue.hh}
              onChange={handleOnChangeHours}
              onKeyDown={handleOnKeyDownHours}
              increase={increaseHours}
              decrease={decreaseHours}
              unit="h"
              withSeparator
              readOnly={isHourReadOnly}
            />
            <TimePickerDigit
              value={internalTimeValue.mm}
              onChange={handleOnChangeMinutes}
              onKeyDown={handleOnKeyDownMinutes}
              increase={increaseMinutes}
              decrease={decreaseMinutes}
              unit="m"
              withSeparator
              readOnly={isMinuteReadOnly}
            />
            <TimePickerDigit
              value={internalTimeValue.ss}
              onChange={handleOnChangeSeconds}
              onKeyDown={handleOnKeyDownSeconds}
              increase={increaseSeconds}
              decrease={decreaseSeconds}
              unit="s"
              readOnly={isSecondReadOnly}
            />
          </div>
        </BaseDropdown>
        {assistiveTextLabel && !isOpen && (
          <AssistiveText
            label={assistiveTextLabel!}
            appearance={isError ? "error" : assistiveAppearance!}
            showIcon={showAssistiveIcon}
            href={assistiveTextLink}
          />
        )}
      </>
    );
  },
);

export default TimePicker;
