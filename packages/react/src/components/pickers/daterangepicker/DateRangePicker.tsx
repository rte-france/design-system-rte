import {
  areSameRange,
  DATE_SEGMENTS_ORDER,
  DateRangePickerProps,
  DateSegmentEnum,
  normalizeDate,
  waitForNextFrame,
} from "@design-system-rte/core";
import { useCallback, useEffect, useRef, useState } from "react";

import { BaseDropdown } from "../../../components/dropdown/BaseDropdown";
import AssistiveText from "../../assistivetext/AssistiveText";
import Icon from "../../icon/Icon";
import Label from "../../label/Label";
import useDatePickerInternalValue from "../hooks/useDatePickerInternalValue";
import { useNavigateBetweenDateSegment } from "../hooks/useNavigateBetweenDateSegment";
import { computeDateSegmentRanges } from "../picker.utils";

import styles from "./DateRangePicker.module.scss";
import DateRangePickerMenu from "./dateRangePickerMenu/DateRangePickerMenu";
import DateRangeInput from "./inputs/DateRangeInput";

const START_INPUT = "start";
const END_INPUT = "end";

type DateRangeInputType = typeof START_INPUT | typeof END_INPUT;

const [DAY, MONTH, YEAR] = DATE_SEGMENTS_ORDER;

const DateRangePicker = ({
  id,
  label,
  labelId,
  required = false,
  showLabelRequirement = false,
  value,
  onChange,
  hasAction = false,
  onValidate,
  onCancel,
  minDate,
  maxDate,
  disabledDates,
  disabled = false,
  assistiveTextLabel,
  assistiveAppearance = "description",
  showAssistiveIcon = false,
  assistiveTextLink,
  isError = false,
  readonly = false,
}: DateRangePickerProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hasPendingChanges, setHasPendingChanges] = useState(false);

  const skipNextFocusRef = useRef(false);
  const activeInputRef = useRef<"start" | "end">("start");
  const activeModifiedSegmentRef = useRef<DateSegmentEnum | null>(null);

  const dateInputStartRef = useRef<HTMLInputElement | null>(null);
  const dateInputEndRef = useRef<HTMLInputElement | null>(null);
  const inputsRef = useRef<HTMLDivElement | null>(null);
  const onChangeRef = useRef(onChange);
  const groupLabelId = labelId ?? `${id}-label`;
  const startInputLabelId = `${id}-start-label`;
  const endInputLabelId = `${id}-end-label`;
  const assistiveTextId = `${id}-assistive-text`;

  const shouldDisplayAssistiveText = assistiveTextLabel && !isDropdownOpen;
  const startInputAriaLabelledBy = `${groupLabelId} ${startInputLabelId}`;
  const endInputAriaLabelledBy = `${groupLabelId} ${endInputLabelId}`;
  const inputAriaDescribedBy = shouldDisplayAssistiveText ? assistiveTextId : undefined;

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  const [internalRange, setInternalRange] = useState<[Date | null, Date | null]>(value ?? [null, null]);
  const internalRangeRef = useRef<[Date | null, Date | null]>(
    value ? [value[0] ? normalizeDate(value[0]!) : null, value[1] ? normalizeDate(value[1]!) : null] : [null, null],
  );

  const {
    dateState: dateStateStart,
    internalValue: internalValueStart,
    increaseActiveSegmentValue: increaseActiveSegmentValueStart,
    decreaseActiveSegmentValue: decreaseActiveSegmentValueStart,
    resetActiveSegmentValue: resetActiveSegmentValueStart,
    updateDateSegment: updateDateSegmentStart,
    updateFullDate: updateFullDateStart,
    displayValue: displayValueStart,
    updateDisplayedDate: updateDisplayedDateStart,
  } = useDatePickerInternalValue(internalRangeRef.current[0] ? normalizeDate(internalRangeRef.current[0]) : null, {
    minDate,
    maxDate,
    disabledDates,
  });

  const {
    dateState: dateStateEnd,
    internalValue: internalValueEnd,
    increaseActiveSegmentValue: increaseActiveSegmentValueEnd,
    decreaseActiveSegmentValue: decreaseActiveSegmentValueEnd,
    resetActiveSegmentValue: resetActiveSegmentValueEnd,
    updateDateSegment: updateDateSegmentEnd,
    updateFullDate: updateFullDateEnd,
    displayValue: displayValueEnd,
    updateDisplayedDate: updateDisplayedDateEnd,
  } = useDatePickerInternalValue(internalRangeRef.current[1] ? normalizeDate(internalRangeRef.current[1]) : null, {
    minDate,
    maxDate,
    disabledDates,
  });

  const [selectionMode, setSelectionMode] = useState<"start" | "end">("start");

  const [initialValue, setInitialValue] = useState<[Date | null, Date | null] | null>(value);

  const {
    moveToNextSegment,
    moveToPreviousSegment,
    setActiveDateSegment: setActiveSegment,
    activeDateSegment: activeSegment,
  } = useNavigateBetweenDateSegment();

  const setCurrentActiveInput = (input: DateRangeInputType) => {
    activeInputRef.current = input;
  };
  const setCurrentModifiedSegment = (segment: DateSegmentEnum | null) => {
    activeModifiedSegmentRef.current = segment;
  };

  const shouldSkipNextFocus = () => {
    return skipNextFocusRef.current;
  };

  const setShouldSkipNextFocus = (value: boolean) => {
    skipNextFocusRef.current = value;
  };

  const handleOnFocusStart = () => {
    setCurrentActiveInput(START_INPUT);
    setIsFocused(true);
    if (shouldSkipNextFocus()) {
      return;
    } else {
      selectActiveSegment(activeSegment);
    }
  };

  const handleOnFocusEnd = () => {
    setCurrentActiveInput(END_INPUT);
    setIsFocused(true);
    if (shouldSkipNextFocus()) {
      return;
    } else {
      selectActiveSegment(activeSegment);
    }
  };

  const handleOnBlur = () => {
    setActiveSegment(DAY);
    setIsFocused(false);
    setShouldSkipNextFocus(false);
    setCurrentModifiedSegment(null);
    if (hasAction && hasPendingChanges) {
      cancel();
    }
  };

  const handleOnMouseDownStart = () => {
    setCurrentActiveInput(START_INPUT);
    setShouldSkipNextFocus(true);
    setIsDropdownOpen(false);
  };

  const handleOnMouseDownEnd = () => {
    setCurrentActiveInput(END_INPUT);
    setShouldSkipNextFocus(true);
    setIsDropdownOpen(false);
  };

  const handleOnMouseUp = () => {
    const input = activeInputRef.current;
    const startInput = dateInputStartRef.current;
    const endInput = dateInputEndRef.current;
    const endIndex = 1;
    const ranges = computeDateSegmentRanges();

    const currentCursorPosition =
      input === START_INPUT ? (startInput?.selectionStart ?? 0) : (endInput?.selectionStart ?? 0);

    if (currentCursorPosition <= ranges[DAY][endIndex] + 1) {
      selectActiveSegment(DAY);
    } else if (currentCursorPosition <= ranges[MONTH][endIndex] + 1) {
      selectActiveSegment(MONTH);
    } else {
      selectActiveSegment(YEAR);
    }
    skipNextFocusRef.current = false;
  };

  const selectActiveSegment = useCallback(
    (segment: DateSegmentEnum) => {
      if (activeSegment !== segment) {
        setActiveSegment(segment);
      }
      const input = activeInputRef.current;
      const dividerLength = 3;
      const rangeStart = segment === DAY ? 0 : segment === MONTH ? 0 + 2 + dividerLength : 0 + 2 * (2 + dividerLength);
      const rangeEnd = segment === YEAR ? rangeStart + 4 : rangeStart + 2;
      waitForNextFrame(() => {
        if (input) {
          if (input === START_INPUT) {
            dateInputStartRef.current?.setSelectionRange(rangeStart, rangeEnd);
          } else {
            dateInputEndRef.current?.setSelectionRange(rangeStart, rangeEnd);
          }
        }
      });
    },
    [activeSegment, setActiveSegment],
  );

  const emitRangeChange = useCallback(
    (nextRange: [Date | null, Date | null]) => {
      if (hasAction && isDropdownOpen) {
        setHasPendingChanges(true);
      }
      const currentRange = internalRangeRef.current;
      if (areSameRange(currentRange, nextRange)) {
        return;
      }
      internalRangeRef.current = nextRange;
      setInternalRange(nextRange);
      updateDisplayedDateEnd(nextRange[1]);
      updateDisplayedDateStart(nextRange[0]);
      updateFullDateStart(nextRange[0]);
      updateFullDateEnd(nextRange[1]);

      onChangeRef.current?.(nextRange);
    },
    [
      updateDisplayedDateEnd,
      updateDisplayedDateStart,
      updateFullDateEnd,
      updateFullDateStart,
      hasAction,
      isDropdownOpen,
    ],
  );

  const handleOnChange = (date: Date | null) => {
    if (!date) return;

    if (selectionMode === "start") {
      const nextRange: [Date | null, Date | null] = [date, null];
      setSelectionMode("end");
      emitRangeChange(nextRange);
    } else {
      const [startDate] = internalRangeRef.current;

      if (startDate && date < startDate) {
        emitRangeChange([date, null]);
      } else {
        const nextRange: [Date | null, Date | null] = [startDate, date];
        emitRangeChange(nextRange);
        if (!hasAction) {
          setInitialValue(nextRange);
          validate();
        }
      }
    }
  };

  const handleOnChangeStartInput = useCallback((newDate: Date | null) => {
    const normalizedDate = newDate ? normalizeDate(newDate) : null;
    const currentRange = internalRangeRef.current;
    const nextRange: [Date | null, Date | null] = [normalizedDate, currentRange[1]];

    if (areSameRange(currentRange, nextRange)) {
      return;
    }

    internalRangeRef.current = nextRange;
    setInternalRange(nextRange);

    console.log("Emitting range change from start input", { nextRange });

    onChangeRef.current?.(nextRange);
  }, []);

  const handleOnChangeEndInput = useCallback((newDate: Date | null) => {
    const normalizedDate = newDate ? normalizeDate(newDate) : null;
    const currentRange = internalRangeRef.current;
    const nextRange: [Date | null, Date | null] = [currentRange[0], normalizedDate];

    if (areSameRange(currentRange, nextRange)) {
      return;
    }

    internalRangeRef.current = nextRange;
    setInternalRange(nextRange);

    onChangeRef.current?.(nextRange);
  }, []);

  const handleOnKeyDownInput = () => {
    selectActiveSegment(activeSegment);
  };

  const handleOnClose = () => {
    if (isDropdownOpen && hasPendingChanges && hasAction) {
      handleOnCancel();
      return;
    }
    close();
  };

  const handleOnCancel = () => {
    cancel();
    close();
  };

  const handleOnValidate = () => {
    setInitialValue(internalRange);
    updateFullDateStart(internalRange[0]);
    updateFullDateEnd(internalRange[1]);
    validate();
  };

  const validate = () => {
    onValidate?.();
    setHasPendingChanges(false);
    close();
  };

  const close = () => {
    setIsDropdownOpen(false);
    setIsFocused(false);
    setActiveSegment(DAY);
    setSelectionMode("start");
    setCurrentModifiedSegment(null);
  };

  const cancel = () => {
    const nextRange: [Date | null, Date | null] = initialValue ?? [null, null];
    internalRangeRef.current = nextRange;
    setInternalRange(nextRange);
    onChangeRef.current?.(nextRange);
    onCancel?.();
    setHasPendingChanges(false);
    updateDisplayedDateStart(nextRange[0]);
    updateDisplayedDateEnd(nextRange[1]);
    updateFullDateStart(nextRange[0]);
    updateFullDateEnd(nextRange[1]);
  };

  useEffect(() => {
    internalRangeRef.current = internalRange;
  }, [internalRange]);

  useEffect(() => {
    const nextRange: [Date | null, Date | null] = value
      ? [value[0] ? normalizeDate(value[0]) : null, value[1] ? normalizeDate(value[1]) : null]
      : [null, null];

    if (areSameRange(internalRangeRef.current, nextRange)) {
      return;
    }

    internalRangeRef.current = nextRange;
    setInternalRange(nextRange);
  }, [value]);

  useEffect(() => {
    selectActiveSegment(activeSegment);
  }, [activeSegment, selectActiveSegment]);

  useEffect(() => {
    if (isDropdownOpen) {
      if (value && value[0] && !value[1]) {
        setSelectionMode("end");
      }
    }
  }, [isDropdownOpen, value, updateDisplayedDateEnd, updateDisplayedDateStart]);

  return (
    <div className={styles["date-range-picker"]}>
      <Label id={groupLabelId} label={label} required={required} showLabelRequirement={showLabelRequirement} />
      <BaseDropdown
        style={{ width: inputsRef.current?.offsetWidth }}
        isList={false}
        isOpen={isDropdownOpen}
        onClose={handleOnClose}
        offset={8}
        hasMaxWidth={false}
        trigger={
          <div
            className={styles["date-range-picker-inputs"]}
            ref={inputsRef}
            role="group"
            aria-labelledby={groupLabelId}
          >
            <span id={startInputLabelId} className={styles["visually-hidden"]}>
              Date de debut
            </span>
            <DateRangeInput
              id={`${id}-start-input`}
              pickerInputRef={dateInputStartRef}
              isFocused={isFocused}
              onKeyDown={handleOnKeyDownInput}
              onMouseDown={handleOnMouseDownStart}
              onMouseUp={handleOnMouseUp}
              onFocus={handleOnFocusStart}
              onBlur={handleOnBlur}
              value={internalValueStart ?? null}
              moveToNextSegment={moveToNextSegment}
              moveToPreviousSegment={moveToPreviousSegment}
              onChange={handleOnChangeStartInput}
              activeSegment={activeSegment}
              onOpenPicker={() => {
                setIsDropdownOpen(!isDropdownOpen);
                setSelectionMode("start");
                activeInputRef.current = START_INPUT;
              }}
              minDate={minDate}
              maxDate={maxDate}
              disabledDates={disabledDates}
              disabled={disabled}
              dateState={dateStateStart}
              internalValue={internalValueStart}
              increaseActiveSegmentValue={increaseActiveSegmentValueStart}
              decreaseActiveSegmentValue={decreaseActiveSegmentValueStart}
              resetActiveSegmentValue={resetActiveSegmentValueStart}
              updateDateSegment={updateDateSegmentStart}
              updateFullDate={updateFullDateStart}
              displayValue={displayValueStart}
              ariaLabelledBy={startInputAriaLabelledBy}
              ariaDescribedBy={inputAriaDescribedBy}
              openButtonAriaLabel="Ouvrir le sélecteur de date de début"
              isError={isError}
              readonly={readonly}
            />
            <Icon name="arrow-double-right" size={20} />
            <span id={endInputLabelId} className={styles["visually-hidden"]}>
              Date de fin
            </span>
            <DateRangeInput
              id={`${id}-end-input`}
              pickerInputRef={dateInputEndRef}
              isFocused={isFocused}
              onKeyDown={handleOnKeyDownInput}
              onMouseDown={handleOnMouseDownEnd}
              onMouseUp={handleOnMouseUp}
              onFocus={handleOnFocusEnd}
              onBlur={handleOnBlur}
              value={internalValueEnd ?? null}
              moveToNextSegment={moveToNextSegment}
              moveToPreviousSegment={moveToPreviousSegment}
              onChange={handleOnChangeEndInput}
              activeSegment={activeSegment}
              onOpenPicker={() => {
                setIsDropdownOpen(!isDropdownOpen);
                activeInputRef.current = END_INPUT;
                setSelectionMode("end");
              }}
              minDate={minDate}
              maxDate={maxDate}
              disabledDates={disabledDates}
              disabled={disabled}
              dateState={dateStateEnd}
              internalValue={internalValueEnd}
              increaseActiveSegmentValue={increaseActiveSegmentValueEnd}
              decreaseActiveSegmentValue={decreaseActiveSegmentValueEnd}
              resetActiveSegmentValue={resetActiveSegmentValueEnd}
              updateDateSegment={updateDateSegmentEnd}
              updateFullDate={updateFullDateEnd}
              displayValue={displayValueEnd}
              ariaLabelledBy={endInputAriaLabelledBy}
              ariaDescribedBy={inputAriaDescribedBy}
              openButtonAriaLabel="Ouvrir le sélecteur de date de fin"
              isError={isError}
              readonly={readonly}
            />
          </div>
        }
        position="bottom"
      >
        <DateRangePickerMenu
          onValidate={handleOnValidate}
          onCancel={handleOnCancel}
          minDate={minDate}
          maxDate={maxDate}
          disabledDates={disabledDates}
          isOpen={isDropdownOpen}
          currentValue={internalRange}
          onChange={handleOnChange}
          hasAction={hasAction}
          selectionMode={selectionMode}
          setInitialValue={(date) => setInitialValue(date)}
        />
      </BaseDropdown>
      {shouldDisplayAssistiveText && (
        <div id={assistiveTextId}>
          <AssistiveText
            label={assistiveTextLabel}
            appearance={isError ? "error" : assistiveAppearance}
            showIcon={showAssistiveIcon}
            href={assistiveTextLink}
          />
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
