import { Component, effect, input, output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TESTING_ESCAPE_KEY, type DateRangePickerValue } from "@design-system-rte/core";
import { DATEPICKER_DEFAULT_WIDTH } from "@design-system-rte/core/components/datepicker";
import type { Meta, StoryObj } from "@storybook/angular";
import { expect, userEvent, waitFor, within } from "@storybook/test";

import {
  getStoryOverlayRoot,
  normalizedSegmentedDateText,
} from "../../datepicker/stories/datepicker.component.stories.helpers";
import { DaterangepickerComponent } from "../daterangepicker.component";

type DateRangeBound = [Date | null, Date | null];

const getDropdown = async (canvasElement: HTMLElement): Promise<HTMLElement> => {
  let overlayRoot!: HTMLElement;

  await waitFor(
    () => {
      const root = getStoryOverlayRoot(canvasElement);
      const menu = root?.querySelector("rte-daterangepicker-menu");
      if (!root || !menu) {
        throw new globalThis.Error("Dropdown not found");
      }
      expect(menu).toBeInTheDocument();
      overlayRoot = root;
    },
    { timeout: 10000 },
  );

  return overlayRoot;
};

const openDaterangepickerOverlay = async (canvasElement: HTMLElement): Promise<HTMLElement> => {
  const canvas = within(canvasElement);
  const openButton = canvas.getByRole("button", { name: /Ouvrir le sélecteur de date de début/i });
  await userEvent.click(openButton);
  try {
    return await getDropdown(canvasElement);
  } catch {
    await userEvent.click(openButton);
    return getDropdown(canvasElement);
  }
};

const getPicker = (canvasElement: HTMLElement): HTMLElement => {
  const picker = canvasElement.querySelector("rte-daterangepicker");
  if (!(picker instanceof HTMLElement)) {
    throw new globalThis.Error("rte-daterangepicker not found");
  }
  return picker;
};

const getRangeField = (picker: HTMLElement, index: number): HTMLElement => {
  const field = picker.querySelectorAll("rte-datepicker-segmented-field")[index];
  if (!(field instanceof HTMLElement)) {
    throw new globalThis.Error(`range field at index ${index} not found`);
  }
  return field;
};

const typeRangeFieldDigits = async (field: HTMLElement, digits: string): Promise<void> => {
  const group = within(field).getByRole("group");
  const day = digits.slice(0, 2);
  const month = digits.slice(2, 4);
  const year = digits.slice(4);

  await userEvent.click(group);
  await userEvent.paste(digits);

  await waitFor(() => {
    const compact = normalizedSegmentedDateText(field.querySelector(".segmented-date-field"));
    expect(compact).toContain(day);
    expect(compact).toContain(month);
    expect(compact).toContain(year);
  });
};

@Component({
  selector: "daterangepicker-story-host",
  imports: [FormsModule, DaterangepickerComponent],
  standalone: true,
  template: `
    <p>Date sélectionnée: {{ rangeSummary() }}</p>
    <rte-daterangepicker
      [id]="pickerId()"
      [ngModel]="range()"
      (ngModelChange)="onRangeChange($event)"
      [hasLabel]="hasLabel()"
      [labelText]="labelText()"
      [labelPosition]="labelPosition()"
      [disabled]="disabled()"
      [readOnly]="readOnly()"
      [error]="error()"
      [isRequiredOptional]="isRequiredOptional()"
      [required]="required()"
      [showLabelRequirement]="showLabelRequirement()"
      [hasAssistiveText]="hasAssistiveText()"
      [assistiveTextLabel]="assistiveTextLabel()"
      [assistiveTextAppearance]="assistiveTextAppearance()"
      [showAssistiveIcon]="showAssistiveIcon()"
      [locale]="locale()"
      [width]="width()"
      [minDate]="minDate()"
      [maxDate]="maxDate()"
      [disabledDates]="disabledDates()"
      [hasActions]="hasActions()"
      (valueChange)="valueChange.emit($event)"
      (openedChange)="openedChange.emit($event)"
    />
  `,
})
class DaterangepickerStoryHostComponent {
  readonly pickerId = input("date-range-picker");
  readonly initialRange = input<DateRangeBound>([null, null]);
  readonly hasLabel = input(true);
  readonly labelText = input("Période");
  readonly labelPosition = input<"top" | "side">("top");
  readonly disabled = input(false);
  readonly readOnly = input(false);
  readonly error = input(false);
  readonly isRequiredOptional = input(false);
  readonly required = input(false);
  readonly showLabelRequirement = input(false);
  readonly hasAssistiveText = input(true);
  readonly assistiveTextLabel = input("Assistive text");
  readonly assistiveTextAppearance = input<"description" | "error">("description");
  readonly showAssistiveIcon = input(true);
  readonly locale = input("fr-FR");
  readonly width = input(DATEPICKER_DEFAULT_WIDTH);
  readonly minDate = input<Date | undefined>(undefined);
  readonly maxDate = input<Date | undefined>(undefined);
  readonly disabledDates = input<readonly Date[]>([]);
  readonly hasActions = input(true);
  readonly valueChange = output<DateRangePickerValue>();
  readonly openedChange = output<boolean>();
  readonly range = signal<DateRangeBound>([null, null]);

  constructor() {
    effect(
      () => {
        this.range.set(this.initialRange());
      },
      { allowSignalWrites: true },
    );
  }

  onRangeChange(value: DateRangePickerValue): void {
    this.range.set(value === null ? [null, null] : value);
  }

  rangeSummary(): string {
    const [start, end] = this.range();
    const formatDate = (date: Date | null): string => {
      if (!date) {
        return "Choisir une date";
      }
      return new Intl.DateTimeFormat("fr-FR", { dateStyle: "long" }).format(date);
    };
    return `${formatDate(start)} - ${formatDate(end)}`;
  }
}

const today = new Date();
const defaultRange: DateRangeBound = [
  new Date(today.getFullYear(), today.getMonth(), today.getDate()),
  new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7),
];

const storyBindings = `
    [pickerId]="pickerId"
    [initialRange]="initialRange"
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
    [width]="width"
    [minDate]="minDate"
    [maxDate]="maxDate"
    [disabledDates]="disabledDates"
    [hasActions]="hasActions"
    (valueChange)="valueChange($event)"
    (openedChange)="openedChange($event)"`;

const buildRender =
  (initialRange: DateRangeBound): Story["render"] =>
  (args) => ({
    props: { ...args, initialRange },
    moduleMetadata: { imports: [DaterangepickerStoryHostComponent] },
    template: `<daterangepicker-story-host ${storyBindings} />`,
  });

const meta: Meta<DaterangepickerStoryHostComponent> = {
  title: "Composants/DateRangePicker/DateRangePicker",
  component: DaterangepickerStoryHostComponent,
  tags: ["autodocs"],
  argTypes: {
    labelPosition: { control: "select", options: ["top", "side"] },
    valueChange: { action: "value changed" },
    openedChange: { action: "opened changed" },
  },
  args: {
    pickerId: "date-range-picker",
    initialRange: defaultRange,
    hasLabel: true,
    labelText: "Période",
    labelPosition: "top",
    disabled: false,
    readOnly: false,
    error: false,
    isRequiredOptional: false,
    required: false,
    showLabelRequirement: false,
    hasAssistiveText: true,
    assistiveTextLabel: "Assistive text",
    assistiveTextAppearance: "description",
    showAssistiveIcon: true,
    locale: "fr-FR",
    disabledDates: [],
    hasActions: true,
    width: DATEPICKER_DEFAULT_WIDTH,
  },
};

export default meta;
type Story = StoryObj<DaterangepickerStoryHostComponent>;

export const Default: Story = {
  render: buildRender(defaultRange),
};

export const Disabled: Story = {
  render: buildRender(defaultRange),
  args: { disabled: true },
};

export const Error: Story = {
  render: buildRender(defaultRange),
  args: {
    error: true,
    assistiveTextLabel: "Champ en erreur",
    assistiveTextAppearance: "error",
  },
};

export const EmptyValue: Story = {
  render: buildRender([null, null]),
  play: async ({ canvasElement }) => {
    const picker = getPicker(canvasElement);
    await typeRangeFieldDigits(getRangeField(picker, 0), "15062026");
    await typeRangeFieldDigits(getRangeField(picker, 1), "22062026");
  },
};

export const WithAction: Story = {
  render: buildRender([null, null]),
  play: async ({ canvasElement }) => {
    const dropdown = await openDaterangepickerOverlay(canvasElement);
    const dialog = dropdown.querySelector("[role='dialog']");
    expect(dialog).toBeInTheDocument();

    const dayButtons = dropdown.querySelectorAll(".day-cell:not([disabled])");
    expect(dayButtons.length).toBeGreaterThan(1);

    await userEvent.click(dayButtons[0] as HTMLElement);
    await userEvent.click(dayButtons[1] as HTMLElement);
    await userEvent.click(within(dropdown).getByRole("button", { name: /confirmer/i }));

    await waitFor(() => {
      expect(dialog).not.toBeInTheDocument();
    });
  },
};

export const WithMinMax: Story = {
  render: buildRender([new Date(2026, 4, 5), new Date(2026, 4, 12)]),
  args: {
    minDate: new Date(2026, 4, 1),
    maxDate: new Date(2026, 5, 30),
  },
  play: async ({ canvasElement }) => {
    const dropdown = await openDaterangepickerOverlay(canvasElement);
    expect(dropdown.querySelector("[role='dialog']")).toBeInTheDocument();

    await waitFor(() => {
      const active = dropdown.querySelector('.day-cell[data-datepicker-active="true"]') as HTMLButtonElement | null;
      expect(active).toBeInTheDocument();
      expect(active).toHaveFocus();
    });

    expect(dropdown.querySelectorAll(".day-cell[disabled]").length).toBeGreaterThan(0);
  },
};

export const DisabledDates: Story = {
  render: buildRender([new Date(2026, 4, 10), new Date(2026, 4, 18)]),
  args: {
    disabledDates: [new Date(2026, 4, 12), new Date(2026, 4, 15), new Date(2026, 4, 20)],
  },
  play: async ({ canvasElement }) => {
    const dropdown = await openDaterangepickerOverlay(canvasElement);
    expect(dropdown.querySelector("[role='dialog']")).toBeInTheDocument();
    expect(dropdown.querySelectorAll(".day-cell[disabled]").length).toBeGreaterThanOrEqual(3);
  },
};

export const Readonly: Story = {
  render: buildRender([new Date(2026, 4, 10), new Date(2026, 4, 18)]),
  args: { readOnly: true },
};

export const TabNavigation: Story = {
  tags: ["skip-ci"],
  render: buildRender([new Date(2026, 4, 10), new Date(2026, 4, 18)]),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dropdown = await openDaterangepickerOverlay(canvasElement);
    expect(dropdown.querySelector("[role='dialog']")).toBeInTheDocument();

    await userEvent.tab();
    await waitFor(() => {
      expect(within(dropdown).getByRole("button", { name: /^annuler$/i })).toHaveFocus();
    });

    await userEvent.tab();
    await waitFor(() => {
      expect(within(dropdown).getByRole("button", { name: /^confirmer$/i })).toHaveFocus();
    });

    await userEvent.tab();
    await waitFor(() => {
      expect(within(dropdown).getByRole("button", { name: /année précédente/i })).toHaveFocus();
    });

    await userEvent.keyboard(TESTING_ESCAPE_KEY);

    await waitFor(() => {
      expect(dropdown.querySelector("[role='dialog']")).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(canvas.getByRole("button", { name: /Ouvrir le sélecteur de date de début/i })).toHaveFocus();
    });
  },
};
