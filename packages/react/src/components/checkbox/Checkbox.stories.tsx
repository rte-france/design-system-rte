import { TESTING_SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../.storybook/testing/testing.utils";

import Checkbox from "./Checkbox";

const meta = {
  title: "Composants/Checkbox/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      defaultValue: "Label",
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
    errorMessage: {
      control: "text",
      defaultValue: "",
    },
    readOnly: {
      control: "boolean",
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

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
    defaultChecked: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    focusElementBeforeComponent(canvasElement);
    const checkbox = canvas.getByRole("checkbox");
    await userEvent.tab();
    expect(checkbox).toHaveFocus();
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(checkbox).toBeChecked();
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    error: true,
    errorMessage: "Error message",
  },
};

export const KeyboardInteractions: Story = {
  args: {
    ...Default.args,
  },
  play: async ({ canvasElement }) => {
    focusElementBeforeComponent(canvasElement);
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");
    await userEvent.tab();
    expect(checkbox).toHaveFocus();
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(checkbox).toBeChecked();
    checkbox.blur();
  },
};
