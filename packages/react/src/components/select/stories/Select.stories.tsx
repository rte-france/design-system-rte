import { TESTING_ENTER_KEY } from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import { useState } from "react";

import Select from "../Select";

const meta = {
  title: "Select",
  component: Select,
  argTypes: {
    id: { control: "text" },
    label: { control: "text" },
    labelPosition: { control: { type: "select" }, options: ["top", "side"] },
    showLabel: { control: "boolean" },
    isError: { control: "boolean" },
    assistiveAppearance: {
      control: { type: "select" },
      options: ["description", "error", "success", "link"],
    },
    showAssistiveIcon: { control: "boolean" },
    assistiveTextLabel: { control: "text" },
    showLabelRequirement: { control: "boolean" },
    required: { control: "boolean" },
    options: { control: "object" },
    disabled: { control: "boolean" },
    readonly: { control: "boolean" },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "select1",
    label: "Choisir une option",
    showLabel: true,
    isError: false,
    assistiveAppearance: "description",
    showAssistiveIcon: false,
    assistiveTextLabel: "This is a description for the select component.",
    options: [
      { value: "option-1", label: "Option 1" },
      { value: "option-2", label: "Option 2" },
      { value: "option-3", label: "Option 3 (Danger)" },
    ],
    disabled: false,
    readonly: false,
  },
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState<{ label: string; value: string }>();

    const handleOnChange = (value: string) => {
      if (value === "option-3") {
        setIsError(true);
      } else {
        setIsError(false);
      }
      setSelectedOption(args.options.find((option) => option.value === value));
    };

    const [isError, setIsError] = useState(false);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "280px" }}>
        <Select {...args} onChange={handleOnChange} isError={isError} value={selectedOption?.value} />
        <span style={{ fontFamily: "Arial" }}>Selected value : {selectedOption?.label || "No value"}</span>
      </div>
    );
  },
};

export const KeyboardInteraction: Story = {
  args: {
    id: "select2",
    label: "Select with keyboard interaction",
    showLabel: true,
    isError: false,
    assistiveAppearance: "description",
    showAssistiveIcon: false,
    assistiveTextLabel: "Use Enter or Space to open the select dropdown.",
    options: [
      { value: "option-1", label: "Option 1" },
      { value: "option-2", label: "Option 2" },
      { value: "option-3", label: "Option 3" },
    ],
    disabled: false,
    readonly: false,
  },
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState<{ label: string; value: string }>();

    const handleOnChange = (value: string) => {
      setSelectedOption(args.options.find((option) => option.value === value));
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "280px" }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value} />
        <span style={{ fontFamily: "Arial" }}>Selected value : {selectedOption?.label || "No value"}</span>
      </div>
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");
    await userEvent.tab();
    expect(select).toHaveFocus();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    await userEvent.keyboard("{ArrowDown}");
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(select).toHaveTextContent("Option 2");

    const buttons = select.querySelectorAll("button");

    const clearButton = buttons[0];
    const toggleButton = buttons[1];

    await userEvent.click(clearButton);
    expect(select).toHaveTextContent("");

    await userEvent.click(toggleButton);

    await userEvent.keyboard("{ArrowDown}");
    await userEvent.keyboard("{ArrowDown}");
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(select).toHaveTextContent("Option 3");
  },
};
