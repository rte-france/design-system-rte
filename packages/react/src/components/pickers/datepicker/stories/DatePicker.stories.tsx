import {
  TESTING_ARROW_DOWN_KEY,
  TESTING_ARROW_LEFT_KEY,
  TESTING_ARROW_RIGHT_KEY,
  TESTING_ARROW_UP_KEY,
  TESTING_BACKSPACE_KEY,
  TESTING_ESCAPE_KEY,
} from "@design-system-rte/core";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, expect, within, waitFor } from "@storybook/test";
import { useState } from "react";

import { focusElementBeforeComponent } from "../../../../../.storybook/testing/testing.utils";
import DatePicker from "../DatePicker";

import { calendarTriggerAccessibleName, getDropdown, normalizedDateInputValue } from "./DatePicker.stories.util";

const meta = {
  title: "Composants/DatePicker/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "default-datepicker",
    label: "Date",
    value: null,
    assistiveAppearance: "description",
    assistiveTextLabel: "Assistive text",
    showAssistiveIcon: true,
    readonly: false,
    hasAction: true,
    required: false,
    showLabelRequirement: false,
  },

  render: (args) => {
    const [date, setDate] = useState<Date | null>(null);

    const onChange = (newDate: Date | null) => {
      setDate(newDate);
    };

    return (
      <>
        <p>
          Date sélectionnée:{" "}
          {date ? new Intl.DateTimeFormat(navigator.language, { dateStyle: "long" }).format(date) : "aucune"}
        </p>
        <DatePicker {...args} value={date} onChange={onChange} />
      </>
    );
  },
};

export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
};

export const Error: Story = {
  args: { ...Default.args, isError: true },
};

export const TypingDate: Story = {
  args: { ...Default.args, value: null },

  render: (args) => {
    const [date, setDate] = useState<Date | null>(null);

    const onChange = (newDate: Date | null) => {
      setDate(newDate);
    };

    return (
      <>
        <p>
          Date sélectionnée:{" "}
          {date ? new Intl.DateTimeFormat(navigator.language, { dateStyle: "long" }).format(date) : "aucune"}
        </p>
        <DatePicker {...args} value={date} onChange={onChange} />
      </>
    );
  },

  play: async ({ canvasElement }) => {
    focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    for (const digit of "15062023") {
      await userEvent.keyboard(digit);
    }

    const input = canvasElement.querySelector("input");

    expect(normalizedDateInputValue(input)).toBe("15/06/2023");

    await userEvent.keyboard(TESTING_ARROW_DOWN_KEY);
    expect(normalizedDateInputValue(input)).toBe("15/06/2022");

    await userEvent.keyboard(TESTING_ARROW_UP_KEY);
    expect(normalizedDateInputValue(input)).toBe("15/06/2023");

    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    await userEvent.keyboard(TESTING_ARROW_UP_KEY);
    expect(normalizedDateInputValue(input)).toBe("15/07/2023");

    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    await userEvent.keyboard(TESTING_ARROW_UP_KEY);
    expect(normalizedDateInputValue(input)).toBe("16/07/2023");

    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await userEvent.keyboard(TESTING_ARROW_DOWN_KEY);
    await userEvent.keyboard(TESTING_ARROW_DOWN_KEY);
    expect(normalizedDateInputValue(input)).toBe("16/05/2023");
  },
};

export const WithAction: Story = {
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    value: null,
    hasAction: true,
  },

  render: (args) => {
    const [date, setDate] = useState<Date | null>(null);

    const onChange = (newDate: Date | null) => {
      setDate(newDate);
    };

    return (
      <>
        <p>
          Date sélectionnée:{" "}
          {date ? new Intl.DateTimeFormat(navigator.language, { dateStyle: "long" }).format(date) : "aucune"}
        </p>
        <DatePicker {...args} value={date} onChange={onChange} />
      </>
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole("button", { name: calendarTriggerAccessibleName });
    await userEvent.click(calendarButton);

    let dropdown = await getDropdown();
    let datePickerDialog = dropdown.querySelector("[role='dialog']");
    expect(datePickerDialog).toBeInTheDocument();

    const dayButtons = dropdown.querySelectorAll(".day-cell");
    expect(dayButtons.length).toBeGreaterThan(0);

    await userEvent.click(dayButtons[10] as HTMLElement);
    await userEvent.click(within(dropdown).getByRole("button", { name: /confirmer/i }));

    await waitFor(() => {
      expect(datePickerDialog).not.toBeInTheDocument();
    });

    await userEvent.click(calendarButton);
    dropdown = await getDropdown();
    datePickerDialog = dropdown.querySelector("[role='dialog']");
    expect(datePickerDialog).toBeInTheDocument();

    const activeDayButton = dropdown.querySelector(".day-cell[data-datepicker-active='true']");
    expect(activeDayButton).toBeInTheDocument();
    expect(activeDayButton).toHaveFocus();
    await userEvent.keyboard("{Escape}");
  },
};

export const TabNavigation: Story = {
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    value: null,
    hasAction: true,
  },

  render: (args) => {
    const [date, setDate] = useState<Date | null>(null);

    const onChange = (newDate: Date | null) => {
      setDate(newDate);
    };

    return (
      <>
        <p>
          Date sélectionnée:{" "}
          {date ? new Intl.DateTimeFormat(navigator.language, { dateStyle: "long" }).format(date) : "aucune"}
        </p>
        <DatePicker {...args} value={date} onChange={onChange} />
      </>
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole("button", { name: calendarTriggerAccessibleName });
    await userEvent.click(calendarButton);

    let dropdown = await getDropdown();

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

    const menuDropdown = within(dropdown);
    expect(menuDropdown.getByRole("button", { name: /année précédente/i })).toBeInTheDocument();
    expect(menuDropdown.getByRole("button", { name: /mois précédent/i })).toBeInTheDocument();
    expect(menuDropdown.getByRole("button", { name: /mois suivant/i })).toBeInTheDocument();
    expect(menuDropdown.getByRole("button", { name: /année suivante/i })).toBeInTheDocument();

    const dayHeaderLabel = dropdown.querySelector('[data-datepicker-tab="month-label"]') as HTMLButtonElement | null;
    expect(dayHeaderLabel).toBeTruthy();
    await userEvent.click(dayHeaderLabel!);

    await waitFor(() => {
      expect(dropdown.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument();
    });

    expect(dropdown.querySelector(".rte-datepicker-day-grid")).not.toBeInTheDocument();
    expect(menuDropdown.queryAllByRole("button", { name: /année précédente/i })).toHaveLength(1);
    expect(menuDropdown.queryAllByRole("button", { name: /année suivante/i })).toHaveLength(1);
    expect(menuDropdown.queryByRole("button", { name: /mois précédent/i })).not.toBeInTheDocument();
    expect(menuDropdown.queryByRole("button", { name: /mois suivant/i })).not.toBeInTheDocument();
    const yearHeaderLabel = dropdown.querySelector('[data-datepicker-tab="month-label"]') as HTMLButtonElement | null;
    expect(yearHeaderLabel).toBeTruthy();
    await userEvent.click(yearHeaderLabel!);
    await waitFor(() => {
      expect(dropdown.querySelector(".rte-datepicker-year-grid")).toBeInTheDocument();
    });
    expect(dropdown.querySelector(".rte-datepicker-month-grid")).not.toBeInTheDocument();
    expect(menuDropdown.getByText("Sélectionner une année")).toBeInTheDocument();
    expect(menuDropdown.getByRole("button", { name: /décennie précédente/i })).toBeInTheDocument();
    expect(menuDropdown.getByRole("button", { name: /décennie suivante/i })).toBeInTheDocument();
    expect(dropdown.querySelector(".month-label-static")).toBeInTheDocument();
    expect(dropdown.querySelector('[data-datepicker-tab="month-label"]')).not.toBeInTheDocument();
    expect(dropdown.querySelectorAll(".year-cell").length).toBe(11);

    await userEvent.keyboard(TESTING_ESCAPE_KEY);

    await waitFor(() => {
      expect(dropdown).not.toBeInTheDocument();
      expect(calendarButton).toHaveFocus();
    });

    await userEvent.click(calendarButton);

    dropdown = await getDropdown();

    await waitFor(() => {
      const active = dropdown.querySelector('.day-cell[data-datepicker-active="true"]') as HTMLButtonElement | null;
      expect(active).toBeInTheDocument();
      expect(active).toHaveFocus();
    });

    const activeDayButton = dropdown.querySelector(
      '.day-cell[data-datepicker-active="true"]',
    ) as HTMLButtonElement | null;
    await userEvent.tab();
    const cancelButton = within(dropdown).getByRole("button", { name: /^annuler$/i });
    expect(cancelButton).toHaveFocus();
    await userEvent.keyboard(TESTING_ARROW_DOWN_KEY);
    expect(cancelButton).toHaveFocus();
    await userEvent.tab({ shift: true });
    expect(activeDayButton).toHaveFocus();
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await waitFor(() => {
      const nextActive = dropdown.querySelector('.day-cell[data-datepicker-active="true"]') as HTMLButtonElement | null;
      expect(nextActive).toBeInTheDocument();
      expect(nextActive).toHaveFocus();
      expect(nextActive).not.toBe(activeDayButton);
    });

    await userEvent.keyboard(TESTING_ESCAPE_KEY);

    await waitFor(() => {
      expect(dropdown).not.toBeInTheDocument();
      expect(calendarButton).toHaveFocus();
    });

    await userEvent.click(calendarButton);

    dropdown = await getDropdown();

    const monthHeaderButton = dropdown.querySelector('[data-datepicker-tab="month-label"]') as HTMLButtonElement | null;
    expect(monthHeaderButton).toBeTruthy();
    await userEvent.click(monthHeaderButton!);
    await waitFor(() => {
      expect(dropdown.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument();
    });
    const activeMonthCell = dropdown.querySelector(
      ".month-cell[data-datepicker-active='true']:not([disabled])",
    ) as HTMLButtonElement | null;
    expect(activeMonthCell).toBeTruthy();
    await waitFor(() => {
      expect(activeMonthCell).toHaveFocus();
    });
    await userEvent.tab();
    await waitFor(() => {
      expect(within(dropdown).getByRole("button", { name: /^annuler$/i })).toHaveFocus();
    });
    await userEvent.tab({ shift: true });
    expect(activeMonthCell).toHaveFocus();
    const nextYearNav = within(dropdown).getByRole("button", { name: /année suivante/i });
    await userEvent.tab({ shift: true });
    expect(nextYearNav).toHaveFocus();
    await userEvent.tab();
    expect(activeMonthCell).toHaveFocus();
  },
};

export const WithMinMax: Story = {
  args: {
    ...Default.args,
    value: null,
    minDate: new Date(2020, 0, 1),
    maxDate: new Date(2024, 7, 25),
    hasAction: true,
  },

  render: (args) => {
    const [date, setDate] = useState<Date | null>(null);

    const onChange = (newDate: Date | null) => {
      setDate(newDate);
    };

    return (
      <>
        <p>
          Date sélectionnée:{" "}
          {date ? new Intl.DateTimeFormat(navigator.language, { dateStyle: "long" }).format(date) : "aucune"}
        </p>
        <DatePicker {...args} value={date} onChange={onChange} />
      </>
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const calendarButton = canvas.getByRole("button", { name: calendarTriggerAccessibleName });
    calendarButton.focus();
    await userEvent.tab({ shift: true });
    for (const digit of "03012020") {
      await userEvent.keyboard(digit);
    }
    await userEvent.click(calendarButton);

    let dropdown = await getDropdown();
    let datePickerDialog = dropdown.querySelector("[role='dialog']");
    expect(datePickerDialog).toBeInTheDocument();

    await waitFor(() => {
      const active = dropdown.querySelector('.day-cell[data-datepicker-active="true"]') as HTMLButtonElement | null;
      expect(active).toBeInTheDocument();
      expect(active).toHaveFocus();
    });

    const disabledDayCells = dropdown.querySelectorAll(".day-cell[disabled]");
    expect(disabledDayCells.length).toBe(2);

    await userEvent.keyboard(TESTING_ESCAPE_KEY);

    await waitFor(() => {
      expect(datePickerDialog).not.toBeInTheDocument();
      expect(calendarButton).toHaveFocus();
    });

    await userEvent.tab({ shift: true });
    await userEvent.keyboard(TESTING_BACKSPACE_KEY);
    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    await userEvent.keyboard(TESTING_BACKSPACE_KEY);
    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    await userEvent.keyboard(TESTING_BACKSPACE_KEY);
    for (const digit of "20082024") {
      await userEvent.keyboard(digit);
    }
    await userEvent.click(calendarButton);

    dropdown = await getDropdown();
    datePickerDialog = dropdown.querySelector("[role='dialog']");
    expect(datePickerDialog).toBeInTheDocument();

    await waitFor(() => {
      const active = dropdown.querySelector('.day-cell[data-datepicker-active="true"]') as HTMLButtonElement | null;
      expect(active).toBeInTheDocument();
      expect(active).toHaveFocus();
    });

    const disabledDayCellsEnd = dropdown.querySelectorAll(".day-cell[disabled]");
    expect(disabledDayCellsEnd.length).toBe(7);

    await userEvent.keyboard(TESTING_ESCAPE_KEY);

    await waitFor(() => {
      expect(datePickerDialog).not.toBeInTheDocument();
      expect(calendarButton).toHaveFocus();
    });
  },
};

export const DisabledDates: Story = {
  args: {
    ...Default.args,
    value: null,
    disabledDates: [new Date(2023, 5, 15), new Date(2023, 5, 20)],
    hasAction: true,
  },

  render: (args) => {
    const [date, setDate] = useState<Date | null>(null);

    const onChange = (newDate: Date | null) => {
      setDate(newDate);
    };

    return (
      <>
        <p>
          Date sélectionnée:{" "}
          {date ? new Intl.DateTimeFormat(navigator.language, { dateStyle: "long" }).format(date) : "aucune"}
        </p>
        <DatePicker {...args} value={date} onChange={onChange} />
      </>
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const calendarButton = canvas.getByRole("button", { name: calendarTriggerAccessibleName });
    calendarButton.focus();
    await userEvent.tab({ shift: true });
    for (const digit of "14062023") {
      await userEvent.keyboard(digit);
    }
    await userEvent.click(calendarButton);

    const dropdown = await getDropdown();
    const datePickerDialog = dropdown.querySelector("[role='dialog']");
    expect(datePickerDialog).toBeInTheDocument();

    await waitFor(() => {
      const active = dropdown.querySelector('.day-cell[data-datepicker-active="true"]') as HTMLButtonElement | null;
      expect(active).toBeInTheDocument();
      expect(active).toHaveFocus();
    });

    const disabledDayCells = dropdown.querySelectorAll(".day-cell[disabled]");
    expect(disabledDayCells.length).toBe(2);
  },
};
