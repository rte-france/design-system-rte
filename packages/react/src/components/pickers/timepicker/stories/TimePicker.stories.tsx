import { TESTING_ARROW_RIGHT_KEY, TESTING_ARROW_UP_KEY, TESTING_ENTER_KEY } from "@design-system-rte/core";
import { TimeFormat } from "@design-system-rte/core/components/timepicker/timepicker.interface";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, expect } from "@storybook/test";
import { useState } from "react";

import { focusElementBeforeComponent } from "../../../../../.storybook/testing/testing.utils";
import TimePicker from "../TimePicker";

const meta = {
  title: "Composants/TimePicker/TimePicker",
  component: TimePicker,
  tags: ["autodocs"],
  argTypes: {
    assistiveAppearance: {
      options: ["description", "success", "error"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "time-picker",
    label: "Label",
    labelId: "time-picker-label",
    showLabel: true,
    required: true,
    showLabelRequirement: true,
    assistiveTextLabel: "Assistive text",
    assistiveAppearance: "description",
    showAssistiveIcon: true,
    assistiveTextLink: "https://www.example.com",
    isError: false,
    disabled: false,
    readOnly: false,
    isHourReadOnly: false,
    isMinuteReadOnly: false,
    isSecondReadOnly: false,
  },

  render: (args) => {
    const [value, setValue] = useState<TimeFormat>({ hh: "", mm: "", ss: "" });

    return (
      <>
        <TimePicker {...args} id="time-picker" value={value} onChange={setValue} />
      </>
    );
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    ...Default.args,
    readOnly: true,
    value: { hh: "12", mm: "30", ss: "45" },
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    isError: true,
    assistiveAppearance: "error",
    assistiveTextLabel: "Error message",
  },
};

export const HourReadOnly: Story = {
  args: {
    ...Default.args,
    isHourReadOnly: true,
    value: { hh: "12", mm: "10", ss: "15" },
  },
};

export const MinuteReadOnly: Story = {
  args: {
    ...Default.args,
    isMinuteReadOnly: true,
    value: { hh: "12", mm: "30", ss: "15" },
  },
};

export const SecondReadOnly: Story = {
  args: {
    ...Default.args,
    isSecondReadOnly: true,
    value: { hh: "12", mm: "30", ss: "45" },
  },
};

export const WithIncrement: Story = {
  args: {
    ...Default.args,
    minuteIncrement: 15,
  },

  play: async ({ canvasElement }) => {
    await focusElementBeforeComponent(canvasElement);
    const input = canvasElement.querySelector("input") as HTMLInputElement;
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(input.value).toBe("00 : 00 : 00");

    await userEvent.tab();
    await userEvent.keyboard(TESTING_ARROW_UP_KEY);
    expect(input.value).toBe("00 : 15 : 00");

    await userEvent.keyboard(TESTING_ARROW_UP_KEY);
    expect(input.value).toBe("00 : 30 : 00");
  },
};

export const KeyboardInteractions: Story = {
  args: {
    ...Default.args,
    value: { hh: "12", mm: "30", ss: "45" },
  },

  play: async ({ canvasElement }) => {
    await focusElementBeforeComponent(canvasElement);
    const input = canvasElement.querySelector("input") as HTMLInputElement;
    await userEvent.tab();
    await userEvent.keyboard("a");
    expect(input.value).toBe("12 : 30 : 45");

    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await userEvent.keyboard("3");
    expect(input.value).toBe("12 : 03 : 45");

    await userEvent.keyboard("2");
    expect(input.value).toBe("12 : 32 : 45");

    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await userEvent.keyboard("2");
    expect(input.value).toBe("12 : 32 : 02");

    await userEvent.tab();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    await userEvent.keyboard(TESTING_ARROW_UP_KEY);
    expect(input.value).toBe("13 : 32 : 02");

    await userEvent.tab();
    await userEvent.keyboard(TESTING_ARROW_UP_KEY);
    expect(input.value).toBe("13 : 33 : 02");
  },
};
