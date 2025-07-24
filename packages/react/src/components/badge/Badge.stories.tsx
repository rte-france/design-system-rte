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
      options: ["XS", "S", "M", "L"],
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
    size: "M",
    appearance: "text",
    count: 1,
    children: mockChildren,
  },
};

export const IconBadge: Story = {
  args: {
    badgeType: "brand",
    size: "M",
    appearance: "icon",
    icon: "settings",
    count: 0,
    children: mockChildren,
  },
};

export const Sizes: Story = {
  args: {
    badgeType: "brand",
    appearance: "text",
    count: 1,
    children: mockChildren,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["XS", "S", "M", "L"],
    },
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Badge {...args} size="XS" />
      <Badge {...args} size="S" />
      <Badge {...args} size="M" />
      <Badge {...args} size="L" />
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
    size: "M",
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
