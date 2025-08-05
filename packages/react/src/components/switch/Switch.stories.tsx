import { Meta, StoryObj } from "@storybook/react";
import { expect, within, userEvent } from "@storybook/test";

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const switchElement = canvas.getByRole("switch");

    await userEvent.tab();
    await expect(switchElement).toHaveFocus();

    await userEvent.keyboard(" ");
    await expect(switchElement).toBeChecked();

    await userEvent.keyboard(" ");
    await expect(switchElement).not.toBeChecked();

    await userEvent.keyboard("{Enter}");
    await expect(switchElement).not.toBeChecked();
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Switch",
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    label: "Read-Only Switch",
    readOnly: true,
  },
};
