import { Meta, StoryObj } from "@storybook/react";

import Divider from "./Divider";

const meta = {
  title: "Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ height: "100px", width: "500px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Orientation of the divider",
      defaultValue: "horizontal",
    },
    thickness: {
      control: "select",
      options: ["light", "medium", "bold"],
      description: "Thickness of the divider",
      defaultValue: "light",
    },
  },
} satisfies Meta<typeof Divider>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orientation: "horizontal",
    thickness: "light",
  },
};

export const VerticalSizes: Story = {
  args: {
    orientation: "vertical",
    thickness: "light",
  },
  render: (args) => (
    <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", height: "100px", width: "500px" }}>
      <Divider {...args} thickness="light" />
      <Divider {...args} thickness="medium" />
      <Divider {...args} thickness="bold" />
    </div>
  ),
};

export const HorizontalSizes: Story = {
  args: {
    orientation: "horizontal",
    thickness: "light",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "20px", justifyContent: "space-between", width: "500px" }}>
      <Divider {...args} thickness="light" />
      <Divider {...args} thickness="medium" />
      <Divider {...args} thickness="bold" />
    </div>
  ),
};
