import {
  TESTING_ENTER_KEY,
  TESTING_SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../.storybook/testing/testing.utils";

import SideNav from "./SideNav";
import {
  createActiveItemStateDecorator,
  createCollapsedStateDecorator,
  createNestedActiveItemStateDecorator,
  createOnNavigateDecorator,
} from "./stories/helpers/decorators";
import {
  getFooterNavElement,
  getHeaderTitleContainer,
  getNavElement,
  getNavElementInCollapsedState,
} from "./stories/helpers/elementFinders";
import {
  expectElementNotToHaveFocus,
  expectElementToBeAccessible,
  expectElementToBeSkipped,
  expectElementToHaveFocus,
  expectNavItemNotToBeActive,
  expectNavItemToBeActive,
} from "./stories/helpers/expectations";
import {
  defaultHeaderConfig,
  footerItems,
  headerConfigWithOnClick,
  headerConfigWithRoute,
  navigationItems,
  navigationItemsWithDividers,
  navigationItemsWithLinkableSettingsGroup,
  navigationItemsWithNested,
  navigationItemsWithNestedActivePreselected,
  navigationItemsWithNestedAndBadges,
  navigationItemsWithNestedAndIds,
  navigationItemsWithNestedNavMenuActivePreselected,
} from "./stories/helpers/nav-items.fixtures";
import { getCanvasAndSideNav, waitForTooltip } from "./stories/helpers/testHelpers";

const meta = {
  title: "Composants/SideNav",
  id: "SideNav",
  component: SideNav,
  tags: ["autodocs"],
  decorators: [
    createOnNavigateDecorator(),
    (Story) => (
      <div style={{ height: "600px", width: "100%", display: "flex" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    collapsible: { control: "boolean" },
    size: { control: "select", options: ["s", "m", "l"] },
    appearance: { control: "select", options: ["neutral", "brand"] },
    contrast: { control: "select", options: ["low", "high"] },
    isCollapsed: { control: "boolean" },
    activeItem: { control: "text" },
  },
  render: (args) => (
    <SideNav
      size={args.size}
      collapsible={args.collapsible}
      headerConfig={args.headerConfig}
      appearance={args.appearance}
      contrast={args.contrast}
      items={args.items}
      footerItems={args.footerItems}
      isCollapsed={args.isCollapsed}
      activeItem={args.activeItem}
      onCollapsedChange={args.onCollapsedChange}
      onNavigate={args.onNavigate}
      onItemClicked={args.onItemClicked}
      renderLink={args.renderLink}
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

export const Default: Story = {
  tags: ["skip-ci"],
  args: {
    headerConfig: {
      title: "My Header",
      icon: "home",
      identifier: "MA",
      route: "/my-application",
    },
    items: navigationItems,
  },
};

export const Collapsible: Story = {
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    collapsible: true,
  },
};

export const HeaderWithVersion: Story = {
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
  },
};

export const HeaderCompact: Story = {
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: { ...defaultHeaderConfig, isCompact: true },
  },
};

export const WithNestedMenus: Story = {
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true,
  },
};

export const LinkableSettingsGroup: Story = {
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithLinkableSettingsGroup,
    collapsible: true,
  },
};

export const KeyboardNavigation: Story = {
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true,
  },
  play: async ({ canvasElement, step }) => {
    const { sideNav } = getCanvasAndSideNav(canvasElement);

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
    headerConfig: { ...defaultHeaderConfig, route: null },
    collapsible: true,
  },
  play: async ({ canvasElement, step }) => {
    const { sideNav } = getCanvasAndSideNav(canvasElement);

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

export const HeaderWithRoute: Story = {
  args: {
    ...Default.args,
    headerConfig: headerConfigWithRoute,
    collapsible: true,
  },
  play: async ({ canvasElement, step }) => {
    const { sideNav } = getCanvasAndSideNav(canvasElement);

    await step("Verify header is a link when route prop is provided", async () => {
      const headerTitleContainer = getHeaderTitleContainer(sideNav);
      expect(headerTitleContainer).not.toBeNull();
      expect(headerTitleContainer?.tagName).toBe("A");
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
    headerConfig: headerConfigWithOnClick,
    collapsible: true,
  },
  play: async ({ canvasElement, step }) => {
    const { sideNav } = getCanvasAndSideNav(canvasElement);

    await step("Verify header is clickable button when onClick is provided", async () => {
      const headerTitleContainer = getHeaderTitleContainer(sideNav);
      expect(headerTitleContainer).not.toBeNull();
      expect(headerTitleContainer?.tagName).toBe("BUTTON");
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
    isCollapsed: true,
  },
  decorators: [createCollapsedStateDecorator()],
  play: async ({ canvasElement, step }) => {
    const { sideNav } = getCanvasAndSideNav(canvasElement);

    await step("Verify tooltips appear when tabbing to navigation items", async () => {
      const homeElement = getNavElementInCollapsedState(sideNav, 0);
      expect(homeElement).not.toBeNull();

      homeElement?.focus();
      await waitForTooltip();

      const tooltip = within(document.body).queryByRole("tooltip", { name: "Home" });
      expect(tooltip).not.toBeNull();
      expect(tooltip).toHaveTextContent("Home");
    });

    await step("Verify tooltips appear when tabbing to next navigation item", async () => {
      await userEvent.tab();
      await waitForTooltip();

      const tooltip = within(document.body).queryByRole("tooltip", { name: "Dashboard" });
      expect(tooltip).not.toBeNull();
      expect(tooltip).toHaveTextContent("Dashboard");
    });

    await step("Verify tooltips appear for items with links when tabbing", async () => {
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await waitForTooltip();

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
    isCollapsed: true,
  },
  decorators: [createCollapsedStateDecorator()],
  play: async ({ canvasElement, step }) => {
    const { sideNav } = getCanvasAndSideNav(canvasElement);

    await step("Verify tooltips appear when tabbing to menu items", async () => {
      focusElementBeforeComponent(canvasElement);
      const dashboardMenu = getNavElementInCollapsedState(sideNav, 1);
      expect(dashboardMenu).not.toBeNull();

      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await waitForTooltip();

      const tooltip = within(document.body).queryByRole("tooltip", { name: "Dashboard" });
      expect(tooltip).not.toBeNull();
      expect(tooltip).toHaveTextContent("Dashboard");
    });
  },
};

export const NestedItemActivePreselected: Story = {
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedActivePreselected,
    collapsible: true,
  },
  play: async ({ canvasElement, step }) => {
    const { canvas } = getCanvasAndSideNav(canvasElement);

    await step("Verify Overview nested item is active", async () => {
      expectNavItemToBeActive(canvas, "overview");
      expectNavItemNotToBeActive(canvas, "reports");
    });
  },
};

export const NestedNavMenuActivePreselected: Story = {
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedNavMenuActivePreselected,
    collapsible: true,
  },
  play: async ({ canvasElement, step }) => {
    const { canvas } = getCanvasAndSideNav(canvasElement);

    await step("Verify only the nested leaf is active, not parent NavMenus", async () => {
      expectNavItemToBeActive(canvas, "security");
      expectNavItemNotToBeActive(canvas, "advanced");
      expectNavItemNotToBeActive(canvas, "settings");
      expectNavItemNotToBeActive(canvas, "api-keys");
    });
  },
};

export const NestedNavMenuActiveOnClick: Story = {
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    collapsible: true,
  },
  decorators: [createNestedActiveItemStateDecorator(navigationItemsWithNestedAndIds, "security")],
  play: async ({ canvasElement, step }) => {
    const { canvas } = getCanvasAndSideNav(canvasElement);

    await step("Verify only Security is active, not parent NavMenus", async () => {
      expectNavItemToBeActive(canvas, "security");
      expectNavItemNotToBeActive(canvas, "advanced");
      expectNavItemNotToBeActive(canvas, "settings");
      expectNavItemNotToBeActive(canvas, "api-keys");
    });

    await step("Click API Keys and verify only API Keys is active", async () => {
      const sideNav = canvas.getByRole("navigation");
      const apiKeysElement = getNavElement(sideNav, "API Keys");
      expect(apiKeysElement).not.toBeNull();
      await userEvent.click(apiKeysElement!);

      expectNavItemNotToBeActive(canvas, "security");
      expectNavItemToBeActive(canvas, "api-keys");
      expectNavItemNotToBeActive(canvas, "advanced");
      expectNavItemNotToBeActive(canvas, "settings");
    });
  },
};

export const NestedItemActiveOnClick: Story = {
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    collapsible: true,
  },
  decorators: [createNestedActiveItemStateDecorator(navigationItemsWithNestedAndIds, "overview")],
  play: async ({ canvasElement, step }) => {
    const { canvas } = getCanvasAndSideNav(canvasElement);

    await step("Verify Overview leaf is active initially", async () => {
      expectNavItemToBeActive(canvas, "overview");
      expectNavItemNotToBeActive(canvas, "reports");
      expectNavItemNotToBeActive(canvas, "advanced");
    });

    await step("Click Reports and verify only Reports is active", async () => {
      const sideNav = canvas.getByRole("navigation");
      const reportsElement = getNavElement(sideNav, "Reports");
      expect(reportsElement).not.toBeNull();
      await userEvent.click(reportsElement!);

      expectNavItemNotToBeActive(canvas, "overview");
      expectNavItemToBeActive(canvas, "reports");
      expectNavItemNotToBeActive(canvas, "advanced");
    });

    await step("Click Advanced NavMenu and verify only Advanced is active", async () => {
      const sideNav = canvas.getByRole("navigation");
      const settingsMenu = getNavElement(sideNav, "Settings");
      expect(settingsMenu).not.toBeNull();
      await userEvent.click(settingsMenu!);

      const advancedMenu = getNavElement(sideNav, "Advanced");
      expect(advancedMenu).not.toBeNull();
      await userEvent.click(advancedMenu!);

      expectNavItemNotToBeActive(canvas, "overview");
      expectNavItemNotToBeActive(canvas, "reports");
      expectNavItemNotToBeActive(canvas, "security");
      expectNavItemNotToBeActive(canvas, "api-keys");
      expectNavItemToBeActive(canvas, "advanced");
    });
  },
};

export const ActiveItemState: Story = {
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    activeItem: "home",
    collapsible: true,
  },
  decorators: [createActiveItemStateDecorator(navigationItems)],
  play: async ({ canvasElement, step }) => {
    const { canvas } = getCanvasAndSideNav(canvasElement);

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

export const FooterItemsWithNested: Story = {
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    footerItems: footerItems,
    collapsible: true,
  },
  play: async ({ canvasElement, step }) => {
    const { sideNav } = getCanvasAndSideNav(canvasElement);

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
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedAndBadges,
    collapsible: true,
  },
};

export const WithDividers: Story = {
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithDividers,
    collapsible: true,
  },
};
