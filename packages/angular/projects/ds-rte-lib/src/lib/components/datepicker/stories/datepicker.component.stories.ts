import type { Meta, StoryObj } from "@storybook/angular";
import { expect, userEvent, waitFor, within } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../../../../.storybook/testing/testing.utils";
import { DatepickerComponent } from "../datepicker.component";

const calendarTriggerAccessibleName = /ouvrir le calendrier|changer la date/i;

function normalizedSegmentedDateText(root: Element | null | undefined): string {
  return (root?.textContent ?? "").replace(/[\s\u200b]/g, "");
}

function dayCellMatchingAriaLabel(overlay: HTMLElement, labelPattern: RegExp): HTMLButtonElement | null {
  for (const cell of Array.from(overlay.querySelectorAll(".rte-datepicker-day-grid .day-cell"))) {
    const label = cell.getAttribute("aria-label");
    if (label && labelPattern.test(label)) {
      return cell as HTMLButtonElement;
    }
  }
  return null;
}

function dayCellButtonJune2024(overlay: HTMLElement, dayOfMonth: number): HTMLButtonElement | null {
  const pattern = new RegExp(`\\b${dayOfMonth}\\s+juin\\s+2024`, "i");
  for (const cell of Array.from(overlay.querySelectorAll(".rte-datepicker-day-grid .day-cell"))) {
    const label = cell.getAttribute("aria-label");
    if (label && pattern.test(label)) {
      return cell as HTMLButtonElement;
    }
  }
  return null;
}

function dayGridMonthHeaderText(overlay: HTMLElement): string {
  const header = overlay.querySelector('[data-datepicker-tab="month-label"]') as HTMLElement | null;
  return header?.textContent ?? "";
}

function activeDayCellLabelText(overlay: HTMLElement): string {
  const cell = overlay.querySelector(
    '.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])',
  ) as HTMLButtonElement | null;
  return cell?.textContent?.trim() ?? "";
}

async function focusActiveDayCellForArrowNavigation(overlay: HTMLElement): Promise<void> {
  await waitFor(() => {
    const cell = overlay.querySelector(
      '.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])',
    ) as HTMLButtonElement | null;
    expect(cell).toBeTruthy();
    cell!.focus();
    expect(cell).toHaveFocus();
  });
}

async function arrowRightUntilMonthHeaderMatches(overlay: HTMLElement, monthPattern: RegExp): Promise<void> {
  for (let step = 0; step < 60; step++) {
    if (monthPattern.test(dayGridMonthHeaderText(overlay))) {
      return;
    }
    await focusActiveDayCellForArrowNavigation(overlay);
    await userEvent.keyboard("{ArrowRight}");
  }
  throw new globalThis.Error(`Month header did not match ${monthPattern} within the step budget.`);
}

async function arrowLeftUntilMonthHeaderMatches(overlay: HTMLElement, monthPattern: RegExp): Promise<void> {
  for (let step = 0; step < 60; step++) {
    if (monthPattern.test(dayGridMonthHeaderText(overlay))) {
      return;
    }
    await focusActiveDayCellForArrowNavigation(overlay);
    await userEvent.keyboard("{ArrowLeft}");
  }
  throw new globalThis.Error(`Month header did not match ${monthPattern} within the step budget.`);
}

async function typeJuneFifteen2024(canvasElement: HTMLElement): Promise<void> {
  const canvas = within(canvasElement);
  const field = canvas.getByRole("group");
  await userEvent.click(field);
  field.focus();
  for (const digit of "15062024") {
    await userEvent.keyboard(digit);
  }
  await waitFor(
    () => {
      const segmented = canvasElement.querySelector(".segmented-date-field");
      const compact = normalizedSegmentedDateText(segmented);
      expect(compact).toContain("15");
      expect(compact).toContain("2024");
    },
    { timeout: 5000 },
  );
}

const meta: Meta<DatepickerComponent> = {
  title: "Composants/Datepicker/Datepicker",
  component: DatepickerComponent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Single-date Datepicker with a segmented DD/MM/YYYY field (MUI-style blocks). Default story `locale` is `fr-FR` (French labels in the overlay and calendar button names in interaction tests).\n\nField: focus lands on the day block; Left/Right move between day, month, and year; digits apply to the active section even when earlier sections are empty (out-of-order editing, aligned with MUI Date Field–style sections); Backspace/Delete clear the whole active section (placeholders DD, MM, YYYY); Up/Down apply defaults (day/month → 1, year → current year; Down on day uses last day of month when month/year are known, else 31). Incomplete segments are left-padded with zeros when moving to another segment or leaving the field (day/month to two digits, year to four); segments that stay invalid after padding are cleared. While typing, partial segments are shown with the same leading-zero padding (e.g. day `1` appears as `01`, month `3` as `03`).\n\nCalendar: opening while the text is not a valid complete date resets the view to the current month and picks an initial day via the same rules as an empty field.\n\nHandoff note for React:\n- Keep the same state model: `isOpen`, `calendarType` (`day|month|year`), `viewDate`, `selectedDate`, `pendingDate`.\n- Display format is fixed to DD/MM/YYYY.\n- Keyboard behavior for the overlay grid follows W3C APG datepicker dialog guidance (arrows move, Enter/Space select) and ESC closes.",
      },
    },
  },
  argTypes: {
    interactionState: {
      control: "select",
      options: ["enabled", "hover", "activeInput", "activeMenu", "error", "disabled", "readOnly"],
    },
    labelPosition: { control: "select", options: ["top", "side"] },
    valueChange: { action: "value changed" },
    openedChange: { action: "opened changed" },
  },
  args: {
    id: "datepicker",
    hasLabel: true,
    labelText: "Label",
    labelPosition: "top",
    interactionState: "enabled",
    isRequiredOptional: false,
    required: false,
    showLabelRequirement: false,
    hasAssistiveText: false,
    assistiveTextLabel: "",
    assistiveTextAppearance: "description",
    showAssistiveIcon: false,
    locale: "fr-FR",
    disabledDates: [],
    hasActions: true,
  },
};

export default meta;
type Story = StoryObj<DatepickerComponent>;

const datepickerStoryInnerTemplate = `
        <rte-datepicker
          [id]="id"
          [hasLabel]="hasLabel"
          [labelText]="labelText"
          [labelPosition]="labelPosition"
          [interactionState]="interactionState"
          [isRequiredOptional]="isRequiredOptional"
          [required]="required"
          [showLabelRequirement]="showLabelRequirement"
          [hasAssistiveText]="hasAssistiveText"
          [assistiveTextLabel]="assistiveTextLabel"
          [assistiveTextAppearance]="assistiveTextAppearance"
          [showAssistiveIcon]="showAssistiveIcon"
          [minDate]="minDate"
          [maxDate]="maxDate"
          [locale]="locale"
          [disabledDates]="disabledDates"
          [hasActions]="hasActions"
          (valueChange)="valueChange($event)"
          (openedChange)="openedChange($event)"
        />`;

export const Default: Story = {
  render: (args) => ({
    props: { ...args },
    template: `
      <div style="width: 500px">
        ${datepickerStoryInnerTemplate}
      </div>
    `,
  }),
};

export const CalendarChromeFigmaLayout: Story = {
  name: "Calendar chrome: Figma layout (header, weekdays, actions)",
  parameters: {
    docs: {
      description: {
        story:
          "Open the calendar to verify [DSR-212](https://www.figma.com/design/LT6IgkMTd2mNThuHeT6GHE/DSR-212---Date-Picker--single---Myriam-?node-id=13717-4347): **Heading XS** for the month title; **single-letter** weekday labels (locale-aware); **full-width** divider under the weekday row; nav **icon buttons** neutral, size **s**, **filled** icons; **Annuler** / **Confirmer** as **transparent** buttons size **s** (brand text); menu surface with **neutral shadow 2** and subtle border.",
      },
    },
  },
  render: Default.render,
};

export const LayoutMinWidth248: Story = {
  name: "Layout: 248px column (minimum width)",
  render: (args) => ({
    props: { ...args },
    template: `
      <div style="width: 248px">
        ${datepickerStoryInnerTemplate}
      </div>
    `,
  }),
};

export const LayoutWidth400: Story = {
  name: "Layout: 400px column",
  render: (args) => ({
    props: { ...args },
    template: `
      <div style="width: 400px">
        ${datepickerStoryInnerTemplate}
      </div>
    `,
  }),
};

export const LayoutFullWidthInWideParent: Story = {
  name: "Layout: full width in wide container",
  render: (args) => ({
    props: { ...args },
    template: `
      <div style="width: 100%; max-width: 720px">
        ${datepickerStoryInnerTemplate}
      </div>
    `,
  }),
};

export const Error: Story = {
  args: {
    ...Default.args,
    interactionState: "error",
    hasAssistiveText: true,
    assistiveTextLabel: "Error message",
    assistiveTextAppearance: "error",
    showAssistiveIcon: true,
  },
  render: Default.render,
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    interactionState: "disabled",
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvasElement.querySelector(".segmented-date-field") as HTMLElement | null;
    expect(field).toBeInTheDocument();
    expect(field).toHaveAttribute("tabindex", "-1");
    focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    await userEvent.tab();
    expect(canvas.queryByTestId("right-icon")).toBeInTheDocument();
  },
};

export const MinDateDisablesEarlierDays: Story = {
  name: "minDate: days before the bound are disabled",
  parameters: {
    docs: {
      description: {
        story:
          "With `minDate` set to 15 June 2024, the June 2024 calendar disables days before the 15th (e.g. the 10th) and leaves the 15th selectable.",
      },
    },
  },
  args: {
    ...Default.args,
    minDate: new Date(2024, 5, 15),
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await typeJuneFifteen2024(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: calendarTriggerAccessibleName }));

    await waitFor(() => {
      const overlay = document.getElementById("overlay-root");
      expect(overlay?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;
    const day10 = dayCellButtonJune2024(overlay, 10);
    const day15 = dayCellButtonJune2024(overlay, 15);
    expect(day10).toBeTruthy();
    expect(day10).toBeDisabled();
    expect(day15).toBeTruthy();
    expect(day15).not.toBeDisabled();
  },
};

export const MaxDateDisablesLaterDays: Story = {
  name: "maxDate: days after the bound are disabled",
  parameters: {
    docs: {
      description: {
        story:
          "With `maxDate` set to 25 June 2024, the June 2024 calendar disables days after the 25th (e.g. the 30th) and leaves the 25th selectable.",
      },
    },
  },
  args: {
    ...Default.args,
    maxDate: new Date(2024, 5, 25),
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await typeJuneFifteen2024(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: calendarTriggerAccessibleName }));

    await waitFor(() => {
      const overlay = document.getElementById("overlay-root");
      expect(overlay?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;
    const day25 = dayCellButtonJune2024(overlay, 25);
    const day30 = dayCellButtonJune2024(overlay, 30);
    expect(day25).toBeTruthy();
    expect(day25).not.toBeDisabled();
    expect(day30).toBeTruthy();
    expect(day30).toBeDisabled();
  },
};

export const MinMaxDateClipsRange: Story = {
  name: "minDate + maxDate: bounded range in June 2024",
  parameters: {
    docs: {
      description: {
        story:
          "Between 15 and 25 June 2024: days before the 15th and after the 25th are disabled; a mid-range day (e.g. the 20th) stays enabled.",
      },
    },
  },
  args: {
    ...Default.args,
    minDate: new Date(2024, 5, 15),
    maxDate: new Date(2024, 5, 25),
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await typeJuneFifteen2024(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: calendarTriggerAccessibleName }));

    await waitFor(() => {
      const overlay = document.getElementById("overlay-root");
      expect(overlay?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;
    const day10 = dayCellButtonJune2024(overlay, 10);
    const day20 = dayCellButtonJune2024(overlay, 20);
    const day30 = dayCellButtonJune2024(overlay, 30);
    expect(day10).toBeTruthy();
    expect(day10).toBeDisabled();
    expect(day20).toBeTruthy();
    expect(day20).not.toBeDisabled();
    expect(day30).toBeTruthy();
    expect(day30).toBeDisabled();
  },
};

export const DisabledDatesForbiddenDaysInJune2024: Story = {
  name: "disabledDates: listed calendar days are disabled",
  parameters: {
    docs: {
      description: {
        story:
          "`disabledDates` is a list of forbidden calendar days (matched by calendar day). Here 18 and 19 June 2024 are disabled; 17 and 20 remain selectable.",
      },
    },
  },
  args: {
    ...Default.args,
    disabledDates: [new Date(2024, 5, 18), new Date(2024, 5, 19)],
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await typeJuneFifteen2024(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: calendarTriggerAccessibleName }));

    await waitFor(() => {
      const overlay = document.getElementById("overlay-root");
      expect(overlay?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;
    const day17 = dayCellButtonJune2024(overlay, 17);
    const day18 = dayCellButtonJune2024(overlay, 18);
    const day19 = dayCellButtonJune2024(overlay, 19);
    const day20 = dayCellButtonJune2024(overlay, 20);
    expect(day17).toBeTruthy();
    expect(day17).not.toBeDisabled();
    expect(day18).toBeTruthy();
    expect(day18).toBeDisabled();
    expect(day19).toBeTruthy();
    expect(day19).toBeDisabled();
    expect(day20).toBeTruthy();
    expect(day20).not.toBeDisabled();
  },
};

export const OpenSelectConfirm: Story = {
  name: "Open + select + confirm",
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole("button", { name: calendarTriggerAccessibleName });
    await userEvent.click(calendarButton);

    await waitFor(() => {
      const overlay = document.getElementById("overlay-root");
      const menu = overlay?.querySelector("rte-datepicker-menu");
      expect(menu).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;
    const dayButtons = overlay.querySelectorAll("rte-datepicker-menu .day-cell");
    expect(dayButtons.length).toBeGreaterThan(0);

    await userEvent.click(dayButtons[10] as HTMLElement);
    const confirmButton = within(overlay).getByRole("button", { name: /confirmer/i });
    await userEvent.click(confirmButton);

    await waitFor(() => {
      const menu = overlay.querySelector("rte-datepicker-menu");
      expect(menu).not.toBeInTheDocument();
    });
  },
};

export const OpenFocusAndEsc: Story = {
  name: "Open focuses grid + ESC closes",
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole("button", { name: calendarTriggerAccessibleName });

    await userEvent.click(calendarButton);

    await waitFor(() => {
      const overlayRoot = document.getElementById("overlay-root");
      expect(overlayRoot?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;

    await waitFor(() => {
      const activeDayButton = overlay.querySelector(
        'rte-datepicker-menu .day-cell[data-datepicker-active="true"]',
      ) as HTMLButtonElement | null;
      expect(activeDayButton).toBeInTheDocument();
      expect(activeDayButton).toHaveFocus();
    });

    await userEvent.keyboard("{Escape}");

    await waitFor(() => {
      expect(overlay.querySelector("rte-datepicker-menu")).not.toBeInTheDocument();
    });

    await waitFor(() => {
      expect(calendarButton).toHaveFocus();
    });
  },
};

export const KeyboardFocusedDayMatchesHoverStyle: Story = {
  name: "Day grid: keyboard focus matches hover surface",
  parameters: {
    docs: {
      description: {
        story:
          "Figma: the roving keyboard focus (`data-datepicker-active`) uses the same surface as `:hover` for each cell type—default and adjacent-month cells use `--background-hover` (not a focus ring). This story samples hover on a default day cell, then focuses the same cell and compares computed `backgroundColor` on `.day-cell__surface`.",
      },
    },
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: calendarTriggerAccessibleName }));

    await waitFor(() => {
      expect(document.getElementById("overlay-root")?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;
    const defaultCell = Array.from(overlay.querySelectorAll(".rte-datepicker-day-grid .day-cell")).find(
      (element) => element.getAttribute("data-cell-type") === "default" && element.getAttribute("disabled") === null,
    ) as HTMLElement | undefined;

    if (!defaultCell) {
      throw new globalThis.Error("Expected a default day cell in the grid.");
    }

    const surface = defaultCell.querySelector(".day-cell__surface");
    if (!surface) {
      throw new globalThis.Error("Expected .day-cell__surface in the day cell.");
    }

    await userEvent.hover(defaultCell);
    const hoverBackground = window.getComputedStyle(surface).backgroundColor;
    await userEvent.unhover(defaultCell);

    await userEvent.click(defaultCell);

    await waitFor(() => {
      expect(defaultCell).toHaveFocus();
      expect(defaultCell.getAttribute("data-datepicker-active")).toBe("true");
    });

    expect(window.getComputedStyle(surface).backgroundColor).toBe(hoverBackground);
  },
};

export const OpenTabCancelConfirmPreviousYearNav: Story = {
  name: "Open + Tab: Cancel → Confirm → previous year (fr-FR labels)",
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole("button", { name: calendarTriggerAccessibleName });

    await userEvent.click(calendarButton);

    await waitFor(() => {
      const overlayRoot = document.getElementById("overlay-root");
      expect(overlayRoot?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;

    await waitFor(() => {
      const activeDayButton = overlay.querySelector(
        'rte-datepicker-menu .day-cell[data-datepicker-active="true"]',
      ) as HTMLButtonElement | null;
      expect(activeDayButton).toBeInTheDocument();
      expect(activeDayButton).toHaveFocus();
    });

    await userEvent.tab();
    await waitFor(() => {
      expect(within(overlay).getByRole("button", { name: /^annuler$/i })).toHaveFocus();
    });

    await userEvent.tab();
    await waitFor(() => {
      expect(within(overlay).getByRole("button", { name: /^confirmer$/i })).toHaveFocus();
    });

    await userEvent.tab();
    await waitFor(() => {
      expect(within(overlay).getByRole("button", { name: /année précédente/i })).toHaveFocus();
    });
  },
};

export const ViewModesFourVsTwoNavAndGrids: Story = {
  name: "View modes: day grid + 4 nav → month grid + 2 nav → decade + 2 nav",
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: calendarTriggerAccessibleName }));

    await waitFor(() => {
      const overlayRoot = document.getElementById("overlay-root");
      expect(overlayRoot?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;
    const menuOverlay = within(overlay);

    expect(menuOverlay.getByRole("button", { name: /année précédente/i })).toBeInTheDocument();
    expect(menuOverlay.getByRole("button", { name: /mois précédent/i })).toBeInTheDocument();
    expect(menuOverlay.getByRole("button", { name: /mois suivant/i })).toBeInTheDocument();
    expect(menuOverlay.getByRole("button", { name: /année suivante/i })).toBeInTheDocument();
    expect(overlay.querySelector(".rte-datepicker-day-grid")).toBeInTheDocument();

    const dayHeaderLabel = overlay.querySelector('[data-datepicker-tab="month-label"]') as HTMLButtonElement | null;
    expect(dayHeaderLabel).toBeTruthy();
    await userEvent.click(dayHeaderLabel!);

    await waitFor(() => {
      expect(overlay.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument();
    });

    expect(overlay.querySelector(".rte-datepicker-day-grid")).not.toBeInTheDocument();
    expect(menuOverlay.queryAllByRole("button", { name: /année précédente/i })).toHaveLength(1);
    expect(menuOverlay.queryAllByRole("button", { name: /année suivante/i })).toHaveLength(1);
    expect(menuOverlay.queryByRole("button", { name: /mois précédent/i })).not.toBeInTheDocument();
    expect(menuOverlay.queryByRole("button", { name: /mois suivant/i })).not.toBeInTheDocument();

    const yearHeaderLabel = overlay.querySelector('[data-datepicker-tab="month-label"]') as HTMLButtonElement | null;
    expect(yearHeaderLabel).toBeTruthy();
    await userEvent.click(yearHeaderLabel!);

    await waitFor(() => {
      expect(overlay.querySelector(".rte-datepicker-year-grid")).toBeInTheDocument();
    });

    expect(overlay.querySelector(".rte-datepicker-month-grid")).not.toBeInTheDocument();
    expect(menuOverlay.getByText("Sélectionner une année")).toBeInTheDocument();
    expect(menuOverlay.getByRole("button", { name: /décennie précédente/i })).toBeInTheDocument();
    expect(menuOverlay.getByRole("button", { name: /décennie suivante/i })).toBeInTheDocument();
    expect(overlay.querySelector(".month-label-static")).toBeInTheDocument();
    expect(overlay.querySelector('[data-datepicker-tab="month-label"]')).not.toBeInTheDocument();

    const yearCells = overlay.querySelectorAll("rte-datepicker-menu .year-cell");
    expect(yearCells.length).toBe(11);
  },
};

export const SegmentedFieldType13InDayKeepsFocus: Story = {
  name: "Segmented field: 1 then 3 in day → 13 (focus stays on field)",
  parameters: {
    docs: {
      description: {
        story:
          "Regression: typing two digits into the day block without losing focus (MUI-style section editing). After 13, focus must remain on the date field group.",
      },
    },
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole("group");
    field.focus();
    expect(field).toHaveFocus();

    await userEvent.keyboard("13");

    await waitFor(() => {
      const segmented = canvasElement.querySelector(".segmented-date-field");
      const compact = segmented?.textContent?.replace(/\s/g, "") ?? "";
      expect(compact.startsWith("13")).toBe(true);
    });

    expect(field).toHaveFocus();
  },
};

export const SegmentedFieldPartialDayThenYearDigitsStayInYear: Story = {
  name: "Segmented field: partial day then year digits (stay in year)",
  parameters: {
    docs: {
      description: {
        story:
          "Type one day digit, move to year with arrows, type two year digits: day stays partial, year shows those digits, active block remains year (no jump back to day).",
      },
    },
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole("group");
    await userEvent.click(field);
    field.focus();

    await userEvent.keyboard("2");
    await waitFor(() => {
      const daySegment = canvasElement.querySelectorAll(".segment")[0];
      expect(normalizedSegmentedDateText(daySegment)).toMatch(/^02$/);
    });

    await userEvent.keyboard("{ArrowRight}{ArrowRight}");
    await waitFor(() => {
      const yearSegment = canvasElement.querySelectorAll(".segment")[2];
      expect(yearSegment?.classList.contains("segment--active")).toBe(true);
      expect(normalizedSegmentedDateText(yearSegment)).toMatch(/^Y{4}$/);
    });

    await userEvent.keyboard("13");

    await waitFor(() => {
      const segments = canvasElement.querySelectorAll(".segment");
      expect(normalizedSegmentedDateText(segments[0])).toMatch(/^02$/);
      expect(normalizedSegmentedDateText(segments[1])).toMatch(/^MM$/);
      expect(normalizedSegmentedDateText(segments[2])).toContain("13");
    });

    await waitFor(() => {
      const segments = canvasElement.querySelectorAll(".segment");
      expect(segments[2]?.classList.contains("segment--active")).toBe(true);
    });

    expect(field).toHaveFocus();
  },
};

export const SegmentedFieldTypeYearWithoutDayOrMonth: Story = {
  name: "Segmented field: year section only (no day/month)",
  parameters: {
    docs: {
      description: {
        story:
          "Move focus to the year block with arrows, type a year while day/month are still empty: digits stay in the year section (value uses leading slashes, e.g. //1992).",
      },
    },
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole("group");
    field.focus();

    await userEvent.keyboard("{ArrowRight}{ArrowRight}");
    await waitFor(() => {
      expect(normalizedSegmentedDateText(canvasElement.querySelector(".segment--active"))).toMatch(/^Y{4}$/);
    });

    await userEvent.keyboard("1992");

    await waitFor(
      () => {
        const segments = canvasElement.querySelectorAll(".segment");
        expect(segments.length).toBe(3);
        expect(normalizedSegmentedDateText(segments[0])).toMatch(/^DD$/);
        expect(normalizedSegmentedDateText(segments[1])).toMatch(/^MM$/);
        expect(normalizedSegmentedDateText(segments[2])).toContain("1992");
      },
      { timeout: 5000 },
    );

    expect(field).toHaveFocus();
  },
};

export const SegmentedFieldBackspaceClearsActiveSection: Story = {
  name: "Segmented field: Backspace clears active section",
  parameters: {
    docs: {
      description: {
        story: "Type one digit in the day block, then Backspace: the day section is fully cleared and shows DD again.",
      },
    },
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole("group");
    field.focus();

    await userEvent.keyboard("1");
    await waitFor(() => {
      expect(canvasElement.querySelector(".segment--active")?.textContent?.trim()).toBe("01");
    });

    await userEvent.keyboard("{Backspace}");
    await waitFor(() => {
      expect(canvasElement.querySelector(".segment--active")?.textContent?.trim()).toBe("DD");
    });

    expect(field).toHaveFocus();
  },
};

export const SegmentedFieldBlockNavigation: Story = {
  name: "Segmented field: Left/Right moves active block",
  parameters: {
    docs: {
      description: {
        story:
          "Focus the date field (role=group), press ArrowRight twice: the highlighted block moves from day → month → year.",
      },
    },
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    const field = within(canvasElement).getByRole("group");
    field.focus();
    expect(canvasElement.querySelector(".segment--active")?.textContent?.trim()).toBe("DD");

    await userEvent.keyboard("{ArrowRight}");
    await waitFor(() => {
      expect(canvasElement.querySelector(".segment--active")?.textContent?.trim()).toBe("MM");
    });

    await userEvent.keyboard("{ArrowRight}");
    await waitFor(() => {
      expect(canvasElement.querySelector(".segment--active")?.textContent?.trim()).toBe("YYYY");
    });
  },
};

export const OpenCalendarWithInvalidPartialInput: Story = {
  name: "Open calendar: invalid partial input uses default month",
  parameters: {
    docs: {
      description: {
        story:
          "With only partial digits (not a valid DD/MM/YYYY), opening the calendar shows the current month; the active day is resolved like an empty picker.",
      },
    },
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole("group");
    field.focus();
    await userEvent.keyboard("12");

    const calendarButton = canvas.getByRole("button", { name: calendarTriggerAccessibleName });
    await userEvent.click(calendarButton);

    await waitFor(() => {
      const overlay = document.getElementById("overlay-root");
      expect(overlay?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });
  },
};

export const TypeFullDateThenOpenCalendarShowsThatDate: Story = {
  name: "Type 13021992 then open calendar → February 13, 1992",
  parameters: {
    docs: {
      description: {
        story:
          "Click the segmented field, type each digit separately (1, 3, 0, 2, 1, 9, 9, 2 for DD/MM/YYYY → 13/02/1992), then open the calendar. The header must show February 1992 (locale fr-FR) and the active day cell must be 13.",
      },
    },
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole("group");
    await userEvent.click(field);
    field.focus();

    for (const digit of "13021992") {
      await userEvent.keyboard(digit);
    }

    await waitFor(
      () => {
        const segmented = canvasElement.querySelector(".segmented-date-field");
        const compact = normalizedSegmentedDateText(segmented);
        expect(compact).toContain("13");
        expect(compact).toContain("02");
        expect(compact).toContain("1992");
      },
      { timeout: 5000 },
    );

    const calendarButton = canvas.getByRole("button", { name: calendarTriggerAccessibleName });
    await userEvent.click(calendarButton);

    await waitFor(() => {
      const overlay = document.getElementById("overlay-root");
      expect(overlay?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;
    const monthHeader = overlay.querySelector('[data-datepicker-tab="month-label"]') as HTMLElement | null;
    expect(monthHeader).toBeTruthy();
    expect(monthHeader?.textContent ?? "").toMatch(/février/i);
    expect(monthHeader?.textContent ?? "").toContain("1992");

    await waitFor(() => {
      const activeDay = overlay.querySelector(
        'rte-datepicker-menu .day-cell[data-datepicker-active="true"]',
      ) as HTMLElement | null;
      expect(activeDay?.textContent?.trim()).toBe("13");
    });
  },
};

export const KeyboardTabOrderAndArrows: Story = {
  name: "Keyboard: tab order + arrows scoped to grid",
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole("button", { name: calendarTriggerAccessibleName });

    await userEvent.click(calendarButton);

    await waitFor(() => {
      const overlay = document.getElementById("overlay-root");
      const menu = overlay?.querySelector("rte-datepicker-menu");
      expect(menu).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;
    await waitFor(() => {
      const active = overlay.querySelector(
        'rte-datepicker-menu .day-cell[data-datepicker-active="true"]',
      ) as HTMLButtonElement | null;
      expect(active).toBeInTheDocument();
      expect(active).toHaveFocus();
    });

    const activeDayButton = overlay.querySelector(
      'rte-datepicker-menu .day-cell[data-datepicker-active="true"]',
    ) as HTMLButtonElement | null;

    await userEvent.tab();
    const cancelButton = within(overlay).getByRole("button", { name: /^annuler$/i });
    expect(cancelButton).toHaveFocus();

    await userEvent.keyboard("{ArrowDown}");
    expect(cancelButton).toHaveFocus();

    await userEvent.tab({ shift: true });
    expect(activeDayButton).toHaveFocus();

    await userEvent.keyboard("{ArrowRight}");
    await waitFor(() => {
      const nextActive = overlay.querySelector(
        'rte-datepicker-menu .day-cell[data-datepicker-active="true"]',
      ) as HTMLButtonElement | null;
      expect(nextActive).toBeInTheDocument();
      expect(nextActive).toHaveFocus();
      expect(nextActive).not.toBe(activeDayButton);
    });
  },
};

export const KeyboardMonthViewTabHeaderGridActions: Story = {
  name: "Keyboard: month view Tab order header → grid → actions",
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: calendarTriggerAccessibleName }));

    await waitFor(() => {
      const overlayRoot = document.getElementById("overlay-root");
      expect(overlayRoot?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;
    const dayHeaderLabel = overlay.querySelector('[data-datepicker-tab="month-label"]') as HTMLButtonElement | null;
    expect(dayHeaderLabel).toBeTruthy();
    await userEvent.click(dayHeaderLabel!);

    await waitFor(() => {
      expect(overlay.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument();
    });

    const activeMonthCell = overlay.querySelector(
      "rte-datepicker-menu .month-cell[data-datepicker-active='true']:not([disabled])",
    ) as HTMLButtonElement | null;
    expect(activeMonthCell).toBeTruthy();

    await waitFor(() => {
      expect(activeMonthCell).toHaveFocus();
    });

    await userEvent.tab();
    await waitFor(() => {
      expect(within(overlay).getByRole("button", { name: /^annuler$/i })).toHaveFocus();
    });

    await userEvent.tab({ shift: true });
    expect(activeMonthCell).toHaveFocus();

    const nextYearNav = within(overlay).getByRole("button", { name: /année suivante/i });
    await userEvent.tab({ shift: true });
    expect(nextYearNav).toHaveFocus();

    await userEvent.tab();
    expect(activeMonthCell).toHaveFocus();
  },
};

export const MonthNavigationProjectsAnchorDay: Story = {
  name: "Day grid: month nav projects anchor day (Jan 31 → Feb → March)",
  parameters: {
    docs: {
      description: {
        story:
          "Month/year navigation keeps a stable day-of-month anchor: Jan 31 → February clamps to the last day of that month (28 in 2025), then March restores day 31. The anchor is not the clamped day in February—moving again uses the original day number when the target month allows it.",
      },
    },
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole("group");
    await userEvent.click(field);
    field.focus();
    for (const digit of "31012025") {
      await userEvent.keyboard(digit);
    }
    await waitFor(
      () => {
        const segmented = canvasElement.querySelector(".segmented-date-field");
        const compact = normalizedSegmentedDateText(segmented);
        expect(compact).toContain("31");
        expect(compact).toContain("2025");
      },
      { timeout: 5000 },
    );

    await userEvent.click(canvas.getByRole("button", { name: calendarTriggerAccessibleName }));

    await waitFor(() => {
      expect(document.getElementById("overlay-root")?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;
    const nextMonthButton = within(overlay).getByRole("button", { name: /mois suivant/i });

    await userEvent.click(nextMonthButton);

    await waitFor(() => {
      const feb28 = dayCellMatchingAriaLabel(overlay, /\b28\b.*février.*2025/i);
      expect(feb28).toBeTruthy();
      expect(feb28?.getAttribute("aria-selected")).toBe("true");
    });

    await userEvent.click(nextMonthButton);

    await waitFor(() => {
      const mar31 = dayCellMatchingAriaLabel(overlay, /\b31\b.*mars.*2025/i);
      expect(mar31).toBeTruthy();
      expect(mar31?.getAttribute("aria-selected")).toBe("true");
    });
  },
};

export const MonthNavigationProjectsAnchorDayLeapYear: Story = {
  name: "Day grid: month nav anchor day (Jan 31 → Feb 29 → March), leap year",
  parameters: {
    docs: {
      description: {
        story: "Same anchor behavior in a leap year: January 31 → February 29 (2024), then March 31.",
      },
    },
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole("group");
    await userEvent.click(field);
    field.focus();
    for (const digit of "31012024") {
      await userEvent.keyboard(digit);
    }
    await waitFor(
      () => {
        const segmented = canvasElement.querySelector(".segmented-date-field");
        const compact = normalizedSegmentedDateText(segmented);
        expect(compact).toContain("31");
        expect(compact).toContain("2024");
      },
      { timeout: 5000 },
    );

    await userEvent.click(canvas.getByRole("button", { name: calendarTriggerAccessibleName }));

    await waitFor(() => {
      expect(document.getElementById("overlay-root")?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;
    const nextMonthButton = within(overlay).getByRole("button", { name: /mois suivant/i });

    await userEvent.click(nextMonthButton);

    await waitFor(() => {
      const feb29 = dayCellMatchingAriaLabel(overlay, /\b29\b.*février.*2024/i);
      expect(feb29).toBeTruthy();
      expect(feb29?.getAttribute("aria-selected")).toBe("true");
    });

    await userEvent.click(nextMonthButton);

    await waitFor(() => {
      const mar31 = dayCellMatchingAriaLabel(overlay, /\b31\b.*mars.*2024/i);
      expect(mar31).toBeTruthy();
      expect(mar31?.getAttribute("aria-selected")).toBe("true");
    });
  },
};

export const DayGridMinimumRowsFourWeekFebruary2021: Story = {
  name: "Day grid: minimum rows (February 2021 → 28 day cells)",
  parameters: {
    docs: {
      description: {
        story:
          "The day grid uses the minimum number of full weeks needed to show every day of the month (Monday-first). February 2021 starts on a Monday and has 28 days → 4 rows, 28 cells.",
      },
    },
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole("group");
    await userEvent.click(field);
    field.focus();
    for (const digit of "15022021") {
      await userEvent.keyboard(digit);
    }
    await waitFor(
      () => {
        const segmented = canvasElement.querySelector(".segmented-date-field");
        const compact = normalizedSegmentedDateText(segmented);
        expect(compact).toContain("2021");
      },
      { timeout: 5000 },
    );

    await userEvent.click(canvas.getByRole("button", { name: calendarTriggerAccessibleName }));

    await waitFor(() => {
      expect(document.getElementById("overlay-root")?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;
    const monthHeader = overlay.querySelector('[data-datepicker-tab="month-label"]') as HTMLElement | null;
    expect(monthHeader?.textContent ?? "").toMatch(/février/i);
    expect(monthHeader?.textContent ?? "").toContain("2021");

    const dayCells = overlay.querySelectorAll(".rte-datepicker-day-grid .day-cell");
    expect(dayCells.length).toBe(28);
  },
};

export const DayGridMinimumRowsSixWeekMarch2026: Story = {
  name: "Day grid: minimum rows (March 2026 → 42 day cells)",
  parameters: {
    docs: {
      description: {
        story:
          "A 31-day month that starts on Sunday needs six rows (leading offset 6 + 31 days → 42 cells). March 2026 matches that case.",
      },
    },
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole("group");
    await userEvent.click(field);
    field.focus();
    for (const digit of "15032026") {
      await userEvent.keyboard(digit);
    }
    await waitFor(
      () => {
        const segmented = canvasElement.querySelector(".segmented-date-field");
        const compact = normalizedSegmentedDateText(segmented);
        expect(compact).toContain("2026");
      },
      { timeout: 5000 },
    );

    await userEvent.click(canvas.getByRole("button", { name: calendarTriggerAccessibleName }));

    await waitFor(() => {
      expect(document.getElementById("overlay-root")?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;
    const monthHeader = overlay.querySelector('[data-datepicker-tab="month-label"]') as HTMLElement | null;
    expect(monthHeader?.textContent ?? "").toMatch(/mars/i);
    expect(monthHeader?.textContent ?? "").toContain("2026");

    const dayCells = overlay.querySelectorAll(".rte-datepicker-day-grid .day-cell");
    expect(dayCells.length).toBe(42);
  },
};

export const DayGridMarch2026StaysSixRowsWhenPendingApril: Story = {
  name: "Day grid: March 2026 stays 6 rows when pending date is in April",
  parameters: {
    docs: {
      description: {
        story:
          "Regression: the grid must use only the weeks needed for the viewed month (here March 2026 → 42 cells). Pending selection in the next month (10/04/2026) must not add an extra row.",
      },
    },
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole("group");
    await userEvent.click(field);
    field.focus();
    for (const digit of "10042026") {
      await userEvent.keyboard(digit);
    }
    await waitFor(
      () => {
        const segmented = canvasElement.querySelector(".segmented-date-field");
        const compact = normalizedSegmentedDateText(segmented);
        expect(compact).toContain("2026");
      },
      { timeout: 5000 },
    );

    await userEvent.click(canvas.getByRole("button", { name: calendarTriggerAccessibleName }));

    await waitFor(() => {
      expect(document.getElementById("overlay-root")?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;
    expect(dayGridMonthHeaderText(overlay)).toMatch(/avril/i);

    await arrowLeftUntilMonthHeaderMatches(overlay, /mars/i);
    expect(dayGridMonthHeaderText(overlay)).toContain("2026");

    const dayCells = overlay.querySelectorAll(".rte-datepicker-day-grid .day-cell");
    expect(dayCells.length).toBe(42);
  },
};

export const DayGridKeyboardMay2026ToJuneStillNavigable: Story = {
  name: "Day grid: keyboard Mai → Juin 2026 keeps ArrowRight working",
  parameters: {
    docs: {
      description: {
        story:
          "Regression: after paging from May to June with ArrowRight (keyboard month boundary), roving focus must resync to the new grid so the next arrow moves the active day (not a silent no-op).",
      },
    },
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole("group");
    await userEvent.click(field);
    field.focus();
    for (const digit of "15052026") {
      await userEvent.keyboard(digit);
    }
    await waitFor(
      () => {
        const segmented = canvasElement.querySelector(".segmented-date-field");
        const compact = normalizedSegmentedDateText(segmented);
        expect(compact).toContain("2026");
      },
      { timeout: 5000 },
    );

    await userEvent.click(canvas.getByRole("button", { name: calendarTriggerAccessibleName }));

    await waitFor(() => {
      expect(document.getElementById("overlay-root")?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;
    expect(dayGridMonthHeaderText(overlay)).toMatch(/mai/i);

    await arrowRightUntilMonthHeaderMatches(overlay, /juin/i);
    expect(dayGridMonthHeaderText(overlay)).toContain("2026");

    await waitFor(() => {
      expect(activeDayCellLabelText(overlay)).toBe("1");
    });

    await waitFor(() => {
      const activeButton = overlay.querySelector(
        '.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])',
      ) as HTMLButtonElement | null;
      expect(activeButton).toHaveFocus();
    });

    await userEvent.keyboard("{ArrowRight}");

    await waitFor(() => {
      expect(dayGridMonthHeaderText(overlay)).toMatch(/juin/i);
      expect(activeDayCellLabelText(overlay)).toBe("2");
    });
  },
};

export const DayGridMonthNavUpdatesDayCellCount: Story = {
  name: "Day grid: month chevron updates day cell count (28 → 35)",
  parameters: {
    docs: {
      description: {
        story:
          "Regression: after opening a four-week month, moving to the next month must rebuild the grid with the correct cell count (February 2021 →28, March 2021 → 35).",
      },
    },
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole("group");
    await userEvent.click(field);
    field.focus();
    for (const digit of "01022021") {
      await userEvent.keyboard(digit);
    }
    await waitFor(
      () => {
        const segmented = canvasElement.querySelector(".segmented-date-field");
        const compact = normalizedSegmentedDateText(segmented);
        expect(compact).toContain("2021");
      },
      { timeout: 5000 },
    );

    await userEvent.click(canvas.getByRole("button", { name: calendarTriggerAccessibleName }));

    await waitFor(() => {
      expect(document.getElementById("overlay-root")?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;
    expect(overlay.querySelectorAll(".rte-datepicker-day-grid .day-cell").length).toBe(28);

    await userEvent.click(within(overlay).getByRole("button", { name: /mois suivant/i }));

    await waitFor(() => {
      const monthHeader = overlay.querySelector('[data-datepicker-tab="month-label"]') as HTMLElement | null;
      expect(monthHeader?.textContent ?? "").toMatch(/mars/i);
      expect(monthHeader?.textContent ?? "").toContain("2021");
    });

    expect(overlay.querySelectorAll(".rte-datepicker-day-grid .day-cell").length).toBe(35);
  },
};

export const DayGridKeyboardFebruaryToMarchArrowsStillMove: Story = {
  name: "Day grid: Feb 2021 ArrowRight to March, then arrows move focus",
  parameters: {
    docs: {
      description: {
        story:
          "Type 15/02/2021, open the calendar, move with ArrowRight across the grid until the header shows March, then confirm ArrowRight, ArrowLeft, ArrowDown, and ArrowUp still move the active day and keep focus on the grid.",
      },
    },
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole("group");
    await userEvent.click(field);
    field.focus();
    for (const digit of "15022021") {
      await userEvent.keyboard(digit);
    }
    await waitFor(
      () => {
        const segmented = canvasElement.querySelector(".segmented-date-field");
        const compact = normalizedSegmentedDateText(segmented);
        expect(compact).toContain("2021");
      },
      { timeout: 5000 },
    );

    await userEvent.click(canvas.getByRole("button", { name: calendarTriggerAccessibleName }));

    await waitFor(() => {
      expect(document.getElementById("overlay-root")?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;
    expect(dayGridMonthHeaderText(overlay)).toMatch(/février/i);

    await arrowRightUntilMonthHeaderMatches(overlay, /mars/i);
    expect(dayGridMonthHeaderText(overlay)).toContain("2021");

    let guard = 0;
    while (activeDayCellLabelText(overlay) !== "10" && guard < 20) {
      await focusActiveDayCellForArrowNavigation(overlay);
      await userEvent.keyboard("{ArrowRight}");
      guard += 1;
    }
    expect(activeDayCellLabelText(overlay)).toBe("10");

    await focusActiveDayCellForArrowNavigation(overlay);
    await userEvent.keyboard("{ArrowRight}");
    await waitFor(() => {
      expect(dayGridMonthHeaderText(overlay)).toMatch(/mars/i);
      expect(activeDayCellLabelText(overlay)).toBe("11");
    });
    await waitFor(() => {
      const cell = overlay.querySelector(
        '.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])',
      ) as HTMLButtonElement | null;
      expect(cell).toHaveFocus();
    });

    await focusActiveDayCellForArrowNavigation(overlay);
    await userEvent.keyboard("{ArrowLeft}");
    await waitFor(() => {
      expect(dayGridMonthHeaderText(overlay)).toMatch(/mars/i);
      expect(activeDayCellLabelText(overlay)).toBe("10");
    });

    await focusActiveDayCellForArrowNavigation(overlay);
    await userEvent.keyboard("{ArrowDown}");
    await waitFor(() => {
      expect(dayGridMonthHeaderText(overlay)).toMatch(/mars/i);
      expect(activeDayCellLabelText(overlay)).toBe("17");
    });

    await focusActiveDayCellForArrowNavigation(overlay);
    await userEvent.keyboard("{ArrowUp}");
    await waitFor(() => {
      expect(dayGridMonthHeaderText(overlay)).toMatch(/mars/i);
      expect(activeDayCellLabelText(overlay)).toBe("10");
    });
    await waitFor(() => {
      const cell = overlay.querySelector(
        '.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])',
      ) as HTMLButtonElement | null;
      expect(cell).toHaveFocus();
    });
  },
};

export const SelectingAdjacentMonthDaySwitchesCalendarView: Story = {
  name: "Day grid: selecting a prev/next month day switches the view to that month",
  parameters: {
    docs: {
      description: {
        story:
          "When the grid shows trailing or leading days from another month, choosing one of those days must move the calendar to that month so the selection and header stay aligned.",
      },
    },
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole("group");
    await userEvent.click(field);
    field.focus();
    for (const digit of "01032025") {
      await userEvent.keyboard(digit);
    }
    await waitFor(
      () => {
        const segmented = canvasElement.querySelector(".segmented-date-field");
        const compact = normalizedSegmentedDateText(segmented);
        expect(compact).toContain("2025");
      },
      { timeout: 5000 },
    );

    await userEvent.click(canvas.getByRole("button", { name: calendarTriggerAccessibleName }));

    await waitFor(() => {
      expect(document.getElementById("overlay-root")?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;
    const monthHeaderBefore = overlay.querySelector('[data-datepicker-tab="month-label"]') as HTMLElement | null;
    expect(monthHeaderBefore?.textContent ?? "").toMatch(/mars/i);

    const february26Cell = dayCellMatchingAriaLabel(overlay, /\b26\b.*février.*2025/i);
    if (!february26Cell) {
      throw new globalThis.Error("Expected February 26 2025 to appear in the March 2025 grid.");
    }
    await userEvent.click(february26Cell);

    await waitFor(() => {
      const monthHeaderAfter = overlay.querySelector('[data-datepicker-tab="month-label"]') as HTMLElement | null;
      expect(monthHeaderAfter?.textContent ?? "").toMatch(/février/i);
      expect(monthHeaderAfter?.textContent ?? "").toContain("2025");
    });

    await waitFor(() => {
      const selectedFeb26 = dayCellMatchingAriaLabel(overlay, /\b26\b.*février.*2025/i);
      expect(selectedFeb26?.getAttribute("aria-selected")).toBe("true");
    });
  },
};

export const DayGridArrowLeftAtFirstCellGoesToPreviousMonth: Story = {
  name: "Day grid: ArrowLeft from first grid cell opens previous month",
  parameters: {
    docs: {
      description: {
        story:
          "With September 2019 open, the first cell is August 26. ArrowLeft moves to August 2019 and focuses August 25. Keyboard month paging does not change the pending selection (7 September stays selected—assert via the field, not a grid cell, because a minimal August grid may not include 7 September). The header chevrons still drive anchor-based date projection.",
      },
    },
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole("group");
    await userEvent.click(field);
    field.focus();
    for (const digit of "07092019") {
      await userEvent.keyboard(digit);
    }
    await waitFor(
      () => {
        const segmented = canvasElement.querySelector(".segmented-date-field");
        const compact = normalizedSegmentedDateText(segmented);
        expect(compact).toContain("2019");
      },
      { timeout: 5000 },
    );

    await userEvent.click(canvas.getByRole("button", { name: calendarTriggerAccessibleName }));

    await waitFor(() => {
      expect(document.getElementById("overlay-root")?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;
    expect(
      (overlay.querySelector('[data-datepicker-tab="month-label"]') as HTMLElement | null)?.textContent ?? "",
    ).toMatch(/septembre/i);

    const september7Cell = dayCellMatchingAriaLabel(overlay, /\b7\s+septembre.*2019/i);
    if (!september7Cell) {
      throw new globalThis.Error("Expected 7 September 2019 in the grid.");
    }
    expect(september7Cell.getAttribute("aria-selected")).toBe("true");

    const august26Cell = dayCellMatchingAriaLabel(overlay, /\b26\b.*août.*2019/i);
    if (!august26Cell) {
      throw new globalThis.Error("Expected August 26 2019 in the September 2019 grid.");
    }
    august26Cell.focus();
    await userEvent.keyboard("{ArrowLeft}");

    await waitFor(() => {
      const monthHeader = overlay.querySelector('[data-datepicker-tab="month-label"]') as HTMLElement | null;
      expect(monthHeader?.textContent ?? "").toMatch(/août/i);
      expect(monthHeader?.textContent ?? "").toContain("2019");
    });

    await waitFor(() => {
      const activeAugust25 = dayCellMatchingAriaLabel(overlay, /\b25\b.*août.*2019/i);
      expect(activeAugust25?.getAttribute("data-datepicker-active")).toBe("true");
    });

    const segmentedAfterLeft = canvasElement.querySelector(".segmented-date-field");
    const compactAfterLeft = normalizedSegmentedDateText(segmentedAfterLeft);
    expect(compactAfterLeft).toContain("07");
    expect(compactAfterLeft).toContain("09");
    expect(compactAfterLeft).toContain("2019");
  },
};

export const DayGridArrowRightAtLastCellGoesToNextMonth: Story = {
  name: "Day grid: ArrowRight from last grid cell opens next month",
  parameters: {
    docs: {
      description: {
        story:
          "With September 2019 open, ArrowRight from the last visible day moves the view to the next month and focuses the following calendar day. Pending selection stays on 7 September (asserted via the segmented field); that day is not necessarily a rendered grid cell while October is open.",
      },
    },
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole("group");
    await userEvent.click(field);
    field.focus();
    for (const digit of "07092019") {
      await userEvent.keyboard(digit);
    }
    await waitFor(
      () => {
        const segmented = canvasElement.querySelector(".segmented-date-field");
        const compact = normalizedSegmentedDateText(segmented);
        expect(compact).toContain("2019");
      },
      { timeout: 5000 },
    );

    await userEvent.click(canvas.getByRole("button", { name: calendarTriggerAccessibleName }));

    await waitFor(() => {
      expect(document.getElementById("overlay-root")?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;
    const september7BeforeRight = dayCellMatchingAriaLabel(overlay, /\b7\s+septembre.*2019/i);
    if (!september7BeforeRight) {
      throw new globalThis.Error("Expected 7 September 2019 in the grid.");
    }
    expect(september7BeforeRight.getAttribute("aria-selected")).toBe("true");

    const dayCellButtons = Array.from(
      overlay.querySelectorAll(".rte-datepicker-day-grid .day-cell"),
    ) as HTMLButtonElement[];
    const lastGridCell = dayCellButtons[dayCellButtons.length - 1];
    if (!lastGridCell || lastGridCell.disabled) {
      throw new globalThis.Error("Expected a focusable last grid cell.");
    }
    lastGridCell.focus();
    await userEvent.keyboard("{ArrowRight}");

    await waitFor(() => {
      const monthHeaderAfterRight = overlay.querySelector('[data-datepicker-tab="month-label"]') as HTMLElement | null;
      expect(monthHeaderAfterRight?.textContent ?? "").toMatch(/octobre/i);
      expect(monthHeaderAfterRight?.textContent ?? "").toContain("2019");
    });

    await waitFor(() => {
      const activeAfterRight = overlay.querySelector(
        '.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]',
      ) as HTMLButtonElement | null;
      expect(activeAfterRight?.textContent?.trim()).toBe("7");
      expect(activeAfterRight?.getAttribute("aria-label") ?? "").toMatch(/octobre.*2019/i);
    });

    const segmentedAfterRight = canvasElement.querySelector(".segmented-date-field");
    const compactAfterRight = normalizedSegmentedDateText(segmentedAfterRight);
    expect(compactAfterRight).toContain("07");
    expect(compactAfterRight).toContain("09");
    expect(compactAfterRight).toContain("2019");
  },
};

export const KeyboardGridMonthPageDoesNotChangePendingSelection: Story = {
  name: "Day grid: keyboard month paging keeps pending selection (vs chevron nav)",
  parameters: {
    docs: {
      description: {
        story:
          "Regression: crossing a month with Arrow keys only moves the view and roving focus, not the pending date. Chevron navigation still applies projection from the month anchor.",
      },
    },
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole("group");
    await userEvent.click(field);
    field.focus();
    for (const digit of "07092019") {
      await userEvent.keyboard(digit);
    }
    await waitFor(
      () => {
        const segmented = canvasElement.querySelector(".segmented-date-field");
        const compact = normalizedSegmentedDateText(segmented);
        expect(compact).toContain("2019");
      },
      { timeout: 5000 },
    );

    await userEvent.click(canvas.getByRole("button", { name: calendarTriggerAccessibleName }));

    await waitFor(() => {
      expect(document.getElementById("overlay-root")?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;
    const nextMonthButton = within(overlay).getByRole("button", { name: /mois suivant/i });

    await userEvent.click(nextMonthButton);

    await waitFor(() => {
      const monthHeaderAfterChevron = overlay.querySelector(
        '[data-datepicker-tab="month-label"]',
      ) as HTMLElement | null;
      expect(monthHeaderAfterChevron?.textContent ?? "").toMatch(/octobre/i);
    });

    const sept7AfterChevron = dayCellMatchingAriaLabel(overlay, /\b7\s+septembre.*2019/i);
    expect(sept7AfterChevron?.getAttribute("aria-selected")).not.toBe("true");

    await userEvent.keyboard("{Escape}");
    await waitFor(() => {
      expect(document.getElementById("overlay-root")?.querySelector("rte-datepicker-menu")).not.toBeInTheDocument();
    });

    await userEvent.click(canvas.getByRole("button", { name: calendarTriggerAccessibleName }));

    await waitFor(() => {
      expect(document.getElementById("overlay-root")?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlayAgain = document.getElementById("overlay-root") as HTMLElement;
    const sept7Open = dayCellMatchingAriaLabel(overlayAgain, /\b7\s+septembre.*2019/i);
    expect(sept7Open?.getAttribute("aria-selected")).toBe("true");

    const august26Cell = dayCellMatchingAriaLabel(overlayAgain, /\b26\b.*août.*2019/i);
    if (!august26Cell) {
      throw new globalThis.Error("Expected August 26 2019 in the September 2019 grid.");
    }
    august26Cell.focus();
    await userEvent.keyboard("{ArrowLeft}");

    await waitFor(() => {
      const monthHeader = overlayAgain.querySelector('[data-datepicker-tab="month-label"]') as HTMLElement | null;
      expect(monthHeader?.textContent ?? "").toMatch(/août/i);
    });

    const segmentedAfterKeyboard = canvasElement.querySelector(".segmented-date-field");
    const compactAfterKeyboard = normalizedSegmentedDateText(segmentedAfterKeyboard);
    expect(compactAfterKeyboard).toContain("07");
    expect(compactAfterKeyboard).toContain("09");
    expect(compactAfterKeyboard).toContain("2019");
  },
};

const datepickerStoryWithOutsideClickTargetTemplate = `
  <div style="width: 500px; display: flex; flex-direction: column; gap: 16px">
    ${datepickerStoryInnerTemplate}
    <button type="button">Outside</button>
  </div>
`;

export const HasActionsFalseImmediateCommit: Story = {
  name: "hasActions false: day click commits, closes menu, no footer",
  args: { hasActions: false },
  render: (args) => ({
    props: { ...args },
    template: `
      <div style="width: 500px">
        ${datepickerStoryInnerTemplate}
      </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await typeJuneFifteen2024(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: calendarTriggerAccessibleName }));

    await waitFor(() => {
      const overlayRoot = document.getElementById("overlay-root");
      expect(overlayRoot?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;
    expect(within(overlay).queryByRole("button", { name: /confirmer/i })).not.toBeInTheDocument();

    const day20 = dayCellButtonJune2024(overlay, 20);
    expect(day20).toBeTruthy();
    await userEvent.click(day20!);

    await waitFor(() => {
      expect(overlay.querySelector("rte-datepicker-menu")).not.toBeInTheDocument();
    });

    const segmented = canvasElement.querySelector(".segmented-date-field");
    const compact = normalizedSegmentedDateText(segmented);
    expect(compact).toContain("20");
    expect(compact).toContain("06");
    expect(compact).toContain("2024");
  },
};

export const ClickOutsideDiscardsPendingSelection: Story = {
  name: "hasActions true: click outside restores field to committed date",
  render: (args) => ({
    props: { ...args },
    template: datepickerStoryWithOutsideClickTargetTemplate,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await typeJuneFifteen2024(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: calendarTriggerAccessibleName }));

    await waitFor(() => {
      expect(document.getElementById("overlay-root")?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;
    const day20 = dayCellButtonJune2024(overlay, 20);
    expect(day20).toBeTruthy();
    await userEvent.click(day20!);

    const segmentedBeforeOutside = canvasElement.querySelector(".segmented-date-field");
    const compactBeforeOutside = normalizedSegmentedDateText(segmentedBeforeOutside);
    expect(compactBeforeOutside).toContain("15");
    expect(compactBeforeOutside).toContain("06");

    await userEvent.click(canvas.getByRole("button", { name: /^outside$/i }));

    await waitFor(() => {
      expect(document.getElementById("overlay-root")?.querySelector("rte-datepicker-menu")).not.toBeInTheDocument();
    });

    const segmentedAfter = canvasElement.querySelector(".segmented-date-field");
    const compactAfter = normalizedSegmentedDateText(segmentedAfter);
    expect(compactAfter).toContain("15");
    expect(compactAfter).toContain("06");
    expect(compactAfter).toContain("2024");
  },
};

export const EscapeAfterGridPickRestoresCommittedSegments: Story = {
  name: "hasActions true: Escape after grid pick restores committed date in field",
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await typeJuneFifteen2024(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: calendarTriggerAccessibleName }));

    await waitFor(() => {
      expect(document.getElementById("overlay-root")?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;
    const day20 = dayCellButtonJune2024(overlay, 20);
    expect(day20).toBeTruthy();
    await userEvent.click(day20!);

    const segmentedBeforeEsc = canvasElement.querySelector(".segmented-date-field");
    const compactBeforeEsc = normalizedSegmentedDateText(segmentedBeforeEsc);
    expect(compactBeforeEsc).toContain("15");
    expect(compactBeforeEsc).toContain("06");

    day20!.focus();
    await userEvent.keyboard("{Escape}");

    await waitFor(() => {
      expect(document.getElementById("overlay-root")?.querySelector("rte-datepicker-menu")).not.toBeInTheDocument();
    });

    const segmentedAfter = canvasElement.querySelector(".segmented-date-field");
    const compactAfter = normalizedSegmentedDateText(segmentedAfter);
    expect(compactAfter).toContain("15");
    expect(compactAfter).toContain("06");
    expect(compactAfter).toContain("2024");
  },
};

export const ClickSegmentedFieldClosesMenu: Story = {
  name: "Click segmented field while menu open closes calendar (restores draft)",
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await typeJuneFifteen2024(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: calendarTriggerAccessibleName }));

    await waitFor(() => {
      expect(document.getElementById("overlay-root")?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;
    const day20 = dayCellButtonJune2024(overlay, 20);
    expect(day20).toBeTruthy();
    await userEvent.click(day20!);

    const segmentedBeforeFieldClick = canvasElement.querySelector(".segmented-date-field");
    const compactBeforeFieldClick = normalizedSegmentedDateText(segmentedBeforeFieldClick);
    expect(compactBeforeFieldClick).toContain("15");
    expect(compactBeforeFieldClick).toContain("06");

    const field = canvas.getByRole("group");
    await userEvent.click(field);

    await waitFor(() => {
      expect(document.getElementById("overlay-root")?.querySelector("rte-datepicker-menu")).not.toBeInTheDocument();
    });

    const segmentedAfter = canvasElement.querySelector(".segmented-date-field");
    const compactAfter = normalizedSegmentedDateText(segmentedAfter);
    expect(compactAfter).toContain("15");
    expect(compactAfter).toContain("06");
    expect(compactAfter).toContain("2024");
  },
};
