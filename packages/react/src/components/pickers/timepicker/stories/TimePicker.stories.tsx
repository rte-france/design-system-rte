import { TESTING_ARROW_RIGHT_KEY, TESTING_ARROW_UP_KEY, TESTING_ENTER_KEY } from "@design-system-rte/core";
import type { TimeFormat } from "@design-system-rte/core/components/timepicker/timepicker.interface";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, expect, within } from "@storybook/test";
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
    placeholder: {
      control: { type: "text" },
    },
    isCompact: {
      control: { type: "boolean" },
    },
    showResetIcon: {
      control: { type: "boolean" },
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
    displaySeconds: true,
    placeholder: "Enter time",
    isCompact: false,
    showResetIcon: false,
  },

  render: (args) => {
    const [value, setValue] = useState<TimeFormat>({ hh: "", mm: "", ss: "" });

    return <TimePicker {...args} id="time-picker" value={value} onChange={setValue} />;
  },
};

export const Compact: Story = {
  args: {
    ...Default.args,
    isCompact: true,
  },
};

export const UncontrolledDefaultValue: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    return <TimePicker {...args} defaultValue={{ hh: "08", mm: "15", ss: "00" }} onChange={() => {}} />;
  },
};

export const ControlledPropUpdate: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    const [value, setValue] = useState<TimeFormat>({ hh: "12", mm: "30", ss: "45" });
    return (
      <>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => setValue({ hh: "09", mm: "00", ss: "00" })}>Set to 09:00:00</button>
          <button onClick={() => setValue({ hh: "", mm: "", ss: "" })}>Clear</button>
        </div>
        <TimePicker {...args} value={value} onChange={setValue} />
      </>
    );
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    value: { hh: "12", mm: "30", ss: "45" },
  },
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByRole("textbox");
    await expect(input).toBeDisabled();
    await expect(input).toHaveValue("");
    await expect(input).not.toHaveAttribute("placeholder");
  },
};

export const ReadOnly: Story = {
  args: {
    ...Default.args,
    readOnly: true,
    value: { hh: "12", mm: "30", ss: "45" },
  },
  play: async ({ canvasElement }) => {
    await expect(within(canvasElement).getByRole("textbox")).toHaveValue("12:30:45");
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    isError: true,
    assistiveAppearance: "error",
    assistiveTextLabel: "Assistive text",
    errorMessage: "Error message",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole("textbox")).toHaveAttribute("aria-describedby", "time-picker-assistive-text");
    await expect(canvas.getByRole("textbox").parentElement?.querySelectorAll("svg")).toHaveLength(1);
  },
};

export const WithResetIcon: Story = {
  args: {
    ...Default.args,
    showResetIcon: true,
  },
  render: (args) => {
    const [value, setValue] = useState<TimeFormat>({ hh: "12", mm: "30", ss: "45" });
    return <TimePicker {...args} value={value} onChange={setValue} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const resetButton = canvas.getByRole("button", { name: "Réinitialiser la valeur" });
    const icon = resetButton.querySelector("svg");
    await expect(resetButton.style.color).toBe("var(--content-secondary)");
    await expect(icon?.querySelector("path")).toHaveStyle({ fill: getComputedStyle(resetButton).color });
    await expect(canvas.getByRole("textbox")).toHaveValue("12:30:45");
    const resetBounds = resetButton.getBoundingClientRect();
    const inputBounds = canvas.getByRole("textbox").getBoundingClientRect();
    const clockBounds = canvas.getByRole("button", { name: "Open time picker dropdown" }).getBoundingClientRect();
    await expect(resetBounds.left - inputBounds.right).toBeCloseTo(8);
    await expect(clockBounds.left - resetBounds.right).toBeCloseTo(8);
    await userEvent.click(resetButton);
    await expect(canvas.getByRole("textbox")).toHaveValue("");
    await expect(canvas.queryByRole("button", { name: "Réinitialiser la valeur" })).not.toBeInTheDocument();
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

export const AllSegmentsReadOnly: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <TimePicker {...args} id="hour-read-only-time-picker" isHourReadOnly value={{ hh: "12", mm: "30", ss: "45" }} />
      <TimePicker
        {...args}
        id="minute-read-only-time-picker"
        isMinuteReadOnly
        value={{ hh: "12", mm: "30", ss: "45" }}
      />
      <TimePicker
        {...args}
        id="second-read-only-time-picker"
        isSecondReadOnly
        value={{ hh: "12", mm: "30", ss: "45" }}
      />
    </div>
  ),
};

export const WithIncrement: Story = {
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    minuteIncrement: 15,
  },
  play: async ({ canvasElement }) => {
    await focusElementBeforeComponent();
    const input = canvasElement.querySelector("input") as HTMLInputElement;
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(input.value).toBe("00:00:00");

    await userEvent.tab();
    await userEvent.keyboard(TESTING_ARROW_UP_KEY);
    expect(input.value).toBe("00:15:00");

    await userEvent.keyboard(TESTING_ARROW_UP_KEY);
    expect(input.value).toBe("00:30:00");
  },
};

export const KeyboardInteractions: Story = {
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    value: { hh: "12", mm: "30", ss: "45" },
  },

  play: async ({ canvasElement }) => {
    await focusElementBeforeComponent();
    const input = canvasElement.querySelector("input") as HTMLInputElement;
    await userEvent.tab();
    await userEvent.keyboard("a");
    expect(input.value).toBe("12:30:45");

    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await userEvent.keyboard("3");
    expect(input.value).toBe("12:03:45");

    await userEvent.keyboard("2");
    expect(input.value).toBe("12:32:45");

    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await userEvent.keyboard("2");
    expect(input.value).toBe("12:32:02");

    await userEvent.tab();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    await userEvent.keyboard(TESTING_ARROW_UP_KEY);
    expect(input.value).toBe("13:32:02");

    await userEvent.tab();
    await userEvent.keyboard(TESTING_ARROW_UP_KEY);
    expect(input.value).toBe("13:33:02");
  },
};
