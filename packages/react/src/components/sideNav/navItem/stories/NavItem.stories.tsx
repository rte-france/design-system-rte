import type { Meta, StoryObj } from "@storybook/react";

import NavItem from "../NavItem";

const meta = {
  title: "NavItem",
  component: NavItem,
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
