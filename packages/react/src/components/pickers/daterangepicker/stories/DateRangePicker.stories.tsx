import { TESTING_ESCAPE_KEY } from "@design-system-rte/core";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { useState } from "react";

import { getDropdown, normalizedDateInputValue } from "../../datepicker/stories/DatePicker.stories.util";
import DateRangePicker from "../DateRangePicker";

const meta = {
  title: "Composants/DateRangePicker/DateRangePicker",
  component: DateRangePicker,
  tags: ["autodocs"],
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

type DateRangeValue = [Date | null, Date | null] | null;

const formatDate = (date: Date | null) => {
  if (!date) {
    return "aucune";
  }

  return new Intl.DateTimeFormat(navigator.language, { dateStyle: "long" }).format(date);
};

const formatRange = (dateRange: DateRangeValue) => {
  if (!dateRange) {
    return "aucune";
  }

  return `${dateRange[0] ? formatDate(dateRange[0]) : "Choisir une date début"} - ${dateRange[1] ? formatDate(dateRange[1]) : "Choisir une date fin"}`;
};

const buildRender = (
  initialRange: DateRangeValue,
  pickerProps?: Partial<React.ComponentProps<typeof DateRangePicker>>,
) => {
  return function DateRangePickerStoryRender(args: React.ComponentProps<typeof DateRangePicker>) {
    const [date, setDate] = useState<DateRangeValue>(initialRange);

    const handleOnChange = (value: DateRangeValue) => {
      setDate(value);
    };

    return (
      <>
        <p>Date sélectionnée: {formatRange(date)}</p>
        <DateRangePicker {...args} {...pickerProps} onChange={handleOnChange} value={date} />
      </>
    );
  };
};

const today = new Date();
const defaultRange: DateRangeValue = [
  new Date(today.getFullYear(), today.getMonth(), today.getDate()),
  new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7),
];

const getRangeInputs = (canvasElement: HTMLElement) => {
  return canvasElement.querySelectorAll("input");
};

export const Default: Story = {
  args: {
    id: "date-range-picker",
    label: "Période",
    value: null,
    assistiveAppearance: "description",
    assistiveTextLabel: "Assistive text",
    showAssistiveIcon: true,
    readonly: false,
    hasAction: true,
  },

  render: buildRender(defaultRange),
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
  render: buildRender(defaultRange),
};

export const Error: Story = {
  args: {
    ...Default.args,
    isError: true,
    assistiveTextLabel: "Champ en erreur",
    assistiveAppearance: "error",
  },
  render: buildRender(defaultRange),
};

export const EmptyValue: Story = {
  args: {
    ...Default.args,
    value: null,
  },
  render: buildRender([null, null]),

  play: async ({ canvasElement }) => {
    const [startInput, endInput] = getRangeInputs(canvasElement);
    expect(startInput).toBeInTheDocument();
    expect(endInput).toBeInTheDocument();

    await userEvent.click(startInput as HTMLElement);
    for (const digit of "15062026") {
      await userEvent.keyboard(digit);
    }

    await userEvent.click(endInput as HTMLElement);
    for (const digit of "22062026") {
      await userEvent.keyboard(digit);
    }

    expect(normalizedDateInputValue(startInput as HTMLInputElement)).toBe("15/06/2026");
    expect(normalizedDateInputValue(endInput as HTMLInputElement)).toBe("22/06/2026");
  },
};

export const WithAction: Story = {
  args: {
    ...Default.args,
    value: null,
    hasAction: true,
  },

  render: buildRender([null, null]),

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButtons = canvas.getAllByRole("button", { name: /Ouvrir le sélecteur de date de début/i });
    await userEvent.click(openButtons[0]);

    const dropdown = await getDropdown();
    const datePickerDialog = dropdown.querySelector("[role='dialog']");
    expect(datePickerDialog).toBeInTheDocument();

    const dayButtons = dropdown.querySelectorAll(".day-cell:not([disabled])");
    expect(dayButtons.length).toBeGreaterThan(1);

    await userEvent.click(dayButtons[0] as HTMLElement);
    await userEvent.click(dayButtons[1] as HTMLElement);
    await userEvent.click(within(dropdown).getByRole("button", { name: /confirmer/i }));

    await waitFor(() => {
      expect(datePickerDialog).not.toBeInTheDocument();
    });
  },
};

export const WithMinMax: Story = {
  args: {
    ...Default.args,
    value: null,
    minDate: new Date(2026, 4, 1),
    maxDate: new Date(2026, 5, 30),
    hasAction: true,
  },

  render: buildRender([new Date(2026, 4, 5), new Date(2026, 4, 12)]),

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButtons = canvas.getAllByRole("button", { name: /Ouvrir le sélecteur de date de début/i });
    await userEvent.click(openButtons[0]);

    const dropdown = await getDropdown();
    const dialog = dropdown.querySelector("[role='dialog']");
    expect(dialog).toBeInTheDocument();

    await waitFor(() => {
      const active = dropdown.querySelector('.day-cell[data-datepicker-active="true"]') as HTMLButtonElement | null;
      expect(active).toBeInTheDocument();
      expect(active).toHaveFocus();
    });

    const disabledDayCells = dropdown.querySelectorAll(".day-cell[disabled]");
    expect(disabledDayCells.length).toBeGreaterThan(0);
  },
};

export const DisabledDates: Story = {
  args: {
    ...Default.args,
    value: null,
    disabledDates: [new Date(2026, 4, 12), new Date(2026, 4, 15), new Date(2026, 4, 20)],
    hasAction: true,
  },

  render: buildRender([new Date(2026, 4, 10), new Date(2026, 4, 18)]),

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButtons = canvas.getAllByRole("button", { name: /Ouvrir le sélecteur de date de début/i });
    await userEvent.click(openButtons[0]);

    const dropdown = await getDropdown();
    const dialog = dropdown.querySelector("[role='dialog']");
    expect(dialog).toBeInTheDocument();

    const disabledDayCells = dropdown.querySelectorAll(".day-cell[disabled]");
    expect(disabledDayCells.length).toBeGreaterThanOrEqual(3);
  },
};

export const Readonly: Story = {
  args: {
    ...Default.args,
    value: null,
    readonly: true,
    hasAction: true,
  },

  render: buildRender([new Date(2026, 4, 10), new Date(2026, 4, 18)]),
};

export const TabNavigation: Story = {
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    value: null,
    hasAction: true,
  },

  render: buildRender([new Date(2026, 4, 10), new Date(2026, 4, 18)]),

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButtons = canvas.getAllByRole("button", { name: /Ouvrir le sélecteur de date de début/i });
    const firstOpenButton = openButtons[0];
    await userEvent.click(firstOpenButton);

    const dropdown = await getDropdown();
    const dialog = dropdown.querySelector("[role='dialog']");
    expect(dialog).toBeInTheDocument();

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
      expect(dropdown).not.toBeInTheDocument();
      expect(firstOpenButton).toHaveFocus();
    });
  },
};
