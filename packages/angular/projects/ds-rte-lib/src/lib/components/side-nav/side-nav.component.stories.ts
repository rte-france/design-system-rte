import {
  TESTING_ENTER_KEY,
  TESTING_SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { componentWrapperDecorator, Meta, StoryObj } from "@storybook/angular";
import { expect, userEvent, within } from "@storybook/test";

import { SideNavComponent } from "./side-nav.component";

const meta: Meta<SideNavComponent> = {
  title: "SideNav",
  component: SideNavComponent,
  tags: ["autodocs"],
  decorators: [
    componentWrapperDecorator((story) => `<div style="height: 600px; width: 100%; display: flex;">${story}</div>`),
  ],
  argTypes: {
    collapsible: { control: "boolean" },
    size: { control: "select", options: ["s", "m", "l"] },
    appearance: { control: "select", options: ["neutral", "brand"] },
    collapsed: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<SideNavComponent>;

const PageContent = `
  <div style="padding: 2rem;">
    <h1 style="margin: 0 0 1rem 0;">Dashboard</h1>
    <p style="line-height: 1.6; color: #555; margin-bottom: 1rem;">
      Welcome to the dashboard. Use the navigation on the left to explore different sections.
    </p>
    <p style="line-height: 1.6; color: #555; margin-bottom: 1rem;">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </p>
  </div>
`;

const navigationItems = [
  { label: "Home", icon: "home", showIcon: true },
  { label: "Dashboard", icon: "dashboard", showIcon: true },
  { label: "Analytics", icon: "analytics", showIcon: true },
  { label: "Settings", icon: "settings", showIcon: true },
  { label: "Profile", icon: "user", showIcon: true, link: "/profile" },
];

const navigationItemsWithNested = [
  { label: "Home", icon: "home", showIcon: true, link: "/home" },
  {
    label: "Dashboard",
    icon: "dashboard",
    showIcon: true,
    items: [{ label: "Overview" }, { label: "Reports" }, { label: "Analytics" }],
  },
  {
    label: "Settings",
    icon: "settings",
    showIcon: true,
    items: [
      { label: "General" },
      { label: "Privacy" },
      {
        label: "Advanced",
        items: [{ label: "Security" }, { label: "API Keys" }],
      },
    ],
  },
  { label: "Profile", icon: "user", showIcon: true, link: "/profile" },
];

const defaultHeaderConfig = {
  identifier: "MA",
  title: "My Application",
  version: "V1.2.3",
  icon: "home",
  link: "/",
};

export const Default: Story = {
  args: {
    headerConfig: {
      title: "My Header",
      icon: "home",
      identifier: "MA",
      link: "/my-application",
    },
    items: navigationItems,
  },
  render: (args) => ({
    props: args,
    template: `
      <rte-side-nav
        [size]="size"
        [collapsible]="collapsible"
        [headerConfig]="headerConfig"
        [appearance]="appearance"
        [items]="items"
        [collapsed]="collapsed">
        <div content>${PageContent}</div>
      </rte-side-nav>
    `,
  }),
};

export const Collapsible: Story = {
  args: {
    ...Default.args,
    collapsible: true,
  },
  render: Default.render,
};

export const HeaderWithVersion: Story = {
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
  },
  render: Default.render,
};

export const WithNestedMenus: Story = {
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true,
  },
  render: Default.render,
};

export const HeaderWithLinkTest: Story = {
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    collapsible: true,
  },
  render: Default.render,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const sideNav = canvas.getByRole("navigation");

    await step("Verify header is a link when link prop is provided", async () => {
      const headerLink = sideNav.querySelector('a[href="/"]');
      expect(headerLink).not.toBeNull();
      expect(headerLink).toHaveStyle({ cursor: "pointer" });
    });

    await step("Verify header is keyboard navigable", async () => {
      const headerLink = sideNav.querySelector('a[href="/"]') as HTMLElement;
      headerLink?.focus();
      expect(headerLink).toHaveFocus();
    });
  },
};

export const HeaderWithOnClickTest: Story = {
  args: {
    ...Default.args,
    headerConfig: { ...defaultHeaderConfig, link: null, onClick: () => console.log("Header clicked") },
    collapsible: true,
  },
  render: Default.render,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const sideNav = canvas.getByRole("navigation");

    await step("Verify header is clickable button when onClick is provided", async () => {
      const headerButton = sideNav.querySelector('[role="button"]');
      expect(headerButton).not.toBeNull();
      expect(headerButton).toHaveStyle({ cursor: "pointer" });
    });

    await step("Verify header is keyboard navigable and responds to Enter/Space", async () => {
      const headerButton = sideNav.querySelector('[role="button"]') as HTMLElement;
      headerButton?.focus();
      expect(headerButton).toHaveFocus();

      await userEvent.keyboard(TESTING_ENTER_KEY);
      await userEvent.keyboard(TESTING_SPACE_KEY);
    });
  },
};
