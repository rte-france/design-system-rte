import { Meta, StoryObj } from "@storybook/angular";
import { userEvent, within, expect } from "@storybook/test";

import { RadioButtonGroupComponent } from "./radio-button-group.component";

const meta: Meta<RadioButtonGroupComponent> = {
  title: "RadioButtonGroup",
  component: RadioButtonGroupComponent,
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
      defaultValue: "Radio Button Group Title",
    },
    showGroupTitle: {
      control: "boolean",
      defaultValue: true,
    },
    groupHelpText: {
      control: "text",
      defaultValue: "This is a help text for the radio button group.",
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
type Story = StoryObj<RadioButtonGroupComponent>;

export const Default: Story = {
  args: {
    groupName: "group1",
    items: ["Option 1", "Option 2", "Option 3"],
    direction: "horizontal",
    showItemsLabel: true,
    groupTitle: "Radio Button Group Title",
    showGroupTitle: true,
    groupHelpText: "This is a help text for the radio button group.",
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

export const Vertical: Story = {
  args: {
    ...Default.args,
    groupName: "vertical-radio-group",
    direction: "vertical",
  },
};

export const Horizontal: Story = {
  args: {
    ...Default.args,
    groupName: "horizontal-radio-group",
    direction: "horizontal",
  },
};
