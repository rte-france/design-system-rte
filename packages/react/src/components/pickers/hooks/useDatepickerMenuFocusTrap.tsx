import {
  collectDatepickerMenuTabOrder,
  DateSegmentEnum,
  getDatepickerMenuInitialFocusIndex,
  TAB_KEY,
  waitForNextFrame,
  type DatepickerCalendarType,
} from "@design-system-rte/core";
import { useEffect, type RefObject } from "react";

const DATEPICKER_MENU_GRID_SELECTORS = {
  dayGrid: ".rte-datepicker-day-grid",
  dayCell: ".day-cell",
  monthGrid: ".rte-datepicker-month-grid",
  monthCell: ".month-cell",
  yearGrid: ".rte-datepicker-year-grid",
  yearCell: ".year-cell",
  activeCell: '[data-datepicker-active="true"]',
  notDisabled: ":not([disabled])",
} as const;

const DATE_SEGMENT_TO_CALENDAR_TYPE: Record<DateSegmentEnum, DatepickerCalendarType> = {
  [DateSegmentEnum.DAY]: "day",
  [DateSegmentEnum.MONTH]: "month",
  [DateSegmentEnum.YEAR]: "year",
};

function buildActiveDatepickerCellSelector(calendarType: DatepickerCalendarType): string {
  const { dayGrid, dayCell, monthGrid, monthCell, yearGrid, yearCell, activeCell, notDisabled } =
    DATEPICKER_MENU_GRID_SELECTORS;
  if (calendarType === "day") {
    return `${dayGrid} ${dayCell}${activeCell}${notDisabled}`;
  }
  if (calendarType === "month") {
    return `${monthGrid} ${monthCell}${activeCell}${notDisabled}`;
  }
  return `${yearGrid} ${yearCell}${activeCell}${notDisabled}`;
}

function getNextIndexInOrderedCycle(parameters: {
  currentIndex: number;
  focusableLength: number;
  shiftKey: boolean;
}): number {
  const { currentIndex, focusableLength, shiftKey } = parameters;
  if (shiftKey) {
    if (currentIndex === 0) {
      return focusableLength - 1;
    }
    return currentIndex - 1;
  }
  if (currentIndex === focusableLength - 1) {
    return 0;
  }
  return currentIndex + 1;
}

function findIndexInOrderedFocusables(focusable: HTMLElement[], activeElement: HTMLElement | null): number {
  if (!activeElement) {
    return -1;
  }

  let node: HTMLElement | null = activeElement;
  while (node) {
    const index = focusable.indexOf(node);
    if (index !== -1) {
      return index;
    }
    node = node.parentElement;
  }

  return -1;
}

export const DATEPICKER_KEYBOARD_ORDER_TAB_INDEX = -1;

export const useDatepickerMenuFocusTrap = (
  containerRef: RefObject<HTMLElement | null>,
  isOpen: boolean,
  calendarType: DateSegmentEnum,
) => {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    let cancelled = false;
    let cancelWaitForNextFrame: (() => void) | undefined;
    let removeKeyListener: (() => void) | undefined;
    let pendingAttachFrameId = 0;

    const datepickerCalendarType = DATE_SEGMENT_TO_CALENDAR_TYPE[calendarType];

    const resolveContainer = (): HTMLElement | null => {
      return containerRef.current;
    };

    const getActiveCell = (container: HTMLElement): HTMLElement | null => {
      return container.querySelector(buildActiveDatepickerCellSelector(datepickerCalendarType)) as HTMLElement | null;
    };

    const getOrderedFocusables = (container: HTMLElement): HTMLElement[] => {
      return collectDatepickerMenuTabOrder(container, datepickerCalendarType, getActiveCell(container)).filter(
        (element) => element.isConnected,
      );
    };

    const focusInitialElement = (container: HTMLElement): void => {
      const orderedFocusables = getOrderedFocusables(container);
      if (orderedFocusables.length === 0) {
        return;
      }
      const initialFocusIndex = getDatepickerMenuInitialFocusIndex(
        datepickerCalendarType,
        orderedFocusables,
        getActiveCell(container),
      );
      const safeIndex = Math.min(Math.max(initialFocusIndex, 0), orderedFocusables.length - 1);
      orderedFocusables[safeIndex]?.focus({ preventScroll: true });
    };

    const handleTabKeyDown = (event: KeyboardEvent): void => {
      if (event.key !== TAB_KEY) {
        return;
      }

      const container = resolveContainer();
      if (!container) {
        return;
      }

      const focusable = getOrderedFocusables(container);
      if (focusable.length === 0) {
        return;
      }

      const currentIndex = findIndexInOrderedFocusables(focusable, document.activeElement as HTMLElement | null);
      if (currentIndex === -1) {
        event.preventDefault();
        focusable[0]?.focus({ preventScroll: true });
        return;
      }

      event.preventDefault();
      const nextIndex = getNextIndexInOrderedCycle({
        currentIndex,
        focusableLength: focusable.length,
        shiftKey: event.shiftKey,
      });
      focusable[nextIndex]?.focus({ preventScroll: true });
    };

    const attachTrap = (): void => {
      const container = resolveContainer();
      if (!container) {
        pendingAttachFrameId = requestAnimationFrame(() => {
          if (!cancelled) {
            attachTrap();
          }
        });
        return;
      }

      container.addEventListener("keydown", handleTabKeyDown, true);
      removeKeyListener = () => {
        container.removeEventListener("keydown", handleTabKeyDown, true);
      };

      cancelWaitForNextFrame = waitForNextFrame(() => {
        if (!cancelled) {
          focusInitialElement(container);
        }
      });
    };

    attachTrap();

    return () => {
      cancelled = true;
      cancelAnimationFrame(pendingAttachFrameId);
      cancelWaitForNextFrame?.();
      removeKeyListener?.();
    };
  }, [containerRef, isOpen, calendarType]);
};
