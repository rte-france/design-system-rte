import { Meta, StoryObj } from "@storybook/angular";
import { userEvent, within, expect } from "@storybook/test";

import { CheckboxComponent } from "./checkbox.component";

const meta: Meta<CheckboxComponent> = {
  title: "Composants/Checkbox",
  component: CheckboxComponent,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      defaultValue: "Label",
    },
    description: {
      control: "text",
      defaultValue: "Description",
    },
    showLabel: {
      control: "boolean",
      defaultValue: true,
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    indeterminate: {
      control: "boolean",
      defaultValue: false,
    },
    errorMessage: {
      control: "text",
      defaultValue: "",
    },
    readOnly: {
      control: "boolean",
      defaultValue: false,
    },
    checked: {
      control: "boolean",
      defaultValue: false,
    },
  },
};
export default meta;
type Story = StoryObj<CheckboxComponent>;

export const Default: Story = {
  args: {
    id: "my-checkbox",
    label: "Label",
    description: "Description",
    disabled: false,
    readOnly: false,
    showLabel: true,
    indeterminate: false,
    errorMessage: "",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    checkbox.blur();
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");
    expect(checkbox).toBeDisabled();
    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  },
};

export const Indeterminated: Story = {
  args: {
    ...Default.args,
    indeterminate: true,
  },
};

export const ReadOnly: Story = {
  args: {
    ...Default.args,
    readOnly: true,
    checked: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");
    await userEvent.keyboard(`{Tab}`);
    expect(checkbox).toHaveFocus();
    await userEvent.keyboard(`{ }`);
    expect(checkbox).toBeChecked();
    checkbox.blur();
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    errorMessage: "Error message",
  },
};

export const KeyboardInteractions: Story = {
  args: {
    ...Default.args,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");
    await userEvent.keyboard(`{Tab}`);
    expect(checkbox).toHaveFocus();
    await userEvent.keyboard(`{ }`);
    expect(checkbox).toBeChecked();
    checkbox.blur();
  },
};
