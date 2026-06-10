import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, waitFor, within } from "@storybook/test";
import { useState } from "react";

import headerStoryRteLogoUrl from "../../../../../design-docs/src/img/rte.png";
import Header from "../Header";

const meta = {
  title: "Composants/Header/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    viewport: { defaultViewport: "desktop" },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logoSrc: headerStoryRteLogoUrl,
    applicationName: "Nom de l'application",
    compactSpacing: false,
    appearance: "brand",
    hasDivider: false,
    hasAvatar: true,
    hasSearchbar: true,
    actionButton: { label: "Partager", iconName: "share" },
    iconButtons: [
      {
        iconName: "notification",
        ariaLabel: "Notification",
        badge: { count: 3, badgeType: "indicator", size: "s", content: "number" },
      },
      {
        iconName: "map",
        ariaLabel: "Map",
      },
      {
        iconName: "info",
        ariaLabel: "Help",
      },
      {
        iconName: "settings",
        ariaLabel: "Settings",
      },
    ],
    navigationItems: [
      { label: "Accueil", href: "/" },
      { label: "Tableau de bord", href: "/dashboard", active: true },
      { label: "Documentation", href: "/documentation", disabled: true },
    ],
    avatarProps: {
      alt: "Profil",
      initials: "JD",
      layout: "initials",
      colorType: "brand",
      status: "available",
    },
    subHeaderConfig: {
      items: [
        { label: "Accueil", link: "/" },
        { label: "Section", link: "/section" },
        { label: "Page active", link: "/active-page" },
      ],
      ariaLabel: "Breadcrumbs",
    },
  },
};

export const Neutral: Story = {
  args: {
    ...Default.args,
    appearance: "neutral",
  },
};

export const Compact: Story = {
  args: {
    ...Default.args,
    compactSpacing: true,
  },

  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <Header {...args} />
      <Header {...args} appearance="neutral" />
    </div>
  ),
};

export const NoMidSection: Story = {
  args: {
    ...Default.args,
    navigationItems: undefined,
  },
};

export const Sticky: Story = {
  args: {
    ...Default.args,
    isSticky: true,
    showAtScrollUp: false,
  },

  render: (args) => (
    <>
      <Header {...args} />
      <div
        style={{
          margin: "1rem 12rem",
        }}
      >
        <h2 style={{ margin: 0 }}>Sticky Header</h2>
        <p>Scroll down to see the sticky header in action.</p>
        <div
          style={{
            borderRadius: "12px",
            height: "200vh",
            background: "rgba(0, 0, 0, 0.04)",
          }}
        ></div>
      </div>
    </>
  ),
};

export const ShowAtScrollUp: Story = {
  args: {
    ...Default.args,
    isSticky: true,
    showAtScrollUp: true,
  },

  render: (args) => (
    <>
      <Header {...args} />
      <div
        style={{
          margin: "1rem 12rem",
        }}
      >
        <h2 style={{ margin: 0 }}>Show at Scroll Up</h2>
        <p>Scroll down and then scroll up to see the header reappear.</p>
        <div
          style={{
            borderRadius: "12px",
            height: "200vh",
            background: "rgba(0, 0, 0, 0.04)",
          }}
        ></div>
      </div>
    </>
  ),
};

export const WithRightSectionContent: Story = {
  args: {
    ...Default.args,
    rightSectionContent: (
      <div
        style={{ width: "36px", height: "36px", backgroundColor: "rgba(255, 0, 0, 0.1)", borderRadius: "4px" }}
      ></div>
    ),
  },
};

export const WithLeftSectionContent: Story = {
  args: {
    ...Default.args,
    leftSectionContent: (
      <div
        style={{ width: "36px", height: "36px", backgroundColor: "rgba(255, 0, 0, 0.1)", borderRadius: "4px" }}
      ></div>
    ),
  },
};

export const MobileSearchInteraction: Story = {
  tags: ["skip-ci"],
  parameters: {
    viewport: { defaultViewport: "mobile2" },
  },
  args: {
    ...Default.args,
    hasSearchbar: true,
  },

  render: (args) => {
    const [isSearchActive, setIsSearchActive] = useState(false);

    return (
      <>
        <Header {...args} onSearchActiveChange={setIsSearchActive} />
        <div
          style={{
            margin: "1rem",
          }}
        >
          <p style={{ fontFamily: "monospace" }}>
            isSearchActive: <strong>{isSearchActive ? "true" : "false"}</strong>
          </p>
        </div>
      </>
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole("banner");

    await waitFor(() => {
      expect(within(header).getByText("Nom de l'application")).toBeVisible();
      expect(within(header).queryByRole("search")).toBeNull();
      assertHeaderMobileSearchShellState(canvasElement, "closed");
    });

    const openSearchButton = within(header).getByRole("button", { name: "Rechercher" });
    await userEvent.click(openSearchButton);

    await waitFor(() => {
      expect(within(header).getByRole("search")).toBeVisible();
      assertHeaderApplicationNameVisuallyHidden(header, true);
      assertHeaderApplicationNameScreenReaderHidden(canvasElement, true);
      assertHeaderMobileSearchShellState(canvasElement, "open");
    });

    const searchInput = within(header).getByRole("textbox");
    await userEvent.type(searchInput, "abc");
    await userEvent.click(canvas.getByText("isSearchActive:"));

    await waitFor(() => {
      expect(within(header).getByText("Nom de l'application")).toBeVisible();
      expect(within(header).queryByRole("search")).toBeNull();
      assertHeaderApplicationNameScreenReaderHidden(canvasElement, false);
      assertHeaderMobileSearchShellState(canvasElement, "closed");
    });
  },
};

export const MobileLongApplicationName: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile2" },
  },
  args: {
    ...Default.args,
    applicationName: "Nom de l'application avec un nom très long",
  },
};

export const MobileMenuItems: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile2" },
  },
  args: {
    ...Default.args,
    mobileMenuItems: [
      { label: "Profil", link: "/profile" },
      { label: "Paramètres", link: "/settings" },
      { label: "Déconnexion", link: "/logout" },
    ],
  },

  render: (args) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [selectedMenuItem, setSelectedMenuItem] = useState<string | undefined>(undefined);
    const updatedMenuItems =
      args.mobileMenuItems?.map((item) => ({ ...item, onClick: () => setSelectedMenuItem(item.label) })) || [];
    return (
      <>
        <Header
          {...args}
          mobileMenuItems={updatedMenuItems}
          onMobileMenuClick={() => setIsMobileMenuOpen((open) => !open)}
          isMobileMenuOpen={isMobileMenuOpen}
          onMobileMenuClose={() => setIsMobileMenuOpen(false)}
        />
        <div
          style={{
            margin: "1rem",
          }}
        >
          <p style={{ fontFamily: "monospace" }} data-testid="intercepted-selected-item-id">
            selectedMenuItem: <strong>{selectedMenuItem || "none"}</strong>
          </p>
        </div>
      </>
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const header = canvas.getByRole("banner");

    await userEvent.click(within(header).getByRole("button", { name: "Menu" }));

    await waitFor(() => {
      expect(within(header).getByRole("button", { name: "Menu" })).toHaveAttribute("aria-expanded", "true");
    });

    await waitFor(() => {
      expect(body.getAllByRole("menuitem").length).toBeGreaterThan(0);
    });

    const menuItems = body.getAllByRole("menuitem");
    const shortcutsItem = menuItems.find((menuItem) => (menuItem.textContent || "").includes("Paramètres"));
    expect(shortcutsItem).toBeTruthy();
    await userEvent.click(shortcutsItem as HTMLElement);

    await waitFor(() => {
      expect(canvas.getByTestId("intercepted-selected-item-id")).toHaveTextContent("Paramètres");
      expect(within(header).getByRole("button", { name: "Menu" })).toHaveAttribute("aria-expanded", "false");
    });
  },
};

export const MobileMenuContent: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile2" },
  },
  args: {
    ...Default.args,
    mobileMenuContent: (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "8px" }}>
        <a href="/profile">Profil</a>
        <a href="/settings">Paramètres</a>
        <a href="/logout">Déconnexion</a>
      </div>
    ),
  },

  render: (args) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
      <>
        <Header
          {...args}
          onMobileMenuClick={() => setIsMobileMenuOpen((open) => !open)}
          isMobileMenuOpen={isMobileMenuOpen}
          onMobileMenuClose={() => setIsMobileMenuOpen(false)}
        />
      </>
    );
  },
};

export const DesktopInteraction: Story = {
  args: {
    ...Default.args,
    searchbarProps: {
      label: "Rechercher",
      assistiveText: "Rechercher dans l'application",
      value: "rte",
      onSearch: fn(),
    },
    onActionButtonClick: fn(),
    onIconButtonClick: fn(),
    avatarProps: {
      ...Default.args?.avatarProps,
      onClick: fn(),
    },
  },

  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole("banner");
    const searchRegion = within(header).getByRole("search");

    await userEvent.click(within(searchRegion).getByRole("button", { name: "Rechercher" }));

    await waitFor(() => {
      expect(args.searchbarProps?.onSearch).toHaveBeenCalledWith("rte");
    });

    await userEvent.click(within(header).getByRole("button", { name: "Partager" }));

    await waitFor(() => {
      expect(args.onActionButtonClick).toHaveBeenCalled();
    });

    await userEvent.click(within(header).getByRole("button", { name: "Notification" }));

    await waitFor(() => {
      expect(args.onIconButtonClick).toHaveBeenCalledWith("notification");
    });

    await userEvent.click(within(header).getByRole("button", { name: "Avatar button" }));

    await waitFor(() => {
      expect(args.avatarProps?.onClick).toHaveBeenCalled();
    });
  },
};

function assertHeaderMobileSearchShellState(canvasElement: HTMLElement, expectedState: "open" | "closed"): void {
  const mobileRoot = canvasElement.querySelector(".rte-header-mobile");
  expect(mobileRoot).not.toBeNull();
  expect(mobileRoot).toHaveAttribute("data-search-state", expectedState);
}

function assertHeaderApplicationNameScreenReaderHidden(
  canvasElement: HTMLElement,
  shouldBeHiddenFromAccessibilityTree: boolean,
): void {
  const banner = canvasElement.querySelector('[role="banner"]');
  expect(banner).not.toBeNull();
  const appName = within(banner as HTMLElement).getByText("Nom de l'application");
  if (shouldBeHiddenFromAccessibilityTree) {
    expect(appName).toHaveAttribute("aria-hidden", "true");
  } else {
    expect(appName).not.toHaveAttribute("aria-hidden", "true");
  }
}

function assertHeaderApplicationNameVisuallyHidden(header: HTMLElement, shouldBeHidden: boolean): void {
  const appName = within(header).getByText("Nom de l'application");
  if (shouldBeHidden) {
    expect(appName).not.toBeVisible();
  } else {
    expect(appName).toBeVisible();
  }
}
