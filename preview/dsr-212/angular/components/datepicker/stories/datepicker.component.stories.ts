import type { Meta, StoryObj } from "@storybook/angular";
import { expect, userEvent, waitFor, within } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../../../../.storybook/testing/testing.utils";
import { DatepickerComponent } from "../datepicker.component";

import {
  activeDayCellLabelText,
  arrowLeftUntilMonthHeaderMatches,
  arrowRightUntilMonthHeaderMatches,
  calendarTriggerAccessibleName,
  dayCellButtonJune2024,
  dayGridMonthHeaderText,
  ensureDatepickerMenuClosed,
  findDayGridCellButton,
  getStoryOverlayRoot,
  normalizedSegmentedDateText,
  openDayGridAfterTyping,
  openDayPickerOverlay,
  playMonthGridKeyboardScenario,
  playYearGridKeyboardScenario,
  typeJuneFifteen2024,
  typeJuneFifteenAndOpenDayGridOverlay,
  typeSegmentedDdMmYyyyDigits,
} from "./datepicker.component.stories.helpers";

export type DatepickerStoryWrapperArgs = {
  storyContainerWidth?: string;
  storyContainerMaxWidth?: string;
};

const meta: Meta<DatepickerComponent & DatepickerStoryWrapperArgs> = {
  title: "Composants/Datepicker/Datepicker",
  component: DatepickerComponent,
  tags: ["autodocs"],
  argTypes: {
    labelPosition: { control: "select", options: ["top", "side"] },
    storyContainerWidth: { control: "text", name: "Container width (layout story)" },
    storyContainerMaxWidth: { control: "text", name: "Container max-width (layout story)" },
    valueChange: { action: "value changed" },
    openedChange: { action: "opened changed" },
  },
  args: {
    id: "datepicker",
    hasLabel: true,
    labelText: "Label",
    labelPosition: "top",
    disabled: false,
    readOnly: false,
    error: false,
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
type Story = StoryObj<DatepickerComponent & DatepickerStoryWrapperArgs>;

const datepickerStoryFieldBindings = `
          [hasLabel]="hasLabel"
          [labelText]="labelText"
          [labelPosition]="labelPosition"
          [disabled]="disabled"
          [readOnly]="readOnly"
          [error]="error"
          [isRequiredOptional]="isRequiredOptional"
          [required]="required"
          [showLabelRequirement]="showLabelRequirement"
          [hasAssistiveText]="hasAssistiveText"
          [assistiveTextLabel]="assistiveTextLabel"
          [assistiveTextAppearance]="assistiveTextAppearance"
          [showAssistiveIcon]="showAssistiveIcon"
          [locale]="locale"
          (valueChange)="valueChange($event)"
          (openedChange)="openedChange($event)"`;

const datepickerStoryInnerTemplate = `
        <rte-datepicker
          [id]="id"
          ${datepickerStoryFieldBindings}
          [minDate]="minDate"
          [maxDate]="maxDate"
          [disabledDates]="disabledDates"
          [hasActions]="hasActions"
        />`;

function rteDatepickerWithPickerId(pickerId: string, hasActionsBinding = `[hasActions]="hasActions"`): string {
  return `
        <rte-datepicker
          [id]="'${pickerId}'"
          ${datepickerStoryFieldBindings}
          [minDate]="minDate"
          [maxDate]="maxDate"
          [disabledDates]="disabledDates"
          ${hasActionsBinding}
        />`;
}

const segmentedFieldPhasesTemplate = `
      <div style="display:flex; flex-direction:column; gap:16px; width:500px">
        ${["seg-sf-1", "seg-sf-2", "seg-sf-3", "seg-sf-4", "seg-sf-5", "seg-sf-6", "seg-sf-7"]
          .map(
            (pickerId, index) => `
        <div data-story-segmented-phase="${index + 1}">
          ${rteDatepickerWithPickerId(pickerId)}
        </div>`,
          )
          .join("")}
      </div>`;

const openCalendarHeaderSyncTemplate = `
      <div style="display:flex; flex-direction:column; gap:24px; width:500px">
        <div data-story-open-header="partial">
          ${rteDatepickerWithPickerId("datepicker-open-partial")}
        </div>
        <div data-story-open-header="full">
          ${rteDatepickerWithPickerId("datepicker-open-full")}
        </div>
      </div>`;

const calendarConstraintsTemplate = `
      <div style="display:flex; flex-direction:column; gap:24px; width:500px">
        <section data-constraint-root="min">
          <rte-datepicker
            [id]="'constraint-min'"
            ${datepickerStoryFieldBindings}
            [minDate]="constraintStoryMinJune152024"
          [hasActions]="hasActions"
          />
        </section>
        <section data-constraint-root="max">
          <rte-datepicker
            [id]="'constraint-max'"
            ${datepickerStoryFieldBindings}
            [maxDate]="constraintStoryMaxJune252024"
            [hasActions]="hasActions"
          />
        </section>
        <section data-constraint-root="range">
          <rte-datepicker
            [id]="'constraint-range'"
            ${datepickerStoryFieldBindings}
            [minDate]="constraintStoryMinJune152024"
            [maxDate]="constraintStoryMaxJune252024"
            [hasActions]="hasActions"
          />
        </section>
        <section data-constraint-root="disabled">
          <rte-datepicker
            [id]="'constraint-disabled'"
            ${datepickerStoryFieldBindings}
            [disabledDates]="constraintStoryDisabledJune182024"
            [hasActions]="hasActions"
          />
        </section>
      </div>`;

const pendingVersusCommittedTemplate = `
      <div style="width: 500px; display: flex; flex-direction: column; gap: 24px">
        <div data-pending-root="immediate">
          ${rteDatepickerWithPickerId("pending-immediate", `[hasActions]="false"`)}
      </div>
        <div data-pending-root="restore">
          ${rteDatepickerWithPickerId("pending-restore")}
          <button type="button">Outside</button>
        </div>
      </div>`;

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

export const SegmentedField: Story = {
  name: "Segmented field: typing, navigation, and a11y (7 phases)",
  render: (args) => ({
    props: { ...args },
    template: segmentedFieldPhasesTemplate,
  }),
  play: async ({ canvasElement }) => {
    const phaseRoot = (phaseIndex: number): HTMLElement => {
      const root = canvasElement.querySelector(`[data-story-segmented-phase="${phaseIndex}"]`);
      if (!root) {
        throw new globalThis.Error(`Missing segmented phase root ${phaseIndex}.`);
      }
      return root as HTMLElement;
    };

    const phase1 = phaseRoot(1);
    const field1 = within(phase1).getByRole("group") as HTMLElement;
    field1.focus();
    expect(field1.getAttribute("aria-description")).toBeNull();
    expect(field1.getAttribute("aria-activedescendant")).toBeNull();
    const segments1 = phase1.querySelectorAll(".segmented-date-field .segment");
    expect(segments1.length).toBe(3);
    for (const segment of Array.from(segments1)) {
      expect(segment.getAttribute("aria-hidden")).toBe("true");
    }

    const phase2 = phaseRoot(2);
    const canvas2 = within(phase2);
    const field2 = canvas2.getByRole("group") as HTMLElement;
    field2.focus();
    for (const digit of "07092019") {
      await userEvent.keyboard(digit);
    }
    await waitFor(
      () => {
        const segmented = phase2.querySelector(".segmented-date-field");
        expect(normalizedSegmentedDateText(segmented)).toContain("2019");
      },
      { timeout: 5000 },
    );
    field2.blur();
    field2.focus();
    await waitFor(() => {
      const description = field2.getAttribute("aria-description");
      expect(description).toBeTruthy();
      expect(description!.toLowerCase()).toMatch(/septembre|2019/);
    });
    expect(field2.getAttribute("aria-activedescendant")).toBeNull();
    const segmentsBeforeArrow = phase2.querySelectorAll(".segmented-date-field .segment");
    for (const segment of Array.from(segmentsBeforeArrow)) {
      expect(segment.getAttribute("aria-hidden")).toBe("true");
    }

    await userEvent.keyboard("{ArrowLeft}");
    await waitFor(() => {
      expect(field2.getAttribute("aria-description")).toBeNull();
      expect(field2.getAttribute("aria-activedescendant")).toBe("seg-sf-2-segment-month");
    });
    const monthSegment = phase2.querySelector("#seg-sf-2-segment-month");
    expect(monthSegment?.getAttribute("aria-hidden")).toBeNull();

    const phase3 = phaseRoot(3);
    const canvas3 = within(phase3);
    const field3 = canvas3.getByRole("group");
    field3.focus();
    expect(field3).toHaveFocus();
    await userEvent.keyboard("13");
    await waitFor(() => {
      const segmented = phase3.querySelector(".segmented-date-field");
      const compact = segmented?.textContent?.replace(/\s/g, "") ?? "";
      expect(compact.startsWith("13")).toBe(true);
    });
    expect(field3).toHaveFocus();

    const phase4 = phaseRoot(4);
    const canvas4 = within(phase4);
    const field4 = canvas4.getByRole("group");
    await userEvent.click(field4);
    field4.focus();
    await userEvent.keyboard("2");
    await waitFor(() => {
      const daySegment = phase4.querySelectorAll(".segment")[0];
      expect(normalizedSegmentedDateText(daySegment)).toMatch(/^02$/);
    });
    await userEvent.keyboard("{ArrowRight}{ArrowRight}");
    await waitFor(() => {
      const yearSegment = phase4.querySelectorAll(".segment")[2];
      expect(yearSegment?.classList.contains("segment--active")).toBe(true);
      expect(normalizedSegmentedDateText(yearSegment)).toMatch(/^Y{4}$/);
    });
    await userEvent.keyboard("13");
    await waitFor(() => {
      const segments = phase4.querySelectorAll(".segment");
      expect(normalizedSegmentedDateText(segments[0])).toMatch(/^02$/);
      expect(normalizedSegmentedDateText(segments[1])).toMatch(/^MM$/);
      expect(normalizedSegmentedDateText(segments[2])).toContain("13");
    });
    await waitFor(() => {
      const segments = phase4.querySelectorAll(".segment");
      expect(segments[2]?.classList.contains("segment--active")).toBe(true);
    });
    expect(field4).toHaveFocus();

    const phase5 = phaseRoot(5);
    const canvas5 = within(phase5);
    const field5 = canvas5.getByRole("group");
    field5.focus();
    await userEvent.keyboard("{ArrowRight}{ArrowRight}");
    await waitFor(() => {
      expect(normalizedSegmentedDateText(phase5.querySelector(".segment--active"))).toMatch(/^Y{4}$/);
    });
    await userEvent.keyboard("1992");
    await waitFor(
      () => {
        const segments = phase5.querySelectorAll(".segment");
        expect(segments.length).toBe(3);
        expect(normalizedSegmentedDateText(segments[0])).toMatch(/^DD$/);
        expect(normalizedSegmentedDateText(segments[1])).toMatch(/^MM$/);
        expect(normalizedSegmentedDateText(segments[2])).toContain("1992");
      },
      { timeout: 5000 },
    );
    expect(field5).toHaveFocus();

    const phase6 = phaseRoot(6);
    const canvas6 = within(phase6);
    const field6 = canvas6.getByRole("group");
    field6.focus();
    await userEvent.keyboard("1");
    await waitFor(() => {
      expect(phase6.querySelector(".segment--active")?.textContent?.trim()).toBe("01");
    });
    await userEvent.keyboard("{Backspace}");
    await waitFor(() => {
      expect(phase6.querySelector(".segment--active")?.textContent?.trim()).toBe("DD");
    });
    expect(field6).toHaveFocus();

    const phase7 = phaseRoot(7);
    const field7 = within(phase7).getByRole("group");
    field7.focus();
    expect(phase7.querySelector(".segment--active")?.textContent?.trim()).toBe("DD");
    await userEvent.keyboard("{ArrowRight}");
    await waitFor(() => {
      expect(phase7.querySelector(".segment--active")?.textContent?.trim()).toBe("MM");
    });
    await userEvent.keyboard("{ArrowRight}");
    await waitFor(() => {
      expect(phase7.querySelector(".segment--active")?.textContent?.trim()).toBe("YYYY");
    });
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    error: true,
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
    disabled: true,
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

export const CalendarConstraints: Story = {
  name: "Calendar constraints: min, max, range, and disabledDates (4 instances)",
  tags: ["skip-ci"],
  render: (args) => ({
    props: {
      ...args,
      constraintStoryMinJune152024: new Date(2024, 5, 15),
      constraintStoryMaxJune252024: new Date(2024, 5, 25),
      constraintStoryDisabledJune182024: [new Date(2024, 5, 18), new Date(2024, 5, 19)],
    },
    template: calendarConstraintsTemplate,
  }),
  play: async ({ canvasElement }) => {
    const constraintHost = (name: string): HTMLElement => {
      const root = canvasElement.querySelector(`[data-constraint-root="${name}"]`);
      if (!root) {
        throw new globalThis.Error(`Missing constraint root ${name}.`);
      }
      return root as HTMLElement;
    };

    const phaseMin = constraintHost("min");
    const overlayMin = await typeJuneFifteenAndOpenDayGridOverlay(phaseMin);
    const day10 = dayCellButtonJune2024(overlayMin, 10);
    const day15 = dayCellButtonJune2024(overlayMin, 15);
    expect(day10).toBeTruthy();
    expect(day10).toBeDisabled();
    expect(day15).toBeTruthy();
    expect(day15).not.toBeDisabled();
    await ensureDatepickerMenuClosed(canvasElement);

    const phaseMax = constraintHost("max");
    const overlayMax = await typeJuneFifteenAndOpenDayGridOverlay(phaseMax);
    const day25 = dayCellButtonJune2024(overlayMax, 25);
    const day30 = dayCellButtonJune2024(overlayMax, 30);
    expect(day25).toBeTruthy();
    expect(day25).not.toBeDisabled();
    expect(day30).toBeTruthy();
    expect(day30).toBeDisabled();
    await ensureDatepickerMenuClosed(canvasElement);

    const phaseRange = constraintHost("range");
    const overlayRange = await typeJuneFifteenAndOpenDayGridOverlay(phaseRange);
    const day10Range = dayCellButtonJune2024(overlayRange, 10);
    const day20Range = dayCellButtonJune2024(overlayRange, 20);
    const day30Range = dayCellButtonJune2024(overlayRange, 30);
    expect(day10Range).toBeTruthy();
    expect(day10Range).toBeDisabled();
    expect(day20Range).toBeTruthy();
    expect(day20Range).not.toBeDisabled();
    expect(day30Range).toBeTruthy();
    expect(day30Range).toBeDisabled();
    await ensureDatepickerMenuClosed(canvasElement);

    const phaseDisabled = constraintHost("disabled");
    const overlayDisabled = await typeJuneFifteenAndOpenDayGridOverlay(phaseDisabled);
    const day17 = dayCellButtonJune2024(overlayDisabled, 17);
    const day18 = dayCellButtonJune2024(overlayDisabled, 18);
    const day19 = dayCellButtonJune2024(overlayDisabled, 19);
    const day20Disabled = dayCellButtonJune2024(overlayDisabled, 20);
    expect(day17).toBeTruthy();
    expect(day17).not.toBeDisabled();
    expect(day18).toBeTruthy();
    expect(day18).toBeDisabled();
    expect(day19).toBeTruthy();
    expect(day19).toBeDisabled();
    expect(day20Disabled).toBeTruthy();
    expect(day20Disabled).not.toBeDisabled();
  },
};

export const SmokeOpenMenuFlows: Story = {
  name: "Smoke: open, confirm selection, then Esc closes",
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole("button", { name: calendarTriggerAccessibleName });

    await userEvent.click(calendarButton);
    await waitFor(() => {
      const overlay = getStoryOverlayRoot(canvasElement);
      expect(overlay?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });
    let overlay = getStoryOverlayRoot(canvasElement) as HTMLElement;
    const dayButtons = overlay.querySelectorAll("rte-datepicker-menu .day-cell");
    expect(dayButtons.length).toBeGreaterThan(0);
    await userEvent.click(dayButtons[10] as HTMLElement);
    await userEvent.click(within(overlay).getByRole("button", { name: /confirmer/i }));
    await waitFor(() => {
      expect(overlay.querySelector("rte-datepicker-menu")).not.toBeInTheDocument();
    });

    await userEvent.click(calendarButton);
    await waitFor(() => {
      expect(getStoryOverlayRoot(canvasElement)?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });
    overlay = getStoryOverlayRoot(canvasElement) as HTMLElement;
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

export const OverlayChromeAndTabOrder: Story = {
  name: "Overlay: view modes + Tab order (day and month views)",
  render: Default.render,
  tags: ["skip-ci"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole("button", { name: calendarTriggerAccessibleName });

    await userEvent.click(calendarButton);
    await waitFor(() => {
      expect(getStoryOverlayRoot(canvasElement)?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });
    let overlay = getStoryOverlayRoot(canvasElement) as HTMLElement;
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
    await ensureDatepickerMenuClosed(canvasElement);

    await userEvent.click(calendarButton);
    await waitFor(() => {
      expect(getStoryOverlayRoot(canvasElement)?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });
    overlay = getStoryOverlayRoot(canvasElement) as HTMLElement;
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
    expect(overlay.querySelectorAll("rte-datepicker-menu .year-cell").length).toBe(11);
    await ensureDatepickerMenuClosed(canvasElement);

    await userEvent.click(calendarButton);
    await waitFor(() => {
      expect(getStoryOverlayRoot(canvasElement)?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });
    overlay = getStoryOverlayRoot(canvasElement) as HTMLElement;
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
    await ensureDatepickerMenuClosed(canvasElement);

    await userEvent.click(calendarButton);
    await waitFor(() => {
      expect(getStoryOverlayRoot(canvasElement)?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });
    overlay = getStoryOverlayRoot(canvasElement) as HTMLElement;
    const monthHeaderButton = overlay.querySelector('[data-datepicker-tab="month-label"]') as HTMLButtonElement | null;
    expect(monthHeaderButton).toBeTruthy();
    await userEvent.click(monthHeaderButton!);
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

export const OpenCalendarAndHeaderSync: Story = {
  name: "Open calendar: partial input vs full date header",
  render: (args) => ({
    props: { ...args },
    template: openCalendarHeaderSyncTemplate,
  }),
  play: async ({ canvasElement }) => {
    const partialRoot = canvasElement.querySelector('[data-story-open-header="partial"]') as HTMLElement;
    const fullRoot = canvasElement.querySelector('[data-story-open-header="full"]') as HTMLElement;
    expect(partialRoot).toBeTruthy();
    expect(fullRoot).toBeTruthy();

    const partialCanvas = within(partialRoot);
    const partialField = partialCanvas.getByRole("group");
    partialField.focus();
    await userEvent.keyboard("12");
    await userEvent.click(partialCanvas.getByRole("button", { name: calendarTriggerAccessibleName }));
    await waitFor(() => {
      expect(getStoryOverlayRoot(canvasElement)?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });
    await ensureDatepickerMenuClosed(canvasElement);

    await typeSegmentedDdMmYyyyDigits(fullRoot, "13021992", ["13", "02", "1992"]);
    const overlay = await openDayPickerOverlay(fullRoot);
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

export const MonthGridKeyboardNavigation: Story = {
  name: "Month grid: ArrowLeft, ArrowRight, ArrowUp (year boundaries)",
  render: Default.render,
  tags: ["skip-ci"],
  play: async ({ canvasElement }) => {
    await playMonthGridKeyboardScenario(canvasElement, {
      typedDigits: "15012024",
      segmentedWaitContains: ["2024"],
      activeMonthBeforeKey: /janvier/i,
      key: "{ArrowLeft}",
      expectHeaderYear: "2023",
      expectActiveMonthAfter: /décembre/i,
      segmentedFinalContains: ["15", "01", "2024"],
    });
    await ensureDatepickerMenuClosed(canvasElement);
    await playMonthGridKeyboardScenario(canvasElement, {
      typedDigits: "15122024",
      segmentedWaitContains: ["2024"],
      activeMonthBeforeKey: /décembre/i,
      key: "{ArrowRight}",
      expectHeaderYear: "2025",
      expectActiveMonthAfter: /janvier/i,
      segmentedFinalContains: ["15", "12", "2024"],
    });
    await ensureDatepickerMenuClosed(canvasElement);
    await playMonthGridKeyboardScenario(canvasElement, {
      typedDigits: "15012024",
      segmentedWaitContains: ["2024"],
      activeMonthBeforeKey: /janvier/i,
      key: "{ArrowUp}",
      expectHeaderYear: "2023",
      expectActiveMonthAfter: /octobre/i,
      segmentedFinalContains: ["2024"],
    });
  },
};

export const YearGridKeyboardNavigation: Story = {
  name: "Year grid: ArrowLeft and ArrowRight (decade paging)",
  render: Default.render,
  play: async ({ canvasElement }) => {
    await playYearGridKeyboardScenario(canvasElement, {
      typedDigits: "15062024",
      segmentedWaitContains: ["2024"],
      initialDecadePattern: /2020\s*[–-]\s*2030/,
      targetYearLabel: /^2020$/,
      key: "{ArrowLeft}",
      expectDecadeAfterPattern: /2010\s*[–-]\s*2020/,
      expectActiveYearTrimmed: "2019",
    });
    await ensureDatepickerMenuClosed(canvasElement);
    await playYearGridKeyboardScenario(canvasElement, {
      typedDigits: "15062024",
      segmentedWaitContains: ["2024"],
      initialDecadePattern: /2020\s*[–-]\s*2030/,
      targetYearLabel: /^2030$/,
      key: "{ArrowRight}",
      expectDecadeAfterPattern: /2030\s*[–-]\s*2040/,
      expectActiveYearTrimmed: "2031",
    });
  },
};

export const DayGridAnchorAndMonthChevron: Story = {
  name: "Day grid: anchor month navigation + chevron cell count",
  render: Default.render,
  play: async ({ canvasElement }) => {
    let overlay = await openDayGridAfterTyping(canvasElement, {
      digits: "31012025",
      waitContains: ["31", "2025"],
    });
    let nextMonthButton = within(overlay).getByRole("button", { name: /mois suivant/i });
    await userEvent.click(nextMonthButton);
    await waitFor(() => {
      const feb28 = findDayGridCellButton(overlay, 28, "current-month");
      expect(feb28).toBeTruthy();
      expect(feb28?.getAttribute("aria-selected")).toBe("true");
    });
    await userEvent.click(nextMonthButton);
    await waitFor(() => {
      const mar31 = findDayGridCellButton(overlay, 31, "current-month");
      expect(mar31).toBeTruthy();
      expect(mar31?.getAttribute("aria-selected")).toBe("true");
    });
    await ensureDatepickerMenuClosed(canvasElement);

    overlay = await openDayGridAfterTyping(canvasElement, {
      digits: "31012024",
      waitContains: ["31", "2024"],
    });
    nextMonthButton = within(overlay).getByRole("button", { name: /mois suivant/i });
    await userEvent.click(nextMonthButton);
    await waitFor(() => {
      const feb29 = findDayGridCellButton(overlay, 29, "current-month");
      expect(feb29).toBeTruthy();
      expect(feb29?.getAttribute("aria-selected")).toBe("true");
    });
    await userEvent.click(nextMonthButton);
    await waitFor(() => {
      const mar31Leap = findDayGridCellButton(overlay, 31, "current-month");
      expect(mar31Leap).toBeTruthy();
      expect(mar31Leap?.getAttribute("aria-selected")).toBe("true");
    });
    await ensureDatepickerMenuClosed(canvasElement);

    overlay = await openDayGridAfterTyping(canvasElement, {
      digits: "01022021",
      waitContains: ["2021"],
    });
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

export const DayGridLayout: Story = {
  name: "Day grid: row counts (Feb 2021, March 2026, March with April pending)",
  render: Default.render,
  play: async ({ canvasElement }) => {
    let overlay = await openDayGridAfterTyping(canvasElement, {
      digits: "15022021",
      waitContains: ["2021"],
      assertHeader(overlayInner) {
        const monthHeader = overlayInner.querySelector('[data-datepicker-tab="month-label"]') as HTMLElement | null;
        expect(monthHeader?.textContent ?? "").toMatch(/février/i);
        expect(monthHeader?.textContent ?? "").toContain("2021");
      },
    });
    expect(overlay.querySelectorAll(".rte-datepicker-day-grid .day-cell").length).toBe(28);
    await ensureDatepickerMenuClosed(canvasElement);

    overlay = await openDayGridAfterTyping(canvasElement, {
      digits: "15032026",
      waitContains: ["2026"],
      assertHeader(overlayInner) {
        const monthHeader = overlayInner.querySelector('[data-datepicker-tab="month-label"]') as HTMLElement | null;
        expect(monthHeader?.textContent ?? "").toMatch(/mars/i);
        expect(monthHeader?.textContent ?? "").toContain("2026");
      },
    });
    expect(overlay.querySelectorAll(".rte-datepicker-day-grid .day-cell").length).toBe(42);
    await ensureDatepickerMenuClosed(canvasElement);

    overlay = await openDayGridAfterTyping(canvasElement, {
      digits: "10042026",
      waitContains: ["2026"],
      assertHeader(overlayInner) {
        expect(dayGridMonthHeaderText(overlayInner)).toMatch(/avril/i);
      },
    });
    await arrowLeftUntilMonthHeaderMatches(overlay, /mars/i);
    expect(dayGridMonthHeaderText(overlay)).toContain("2026");
    expect(overlay.querySelectorAll(".rte-datepicker-day-grid .day-cell").length).toBe(42);
  },
};

export const DayGridKeyboardAndBoundaries: Story = {
  name: "Day grid: keyboard navigation and month boundaries",
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    let overlay = await openDayGridAfterTyping(canvasElement, {
      digits: "15052026",
      waitContains: ["2026"],
      assertHeader(overlayInner) {
        expect(dayGridMonthHeaderText(overlayInner)).toMatch(/mai/i);
      },
    });
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
    await ensureDatepickerMenuClosed(canvasElement);

    overlay = await openDayGridAfterTyping(canvasElement, {
      digits: "01032025",
      waitContains: ["2025"],
    });
    const monthHeaderBefore = overlay.querySelector('[data-datepicker-tab="month-label"]') as HTMLElement | null;
    expect(monthHeaderBefore?.textContent ?? "").toMatch(/mars/i);
    const february26Cell = findDayGridCellButton(overlay, 26, "leading-or-trailing");
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
      const selectedFeb26 = findDayGridCellButton(overlay, 26, "current-month");
      expect(selectedFeb26?.getAttribute("aria-selected")).toBe("true");
    });
    await ensureDatepickerMenuClosed(canvasElement);

    overlay = await openDayGridAfterTyping(canvasElement, {
      digits: "07092019",
      waitContains: ["2019"],
      assertHeader(overlayInner) {
        expect(
          (overlayInner.querySelector('[data-datepicker-tab="month-label"]') as HTMLElement | null)?.textContent ?? "",
        ).toMatch(/septembre/i);
      },
    });
    const september7Cell = findDayGridCellButton(overlay, 7, "current-month");
    if (!september7Cell) {
      throw new globalThis.Error("Expected 7 September 2019 in the grid.");
    }
    expect(september7Cell.getAttribute("aria-selected")).toBe("true");
    const august26Cell = findDayGridCellButton(overlay, 26, "leading-or-trailing");
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
      const activeAugust25 = findDayGridCellButton(overlay, 25, "current-month");
      expect(activeAugust25?.getAttribute("data-datepicker-active")).toBe("true");
    });
    let segmentedField = canvasElement.querySelector(".segmented-date-field");
    let compactField = normalizedSegmentedDateText(segmentedField);
    expect(compactField).toContain("07");
    expect(compactField).toContain("09");
    expect(compactField).toContain("2019");
    await ensureDatepickerMenuClosed(canvasElement);

    overlay = await openDayGridAfterTyping(canvasElement, {
      digits: "07092019",
      waitContains: ["2019"],
      assertHeader(overlayInner) {
        expect(
          (overlayInner.querySelector('[data-datepicker-tab="month-label"]') as HTMLElement | null)?.textContent ?? "",
        ).toMatch(/septembre/i);
      },
    });
    const september7BeforeRight = findDayGridCellButton(overlay, 7, "current-month");
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
      expect(activeAfterRight?.hasAttribute("aria-label")).toBe(false);
    });
    segmentedField = canvasElement.querySelector(".segmented-date-field");
    compactField = normalizedSegmentedDateText(segmentedField);
    expect(compactField).toContain("07");
    expect(compactField).toContain("09");
    expect(compactField).toContain("2019");
    await ensureDatepickerMenuClosed(canvasElement);

    overlay = await openDayGridAfterTyping(canvasElement, {
      digits: "07092019",
      waitContains: ["2019"],
    });
    const nextMonthButton = within(overlay).getByRole("button", { name: /mois suivant/i });
    await userEvent.click(nextMonthButton);
    await waitFor(() => {
      const monthHeaderAfterChevron = overlay.querySelector(
        '[data-datepicker-tab="month-label"]',
      ) as HTMLElement | null;
      expect(monthHeaderAfterChevron?.textContent ?? "").toMatch(/octobre/i);
    });
    const sept7AfterChevron = findDayGridCellButton(overlay, 7, "leading-or-trailing");
    expect(sept7AfterChevron?.getAttribute("aria-selected")).not.toBe("true");
    await userEvent.keyboard("{Escape}");
    await waitFor(() => {
      expect(getStoryOverlayRoot(canvasElement)?.querySelector("rte-datepicker-menu")).not.toBeInTheDocument();
    });
    await userEvent.click(canvas.getByRole("button", { name: calendarTriggerAccessibleName }));
    await waitFor(() => {
      expect(getStoryOverlayRoot(canvasElement)?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });
    const overlayAgain = getStoryOverlayRoot(canvasElement) as HTMLElement;
    const sept7Open = findDayGridCellButton(overlayAgain, 7, "current-month");
    expect(sept7Open?.getAttribute("aria-selected")).toBe("true");
    const august26Again = findDayGridCellButton(overlayAgain, 26, "leading-or-trailing");
    if (!august26Again) {
      throw new globalThis.Error("Expected August 26 2019 in the September 2019 grid.");
    }
    august26Again.focus();
    await userEvent.keyboard("{ArrowLeft}");
    await waitFor(() => {
      const monthHeader = overlayAgain.querySelector('[data-datepicker-tab="month-label"]') as HTMLElement | null;
      expect(monthHeader?.textContent ?? "").toMatch(/août/i);
    });
    segmentedField = canvasElement.querySelector(".segmented-date-field");
    compactField = normalizedSegmentedDateText(segmentedField);
    expect(compactField).toContain("07");
    expect(compactField).toContain("09");
    expect(compactField).toContain("2019");
    await ensureDatepickerMenuClosed(canvasElement);
  },
};

export const PendingVersusCommitted: Story = {
  name: "Pending vs committed: hasActions false + restore flows",
  render: (args) => ({
    props: { ...args },
    template: pendingVersusCommittedTemplate,
  }),
  play: async ({ canvasElement }) => {
    const immediateRoot = canvasElement.querySelector('[data-pending-root="immediate"]') as HTMLElement;
    const restoreRoot = canvasElement.querySelector('[data-pending-root="restore"]') as HTMLElement;
    expect(immediateRoot).toBeTruthy();
    expect(restoreRoot).toBeTruthy();

    const overlayImmediate = await typeJuneFifteenAndOpenDayGridOverlay(immediateRoot);
    expect(within(overlayImmediate).queryByRole("button", { name: /confirmer/i })).not.toBeInTheDocument();
    const day20Immediate = dayCellButtonJune2024(overlayImmediate, 20);
    expect(day20Immediate).toBeTruthy();
    await userEvent.click(day20Immediate!);
    await waitFor(() => {
      expect(overlayImmediate.querySelector("rte-datepicker-menu")).not.toBeInTheDocument();
    });
    const compactImmediate = normalizedSegmentedDateText(immediateRoot.querySelector(".segmented-date-field"));
    expect(compactImmediate).toContain("20");
    expect(compactImmediate).toContain("06");
    expect(compactImmediate).toContain("2024");

    const restoreCanvas = within(restoreRoot);
    await typeJuneFifteen2024(restoreRoot);
    let overlay = await openDayPickerOverlay(restoreRoot);
    let day20 = dayCellButtonJune2024(overlay, 20);
    expect(day20).toBeTruthy();
    await userEvent.click(day20!);
    let segmentedBefore = restoreRoot.querySelector(".segmented-date-field");
    expect(normalizedSegmentedDateText(segmentedBefore)).toContain("20");
    await userEvent.click(restoreCanvas.getByRole("button", { name: /^outside$/i }));
    await waitFor(() => {
      expect(getStoryOverlayRoot(canvasElement)?.querySelector("rte-datepicker-menu")).not.toBeInTheDocument();
    });
    let segmentedAfter = restoreRoot.querySelector(".segmented-date-field");
    let compactAfter = normalizedSegmentedDateText(segmentedAfter);
    expect(compactAfter).toContain("15");
    expect(compactAfter).toContain("06");
    expect(compactAfter).toContain("2024");

    overlay = await openDayPickerOverlay(restoreRoot);
    day20 = dayCellButtonJune2024(overlay, 20);
    expect(day20).toBeTruthy();
    await userEvent.click(day20!);
    segmentedBefore = restoreRoot.querySelector(".segmented-date-field");
    expect(normalizedSegmentedDateText(segmentedBefore)).toContain("20");
    day20!.focus();
    await userEvent.keyboard("{Escape}");
    await waitFor(() => {
      expect(getStoryOverlayRoot(canvasElement)?.querySelector("rte-datepicker-menu")).not.toBeInTheDocument();
    });
    segmentedAfter = restoreRoot.querySelector(".segmented-date-field");
    compactAfter = normalizedSegmentedDateText(segmentedAfter);
    expect(compactAfter).toContain("15");
    expect(compactAfter).toContain("06");
    expect(compactAfter).toContain("2024");

    overlay = await openDayPickerOverlay(restoreRoot);
    day20 = dayCellButtonJune2024(overlay, 20);
    expect(day20).toBeTruthy();
    await userEvent.click(day20!);
    await userEvent.click(within(overlay).getByRole("button", { name: /^annuler$/i }));
    await waitFor(() => {
      expect(getStoryOverlayRoot(canvasElement)?.querySelector("rte-datepicker-menu")).not.toBeInTheDocument();
    });
    segmentedAfter = restoreRoot.querySelector(".segmented-date-field");
    compactAfter = normalizedSegmentedDateText(segmentedAfter);
    expect(compactAfter).toContain("15");
    expect(compactAfter).toContain("06");
    expect(compactAfter).toContain("2024");

    overlay = await openDayPickerOverlay(restoreRoot);
    day20 = dayCellButtonJune2024(overlay, 20);
    expect(day20).toBeTruthy();
    await userEvent.click(day20!);
    segmentedBefore = restoreRoot.querySelector(".segmented-date-field");
    expect(normalizedSegmentedDateText(segmentedBefore)).toContain("20");
    await userEvent.click(restoreCanvas.getByRole("group"));
    await waitFor(() => {
      expect(getStoryOverlayRoot(canvasElement)?.querySelector("rte-datepicker-menu")).not.toBeInTheDocument();
    });
    segmentedAfter = restoreRoot.querySelector(".segmented-date-field");
    compactAfter = normalizedSegmentedDateText(segmentedAfter);
    expect(compactAfter).toContain("15");
    expect(compactAfter).toContain("06");
    expect(compactAfter).toContain("2024");
  },
};
