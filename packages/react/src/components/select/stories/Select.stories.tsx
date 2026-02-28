import {
  TESTING_DOWN_KEY,
  TESTING_ENTER_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import { useState } from "react";

import { focusElementBeforeComponent } from "../../../../.storybook/testing/testing.utils";
import Select from "../Select";

const meta = {
  title: "Composants/Select/Select",
  component: Select,
  tags: ["autodocs"],
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
    showResetButton: { control: "boolean" },
    multiple: { control: "boolean" },
    withSelectAll: { control: "boolean" },
    optionToDisplay: {
      control: { type: "select" },
      options: ["first-selected", "last-selected", "highest-selected"],
    },
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
      { value: "option-3", label: "Option 3" },
    ],
    disabled: false,
    readonly: false,
    showResetButton: false,
    withSelectAll: false,
    optionToDisplay: "first-selected",
  },
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState<{ label: string; value: string }>();

    const handleOnChange = (value: string) => {
      setSelectedOption(args.options.find((option) => option.value === value));
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "280px" }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value} multiple={false} />
        <span style={{ fontFamily: "Arial", color: "var(--content-primary)" }}>
          Selected value : {selectedOption?.label || "No value"}
        </span>
      </div>
    );
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    isError: true,
  },
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState<{ label: string; value: string }>();

    const handleOnChange = (value: string | string[]) => {
      if (typeof value === "string") {
        setSelectedOption(args.options.find((option) => option.value === value));
      }
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "280px" }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value} multiple={false} />
        <span style={{ fontFamily: "Arial", color: "var(--content-primary)" }}>
          Selected value : {selectedOption?.label || "No value"}
        </span>
      </div>
    );
  },
};

export const ReadOnly: Story = {
  args: {
    ...Default.args,
    readonly: true,
  },
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState<{ label: string; value: string }>();

    const handleOnChange = (value: string) => {
      if (typeof value === "string") {
        setSelectedOption(args.options.find((option) => option.value === value));
      }
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "280px" }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value} multiple={false} />
        <span style={{ fontFamily: "Arial", color: "var(--content-primary)" }}>
          Selected value : {selectedOption?.label || "No value"}
        </span>
      </div>
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");
    await userEvent.tab();
    expect(select).not.toHaveFocus();
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState<{ label: string; value: string }>();

    const handleOnChange = (value: string | string[]) => {
      const stringValue = Array.isArray(value) ? value[0] : value;
      setSelectedOption(args.options.find((option) => option.value === stringValue));
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "280px" }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value} multiple={false} />
        <span style={{ fontFamily: "Arial", color: "var(--content-primary)" }}>
          Selected value : {selectedOption?.label || "No value"}
        </span>
      </div>
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");
    await userEvent.tab();
    expect(select).not.toHaveFocus();
  },
};

export const Multiple: Story = {
  args: {
    ...Default.args,
    withSelectAll: true,
  },
  render: (args) => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const handleOnChange = (value: string) => {
      if (value === "select-all") {
        if (selectedOptions.length === args.options.length) {
          setSelectedOptions([]);
        } else {
          setSelectedOptions(args.options.map((option) => option.value));
        }
        return;
      }
      if (selectedOptions) {
        if (selectedOptions.includes(value)) {
          setSelectedOptions(selectedOptions.filter((option) => option !== value));
        } else {
          setSelectedOptions([...selectedOptions, value]);
        }
      }
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "280px" }}>
        <Select {...args} onChange={handleOnChange} value={selectedOptions} multiple={true} />
        <span style={{ fontFamily: "Arial", color: "var(--content-primary)" }}>
          Selected values :{" "}
          {selectedOptions.length > 0 ? selectedOptions.map((option) => option).join(", ") : "No value"}
        </span>
      </div>
    );
  },
};

export const KeyboardInteraction: Story = {
  args: {
    ...Default.args,
    showResetButton: true,
  },
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState<{ label: string; value: string }>();

    const handleOnChange = (value: string | string[]) => {
      const stringValue = Array.isArray(value) ? value[0] : value;
      setSelectedOption(args.options.find((option) => option.value === stringValue));
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "280px" }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value} multiple={false} />
        <span style={{ fontFamily: "Arial", color: "var(--content-primary)" }}>
          Selected value : {selectedOption?.label || "No value"}
        </span>
      </div>
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");
    focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    expect(select).toHaveFocus();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    await userEvent.tab();
    await userEvent.keyboard(TESTING_DOWN_KEY);
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(select).toHaveTextContent("Option 2");

    const clearButton = select.querySelector("button");
    const toggleIcon = select.querySelector("[data-testid='trigger-icon']");

    await userEvent.click(clearButton!);
    expect(select).toHaveTextContent("");

    await userEvent.click(toggleIcon!);

    await userEvent.tab();
    await userEvent.tab();

    await userEvent.keyboard(TESTING_DOWN_KEY);
    await userEvent.keyboard(TESTING_DOWN_KEY);
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(select).toHaveTextContent("Option 3");
  },
};
