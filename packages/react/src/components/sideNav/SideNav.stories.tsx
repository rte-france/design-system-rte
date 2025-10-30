import { Meta, StoryObj } from "@storybook/react";

import SideNav from "./SideNav";

// Placeholder for SideNav component import

const meta = {
  title: "SideNav (développement en cours)",
  id: "SideNav",
  component: SideNav,
  tags: ["autodocs"],
  argTypes: {
    collapsible: { control: "boolean" },
    size: { control: "select", options: ["s", "m", "l"] },
  },
} satisfies Meta<typeof SideNav>;

export default meta;
type Story = StoryObj<typeof meta>;

const siteContent = (
  <div style={{ padding: "2rem" }}>
    <h1>Site Title</h1>
    <p>Site Description</p>
  </div>
);

// Example: Basic SideNav with content projection
export const Default: Story = {
  args: {
    collapsible: true,
    size: "l",
  },
  render: (args) => (
    <SideNav
      size={args.size}
      collapsible={args.collapsible}
      header={
        <div>
          <h2>Navigation</h2>
        </div>
      }
      body={
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      }
      footer={
        <div style={{ fontSize: "0.875rem" }}>
          <p>© 2025</p>
        </div>
      }
    >
      {siteContent}
    </SideNav>
  ),
};

// Example: With only header and content (no footer)
export const HeaderAndContent: Story = {
  render: (args) => (
    <SideNav
      size={args.size}
      collapsible={args.collapsible}
      header={
        <div>
          <h3>Menu</h3>
        </div>
      }
      body={
        <nav>
          <a href="#item1">Item 1</a>
          <a href="#item2">Item 2</a>
          <a href="#item3">Item 3</a>
        </nav>
      }
    />
  ),
};

// Example: With only content (no header or footer)
export const ContentOnly: Story = {
  render: (args) => (
    <SideNav
      size={args.size}
      collapsible={args.collapsible}
      body={
        <div>
          <h2>Main Content</h2>
          <p>This is the only slot with content.</p>
        </div>
      }
    />
  ),
};

// Example: With complex header and footer
export const ComplexLayout: Story = {
  render: (args) => (
    <SideNav
      size={args.size}
      collapsible={args.collapsible}
      header={
        <div style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
          <h2 style={{ margin: 0 }}>Dashboard</h2>
          <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.875rem", color: "#666" }}>v1.0.0</p>
        </div>
      }
      body={
        <div style={{ padding: "1rem" }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <h4>Main Menu</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li>
                <a href="#overview">Overview</a>
              </li>
              <li>
                <a href="#analytics">Analytics</a>
              </li>
              <li>
                <a href="#reports">Reports</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Settings</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li>
                <a href="#profile">Profile</a>
              </li>
              <li>
                <a href="#preferences">Preferences</a>
              </li>
            </ul>
          </div>
        </div>
      }
      footer={
        <div style={{ padding: "1rem", textAlign: "center" }}>
          <small>User: John Doe</small>
        </div>
      }
    />
  ),
};

// Example: Demonstrating collapse behavior
export const Collapsible: Story = {
  args: {
    collapsible: true,
  },
  render: (args) => (
    <SideNav
      size={args.size}
      collapsible={args.collapsible}
      header={<h3>📋 Tasks</h3>}
      body={
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>✓ Task 1</li>
          <li>✓ Task 2</li>
          <li>⏳ Task 3</li>
        </ul>
      }
      footer={<small>4 tasks total</small>}
    />
  ),
};

// Additional placeholders for other stories
