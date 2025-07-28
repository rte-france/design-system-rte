import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor, expect } from "@storybook/test";
import { useState } from "react";

import { RegularIcons as RegularIconsList, TogglableIcons as TogglableIconsList } from "../icon/IconMap";

import Badge from "./Badge";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

const meta = {
  title: "Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    badgeType: {
      control: "select",
      options: ["brand", "neutral", "indicator"],
      description: "Type of badge",
      defaultValue: "brand",
    },
    size: {
      control: "select",
      options: ["xs", "s", "m", "l"],
      description: "Size of the badge",
      defaultValue: "M",
    },
    appearance: {
      control: "select",
      options: ["text", "icon"],
      description: "Appearance of the badge",
      defaultValue: "text",
    },
    count: {
      control: "number",
      description: "Count to display when appearance is 'text'",
      defaultValue: 1,
    },
    icon: {
      control: "select",
      options: [...RegularIconIds, ...TogglableIconIds].sort((a, b) => a.localeCompare(b)),
      description: "Icon to display when appearance is 'icon'",
    },
  },
} satisfies Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof meta>;

const mockChildren = (
  <span
    style={{
      display: "inline-block",
      width: 48,
      height: 48,
      background: "orange",
      borderRadius: 12,
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      alignItems: "center",
      justifyContent: "center",
      color: "#000",
      fontWeight: "bold",
      fontSize: 16,
    }}
  />
);

export const Default: Story = {
  args: {
    badgeType: "brand",
    size: "m",
    appearance: "text",
    count: 1,
    children: mockChildren,
  },
};

export const IconBadge: Story = {
  args: {
    badgeType: "brand",
    size: "m",
    appearance: "icon",
    icon: "settings",
    children: mockChildren,
  },
};

export const BadgeDisplay: Story = {
  args: {
    icon: "settings",
    count: 1,
    children: mockChildren,
  },
  render: (args) => (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", fontFamily: "Nunito Sans, sans-serif" }}
    >
      <h4>Appearance: Text</h4>
      <div style={{ display: "flex", gap: "16px" }}>
        <Badge {...args} size="xs" />
        <Badge {...args} size="s" data-testid="badge-text-s" />
        <Badge {...args} size="m" data-testid="badge-text-m" />
        <Badge {...args} size="l" />
      </div>
      <h4>Appearance: Icon</h4>
      <div style={{ display: "flex", gap: "16px" }}>
        <Badge {...args} size="xs" appearance="icon" />
        <Badge {...args} size="s" appearance="icon" data-testid="badge-icon-s" />
        <Badge {...args} size="m" appearance="icon" data-testid="badge-icon-m" />
        <Badge {...args} size="l" appearance="icon" />
      </div>
      <h4>Appearance: Empty</h4>
      <div style={{ display: "flex", gap: "16px" }}>
        <Badge {...args} size="xs" appearance="empty" />
        <Badge {...args} size="s" appearance="empty" data-testid="badge-empty-s" />
        <Badge {...args} size="m" appearance="empty" />
        <Badge {...args} size="l" appearance="empty" />
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badgeTextS = canvas.getByTestId("badge-text-s").querySelector("[data-testid='badge']");
    expect(badgeTextS).not.toBeVisible();
    const badgeIconS = canvas.getByTestId("badge-icon-s").querySelector("[data-testid='badge']");
    expect(badgeIconS).not.toBeVisible();
    const badgeEmptyS = canvas.getByTestId("badge-empty-s").querySelector("[data-testid='badge']");
    expect(badgeEmptyS).toBeVisible();
    const badgeTextM = canvas.getByTestId("badge-text-m").querySelector("[data-testid='badge']");
    expect(badgeTextM).toBeVisible();
    const badgeIconM = canvas.getByTestId("badge-icon-m").querySelector("[data-testid='badge']");
    expect(badgeIconM).toBeVisible();
  },
};

export const Sizes: Story = {
  args: {
    appearance: "empty",
    count: 1,
    children: mockChildren,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "s", "m", "l"],
    },
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Badge {...args} size="xs" />
      <Badge {...args} size="s" />
      <Badge {...args} size="m" />
      <Badge {...args} size="l" />
    </div>
  ),
};

export const CountLimit: Story = {
  args: {
    badgeType: "indicator",
    appearance: "text",
    size: "m",
    children: mockChildren,
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Badge {...args} count={5} />
      <Badge {...args} count={99} />
      <Badge {...args} count={100} />
    </div>
  ),
};

export const Icons: Story = {
  args: {
    badgeType: "brand",
    appearance: "icon",
    size: "m",
    icon: "settings",
    children: mockChildren,
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Badge {...args} icon="settings" />
      <Badge {...args} icon="home" />
      <Badge {...args} icon="user" />
      <Badge {...args} icon="search" />
      <Badge {...args} icon="heart" />
      <Badge {...args} icon="star" />
    </div>
  ),
};

const BadgeVisibilityDemo = (args: Story["args"]) => {
  const [count, setCount] = useState(args.count);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div>
        <Badge {...args} count={count} />
      </div>
      <hr />
      <label>Badge Count</label>
      <input
        id="badge-count-input"
        type="number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
        data-testid="badge-count-input"
      />
    </div>
  );
};

export const BadgeVisibility: Story = {
  args: {
    badgeType: "brand",
    appearance: "text",
    size: "m",
    count: 1,
    children: mockChildren,
  },
  render: BadgeVisibilityDemo,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badgeCountInput = canvas.getByTestId("badge-count-input");
    const badge = canvas.getByTestId("badge");
    expect(badge).toBeVisible();
    await userEvent.clear(badgeCountInput);
    await userEvent.type(badgeCountInput, "0");
    await waitFor(() => expect(badge).not.toBeVisible());
    await userEvent.clear(badgeCountInput);
    await userEvent.type(badgeCountInput, "1");
    await waitFor(() => expect(badge).toBeVisible());
  },
};

export const KeyboardInteraction: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByTestId("badge");
    await userEvent.tab();
    expect(badge).not.toHaveFocus();
  },
};

export const BadgeType: Story = {
  args: Default.args,
  render: (args) => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center", fontFamily: "Nunito Sans, sans-serif" }}>
      <div>
        <h4>Brand</h4>
        <Badge {...args} badgeType="brand" />
      </div>
      <div>
        <h4>Neutral</h4>
        <Badge {...args} badgeType="neutral" />
      </div>
      <div>
        <h4>Indicator</h4>
        <Badge {...args} badgeType="indicator" />
      </div>
    </div>
  ),
};
