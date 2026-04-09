import type { Meta, StoryObj } from "@storybook/angular";
import { expect, userEvent, waitFor, within } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../../../../.storybook/testing/testing.utils";
import { DatepickerComponent } from "../datepicker.component";

const calendarTriggerAccessibleName = /ouvrir le calendrier|changer la date/i;

function normalizedSegmentedDateText(root: Element | null | undefined): string {
  return (root?.textContent ?? "").replace(/[\s\u200b]/g, "");
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
    expect(canvas.queryByTestId("right-icon")).not.toBeInTheDocument();
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
    expect(menuOverlay.getByRole("button", { name: /décennie précédente/i })).toBeInTheDocument();
    expect(menuOverlay.getByRole("button", { name: /décennie suivante/i })).toBeInTheDocument();
    expect(overlay.querySelector(".month-label-static")).toBeInTheDocument();
    expect(overlay.querySelector('[data-datepicker-tab="month-label"]')).not.toBeInTheDocument();

    const yearCells = overlay.querySelectorAll("rte-datepicker-menu .year-cell");
    expect(yearCells.length).toBe(10);
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
