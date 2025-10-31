import { Meta, StoryObj } from "@storybook/react";

import SideNav from "./SideNav";

const meta = {
  title: "SideNav",
  id: "SideNav",
  component: SideNav,
  tags: ["autodocs"],
  argTypes: {
    collapsible: { control: "boolean" },
    size: { control: "select", options: ["s", "m", "l"] },
    appearance: { control: "select", options: ["neutral", "brand"] },
  },
} satisfies Meta<typeof SideNav>;

export default meta;
type Story = StoryObj<typeof meta>;

const PageContent = (
  <div style={{ padding: "2rem" }}>
    <h1 style={{ margin: "0 0 1rem 0" }}>Dashboard</h1>
    <p style={{ lineHeight: "1.6", color: "#555", marginBottom: "1rem" }}>
      Welcome to the dashboard. Use the navigation on the left to explore different sections.
    </p>
    <p style={{ lineHeight: "1.6", color: "#555", marginBottom: "1rem" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </p>
  </div>
);

const navigationItems = [
  { label: "Home", icon: "home", showIcon: true },
  { label: "Dashboard", icon: "dashboard", showIcon: true },
  { label: "Analytics", icon: "analytics", showIcon: true },
  { label: "Settings", icon: "settings", showIcon: true },
  { label: "Profile", icon: "user", showIcon: true, link: "/profile" },
];

export const Default: Story = {
  args: {
    headerConfig: {
      title: "My Header",
      icon: "home",
      identifier: "MA",
    },
    items: navigationItems,
  },
  render: (args) => (
    <SideNav size={args.size} collapsible={args.collapsible} headerConfig={args.headerConfig} appearance={args.appearance} items={args.items}>
      {PageContent}
    </SideNav>
  ),
};

export const Collapsible: Story = {
  args: {
    ...Default.args,
    collapsible: true,
  },
  render: (args) => (
    <SideNav size={args.size} collapsible={args.collapsible} headerConfig={args.headerConfig} appearance={args.appearance} items={args.items}>
      {PageContent}
    </SideNav>
  ),
};

export const HeaderWithVersion: Story = {
  args: {
    headerConfig: {
      identifier: "MA",
      title: "My Application",
      version: "V1.2.3",
      icon: "home",
    },
    items: navigationItems,
  },
  render: (args) => (
    <SideNav size={args.size} collapsible={args.collapsible} headerConfig={args.headerConfig} appearance={args.appearance} items={args.items}>
      {PageContent}
    </SideNav>
  ),
};
