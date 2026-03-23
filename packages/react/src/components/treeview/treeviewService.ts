import {
  ARROW_DOWN_KEY,
  ARROW_KEYS,
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY,
  ARROW_UP_KEY,
  findFocusedPosition,
  getNextFocusTarget,
  getVisibleFocusableRows,
  isTreeviewFocusable,
  resetMovingTabIndex,
  setMovingTabindex,
} from "@design-system-rte/core";

export const onKeyDown = (event: KeyboardEvent, treeElement: HTMLElement): void => {
  if (event.altKey || event.ctrlKey || event.metaKey) {
    return;
  }

  if (ARROW_KEYS.includes(event.key)) {
    handleArrowKey(treeElement, event);
  }
};

const handleArrowKey = (treeElement: HTMLElement, event: KeyboardEvent): void => {
  const target = event.target as HTMLElement;
  if (!treeElement.contains(target)) {
    return;
  }

  if (!isTreeviewFocusable(target)) {
    return;
  }

  const rows = getVisibleFocusableRows(treeElement);
  if (rows.length === 0) {
    return;
  }

  const position = findFocusedPosition(rows, target);
  if (position.rowIndex === -1 || position.focusableIndex === -1) {
    return;
  }

  if ([ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key)) {
    const direction = event.key === ARROW_UP_KEY ? (-1 as const) : (1 as const);
    const nextTarget = getNextFocusTarget(rows, position, direction, true);

    if (nextTarget) {
      const element = rows[nextTarget.rowIndex].focusables[nextTarget.focusableIndex];
      event.preventDefault();
      setMovingTabindex(treeElement, element);
      element.focus();
    } else {
      event.preventDefault();
    }
    return;
  }

  if ([ARROW_LEFT_KEY, ARROW_RIGHT_KEY].includes(event.key)) {
    const direction = event.key === ARROW_LEFT_KEY ? (-1 as const) : (1 as const);
    const nextTarget = getNextFocusTarget(rows, position, direction, false);

    if (nextTarget) {
      const element = rows[nextTarget.rowIndex].focusables[nextTarget.focusableIndex];
      event.preventDefault();
      setMovingTabindex(treeElement, element);
      element.focus();
    } else {
      event.preventDefault();
    }
  }
};

export const onFocusIn = (treeElement: HTMLElement, event: FocusEvent): void => {
  const target = event.target as HTMLElement;
  if (treeElement.contains(target) && isTreeviewFocusable(target)) {
    setMovingTabindex(treeElement, target);
  }
};

export const onFocusOut = (treeElement: HTMLElement, event: FocusEvent): void => {
  const relatedTarget = event.relatedTarget as HTMLElement | null;
  if (relatedTarget && treeElement.contains(relatedTarget)) {
    return;
  }

  resetMovingTabIndex(treeElement);
};

export const initialize = (treeElement: HTMLElement): void => {
  resetMovingTabIndex(treeElement);
};
