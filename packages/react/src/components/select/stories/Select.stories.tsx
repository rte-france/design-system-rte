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
      setSelectedOption(args.options?.find((option) => option.value === value));
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value ?? ""} multiple={false} />
        <span style={{ fontFamily: "Arial" }}>Selected value : {selectedOption?.label || "No value"}</span>
      </div>
    );
  },
};

export const States: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Select {...args} isError />
      <Select {...args} readonly multiple={false} value={"option-2"} onChange={() => undefined} />
      <Select {...args} disabled />
    </div>
  ),
};

export const LabelSide: Story = {
  args: {
    ...Default.args,
    labelPosition: "side",
  },
  render: (args) => <Select {...args} />,
};

export const ResetButton: Story = {
  args: {
    ...Default.args,
    value: "option-2",
    showResetButton: true,
    multiple: false,
    onChange: (value) => console.log(value),
  },
  render: (args) => <Select {...args} />,
};

export const HeaderFooter: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <Select {...args} header={<div>Filtres</div>} footer={<button type="button">Confirmer</button>} maxHeight={300} />
  ),
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
        setSelectedOption(args.options?.find((option) => option.value === value));
      }
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value ?? ""} multiple={false} />
        <span style={{ fontFamily: "Arial" }}>Selected value : {selectedOption?.label || "No value"}</span>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const select = canvasElement.querySelector("#select1");
    console.log(select);
    expect(select).toHaveAttribute("aria-describedby", "select1-assistive-text");
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
        setSelectedOption(args.options?.find((option) => option.value === value));
      }
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value ?? ""} multiple={false} />
        <span style={{ fontFamily: "Arial" }}>Selected value : {selectedOption?.label || "No value"}</span>
      </div>
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getAllByRole("combobox")[1];
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
      setSelectedOption(args.options?.find((option) => option.value === stringValue));
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value ?? ""} multiple={false} />
        <span style={{ fontFamily: "Arial" }}>Selected value : {selectedOption?.label || "No value"}</span>
      </div>
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getAllByRole("combobox")[1];
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
      setSelectedOption(args.options?.find((option) => option.value === stringValue));
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value ?? ""} multiple={false} />
        <span style={{ fontFamily: "Arial" }}>Selected value : {selectedOption?.label || "No value"}</span>
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
      setSelectedOption(args.options?.find((option) => option.value === stringValue));
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value ?? ""} multiple={false} />
        <span style={{ fontFamily: "Arial" }}>Selected value : {selectedOption?.label || "No value"}</span>
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
        <span style={{ fontFamily: "Arial" }}>
          Selected values :{" "}
          {selectedOptions.length > 0 ? selectedOptions.map((option) => option).join(", ") : "No value"}
        </span>
      </div>
    );
  },
};

export const CustomSelectBody: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState<{ label: string; value: string }>();

    const options = [
      { value: "option-1", label: "Option 1" },
      { value: "option-2", label: "Option 2" },
      { value: "option-3", label: "Option 3" },
      { value: "option-4", label: "Option 4" },
    ];

    const handleOnChange = (value: string) => {
      setSelectedOption(options.find((option) => option.value === value));
    };

    const CustomBody = () => {
      return (
        <>
          <div style={{ padding: "16px", fontFamily: "Arial" }}>This is a custom body for the select component.</div>
          <button onClick={() => handleOnChange(options[0].value)}>Select Option 1</button>
          <button onClick={() => handleOnChange(options[1].value)}>Select Option 2</button>
          <button onClick={() => handleOnChange(options[2].value)}>Select Option 3</button>
          <button onClick={() => handleOnChange(options[3].value)}>Select Option 4</button>
        </>
      );
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Select {...args} body={<CustomBody />} />
        <span style={{ fontFamily: "Arial" }}>Selected value : {selectedOption?.label || "No value"}</span>
      </div>
    );
  },
};

export const KeyboardInteraction: Story = {
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    showResetButton: true,
  },
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState<{ label: string; value: string }>();

    const handleOnChange = (value: string | string[]) => {
      const stringValue = Array.isArray(value) ? value[0] : value;
      setSelectedOption(args.options?.find((option) => option.value === stringValue));
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value ?? ""} multiple={false} />
        <span style={{ fontFamily: "Arial" }}>Selected value : {selectedOption?.label || "No value"}</span>
      </div>
    );
  },

  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const select = canvas.getAllByRole("combobox")[1];
    focusElementBeforeComponent();
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

export const UncontrolledDefaultValue: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    const [lastValue, setLastValue] = useState<string | null>(null);

    const { value: _value, ...rest } = args;
    void _value;

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Select {...rest} defaultValue={"option-3"} onChange={(v) => setLastValue(v)} multiple={false} />
        <span style={{ fontFamily: "Arial" }}>Last emitted value : {lastValue || "None yet"}</span>
      </div>
    );
  },
};
