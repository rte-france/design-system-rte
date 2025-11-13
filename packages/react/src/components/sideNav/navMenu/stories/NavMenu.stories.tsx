import { NavItemProps } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { useState } from "react";

import NavItem from "../../navItem/NavItem";
import NavMenu from "../NavMenu";

const meta = {
  title: "NavMenu",
  component: NavMenu,
  tags: ["autodocs"],
  argTypes: {
    collapsed: {
      control: "boolean",
      description: "Whether the sidenav is collapsed",
    },
    showMenuIcon: {
      control: "boolean",
      description: "Whether to show the chevron icon",
      defaultValue: true,
    },
    showIcon: {
      control: "boolean",
      description: "Whether to show the item icon",
    },
    open: {
      control: "boolean",
      description: "Controlled open state",
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof NavMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const simpleNestedItems: NavItemProps[] = [
  { label: "Sub Item 1", link: "/sub1" },
  { label: "Sub Item 2", link: "/sub2" },
  { label: "Sub Item 3", link: "/sub3" },
];

const deepNestedItems: NavItemProps[] = [
  {
    label: "Level 2 Parent",
    items: [
      { label: "Level 3 Item 1", link: "/level3/item1" },
      { label: "Level 3 Item 2", link: "/level3/item2" },
      {
        label: "Level 3 Parent",
        items: [
          { label: "Level 4 Item 1", link: "/level4/item1" },
          { label: "Level 4 Item 2", link: "/level4/item2" },
        ],
      },
    ],
  },
  { label: "Level 2 Item", link: "/level2/item" },
];

const mixedItems: NavItemProps[] = [
  { label: "Regular Item", link: "/regular" },
  {
    label: "Parent with Children",
    items: [
      { label: "Child 1", link: "/child1" },
      { label: "Child 2", link: "/child2" },
      { label: "Child 3", link: "/child3" },
    ],
  },
];

export const Default: Story = {
  args: {
    label: "Menu Item",
    items: simpleNestedItems,
    showIcon: false,
    showMenuIcon: true,
    collapsed: false,
  },
  render: (args) => (
    <ul style={{ listStyle: "none", padding: 0, width: "300px" }}>
      <NavMenu {...args} />
    </ul>
  ),
};

export const WithIcon: Story = {
  args: {
    label: "Menu Item",
    icon: "settings",
    showIcon: true,
    items: simpleNestedItems,
    showMenuIcon: true,
    collapsed: false,
  },
  render: (args) => (
    <ul style={{ listStyle: "none", padding: 0, width: "300px" }}>
      <NavMenu {...args} />
    </ul>
  ),
};

export const WithLink: Story = {
  args: {
    label: "Menu Item",
    link: "/parent",
    items: simpleNestedItems,
    showIcon: false,
    showMenuIcon: true,
    collapsed: false,
  },
  render: (args) => (
    <ul style={{ listStyle: "none", padding: 0, width: "300px" }}>
      <NavMenu {...args} />
    </ul>
  ),
};

export const DeeplyNested: Story = {
  args: {
    label: "Level 1 Parent",
    icon: "folder",
    showIcon: true,
    items: deepNestedItems,
    showMenuIcon: true,
    collapsed: false,
  },
  render: (args) => (
    <ul style={{ listStyle: "none", padding: 0, width: "350px" }}>
      <NavMenu {...args} />
    </ul>
  ),
};

export const ControlledOpen: Story = {
  args: {
    label: "Controlled Menu",
    items: simpleNestedItems,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <ul style={{ listStyle: "none", padding: 0, width: "300px" }}>
        <NavMenu {...args} open={isOpen} onClick={() => setIsOpen(!isOpen)} />
        <li style={{ marginTop: "1rem", padding: "0.5rem", fontSize: "0.875rem", color: "#666" }}>
          Menu is {isOpen ? "open" : "closed"}
        </li>
      </ul>
    );
  },
};

export const Collapsed: Story = {
  args: {
    label: "Menu Item",
    icon: "settings",
    showIcon: true,
    items: simpleNestedItems,
    showMenuIcon: true,
    collapsed: true,
  },
  render: (args) => (
    <ul style={{ listStyle: "none", padding: 0, width: "80px" }}>
      <NavMenu {...args} />
    </ul>
  ),
};

export const WithoutMenuIcon: Story = {
  args: {
    label: "Menu Item",
    icon: "settings",
    showIcon: true,
    items: simpleNestedItems,
    showMenuIcon: false,
    collapsed: false,
  },
  render: (args) => (
    <ul style={{ listStyle: "none", padding: 0, width: "300px" }}>
      <NavMenu {...args} />
    </ul>
  ),
};

export const MultipleMenus: Story = {
  args: {
    label: "Menu",
    items: [],
  },
  render: () => (
    <ul style={{ listStyle: "none", padding: 0, width: "300px" }}>
      <NavMenu
        label="First Menu"
        icon="folder"
        showIcon={true}
        items={simpleNestedItems}
        showMenuIcon={true}
        collapsed={false}
      />
      <NavMenu
        label="Second Menu"
        icon="settings"
        showIcon={true}
        items={mixedItems}
        showMenuIcon={true}
        collapsed={false}
      />
      <NavMenu
        label="Third Menu"
        icon="user"
        showIcon={true}
        items={[
          { label: "Profile", link: "/profile" },
          { label: "Account", link: "/account" },
          { label: "Preferences", link: "/preferences" },
        ]}
        showMenuIcon={true}
        collapsed={false}
      />
    </ul>
  ),
};

export const MixedWithNavItems: Story = {
  args: {
    label: "Menu",
    items: [],
  },
  render: () => (
    <ul style={{ listStyle: "none", padding: 0, width: "300px" }}>
      <NavItem label="Regular Item" icon="home" showIcon={true} collapsed={false} />
      <NavMenu
        label="Menu Item"
        icon="folder"
        showIcon={true}
        items={simpleNestedItems}
        showMenuIcon={true}
        collapsed={false}
      />
      <NavItem label="Another Regular Item" icon="dashboard" showIcon={true} collapsed={false} />
      <NavMenu
        label="Another Menu"
        icon="settings"
        showIcon={true}
        items={[
          { label: "Settings 1", link: "/settings1" },
          { label: "Settings 2", link: "/settings2" },
        ]}
        showMenuIcon={true}
        collapsed={false}
      />
    </ul>
  ),
};

export const WithBadge: Story = {
  args: {
    label: "Navigation item",
    icon: "home",
    showIcon: true,
    items: simpleNestedItems,
    showMenuIcon: true,
    collapsed: false,
    badge: {
      badgeType: "indicator",
      size: "m",
      content: "number",
      count: 5,
    },
  },
  render: (args) => (
    <ul style={{ listStyle: "none", padding: 0, width: "300px" }}>
      <NavMenu {...args} />
    </ul>
  ),
};

export const NavItemWithBadge: Story = {
  args: {
    label: "Menu",
    items: [],
  },
  render: () => (
    <ul style={{ listStyle: "none", padding: 0, width: "300px" }}>
      <NavItem
        label="Navigation item"
        icon="home"
        showIcon={true}
        collapsed={false}
        badge={{
          badgeType: "indicator",
          size: "m",
          content: "number",
          count: 5,
        }}
      />
      <NavItem
        label="Another Item"
        icon="dashboard"
        showIcon={true}
        collapsed={false}
        badge={{
          badgeType: "brand",
          size: "m",
          content: "number",
          count: 12,
        }}
      />
    </ul>
  ),
};

export const MixedWithBadges: Story = {
  args: {
    label: "Menu",
    items: [],
  },
  render: () => (
    <ul style={{ listStyle: "none", padding: 0, width: "300px" }}>
      <NavItem
        label="Navigation item"
        icon="home"
        showIcon={true}
        collapsed={false}
        badge={{
          badgeType: "indicator",
          size: "m",
          content: "number",
          count: 5,
        }}
      />
      <NavMenu
        label="Menu with Badge"
        icon="folder"
        showIcon={true}
        items={simpleNestedItems}
        showMenuIcon={true}
        collapsed={false}
        badge={{
          badgeType: "indicator",
          size: "m",
          content: "number",
          count: 3,
        }}
      />
      <NavItem label="Regular Item" icon="dashboard" showIcon={true} collapsed={false} />
      <NavMenu
        label="Another Menu"
        icon="settings"
        showIcon={true}
        items={[
          { label: "Settings 1", link: "/settings1" },
          { label: "Settings 2", link: "/settings2" },
        ]}
        showMenuIcon={true}
        collapsed={false}
        badge={{
          badgeType: "brand",
          size: "m",
          content: "number",
          count: 99,
        }}
      />
    </ul>
  ),
};
