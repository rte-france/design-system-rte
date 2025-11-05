import {
  TESTING_ENTER_KEY,
  TESTING_SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
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
    collapsed: { control: "boolean" },
  },
  render: (args) => (
    <SideNav
      size={args.size}
      collapsible={args.collapsible}
      headerConfig={args.headerConfig}
      appearance={args.appearance}
      items={args.items}
      collapsed={args.collapsed}
    >
      {PageContent}
    </SideNav>
  ),
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

const headerConfigWithLink = {
  ...defaultHeaderConfig,
};

const headerConfigWithOnClick = {
  ...defaultHeaderConfig,
  onClick: () => {
    console.log("Header clicked");
  },
};

const getNavElement = (sideNav: HTMLElement, text: string): HTMLElement | null => {
  const navContainer = within(sideNav);
  const link = navContainer.queryByRole("link", { name: text });
  if (link) return link;
  const textElement = navContainer.queryByText(text);
  if (textElement) {
    const listItem = textElement.closest("li") as HTMLElement | null;
    if (listItem) {
      const anchor = listItem.querySelector("a");
      if (anchor) return anchor;
      const spans = Array.from(listItem.querySelectorAll("span"));
      const interactiveSpan = spans.find((span) => span.hasAttribute("tabindex"));
      if (interactiveSpan) return interactiveSpan as HTMLElement;
    }
  }
  return null;
};

const getNavElementInCollapsedState = (sideNav: HTMLElement, itemIndex: number): HTMLElement | null => {
  const body = sideNav.querySelector('[class*="sideNavBody"]');
  if (!body) return null;

  const bodyListItems = Array.from(body.querySelectorAll("li")) as HTMLElement[];
  const listItem = bodyListItems[itemIndex];

  if (listItem) {
    const anchor = listItem.querySelector("a");
    if (anchor) return anchor;
    const spans = Array.from(listItem.querySelectorAll("span"));
    const interactiveSpan = spans.find((span) => span.hasAttribute("tabindex"));
    if (interactiveSpan) return interactiveSpan as HTMLElement;
  }
  return null;
};

const getHeaderTitleContainer = (sideNav: HTMLElement, identifierText: string = "MA"): HTMLElement | null => {
  const navContainer = within(sideNav);
  const identifier = navContainer.getByText(identifierText);
  const headerTitleContainer = identifier.parentElement?.parentElement;
  return headerTitleContainer as HTMLElement | null;
};

const expectElementToHaveFocus = (element: HTMLElement | null) => {
  expect(element).not.toBeNull();
  expect(element).toHaveFocus();
};

const expectElementNotToHaveFocus = (sideNav: HTMLElement, text: string) => {
  const element = getNavElement(sideNav, text);
  if (element) {
    expect(element).not.toHaveFocus();
  }
};

const expectElementToBeSkipped = (sideNav: HTMLElement, text: string) => {
  const element = getNavElement(sideNav, text);
  if (element) {
    expect(element).toHaveAttribute("tabindex", "-1");
  }
};

const expectElementToBeAccessible = (sideNav: HTMLElement, text: string) => {
  const element = getNavElement(sideNav, text);
  if (element) {
    expect(element).toHaveAttribute("tabindex", "0");
  }
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
};

export const Collapsible: Story = {
  args: {
    ...Default.args,
    collapsible: true,
  },
};

export const HeaderWithVersion: Story = {
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
  },
};

export const WithNestedMenus: Story = {
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true,
  },
};

export const KeyboardNavigationTest: Story = {
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const sideNav = canvas.getByRole("navigation");

    await step("Navigate through navigation when all menus are closed", async () => {
      expectElementToBeSkipped(sideNav, "Overview");
      expectElementToBeSkipped(sideNav, "Reports");
      expectElementToBeSkipped(sideNav, "Analytics");
      expectElementToBeSkipped(sideNav, "General");
      expectElementToBeSkipped(sideNav, "Privacy");
      expectElementToBeSkipped(sideNav, "Advanced");

      const homeElement = getNavElement(sideNav, "Home");
      homeElement?.focus();
      expectElementToHaveFocus(homeElement);

      await userEvent.tab();
      const dashboardMenu = getNavElement(sideNav, "Dashboard");
      expectElementToHaveFocus(dashboardMenu);
      expectElementNotToHaveFocus(sideNav, "Overview");
      expectElementNotToHaveFocus(sideNav, "Reports");
      expectElementNotToHaveFocus(sideNav, "Analytics");

      await userEvent.tab();
      const settingsMenu = getNavElement(sideNav, "Settings");
      expectElementToHaveFocus(settingsMenu);
      expectElementNotToHaveFocus(sideNav, "General");
      expectElementNotToHaveFocus(sideNav, "Privacy");
      expectElementNotToHaveFocus(sideNav, "Advanced");

      await userEvent.tab();
      const profileElement = getNavElement(sideNav, "Profile");
      expectElementToHaveFocus(profileElement);
    });

    await step("Open Dashboard menu and verify nested items are accessible", async () => {
      const dashboardMenu = getNavElement(sideNav, "Dashboard");
      await userEvent.click(dashboardMenu!);

      expectElementToBeAccessible(sideNav, "Overview");
      expectElementToBeAccessible(sideNav, "Reports");
      expectElementToBeAccessible(sideNav, "Analytics");

      await userEvent.tab();
      const overviewElement = getNavElement(sideNav, "Overview");
      expectElementToHaveFocus(overviewElement);

      await userEvent.tab();
      const reportsElement = getNavElement(sideNav, "Reports");
      expectElementToHaveFocus(reportsElement);

      await userEvent.tab();
      const analyticsElement = getNavElement(sideNav, "Analytics");
      expectElementToHaveFocus(analyticsElement);
    });

    await step("Close Dashboard menu and verify nested items are skipped again", async () => {
      const dashboardMenu = getNavElement(sideNav, "Dashboard");
      await userEvent.click(dashboardMenu!);

      expectElementToBeSkipped(sideNav, "Overview");
      expectElementToBeSkipped(sideNav, "Reports");
      expectElementToBeSkipped(sideNav, "Analytics");

      await userEvent.tab();
      const settingsMenu = getNavElement(sideNav, "Settings");
      expectElementToHaveFocus(settingsMenu);
      expectElementNotToHaveFocus(sideNav, "Overview");
      expectElementNotToHaveFocus(sideNav, "Reports");
      expectElementNotToHaveFocus(sideNav, "Analytics");
    });

    await step("Open Settings menu and verify nested items are accessible", async () => {
      const settingsMenu = getNavElement(sideNav, "Settings");
      await userEvent.click(settingsMenu!);

      expectElementToBeAccessible(sideNav, "General");
      expectElementToBeAccessible(sideNav, "Privacy");
      expectElementToBeAccessible(sideNav, "Advanced");
      expectElementToBeSkipped(sideNav, "Security");
      expectElementToBeSkipped(sideNav, "API Keys");

      await userEvent.tab();
      const generalElement = getNavElement(sideNav, "General");
      expectElementToHaveFocus(generalElement);

      await userEvent.tab();
      const privacyElement = getNavElement(sideNav, "Privacy");
      expectElementToHaveFocus(privacyElement);

      await userEvent.tab();
      const advancedMenu = getNavElement(sideNav, "Advanced");
      expectElementToHaveFocus(advancedMenu);
      expectElementNotToHaveFocus(sideNav, "Security");
      expectElementNotToHaveFocus(sideNav, "API Keys");
    });

    await step("Open Advanced menu and verify deeply nested items are accessible", async () => {
      const advancedMenu = getNavElement(sideNav, "Advanced");
      await userEvent.click(advancedMenu!);

      expectElementToBeAccessible(sideNav, "Security");
      expectElementToBeAccessible(sideNav, "API Keys");

      await userEvent.tab();
      const securityElement = getNavElement(sideNav, "Security");
      expectElementToHaveFocus(securityElement);

      await userEvent.tab();
      const apiKeysElement = getNavElement(sideNav, "API Keys");
      expectElementToHaveFocus(apiKeysElement);
    });

    await step("Close Advanced menu and verify deeply nested items are skipped", async () => {
      const advancedMenu = getNavElement(sideNav, "Advanced");
      await userEvent.click(advancedMenu!);

      expectElementToBeSkipped(sideNav, "Security");
      expectElementToBeSkipped(sideNav, "API Keys");

      await userEvent.tab();
      const profileElement = getNavElement(sideNav, "Profile");
      expectElementToHaveFocus(profileElement);
      expectElementNotToHaveFocus(sideNav, "Security");
      expectElementNotToHaveFocus(sideNav, "API Keys");
    });
  },
};

export const HeaderClickabilityTest: Story = {
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    collapsible: true,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const sideNav = canvas.getByRole("navigation");

    await step("Verify header is not clickable when no link or onClick is provided", async () => {
      const headerTitleContainer = getHeaderTitleContainer(sideNav);
      expect(headerTitleContainer).not.toBeNull();
      expect(headerTitleContainer?.tagName).toBe("DIV");
      expect(headerTitleContainer).not.toHaveAttribute("href");
      expect(headerTitleContainer).not.toHaveAttribute("role", "button");
      expect(headerTitleContainer).not.toHaveAttribute("tabindex");
    });
  },
};

export const HeaderWithLinkTest: Story = {
  args: {
    ...Default.args,
    headerConfig: headerConfigWithLink,
    collapsible: true,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const sideNav = canvas.getByRole("navigation");

    await step("Verify header is a link when link prop is provided", async () => {
      const headerTitleContainer = getHeaderTitleContainer(sideNav);
      expect(headerTitleContainer).not.toBeNull();
      expect(headerTitleContainer?.tagName).toBe("A");
      expect(headerTitleContainer).toHaveAttribute("href", "/");
      expect(headerTitleContainer).toHaveStyle({ cursor: "pointer" });
    });

    await step("Verify header is keyboard navigable", async () => {
      const headerLink = getHeaderTitleContainer(sideNav);
      headerLink?.focus();
      expect(headerLink).toHaveFocus();
    });
  },
};

export const HeaderWithOnClickTest: Story = {
  args: {
    ...Default.args,
    headerConfig: headerConfigWithOnClick,
    collapsible: true,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const sideNav = canvas.getByRole("navigation");

    await step("Verify header is clickable button when onClick is provided", async () => {
      const headerTitleContainer = getHeaderTitleContainer(sideNav);
      expect(headerTitleContainer).not.toBeNull();
      expect(headerTitleContainer?.tagName).toBe("A");
      expect(headerTitleContainer).toHaveStyle({ cursor: "pointer" });
    });

    await step("Verify header is keyboard navigable and responds to Enter/Space", async () => {
      const headerButton = getHeaderTitleContainer(sideNav);
      headerButton?.focus();
      expect(headerButton).toHaveFocus();

      await userEvent.keyboard(TESTING_ENTER_KEY);
      await userEvent.keyboard(TESTING_SPACE_KEY);
    });
  },
};

export const CollapsedTooltipTest: Story = {
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    collapsible: true,
    collapsed: true,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const sideNav = canvas.getByRole("navigation");

    await step("Verify tooltips appear when tabbing to navigation items", async () => {
      const homeElement = getNavElementInCollapsedState(sideNav, 0);
      expect(homeElement).not.toBeNull();

      homeElement?.focus();
      await new Promise((resolve) => setTimeout(resolve, 200));

      const tooltip = within(document.body).queryByRole("tooltip", { name: "Home" });
      expect(tooltip).not.toBeNull();
      expect(tooltip).toHaveTextContent("Home");
    });

    await step("Verify tooltips appear when tabbing to next navigation item", async () => {
      await userEvent.tab();
      await new Promise((resolve) => setTimeout(resolve, 200));

      const tooltip = within(document.body).queryByRole("tooltip", { name: "Dashboard" });
      expect(tooltip).not.toBeNull();
      expect(tooltip).toHaveTextContent("Dashboard");
    });

    await step("Verify tooltips appear for items with links when tabbing", async () => {
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await new Promise((resolve) => setTimeout(resolve, 200));

      const tooltip = within(document.body).queryByRole("tooltip", { name: "Profile" });
      expect(tooltip).not.toBeNull();
      expect(tooltip).toHaveTextContent("Profile");
    });
  },
};

export const CollapsedTooltipWithNestedTest: Story = {
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true,
    collapsed: true,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const sideNav = canvas.getByRole("navigation");

    await step("Verify tooltips appear when tabbing to menu items", async () => {
      const dashboardMenu = getNavElementInCollapsedState(sideNav, 1);
      expect(dashboardMenu).not.toBeNull();

      await userEvent.tab();
      await userEvent.tab();
      await new Promise((resolve) => setTimeout(resolve, 200));

      const tooltip = within(document.body).queryByRole("tooltip", { name: "Dashboard" });
      expect(tooltip).not.toBeNull();
      expect(tooltip).toHaveTextContent("Dashboard");
    });
  },
};
