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
      { label: "Overview"},
      { label: "Reports"},
      { label: "Analytics"},
    ],
  },
  {
    label: "Settings",
    icon: "settings",
    showIcon: true,
    items: [
      { label: "General"},
      { label: "Privacy"},
      {
        label: "Advanced",
        items: [
          { label: "Security"},
          { label: "API Keys"},
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

    const getNavElement = (text: string): HTMLElement | null => {
      const navContainer = within(sideNav);
      const link = navContainer.queryByRole("link", { name: text });
      if (link) return link;
      const textElement = navContainer.getByText(text);
      const listItem = textElement.closest("li") as HTMLElement | null;
      if (listItem) {
        const anchor = listItem.querySelector("a");
        if (anchor) return anchor;
        const spans = Array.from(listItem.querySelectorAll("span"));
        const interactiveSpan = spans.find((span) => span.hasAttribute("tabindex"));
        if (interactiveSpan) return interactiveSpan as HTMLElement;
      }
      return null;
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
      const homeElement = getNavElement("Home");
      expectElementToHaveFocus(homeElement);

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
      const profileElement = getNavElement("Profile");
      expectElementToHaveFocus(profileElement);
    });

    await step("Open Dashboard menu and verify nested items are accessible", async () => {
      const dashboardMenu = getNavElement("Dashboard");
      await userEvent.click(dashboardMenu!);

      expectElementToBeAccessible("Overview");
      expectElementToBeAccessible("Reports");
      expectElementToBeAccessible("Analytics");

      await userEvent.tab();
      const overviewElement = getNavElement("Overview");
      expectElementToHaveFocus(overviewElement);

      await userEvent.tab();
      const reportsElement = getNavElement("Reports");
      expectElementToHaveFocus(reportsElement);

      await userEvent.tab();
      const analyticsElement = getNavElement("Analytics");
      expectElementToHaveFocus(analyticsElement);
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
      const generalElement = getNavElement("General");
      expectElementToHaveFocus(generalElement);

      await userEvent.tab();
      const privacyElement = getNavElement("Privacy");
      expectElementToHaveFocus(privacyElement);

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
      const securityElement = getNavElement("Security");
      expectElementToHaveFocus(securityElement);

      await userEvent.tab();
      const apiKeysElement = getNavElement("API Keys");
      expectElementToHaveFocus(apiKeysElement);
    });

    await step("Close Advanced menu and verify deeply nested items are skipped", async () => {
      const advancedMenu = getNavElement("Advanced");
      await userEvent.click(advancedMenu!);

      expectElementToBeSkipped("Security");
      expectElementToBeSkipped("API Keys");

      await userEvent.tab();
      const profileElement = getNavElement("Profile");
      expectElementToHaveFocus(profileElement);
      expectElementNotToHaveFocus("Security");
      expectElementNotToHaveFocus("API Keys");
    });
  },
};
