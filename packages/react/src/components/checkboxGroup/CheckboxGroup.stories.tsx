import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";

import CheckboxGroup from "./CheckboxGroup";

const meta = {
  title: "Composants/CheckboxGroup",
  component: CheckboxGroup,
  tags: ["autodocs", "checkboxgroup"],
  argTypes: {
    items: {
      control: "object",
      description: "The items in the checkbox group.",
      defaultValue: ["Option 1", "Option 2", "Option 3"],
    },
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The direction of the checkbox group.",
      defaultValue: "horizontal",
    },
    showItemsLabel: {
      control: "boolean",
      description: "Whether to show the label for each item.",
      defaultValue: true,
    },
    groupTitle: {
      control: "text",
      description: "The title of the checkbox group.",
      defaultValue: "Checkbox Group Title",
    },
    showGroupTitle: {
      control: "boolean",
      description: "Whether to show the group title.",
      defaultValue: true,
    },
    groupHelpText: {
      control: "text",
      description: "The help text for the checkbox group.",
      defaultValue: "This is a help text for the checkbox group.",
    },
    showHelpText: {
      control: "boolean",
      description: "Whether to show the help text.",
      defaultValue: true,
    },
    errorMessage: {
      control: "text",
      description: "The error message to display when there is an error. Use `error` prop to trigger this message.",
      defaultValue: "This is an error message. Please select an option.",
    },
    error: {
      control: "boolean",
      description: "Whether to show the error message. Use `errorMessage` prop to set the message.",
      defaultValue: false,
    },
    disabled: {
      control: "boolean",
      description: "Whether the checkbox group is disabled. This will disable all checkboxs in the group.",
      defaultValue: false,
    },
    readOnly: {
      control: "boolean",
      description: "Whether the checkbox group is read-only. This will make all checkboxs in the group read-only.",
      defaultValue: false,
    },
  },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: ["Option 1", "Option 2", "Option 3"],
    direction: "horizontal",
    showItemsLabel: true,
    groupTitle: "Checkbox Group Title",
    showGroupTitle: true,
    groupHelpText: "This is a help text for the checkbox group.",
    showHelpText: true,
    errorMessage: "This is an error message. Please select an option.",
    error: false,
    disabled: false,
    readOnly: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox", { name: "Option 1" });
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    error: true,
    errorMessage: "This is an error message. Please select an option.",
  },
};

export const ReadOnly: Story = {
  args: {
    ...Default.args,
    readOnly: true,
  },
};

export const Horizontal: Story = {
  args: {
    ...Default.args,
    direction: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    ...Default.args,
    direction: "vertical",
  },
};
