import { expect, userEvent, waitFor, within } from "@storybook/test";

export const calendarTriggerAccessibleName = /ouvrir le calendrier|changer la date/i;

export function normalizedSegmentedDateText(root: Element | null | undefined): string {
  return (root?.textContent ?? "").replace(/[\s\u200b]/g, "");
}

export function dayCellVisibleLabelText(cell: Element): string {
  return cell.querySelector(".day-cell__label")?.textContent?.trim() ?? "";
}

export type DayGridMonthRelation = "current-month" | "leading-or-trailing";

export function findDayGridCellButton(
  overlay: HTMLElement,
  dayOfMonth: number,
  relation: DayGridMonthRelation,
): HTMLButtonElement | null {
  const dayString = String(dayOfMonth);
  for (const cell of Array.from(overlay.querySelectorAll(".rte-datepicker-day-grid .day-cell"))) {
    if (dayCellVisibleLabelText(cell) !== dayString) {
      continue;
    }
    const cellType = cell.getAttribute("data-cell-type");
    const isAdjacentMonth = cellType === "prev/next";
    if (relation === "leading-or-trailing" && isAdjacentMonth) {
      return cell as HTMLButtonElement;
    }
    if (relation === "current-month" && !isAdjacentMonth) {
      return cell as HTMLButtonElement;
    }
  }
  return null;
}

export function dayCellButtonJune2024(overlay: HTMLElement, dayOfMonth: number): HTMLButtonElement | null {
  const header = dayGridMonthHeaderText(overlay);
  expect(header.toLowerCase()).toMatch(/juin/i);
  expect(header).toContain("2024");
  return findDayGridCellButton(overlay, dayOfMonth, "current-month");
}

export function dayGridMonthHeaderText(overlay: HTMLElement): string {
  const header = overlay.querySelector('[data-datepicker-tab="month-label"]') as HTMLElement | null;
  return header?.textContent ?? "";
}

export function activeDayCellLabelText(overlay: HTMLElement): string {
  const cell = overlay.querySelector(
    '.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])',
  ) as HTMLButtonElement | null;
  return cell?.textContent?.trim() ?? "";
}

export async function focusActiveDayCellForArrowNavigation(overlay: HTMLElement): Promise<void> {
  await waitFor(() => {
    const cell = overlay.querySelector(
      '.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])',
    ) as HTMLButtonElement | null;
    expect(cell).toBeTruthy();
    cell!.focus();
    expect(cell).toHaveFocus();
  });
}

export async function focusActiveMonthCellForArrowNavigation(overlay: HTMLElement): Promise<void> {
  await waitFor(() => {
    const cell = overlay.querySelector(
      "rte-datepicker-menu .month-cell[data-datepicker-active='true']:not([disabled])",
    ) as HTMLButtonElement | null;
    expect(cell).toBeTruthy();
    cell!.focus();
    expect(cell).toHaveFocus();
  });
}

export async function arrowRightUntilMonthHeaderMatches(overlay: HTMLElement, monthPattern: RegExp): Promise<void> {
  for (let step = 0; step < 60; step++) {
    if (monthPattern.test(dayGridMonthHeaderText(overlay))) {
      return;
    }
    await focusActiveDayCellForArrowNavigation(overlay);
    await userEvent.keyboard("{ArrowRight}");
  }
  throw new globalThis.Error(`Month header did not match ${monthPattern} within the step budget.`);
}

export async function arrowLeftUntilMonthHeaderMatches(overlay: HTMLElement, monthPattern: RegExp): Promise<void> {
  for (let step = 0; step < 60; step++) {
    if (monthPattern.test(dayGridMonthHeaderText(overlay))) {
      return;
    }
    await focusActiveDayCellForArrowNavigation(overlay);
    await userEvent.keyboard("{ArrowLeft}");
  }
  throw new globalThis.Error(`Month header did not match ${monthPattern} within the step budget.`);
}

export async function typeJuneFifteen2024(canvasElement: HTMLElement): Promise<void> {
  await typeSegmentedDdMmYyyyDigits(canvasElement, "15062024", ["15", "2024"]);
}

export async function typeSegmentedDdMmYyyyDigitsIn(
  hostElement: HTMLElement,
  digits: string,
  compactMustContain: string[],
): Promise<void> {
  const canvas = within(hostElement);
  const field = canvas.getByRole("group");
  await userEvent.click(field);
  field.focus();
  await userEvent.paste(digits);
  await waitFor(
    () => {
      const segmented = hostElement.querySelector(".segmented-date-field");
      const compact = normalizedSegmentedDateText(segmented);
      for (const fragment of compactMustContain) {
        expect(compact).toContain(fragment);
      }
    },
    { timeout: 5000 },
  );
}

export async function typeSegmentedDdMmYyyyDigits(
  canvasElement: HTMLElement,
  digits: string,
  compactMustContain: string[],
): Promise<void> {
  await typeSegmentedDdMmYyyyDigitsIn(canvasElement, digits, compactMustContain);
}

export async function ensureDatepickerMenuClosed(): Promise<void> {
  const menuInDom = () => document.getElementById("overlay-root")?.querySelector("rte-datepicker-menu");
  if (!menuInDom()) {
    return;
  }
  await userEvent.keyboard("{Escape}");
  await waitFor(() => {
    expect(document.getElementById("overlay-root")?.querySelector("rte-datepicker-menu")).not.toBeInTheDocument();
  });
}

async function clickDatepickerCalendarTriggerIn(hostElement: HTMLElement): Promise<void> {
  const iconButtonHost = within(hostElement).getByTestId("right-icon");
  const triggerButton = iconButtonHost.querySelector("button");
  expect(triggerButton).toBeTruthy();
  await userEvent.click(triggerButton!);
}

export async function openDayPickerOverlay(canvasElement: HTMLElement): Promise<HTMLElement> {
  return openDayPickerOverlayIn(canvasElement);
}

export async function openDayPickerOverlayIn(hostElement: HTMLElement): Promise<HTMLElement> {
  await clickDatepickerCalendarTriggerIn(hostElement);
  await waitFor(
    () => {
      const menu = document.getElementById("overlay-root")?.querySelector("rte-datepicker-menu");
      expect(menu).not.toBeNull();
    },
    { timeout: 5000 },
  );
  return document.getElementById("overlay-root") as HTMLElement;
}

export async function typeJuneFifteenAndOpenDayGridOverlayIn(hostElement: HTMLElement): Promise<HTMLElement> {
  await typeSegmentedDdMmYyyyDigitsIn(hostElement, "15062024", ["15", "2024"]);
  return openDayPickerOverlayIn(hostElement);
}

export async function typeJuneFifteenAndOpenDayGridOverlay(canvasElement: HTMLElement): Promise<HTMLElement> {
  await typeJuneFifteen2024(canvasElement);
  return openDayPickerOverlay(canvasElement);
}

export async function openMonthGridOverlay(canvasElement: HTMLElement): Promise<HTMLElement> {
  await clickDatepickerCalendarTriggerIn(canvasElement);
  await waitFor(
    () => {
      const menu = document.getElementById("overlay-root")?.querySelector("rte-datepicker-menu");
      expect(menu).not.toBeNull();
    },
    { timeout: 5000 },
  );
  const overlay = document.getElementById("overlay-root") as HTMLElement;
  const dayHeaderLabel = overlay.querySelector('[data-datepicker-tab="month-label"]') as HTMLButtonElement | null;
  expect(dayHeaderLabel).toBeTruthy();
  await userEvent.click(dayHeaderLabel!);
  await waitFor(() => {
    expect(overlay.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument();
  });
  return overlay;
}

export async function openYearGridOverlay(canvasElement: HTMLElement): Promise<HTMLElement> {
  const overlay = await openMonthGridOverlay(canvasElement);
  const monthHeaderLabel = overlay.querySelector('[data-datepicker-tab="month-label"]') as HTMLButtonElement | null;
  expect(monthHeaderLabel).toBeTruthy();
  await userEvent.click(monthHeaderLabel!);
  await waitFor(() => {
    expect(overlay.querySelector(".rte-datepicker-year-grid")).toBeInTheDocument();
  });
  return overlay;
}

export type MonthGridKeyboardScenario = {
  typedDigits: string;
  segmentedWaitContains: string[];
  activeMonthBeforeKey: RegExp;
  key: "{ArrowLeft}" | "{ArrowRight}" | "{ArrowUp}";
  expectHeaderYear: string;
  expectActiveMonthAfter: RegExp;
  segmentedFinalContains: string[];
};

function dispatchBubblingKeyDownOnMonthGridScenarioKey(
  target: Element,
  scenarioKey: MonthGridKeyboardScenario["key"],
): void {
  const keyByScenario: Record<MonthGridKeyboardScenario["key"], string> = {
    "{ArrowLeft}": "ArrowLeft",
    "{ArrowRight}": "ArrowRight",
    "{ArrowUp}": "ArrowUp",
  };
  const key = keyByScenario[scenarioKey];
  target.dispatchEvent(new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true }));
}

export async function playMonthGridKeyboardScenario(
  canvasElement: HTMLElement,
  scenario: MonthGridKeyboardScenario,
): Promise<void> {
  await typeSegmentedDdMmYyyyDigits(canvasElement, scenario.typedDigits, scenario.segmentedWaitContains);
  const overlay = await openMonthGridOverlay(canvasElement);
  await focusActiveMonthCellForArrowNavigation(overlay);
  await waitFor(() => {
    const active = overlay.querySelector(
      "rte-datepicker-menu .month-cell[data-datepicker-active='true']",
    ) as HTMLElement | null;
    expect(active?.textContent ?? "").toMatch(scenario.activeMonthBeforeKey);
  });

  const activeMonthCell = overlay.querySelector(
    "rte-datepicker-menu .month-cell[data-datepicker-active='true']:not([disabled])",
  ) as HTMLElement | null;
  expect(activeMonthCell).toBeTruthy();
  dispatchBubblingKeyDownOnMonthGridScenarioKey(activeMonthCell!, scenario.key);

  await waitFor(() => {
    const yearHeader = overlay.querySelector('[data-datepicker-tab="month-label"]') as HTMLElement | null;
    expect(yearHeader?.textContent ?? "").toContain(scenario.expectHeaderYear);
    const active = overlay.querySelector(
      "rte-datepicker-menu .month-cell[data-datepicker-active='true']",
    ) as HTMLElement | null;
    expect(active?.textContent ?? "").toMatch(scenario.expectActiveMonthAfter);
  });

  const segmentedAfter = canvasElement.querySelector(".segmented-date-field");
  const compactAfter = normalizedSegmentedDateText(segmentedAfter);
  for (const fragment of scenario.segmentedFinalContains) {
    expect(compactAfter).toContain(fragment);
  }
}

export type YearGridKeyboardScenario = {
  typedDigits: string;
  segmentedWaitContains: string[];
  initialDecadePattern: RegExp;
  targetYearLabel: RegExp;
  key: "{ArrowLeft}" | "{ArrowRight}";
  expectDecadeAfterPattern: RegExp;
  expectActiveYearTrimmed: string;
};

function dispatchBubblingKeyDownOnYearGridScenarioKey(
  target: Element,
  scenarioKey: YearGridKeyboardScenario["key"],
): void {
  const keyByScenario: Record<YearGridKeyboardScenario["key"], string> = {
    "{ArrowLeft}": "ArrowLeft",
    "{ArrowRight}": "ArrowRight",
  };
  const key = keyByScenario[scenarioKey];
  target.dispatchEvent(new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true }));
}

export async function playYearGridKeyboardScenario(
  canvasElement: HTMLElement,
  scenario: YearGridKeyboardScenario,
): Promise<void> {
  await typeSegmentedDdMmYyyyDigits(canvasElement, scenario.typedDigits, scenario.segmentedWaitContains);
  const overlay = await openYearGridOverlay(canvasElement);
  await waitFor(() => {
    const rangeLabel = overlay.querySelector(".month-label-static") as HTMLElement | null;
    expect(rangeLabel?.textContent ?? "").toMatch(scenario.initialDecadePattern);
  });

  const yearCell = Array.from(overlay.querySelectorAll("rte-datepicker-menu .year-cell")).find((button) =>
    scenario.targetYearLabel.test((button.textContent ?? "").trim()),
  ) as HTMLButtonElement | undefined;
  expect(yearCell).toBeTruthy();
  yearCell!.focus();
  await waitFor(() => {
    expect(yearCell).toHaveFocus();
  });

  dispatchBubblingKeyDownOnYearGridScenarioKey(yearCell!, scenario.key);

  await waitFor(() => {
    const rangeLabel = overlay.querySelector(".month-label-static") as HTMLElement | null;
    expect(rangeLabel?.textContent ?? "").toMatch(scenario.expectDecadeAfterPattern);
    const active = overlay.querySelector(
      "rte-datepicker-menu .year-cell[data-datepicker-active='true']",
    ) as HTMLElement | null;
    expect((active?.textContent ?? "").trim()).toBe(scenario.expectActiveYearTrimmed);
  });

  const segmentedAfter = canvasElement.querySelector(".segmented-date-field");
  expect(normalizedSegmentedDateText(segmentedAfter)).toContain("2024");
}

export type DayGridOpenAfterTypingScenario = {
  digits: string;
  waitContains: string[];
  assertHeader?: (overlay: HTMLElement) => void;
};

export async function openDayGridAfterTyping(
  canvasElement: HTMLElement,
  scenario: DayGridOpenAfterTypingScenario,
): Promise<HTMLElement> {
  await typeSegmentedDdMmYyyyDigits(canvasElement, scenario.digits, scenario.waitContains);
  const overlay = await openDayPickerOverlay(canvasElement);
  scenario.assertHeader?.(overlay);
  return overlay;
}
