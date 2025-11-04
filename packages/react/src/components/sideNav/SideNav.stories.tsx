import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";

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

const navigationItemsWithNested = [
  { label: "Home", icon: "home", showIcon: true, link: "/home" },
  {
    label: "Dashboard",
    icon: "dashboard",
    showIcon: true,
    items: [
      { label: "Overview", link: "/dashboard/overview" },
      { label: "Reports", link: "/dashboard/reports" },
      { label: "Analytics", link: "/dashboard/analytics" },
    ],
  },
  {
    label: "Settings",
    icon: "settings",
    showIcon: true,
    items: [
      { label: "General", link: "/settings/general" },
      { label: "Privacy", link: "/settings/privacy" },
      {
        label: "Advanced",
        items: [
          { label: "Security", link: "/settings/advanced/security" },
          { label: "API Keys", link: "/settings/advanced/api" },
        ],
      },
    ],
  },
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
    <SideNav
      size={args.size}
      collapsible={args.collapsible}
      headerConfig={args.headerConfig}
      appearance={args.appearance}
      items={args.items}
    >
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
    <SideNav
      size={args.size}
      collapsible={args.collapsible}
      headerConfig={args.headerConfig}
      appearance={args.appearance}
      items={args.items}
    >
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
    <SideNav
      size={args.size}
      collapsible={args.collapsible}
      headerConfig={args.headerConfig}
      appearance={args.appearance}
      items={args.items}
    >
      {PageContent}
    </SideNav>
  ),
};

export const WithNestedMenus: Story = {
  args: {
    headerConfig: {
      identifier: "MA",
      title: "My Application",
      version: "V1.2.3",
      icon: "home",
    },
    items: navigationItemsWithNested,
    collapsible: true,
  },
  render: (args) => (
    <SideNav
      size={args.size}
      collapsible={args.collapsible}
      headerConfig={args.headerConfig}
      appearance={args.appearance}
      items={args.items}
    >
      {PageContent}
    </SideNav>
  ),
};

export const KeyboardNavigationTest: Story = {
  args: {
    headerConfig: {
      identifier: "MA",
      title: "My Application",
      version: "V1.2.3",
      icon: "home",
    },
    items: navigationItemsWithNested,
    collapsible: true,
  },
  render: (args) => (
    <SideNav
      size={args.size}
      collapsible={args.collapsible}
      headerConfig={args.headerConfig}
      appearance={args.appearance}
      items={args.items}
    >
      {PageContent}
    </SideNav>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const sideNav = canvas.getByRole("navigation");

    const getNavLink = (text: string): HTMLElement | null => {
      try {
        return within(sideNav).getByRole("link", { name: text });
      } catch {
        const textElement = within(sideNav).getByText(text);
        return textElement.closest("a, span") as HTMLElement | null;
      }
    };

    const getNavElement = (text: string): HTMLElement | null => {
      const link = within(sideNav).queryByRole("link", { name: text });
      if (link) return link;
      const textElement = within(sideNav).getByText(text);
      return textElement.parentElement as HTMLElement | null;
    };

    const expectElementToHaveFocus = (element: HTMLElement | null) => {
      expect(element).not.toBeNull();
      expect(element).toHaveFocus();
    };

    const expectElementNotToHaveFocus = (text: string) => {
      const element = getNavElement(text);
      if (element) {
        expect(element).not.toHaveFocus();
      }
    };

    const expectElementToBeSkipped = (text: string) => {
      const element = getNavElement(text);
      if (element) {
        expect(element).toHaveAttribute("tabindex", "-1");
      }
    };

    const expectElementToBeAccessible = (text: string) => {
      const element = getNavElement(text);
      if (element) {
        expect(element).toHaveAttribute("tabindex", "0");
      }
    };

    await step("Navigate through navigation when all menus are closed", async () => {
      expectElementToBeSkipped("Overview");
      expectElementToBeSkipped("Reports");
      expectElementToBeSkipped("Analytics");
      expectElementToBeSkipped("General");
      expectElementToBeSkipped("Privacy");
      expectElementToBeSkipped("Advanced");

      await userEvent.tab();
      await userEvent.tab();
      const homeLink = getNavLink("Home");
      expectElementToHaveFocus(homeLink);

      await userEvent.tab();
      const dashboardMenu = getNavElement("Dashboard");
      expectElementToHaveFocus(dashboardMenu);
      expectElementNotToHaveFocus("Overview");
      expectElementNotToHaveFocus("Reports");
      expectElementNotToHaveFocus("Analytics");

      await userEvent.tab();
      const settingsMenu = getNavElement("Settings");
      expectElementToHaveFocus(settingsMenu);
      expectElementNotToHaveFocus("General");
      expectElementNotToHaveFocus("Privacy");
      expectElementNotToHaveFocus("Advanced");

      await userEvent.tab();
      const profileLink = getNavLink("Profile");
      expectElementToHaveFocus(profileLink);
    });

    await step("Open Dashboard menu and verify nested items are accessible", async () => {
      const dashboardMenu = getNavElement("Dashboard");
      await userEvent.click(dashboardMenu!);

      expectElementToBeAccessible("Overview");
      expectElementToBeAccessible("Reports");
      expectElementToBeAccessible("Analytics");

      await userEvent.tab();
      const overviewLink = getNavLink("Overview");
      expectElementToHaveFocus(overviewLink);

      await userEvent.tab();
      const reportsLink = getNavLink("Reports");
      expectElementToHaveFocus(reportsLink);

      await userEvent.tab();
      const analyticsLink = getNavLink("Analytics");
      expectElementToHaveFocus(analyticsLink);
    });

    await step("Close Dashboard menu and verify nested items are skipped again", async () => {
      const dashboardMenu = getNavElement("Dashboard");
      await userEvent.click(dashboardMenu!);

      expectElementToBeSkipped("Overview");
      expectElementToBeSkipped("Reports");
      expectElementToBeSkipped("Analytics");

      await userEvent.tab();
      const settingsMenu = getNavElement("Settings");
      expectElementToHaveFocus(settingsMenu);
      expectElementNotToHaveFocus("Overview");
      expectElementNotToHaveFocus("Reports");
      expectElementNotToHaveFocus("Analytics");
    });

    await step("Open Settings menu and verify nested items are accessible", async () => {
      const settingsMenu = getNavElement("Settings");
      await userEvent.click(settingsMenu!);

      expectElementToBeAccessible("General");
      expectElementToBeAccessible("Privacy");
      expectElementToBeAccessible("Advanced");
      expectElementToBeSkipped("Security");
      expectElementToBeSkipped("API Keys");

      await userEvent.tab();
      const generalLink = getNavLink("General");
      expectElementToHaveFocus(generalLink);

      await userEvent.tab();
      const privacyLink = getNavLink("Privacy");
      expectElementToHaveFocus(privacyLink);

      await userEvent.tab();
      const advancedMenu = getNavElement("Advanced");
      expectElementToHaveFocus(advancedMenu);
      expectElementNotToHaveFocus("Security");
      expectElementNotToHaveFocus("API Keys");
    });

    await step("Open Advanced menu and verify deeply nested items are accessible", async () => {
      const advancedMenu = getNavElement("Advanced");
      await userEvent.click(advancedMenu!);

      expectElementToBeAccessible("Security");
      expectElementToBeAccessible("API Keys");

      await userEvent.tab();
      const securityLink = getNavLink("Security");
      expectElementToHaveFocus(securityLink);

      await userEvent.tab();
      const apiKeysLink = getNavLink("API Keys");
      expectElementToHaveFocus(apiKeysLink);
    });

    await step("Close Advanced menu and verify deeply nested items are skipped", async () => {
      const advancedMenu = getNavElement("Advanced");
      await userEvent.click(advancedMenu!);

      expectElementToBeSkipped("Security");
      expectElementToBeSkipped("API Keys");

      await userEvent.tab();
      const profileLink = getNavLink("Profile");
      expectElementToHaveFocus(profileLink);
      expectElementNotToHaveFocus("Security");
      expectElementNotToHaveFocus("API Keys");
    });
  },
};
