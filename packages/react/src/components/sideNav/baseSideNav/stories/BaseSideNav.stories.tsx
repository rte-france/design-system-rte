import { Meta, StoryObj } from "@storybook/react";

import BaseSideNav from "../BaseSideNav";

const meta = {
  title: "Composants/BaseSideNav",
  id: "BaseSideNav",
  component: BaseSideNav,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["s", "m", "l"] },
    showHeader: { control: "boolean" },
    showFooter: { control: "boolean" },
    appearance: { control: "select", options: ["neutral", "brand"] },
  },
} satisfies Meta<typeof BaseSideNav>;

export default meta;
type Story = StoryObj<typeof meta>;

const SimpleBody = (
  <div style={{ padding: "0.5rem 0" }}>
    <p style={{ margin: "0.5rem 0", fontSize: "0.875rem" }}>Content goes here</p>
  </div>
);

const PageContent = (
  <div style={{ padding: "2rem", width: "320px", boxSizing: "border-box" }}>
    <h1 style={{ margin: "0 0 1rem 0" }}>Welcome to the Design System</h1>
    <p style={{ lineHeight: "1.6", color: "#555", marginBottom: "1rem" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
    </p>
    <p style={{ lineHeight: "1.6", color: "#555", marginBottom: "1rem" }}>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
);

export const BodyOnly: Story = {
  args: {
    size: "m",
    showHeader: false,
    showFooter: false,
    appearance: "brand",
  },
  render: (args) => (
    <BaseSideNav
      size={args.size}
      showHeader={args.showHeader}
      showFooter={args.showFooter}
      body={SimpleBody}
      appearance={args.appearance}
    >
      {PageContent}
    </BaseSideNav>
  ),
};

export const HeaderWithBody: Story = {
  args: {
    size: "m",
    showHeader: true,
    showFooter: false,
  },
  render: (args) => (
    <BaseSideNav
      size={args.size}
      showHeader={args.showHeader}
      showFooter={args.showFooter}
      header={<div style={{ fontWeight: "600", fontSize: "0.875rem" }}>Menu</div>}
      body={SimpleBody}
    >
      {PageContent}
    </BaseSideNav>
  ),
};

export const BodyWithFooter: Story = {
  args: {
    size: "m",
    showHeader: false,
    showFooter: true,
  },
  render: (args) => (
    <BaseSideNav
      size={args.size}
      showHeader={args.showHeader}
      showFooter={args.showFooter}
      body={SimpleBody}
      footer={<div style={{ fontSize: "0.75rem", color: "#666" }}>Footer</div>}
    >
      {PageContent}
    </BaseSideNav>
  ),
};

export const HeaderBodyFooter: Story = {
  args: {
    size: "m",
    showHeader: true,
    showFooter: true,
  },
  render: (args) => (
    <BaseSideNav
      size={args.size}
      showHeader={args.showHeader}
      showFooter={args.showFooter}
      header={<div style={{ fontWeight: "600", fontSize: "0.875rem" }}>Navigation</div>}
      body={SimpleBody}
      footer={<div style={{ fontSize: "0.75rem" }}>© 2025</div>}
    >
      {PageContent}
    </BaseSideNav>
  ),
};

export const ColoredSections: Story = {
  args: {
    showHeader: true,
    showFooter: true,
  },
  render: (args) => (
    <BaseSideNav
      size={args.size}
      showHeader={args.showHeader}
      showFooter={args.showFooter}
      header={
        <div
          style={{
            fontWeight: "600",
            color: "#000",
            padding: "1rem",
            backgroundColor: "#E8F4F8",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          📍 Header Section
        </div>
      }
      body={
        <div
          style={{
            padding: "1rem",
            backgroundColor: "#F0E8F8",
            width: "100%",
            height: "100%",
            boxSizing: "border-box",
            color: "#000",
          }}
        >
          📄 Body Section
          <br />
          <small>Expands to fill available space</small>
        </div>
      }
      footer={
        <div
          style={{
            padding: "1rem",
            backgroundColor: "#F8F0E8",
            width: "100%",
            boxSizing: "border-box",
            color: "#000",
          }}
        >
          🔧 Footer Section
        </div>
      }
    >
      {PageContent}
    </BaseSideNav>
  ),
};
