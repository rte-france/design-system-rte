import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";

import RadioButtonGroup from "./RadioButtonGroup";

const meta = {
  title: "Composants/RadioButtonGroup",
  component: RadioButtonGroup,
  tags: ["autodocs"],
  argTypes: {
    groupName: {
      control: "text",
      description: "The name of the radio button group.",
      defaultValue: "group1",
    },
    items: {
      control: "object",
      description: "The items in the radio button group.",
      defaultValue: ["Option 1", "Option 2", "Option 3"],
    },
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The direction of the radio button group.",
      defaultValue: "horizontal",
    },
    showItemsLabel: {
      control: "boolean",
      description: "Whether to show the label for each item.",
      defaultValue: true,
    },
    groupTitle: {
      control: "text",
      description: "The title of the radio button group.",
      defaultValue: "Radio Button Group Title",
    },
    showGroupTitle: {
      control: "boolean",
      description: "Whether to show the group title.",
      defaultValue: true,
    },
    groupHelpText: {
      control: "text",
      description: "The help text for the radio button group.",
      defaultValue: "This is a help text for the radio button group.",
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
      description: "Whether the radio button group is disabled. This will disable all radio buttons in the group.",
      defaultValue: false,
    },
    readOnly: {
      control: "boolean",
      description:
        "Whether the radio button group is read-only. This will make all radio buttons in the group read-only.",
      defaultValue: false,
    },
  },
} satisfies Meta<typeof RadioButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    groupName: "radio-group",
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
    const radioButton = canvas.getByRole("radio", { name: "Option 1" });
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
  render: (args) => {
    return (
      <div style={{ display: "flex", gap: 8 }}>
        <RadioButtonGroup {...args} />
      </div>
    );
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    groupName: "error-radio-group",
    error: true,
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", gap: 8 }}>
        <RadioButtonGroup {...args} />
      </div>
    );
  },
};

export const ReadOnly: Story = {
  args: {
    ...Default.args,
    groupName: "readonly-radio-group",
    readOnly: true,
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", gap: 8 }}>
        <RadioButtonGroup {...args} />
      </div>
    );
  },
};

export const Directions: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", gap: 8 }}>
        <RadioButtonGroup {...args} direction="horizontal" groupName="horizontal" />
        <RadioButtonGroup {...args} direction="vertical" groupName="vertical" />
      </div>
    );
  },
};
