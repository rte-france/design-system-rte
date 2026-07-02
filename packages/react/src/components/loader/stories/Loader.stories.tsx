import type { Meta, StoryObj } from "@storybook/react";

import Loader from "../Loader";

const meta = {
  title: "Composants/Loader/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    appearance: {
      control: "select",
      options: ["brand", "reverse"],
      description: "appearance of the Loader",
      defaultValue: "brand",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "size of the Loader",
      defaultValue: "medium",
    },
    showLabel: {
      control: "boolean",
      description: "show the label of the Loader",
      defaultValue: "true",
    },
    labelPosition: {
      control: "select",
      options: ["right", "under"],
      description: "position of the label",
      defaultValue: "right",
    },
    label: {
      control: "text",
      description: "label of the Loader",
      defaultValue: "Chargement",
    },
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    appearance: "brand",
    size: "medium",
    showLabel: true,
    labelPosition: "right",
    label: "Loading...",
  },
};

export const WithoutLabel: Story = {
  args: {
    showLabel: false,
  },
};

export const SizesComparison: Story = {
  args: {
    labelPosition: "under",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>
      <Loader {...args} size="small" label="Small" />
      <Loader {...args} size="medium" label="Medium" />
      <Loader {...args} size="large" label="Large" />
    </div>
  ),
};

export const WithoutLabelDefinition: Story = {
  args: {
    size: "medium",
    showLabel: true,
    labelPosition: "under",
  },
};

export const ShowLabelFalse: Story = {
  args: {
    size: "medium",
    showLabel: false,
    label: "Chargement",
    labelPosition: "under",
  },
};

export const LabelPositionRight: Story = {
  args: {
    size: "medium",
    showLabel: true,
    label: "Chargement",
    labelPosition: "right",
  },
};
