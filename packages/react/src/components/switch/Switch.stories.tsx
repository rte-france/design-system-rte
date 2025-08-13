import { Meta, StoryObj } from "@storybook/react";

import Switch from "./Switch";

const meta = {
  title: "Switch",
  component: Switch,
  decorators: [
    (Story) => (
      <div style={{ height: "50px", width: "200px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label for the switch",
      defaultValue: "Label",
    },
    appearance: {
      control: "select",
      options: ["brand", "neutral"],
      description: "Appearance of the switch",
      defaultValue: "brand",
    },
    showLabel: {
      control: "boolean",
      description: "Whether to show the label",
      defaultValue: true,
    },
    showIcon: {
      control: "boolean",
      description: "Whether to show the icon",
      defaultValue: true,
    },
    disabled: {
      control: "boolean",
      description: "Whether the switch is disabled",
      defaultValue: false,
    },
    readOnly: {
      control: "boolean",
      description: "Whether the switch is read-only",
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    showLabel: true,
    disabled: false,
    readOnly: false,
  },
};
