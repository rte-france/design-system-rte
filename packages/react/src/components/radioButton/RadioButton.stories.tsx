import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";

import RadioButton from "./RadioButton";

const meta = {
  title: "Composants/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      defaultValue: "Radio Button",
    },
    groupName: {
      control: "text",
      defaultValue: "radio-group",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    error: {
      control: "boolean",
      defaultValue: false,
    },
    readOnly: {
      control: "boolean",
      defaultValue: false,
    },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Radio Button",
    value: "radio-button",
    groupName: "radio-group",
    disabled: false,
    error: false,
    readOnly: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radioButton = canvas.getByRole("radio", { name: /radio button/i });
    await userEvent.click(radioButton);
    expect(radioButton).toBeChecked();
  },
};

export const States: Story = {
  args: {
    ...Default.args,
    groupName: "states-radio-group",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: 8 }}>
      <RadioButton {...args} label="Disabled" value="disabled-radio-button" disabled />
      <RadioButton {...args} label="Error" value="error-radio-button" error />
      <RadioButton {...args} label="Read Only" value="readonly-radio-button" readOnly />
      <RadioButton {...args} label="Initially Checked" value="initial-checked-radio-button" isChecked />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    groupName: "disabled-radio-group",
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", gap: 8 }}>
        <RadioButton {...args} label="Disabled" value="disabled-radio-button" disabled={true} />
      </div>
    );
  },
};

export const ReadOnly: Story = {
  args: {
    ...Default.args,
    groupName: "readonly-radio-group",
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", gap: 8 }}>
        <RadioButton {...args} label="Read Only" value="readonly-radio-button" readOnly={true} />
      </div>
    );
  },
};
export const Error: Story = {
  args: {
    ...Default.args,
    groupName: "error-radio-group",
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", gap: 8 }}>
        <RadioButton {...args} label="Error" value="error-radio-button" error={true} />
      </div>
    );
  },
};

export const InitialChecked: Story = {
  args: {
    ...Default.args,
    groupName: "initial-checked-radio-group",
    isChecked: true,
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", gap: 8 }}>
        <RadioButton {...args} label="Initially Checked" value="initial-checked-radio-button" />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radioButton = canvas.getByRole("radio", { name: "Initially Checked" });
    expect(radioButton).toBeChecked();
  },
};

export const HiddenLabel: Story = {
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    label: "",
    groupName: "hidden-label-radio-group",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radioButton = await canvas.queryByRole("radio");
    expect(radioButton).not.toBeInTheDocument();
  },
};

export const HiddenLabelWithAriaLabelOnly: Story = {
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    label: "",
    "aria-label": "Radio Button",
    groupName: "hidden-label-aria-only-radio-group",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radioButton = canvas.getByRole("radio", { name: /radio button/i });
    expect(radioButton).toBeInTheDocument();
  },
};
