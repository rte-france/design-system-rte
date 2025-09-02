import { Meta, StoryObj } from "@storybook/angular";
import { userEvent, within, expect } from "@storybook/test";

import { CheckboxGroupComponent } from "./checkbox-group.component";

const meta: Meta<CheckboxGroupComponent> = {
  title: "CheckboxGroup",
  component: CheckboxGroupComponent,
  tags: ["autodocs"],
  argTypes: {
    groupName: {
      control: "text",
      defaultValue: "group1",
    },
    items: {
      control: "object",
      defaultValue: ["Option 1", "Option 2", "Option 3"],
    },
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
      defaultValue: "horizontal",
    },
    showItemsLabel: {
      control: "boolean",
      defaultValue: true,
    },
    groupTitle: {
      control: "text",
      defaultValue: "Checkbox Group Title",
    },
    showGroupTitle: {
      control: "boolean",
      defaultValue: true,
    },
    groupHelpText: {
      control: "text",
      defaultValue: "This is a help text for the checkbox group.",
    },
    showHelpText: {
      control: "boolean",
      defaultValue: true,
    },
    errorMessage: {
      control: "text",
      defaultValue: "This is an error message. Please select an option.",
    },
    error: {
      control: "boolean",
      defaultValue: false,
    },
    disabled: {
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
type Story = StoryObj<CheckboxGroupComponent>;

export const Default: Story = {
  args: {
    groupName: "group1",
    items: ["Option 1", "Option 2", "Option 3"],
    direction: "horizontal",
    showItemsLabel: true,
    groupTitle: "Checkbox Title",
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
    const radioButton = canvas.getByLabelText("Option 1");
    await userEvent.click(radioButton);
    expect(radioButton).toBeChecked();
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
  },
};

export const ReadOnly: Story = {
  args: {
    ...Default.args,
    readOnly: true,
  },
};

export const Vertical: Story = {
  args: {
    ...Default.args,
    direction: "vertical",
  },
};

export const Horizontal: Story = {
  args: {
    ...Default.args,
    direction: "horizontal",
  },
};
