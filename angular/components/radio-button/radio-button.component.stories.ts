import { Meta, StoryObj } from "@storybook/angular";
import { userEvent, within, expect } from "@storybook/test";

import { RadioButtonComponent } from "./radio-button.component";

const meta: Meta<RadioButtonComponent> = {
  title: "RadioButton",
  component: RadioButtonComponent,
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
    showLabel: {
      control: "boolean",
      defaultValue: true,
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
};
export default meta;
type Story = StoryObj<RadioButtonComponent>;

export const Default: Story = {
  args: {
    label: "Radio Button",
    groupName: "radio-group",
    showLabel: true,
    disabled: false,
    error: false,
    readOnly: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radioButton = canvas.getByRole("radio");
    await userEvent.click(radioButton);
    expect(radioButton).toBeChecked();
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    groupName: "disabled-radio-group",
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    groupName: "error-radio-group",
    error: true,
  },
};

export const ReadOnly: Story = {
  args: {
    ...Default.args,
    groupName: "readonly-radio-group",
    readOnly: true,
  },
};
