import { Meta, StoryObj } from "@storybook/react";

import { IconIds as RegularIconsList, TogglableIcons as TogglableIconsList } from "../icon/IconMap";

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
      defaultValue: 42,
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
    count: 42,
    children: mockChildren,
  },
};
