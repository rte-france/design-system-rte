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
    compactSpacing: { control: "boolean" },
    placeholder: { control: "text" },
    variant: { control: { type: "select" }, options: ["default", "visibly-selected"] },
    maxHeight: { control: { type: "number" } },
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
      { value: "option-4", label: "Option 4" },
      { value: "option-5", label: "Option 5" },
      { value: "option-6", label: "Option 6" },
      { value: "option-7", label: "Option 7" },
      { value: "option-8", label: "Option 8" },
      { value: "option-9", label: "Option 9" },
      { value: "option-10", label: "Option 10" },
      { value: "option-11", label: "Option 11" },
      { value: "option-12", label: "Option 12" },
      { value: "option-13", label: "Option 13" },
      { value: "option-14", label: "Option 14" },
      { value: "option-15", label: "Option 15" },
      { value: "option-16", label: "Option 16" },
      { value: "option-17", label: "Option 17" },
      { value: "option-18", label: "Option 18" },
      { value: "option-19", label: "Option 19" },
      { value: "option-20", label: "Option 20" },
    ],
    disabled: false,
    readonly: false,
    showResetButton: false,
    withSelectAll: false,
    optionToDisplay: "first-selected",
    compactSpacing: false,
    placeholder: "Select an option",
    required: false,
  },
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState<{ label: string; value: string } | undefined>({
      label: "Option 2",
      value: "option-2",
    });

    const handleOnChange = (value: string) => {
      setSelectedOption(args.options.find((option) => option.value === value));
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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

export const CompactSpacing: Story = {
  args: {
    ...Default.args,
    compactSpacing: true,
  },
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState<{ label: string; value: string }>();

    const handleOnChange = (value: string | string[]) => {
      const stringValue = Array.isArray(value) ? value[0] : value;
      setSelectedOption(args.options.find((option) => option.value === stringValue));
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value} multiple={false} />
        <span style={{ fontFamily: "Arial", color: "var(--content-primary)" }}>
          Selected value : {selectedOption?.label || "No value"}
        </span>
      </div>
    );
  },
};

export const VisiblySelected: Story = {
  args: {
    ...Default.args,
    variant: "visibly-selected",
  },
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState<{ label: string; value: string }>();

    const handleOnChange = (value: string | string[]) => {
      const stringValue = Array.isArray(value) ? value[0] : value;
      setSelectedOption(args.options.find((option) => option.value === stringValue));
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value} multiple={false} />
        <span style={{ fontFamily: "Arial", color: "var(--content-primary)" }}>
          Selected value : {selectedOption?.label || "No value"}
        </span>
      </div>
    );
  },
};

export const Multiple: Story = {
  args: {
    ...Default.args,
    withSelectAll: true,
  },
  render: (args) => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>(["option-2", "option-1"]);

    const handleOnChange = (value: string[]) => {
      setSelectedOptions(value);
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value} multiple={false} />
        <span style={{ fontFamily: "Arial", color: "var(--content-primary)" }}>
          Selected value : {selectedOption?.label || "No value"}
        </span>
      </div>
    );
  },

  play: async ({ canvasElement, args }) => {
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
    expect(select).toHaveTextContent(args.placeholder!);

    await userEvent.click(toggleIcon!);

    await userEvent.tab();
    await userEvent.tab();

    await userEvent.keyboard(TESTING_DOWN_KEY);
    await userEvent.keyboard(TESTING_DOWN_KEY);
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(select).toHaveTextContent("Option 3");
  },
};
