import { NavItemProps } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";
import {
  TESTING_ENTER_KEY,
  TESTING_SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { useState } from "react";

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
    activeItem: { control: "text" },
  },
  render: (args) => (
    <SideNav
      size={args.size}
      collapsible={args.collapsible}
      headerConfig={args.headerConfig}
      appearance={args.appearance}
      items={args.items}
      footerItems={args.footerItems}
      collapsed={args.collapsed}
      activeItem={args.activeItem}
      onCollapsedChange={args.onCollapsedChange}
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
    <p style={{ lineHeight: "1.6", color: "#555", marginBottom: "1rem" }}>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
      aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
    <p style={{ lineHeight: "1.6", color: "#555", marginBottom: "1rem" }}>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
      ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
    </p>
    <p style={{ lineHeight: "1.6", color: "#555", marginBottom: "1rem" }}>
      Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
      explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
    </p>
    <p style={{ lineHeight: "1.6", color: "#555", marginBottom: "1rem" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </p>
  </div>
);

const baseNavItem = {
  showIcon: true,
};

const baseBadge = {
  size: "m" as const,
  content: "number" as const,
};

const baseNavItems = [
  { ...baseNavItem, id: "home", label: "Home", icon: "home" },
  { ...baseNavItem, id: "dashboard", label: "Dashboard", icon: "dashboard" },
  { ...baseNavItem, id: "analytics", label: "Analytics", icon: "analytics" },
  { ...baseNavItem, id: "settings", label: "Settings", icon: "settings" },
  { ...baseNavItem, id: "profile", label: "Profile", icon: "user", link: "/profile" },
];

const navigationItems = baseNavItems;

const navigationItemsWithNested = [
  baseNavItems[0],
  {
    ...baseNavItems[1],
    items: [{ label: "Overview" }, { label: "Reports" }, { label: "Analytics", icon: "analytics" }],
  },
  {
    ...baseNavItems[3],
    items: [
      { label: "General", icon: "general" },
      { label: "Privacy", icon: "privacy" },
      {
        label: "Advanced",
        icon: "settings",
        items: [
          { label: "Security", icon: "security" },
          { label: "API Keys", icon: "api-keys" },
        ],
      },
    ],
  },
  baseNavItems[4],
];

const navigationItemsWithNestedAndBadges: NavItemProps[] = [
  { ...baseNavItems[0], badge: { ...baseBadge, badgeType: "indicator", count: 5 } },
  {
    ...baseNavItems[1],
    badge: { ...baseBadge, badgeType: "indicator", count: 3 },
    items: [
      { label: "Overview", badge: { ...baseBadge, badgeType: "brand", count: 2 } },
      { label: "Reports" },
      { label: "Analytics", icon: "analytics", badge: { ...baseBadge, badgeType: "indicator", count: 12 } },
    ],
  },
  {
    ...baseNavItems[3],
    items: [
      { label: "General", icon: "general" },
      { label: "Privacy", icon: "privacy", badge: { ...baseBadge, badgeType: "brand", count: 1 } },
      {
        label: "Advanced",
        icon: "settings",
        badge: { ...baseBadge, badgeType: "indicator", count: 7 },
        items: [
          { label: "Security", icon: "security", badge: { ...baseBadge, badgeType: "indicator", count: 99 } },
          { label: "API Keys", icon: "api-keys" },
        ],
      },
    ],
  },
  { ...baseNavItems[4], badge: { ...baseBadge, badgeType: "brand", count: 8 } },
];

const footerItems: NavItemProps[] = [
  {
    ...baseNavItem,
    id: "footer-settings",
    label: "Settings",
    icon: "settings",
    onClick: () => {
      console.log("Footer Settings clicked");
    },
  },
  { ...baseNavItem, id: "footer-help", label: "Help & Support", icon: "help", link: "/help" },
  {
    ...baseNavItem,
    id: "footer-account",
    label: "Account",
    icon: "user",
    items: [
      { id: "footer-profile", label: "Profile", link: "/profile", icon: "user" },
      { id: "footer-preferences", label: "Preferences", icon: "preferences" },
      { id: "footer-logout", label: "Logout", onClick: () => console.log("Logout clicked"), icon: "logout" },
    ],
  },
];

const defaultHeaderConfig = {
  identifier: "MA",
  title: "My Application",
  version: "V1.2.3",
  icon: "home",
  link: "/",
};

const headerConfigWithLink = { ...defaultHeaderConfig };

const headerConfigWithOnClick = {
  ...defaultHeaderConfig,
  onClick: () => {
    console.log("Header clicked");
  },
};

function getInteractiveElementFromListItem(listItem: HTMLElement | null): HTMLElement | null {
  if (!listItem) return null;

  const directChildren = Array.from(listItem.children) as HTMLElement[];
  for (const child of directChildren) {
    if (child.tagName === "A") {
      return child;
    }
    if (child.tagName === "SPAN" && child.hasAttribute("tabindex")) {
      return child;
    }
  }

  const anchor = listItem.querySelector("a");
  if (anchor) return anchor;
  const spans = Array.from(listItem.querySelectorAll("span"));
  const interactiveSpan = spans.find((span) => span.hasAttribute("tabindex"));
  return interactiveSpan as HTMLElement | null;
}

const getNavElement = (sideNav: HTMLElement, text: string): HTMLElement | null => {
  const navContainer = within(sideNav);
  const link = navContainer.queryByRole("link", { name: text });
  if (link) return link;
  const textElement = navContainer.queryByText(text);
  if (textElement) {
    const listItem = textElement.closest("li") as HTMLElement | null;
    return getInteractiveElementFromListItem(listItem);
  }
  return null;
};

const getNavElementInCollapsedState = (sideNav: HTMLElement, itemIndex: number): HTMLElement | null => {
  const body = sideNav.querySelector('[class*="sideNavBody"]');
  if (!body) return null;

  const bodyListItems = Array.from(body.querySelectorAll("li")) as HTMLElement[];
  const listItem = bodyListItems[itemIndex];

  return getInteractiveElementFromListItem(listItem);
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

export const KeyboardNavigation: Story = {
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

export const HeaderClickability: Story = {
  args: {
    ...Default.args,
    headerConfig: { ...defaultHeaderConfig, link: null },
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

export const HeaderWithLink: Story = {
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

export const HeaderWithOnClick: Story = {
  args: {
    ...Default.args,
    headerConfig: { ...headerConfigWithOnClick, link: null },
    collapsible: true,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const sideNav = canvas.getByRole("navigation");

    await step("Verify header is clickable button when onClick is provided", async () => {
      const headerTitleContainer = getHeaderTitleContainer(sideNav);
      expect(headerTitleContainer).not.toBeNull();
      expect(headerTitleContainer?.tagName).toBe("DIV");
      await userEvent.click(headerTitleContainer!);
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

export const CollapsedTooltip: Story = {
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    collapsible: true,
    collapsed: true,
  },
  decorators: [
    (Story, context) => {
      const [collapsed, setCollapsed] = useState(context.args.collapsed ?? true);
      return (
        <div>
          <Story args={{ ...context.args, collapsed, onCollapsedChange: setCollapsed }} />
        </div>
      );
    },
  ],
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

export const CollapsedTooltipWithNested: Story = {
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true,
    collapsed: true,
  },
  decorators: [
    (Story, context) => {
      const [collapsed, setCollapsed] = useState(context.args.collapsed ?? true);
      return (
        <div>
          <Story args={{ ...context.args, collapsed, onCollapsedChange: setCollapsed }} />
        </div>
      );
    },
  ],
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const sideNav = canvas.getByRole("navigation");

    await step("Verify tooltips appear when tabbing to menu items", async () => {
      const dashboardMenu = getNavElementInCollapsedState(sideNav, 1);
      expect(dashboardMenu).not.toBeNull();

      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await new Promise((resolve) => setTimeout(resolve, 200));

      const tooltip = within(document.body).queryByRole("tooltip", { name: "Dashboard" });
      expect(tooltip).not.toBeNull();
      expect(tooltip).toHaveTextContent("Dashboard");
    });
  },
};

const getNavItemContainer = (sideNav: HTMLElement, itemId: string): HTMLElement | null => {
  const navItem = sideNav.querySelector(`#${itemId}`);
  return navItem as HTMLElement | null;
};

const hasActiveClass = (element: HTMLElement): boolean => {
  const classList = Array.from(element.classList);
  return classList.some((className) => className.includes("active"));
};

const expectNavItemActiveState = async (canvas: ReturnType<typeof within>, itemId: string, shouldBeActive: boolean) => {
  await waitFor(() => {
    const sideNav = canvas.getByRole("navigation");
    const navItemContainer = getNavItemContainer(sideNav, itemId);
    expect(navItemContainer).not.toBeNull();
    expect(hasActiveClass(navItemContainer!)).toBe(shouldBeActive);
  });
};

const expectNavItemToBeActive = (canvas: ReturnType<typeof within>, itemId: string) =>
  expectNavItemActiveState(canvas, itemId, true);

const expectNavItemNotToBeActive = (canvas: ReturnType<typeof within>, itemId: string) =>
  expectNavItemActiveState(canvas, itemId, false);

export const ActiveItemState: Story = {
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    activeItem: "home",
    collapsible: true,
  },
  decorators: [
    (Story, context) => {
      const [activeItem, setActiveItem] = useState(context.args.activeItem);
      const itemsWithOnClick = navigationItems.map((item) => {
        return {
          ...item,
          onClick: () => setActiveItem(item.id),
          link: undefined,
        };
      });
      return (
        <div>
          <Story args={{ ...context.args, items: itemsWithOnClick as NavItemProps[], activeItem }} />
        </div>
      );
    },
  ],
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Verify Home has active class initially", async () => {
      expectNavItemToBeActive(canvas, "home");
      expectNavItemNotToBeActive(canvas, "dashboard");
      expectNavItemNotToBeActive(canvas, "analytics");
      expectNavItemNotToBeActive(canvas, "settings");
      expectNavItemNotToBeActive(canvas, "profile");
    });

    await step("Change active item to Dashboard and verify active class", async () => {
      const sideNav = canvas.getByRole("navigation");
      const dashboardElement = getNavElement(sideNav, "Dashboard");
      expect(dashboardElement).not.toBeNull();
      await userEvent.click(dashboardElement!);

      expectNavItemNotToBeActive(canvas, "home");
      expectNavItemToBeActive(canvas, "dashboard");
      expectNavItemNotToBeActive(canvas, "analytics");
      expectNavItemNotToBeActive(canvas, "settings");
      expectNavItemNotToBeActive(canvas, "profile");
    });
  },
};

const SimplePageContent = (
  <div style={{ padding: "2rem" }}>
    <h1 style={{ margin: "0 0 1rem 0" }}>Dashboard</h1>
    <p style={{ lineHeight: "1.6", color: "#555", marginBottom: "1rem" }}>
      Welcome to the dashboard. Use the navigation on the left to explore different sections.
    </p>
    <p style={{ lineHeight: "1.6", color: "#555", marginBottom: "1rem" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </p>
    <p style={{ lineHeight: "1.6", color: "#555", marginBottom: "1rem" }}>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
      aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
    <p style={{ lineHeight: "1.6", color: "#555", marginBottom: "1rem" }}>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
      ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
    </p>
  </div>
);

export const ScrollBar: Story = {
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
      footerItems={args.footerItems}
      collapsed={args.collapsed}
      activeItem={args.activeItem}
    >
      {SimplePageContent}
    </SideNav>
  ),
};

export const WithFooterItems: Story = {
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: true,
  },
};

export const FooterItemsOnly: Story = {
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: false,
  },
};

const getFooterNavElement = (sideNav: HTMLElement, label: string): HTMLElement | null => {
  const footerItemsContainer = sideNav.querySelector('[class*="sideNavFooterItems"]');
  if (!footerItemsContainer) return null;

  const footerContainer = within(footerItemsContainer as HTMLElement);
  const link = footerContainer.queryByRole("link", { name: label });
  if (link) return link;

  const textElement = footerContainer.queryByText(label);
  if (textElement) {
    const listItem = textElement.closest("li") as HTMLElement | null;
    return getInteractiveElementFromListItem(listItem);
  }

  return null;
};

export const FooterItemsWithNested: Story = {
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    footerItems: footerItems,
    collapsible: true,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const sideNav = canvas.getByRole("navigation");

    await step("Verify footer items are rendered", async () => {
      const footerSettings = getFooterNavElement(sideNav, "Settings");
      expect(footerSettings).not.toBeNull();

      const footerHelp = getFooterNavElement(sideNav, "Help & Support");
      expect(footerHelp).not.toBeNull();

      const footerAccount = getFooterNavElement(sideNav, "Account");
      expect(footerAccount).not.toBeNull();
    });

    await step("Open Account menu in footer and verify nested items", async () => {
      const footerAccount = getFooterNavElement(sideNav, "Account");
      await userEvent.click(footerAccount!);

      const footerPreferences = getFooterNavElement(sideNav, "Preferences");
      expect(footerPreferences).not.toBeNull();

      const footerLogout = getFooterNavElement(sideNav, "Logout");
      expect(footerLogout).not.toBeNull();
    });
  },
};

export const WithBadges: Story = {
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedAndBadges,
    collapsible: true,
  },
};

const navigationItemsWithDividers: NavItemProps[] = [
  baseNavItems[0],
  {
    ...baseNavItems[1],
    items: [{ label: "Overview" }, { label: "Reports", showDivider: true }, { label: "Analytics", icon: "analytics" }],
  },
  { ...baseNavItems[2], showDivider: true },
  { ...baseNavItem, id: "reports", label: "Reports", icon: "info" },
  {
    ...baseNavItems[3],
    showDivider: true,
    items: [
      { label: "General", icon: "general" },
      { label: "Privacy", icon: "privacy", showDivider: true },
      { label: "Notifications", icon: "notifications" },
      {
        label: "Advanced",
        icon: "settings",
        showDivider: true,
        items: [
          { label: "Security", icon: "security" },
          { label: "API Keys", icon: "api-keys", showDivider: true },
          { label: "Integrations", icon: "integrations" },
        ],
      },
    ],
  },
  baseNavItems[4],
];

export const WithDividers: Story = {
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithDividers,
    collapsible: true,
  },
};
