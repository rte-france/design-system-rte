import { Meta, StoryObj } from "@storybook/react";

import Divider from "../Divider";

const meta = {
  title: "Composants/Divider/Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
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
    appearance: {
      control: "select",
      options: ["neutral", "inverse", "brand"],
      description: "Color of the divider",
      defaultValue: "neutral",
    },
    endPoint: {
      control: "select",
      options: ["round", "square"],
      description: "End point style of the divider",
      defaultValue: "round",
    },
  },
} satisfies Meta<typeof Divider>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orientation: "horizontal",
    thickness: "light",
    appearance: "neutral",
  },
  render: (args) => (
    <div style={{ height: "100px", width: "500px" }}>
      <Divider {...args} />
    </div>
  ),
};

export const Brand: Story = {
  args: {
    orientation: "horizontal",
    thickness: "light",
    appearance: "brand",
  },
  render: (args) => (
    <div style={{ height: "100px", width: "500px" }}>
      <Divider {...args} />
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    thickness: "light",
    appearance: "neutral",
  },
  render: (args) => (
    <div
      style={{ display: "flex", flexDirection: "column", gap: "20px", justifyContent: "space-between", width: "250px" }}
    >
      <Divider orientation="horizontal" />
      <div style={{ height: "100px", margin: "0 auto" }}>
        <Divider {...args} />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  args: {
    orientation: "horizontal",
    thickness: "light",
    appearance: "neutral",
  },
  render: (args) => (
    <div
      style={{ display: "flex", flexDirection: "column", gap: "20px", justifyContent: "space-between", width: "500px" }}
    >
      <Divider {...args} thickness="light" />
      <Divider {...args} thickness="medium" />
      <Divider {...args} thickness="bold" />
    </div>
  ),
};

export const SquaredEnd: Story = {
  args: {
    orientation: "horizontal",
    thickness: "light",
    appearance: "neutral",
    endPoint: "square",
  },
  render: (args) => (
    <div
      style={{ display: "flex", flexDirection: "column", gap: "20px", justifyContent: "space-between", width: "500px" }}
    >
      <Divider {...args} thickness="bold" />
    </div>
  ),
};

export const InverseColor: Story = {
  args: {
    orientation: "horizontal",
    thickness: "light",
    appearance: "inverse",
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "var(--background-brand-pressed)", width: "500px", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <div
      style={{ display: "flex", flexDirection: "column", gap: "20px", justifyContent: "space-between", width: "100%" }}
    >
      <Divider {...args} thickness="light" />
      <Divider {...args} thickness="medium" />
      <Divider {...args} thickness="bold" />
    </div>
  ),
};
