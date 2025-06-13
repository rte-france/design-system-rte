import { DOWN_KEY, TAB_KEY } from "@design-system-rte/core/constants/keyboard.constants";
import { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";

import SplitButton from "./SplitButton";

const meta = {
  title: "SplitButton",
  component: SplitButton,
  tags: ["autodocs"],
  argTypes: {
    appearance: {
      control: "select",
      options: ["primary", "secondary"],
    },
    size: {
      control: "select",
      options: ["s", "m", "l"],
    },
    compactSpacing: {
      control: "boolean",
    },
    selected: {
      control: "boolean",
    },
    position: {
      control: "select",
      options: ["bottom-start", "bottom-end", "top-start", "top-end"],
    },
    disabled: {
      control: "boolean",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof SplitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockFn = fn();
const mockChildren = (
  <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 120 }}>
    <button
      style={{
        padding: "8px 16px",
        border: "none",
        borderRadius: 4,
        background: "#2563eb",
        color: "#fff",
        fontWeight: 500,
        fontSize: 15,
        cursor: "pointer",
      }}
    >
      Action 1
    </button>
    <button
      style={{
        padding: "8px 16px",
        border: "none",
        borderRadius: 4,
        background: "#64748b",
        color: "#fff",
        fontWeight: 500,
        fontSize: 15,
        cursor: "pointer",
      }}
    >
      Action 2
    </button>
  </div>
);

export const Default: Story = {
  args: {
    appearance: "primary",
    label: "Button Label",
    compactSpacing: false,
    position: "bottom-start",
    disabled: false,
    ariaLabelRight: "Open menu",
    onClick: mockFn(),
    children: mockChildren,
  },
};

export const Appearance: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 16 }}>
      <SplitButton {...args} appearance="primary" />
      <SplitButton {...args} appearance="secondary" />
    </div>
  ),
  args: {
    ...Default.args,
  },
};

export const Size: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 16 }}>
      <SplitButton {...args} size="s" />
      <SplitButton {...args} size="m" />
      <SplitButton {...args} size="l" />
    </div>
  ),
  args: {
    ...Default.args,
  },
};
export const CompactSpacing: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 16 }}>
      <SplitButton {...args} size="s" compactSpacing={true} />
      <SplitButton {...args} size="m" compactSpacing={true} />
      <SplitButton {...args} size="l" compactSpacing={true} />
    </div>
  ),
  args: {
    ...Default.args,
  },
};

export const Position: Story = {
  render: (args) => (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 600 }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 2fr", gap: 24 }}>
        <SplitButton {...args} position="top-end" />
        <SplitButton {...args} position="top-start" />
        <SplitButton {...args} position="bottom-end" />
        <SplitButton {...args} position="bottom-start" />
      </div>
    </div>
  ),
  args: {
    ...Default.args,
  },
};

export const KeyboardInteraction: Story = {
  args: {
    ...Default.args,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId("Menu button");
    const menuContainer = canvas.getByTestId("Menu container");
    await userEvent.keyboard(TAB_KEY);
    await userEvent.keyboard(TAB_KEY);
    expect(button).toHaveFocus();
    await userEvent.keyboard(DOWN_KEY);
    expect(menuContainer).toBeVisible();
  },
};
