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
    labelPosition: "right",
    label: "Chargement...",
  },
};

export const WithoutLabel: Story = {
  args: {
    label: undefined,
  },
};

export const Appearance: Story = {
  args: { ...Default.args },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <Loader {...args} appearance="brand" />
      <div style={{ background: "#1f2937", padding: "16px" }}>
        <Loader {...args} appearance="reverse" />
      </div>
    </div>
  ),
};

export const LabelPosition: Story = {
  args: { ...Default.args },
  render: (args) => (
    <div style={{ display: "flex", gap: "48px" }}>
      <Loader {...args} labelPosition="right" />
      <Loader {...args} labelPosition="under" />
    </div>
  ),
};

export const Size: Story = {
  args: { ...Default.args },
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
      <Loader {...args} size="small" label="Small" />
      <Loader {...args} size="medium" label="Medium" />
      <Loader {...args} size="large" label="Large" />
    </div>
  ),
};
