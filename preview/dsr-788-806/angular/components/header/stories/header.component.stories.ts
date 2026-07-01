import { signal } from "@angular/core";
import type { HeaderIconButtonConfig, HeaderNavigationItem } from "@design-system-rte/core/components/header";
import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { expect, fn, userEvent, waitFor, within } from "@storybook/test";

import headerStoryRteLogoUrl from "../../../../../../../../design-docs/src/img/rte.png";
import type { DropdownItemConfig } from "../../dropdown/dropdown.types";
import { HeaderLeftDirective } from "../header-left.directive";
import { HeaderMobileMenuDirective } from "../header-mobile-menu.directive";
import { HeaderComponent } from "../header.component";

const navigationItems: HeaderNavigationItem[] = [
  { id: "home", label: "Accueil", href: "/" },
  { id: "dashboard", label: "tableau de bord", href: "/dashboard", active: true },
  { id: "docs", label: "documentation", href: "/docs" },
];

const iconButtons: HeaderIconButtonConfig[] = [
  {
    id: "notification",
    iconName: "notification",
    ariaLabel: "Notification",
    badge: { count: 1, badgeType: "indicator", size: "l" },
  },
  { id: "map", iconName: "map", ariaLabel: "Carte" },
  { id: "info", iconName: "info", ariaLabel: "Informations" },
  { id: "settings", iconName: "settings", ariaLabel: "Paramètres" },
];

const debugBreadcrumbsConfig = {
  ariaLabel: "Fil d'Ariane",
  items: [
    { label: "Accueil", link: "/" },
    { label: "Espace de travail", link: "/workspace" },
    { label: "Équipe — Région Île-de-France", link: "/workspace/team/idf" },
    { label: "Paramétrage avancé & configurations", link: "/workspace/team/idf/settings/advanced" },
    {
      label: "Page active avec un libellé très long pour tester les débordements",
      link: "/workspace/team/idf/settings/advanced/active",
    },
  ],
};

const mobileMenuItems: DropdownItemConfig[] = [
  { id: "profile", label: "Profil" },
  { id: "settings", label: "Paramètres" },
  { id: "logout", label: "Déconnexion" },
];

const mobileMenuItemsInterceptSelectionStory: DropdownItemConfig[] = [
  { id: "workspace-switch", label: "Changer d'espace" },
  { id: "shortcuts", label: "Raccourcis" },
  { id: "sign-out", label: "Quitter" },
];

const meta: Meta<HeaderComponent> = {
  title: "Composants/Header/Header",
  component: HeaderComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    moduleMetadata({
      imports: [HeaderComponent, HeaderLeftDirective, HeaderMobileMenuDirective],
    }),
  ],
  argTypes: {
    appearance: { control: "select", options: ["brand", "neutral"] },
    isCompact: { control: "boolean" },
    isSticky: { control: "boolean" },
    showAtScrollUp: { control: "boolean" },
    hasLeftSection: { control: "boolean" },
    hasMidSection: { control: "boolean" },
    hasRightSection: { control: "boolean" },
    hasSubHeader: { control: "boolean" },
    hasDivider: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj;

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

export const Default: Story = {
  parameters: {
    viewport: { defaultViewport: "desktop" },
  },
  args: {
    appearance: "brand",
    isCompact: false,
    isSticky: false,
    showAtScrollUp: false,
    hasLeftSection: true,
    hasMidSection: true,
    hasRightSection: true,
    hasSubHeader: true,
    hasDivider: false,
    hasLogo: true,
    applicationName: "Nom de l'application",
    logoSrc: headerStoryRteLogoUrl,
    homeLink: "/",
    navigationItems,
    hasSearchbar: true,
    searchbarProps: { id: "header-search", label: "Rechercher" },
    hasActionButton: true,
    actionButton: { label: "Partager", iconName: "share" },
    hasIconButtons: true,
    iconButtons,
    hasAvatar: true,
    avatarProps: { alt: "Profil", initials: "GA", isInteractive: true },
    subHeaderConfig: {
      ariaLabel: "Fil d'Ariane",
      items: [
        { label: "Accueil", link: "/" },
        { label: "Section", link: "/section" },
        { label: "Page active", link: "/section/page-active" },
      ],
    },
  },
  render: (args) => {
    return {
      props: { ...args },
      template: `
        <rte-header
          [appearance]="appearance"
          [isCompact]="isCompact"
          [isSticky]="isSticky"
          [showAtScrollUp]="showAtScrollUp"
          [hasLeftSection]="hasLeftSection"
          [hasMidSection]="hasMidSection"
          [hasRightSection]="hasRightSection"
          [hasSubHeader]="hasSubHeader"
          [hasDivider]="hasDivider"
          [hasLogo]="hasLogo"
          [applicationName]="applicationName"
          [logoSrc]="logoSrc"
          [homeLink]="homeLink"
          [navigationItems]="navigationItems"
          [hasSearchbar]="hasSearchbar"
          [searchbarProps]="searchbarProps"
          [hasActionButton]="hasActionButton"
          [actionButton]="actionButton"
          [hasIconButtons]="hasIconButtons"
          [iconButtons]="iconButtons"
          [hasAvatar]="hasAvatar"
          [avatarProps]="avatarProps"
          [subHeaderConfig]="subHeaderConfig"
        />
      `,
    };
  },
};

export const NeutralCompact: Story = {
  args: {
    ...Default.args,
    appearance: "neutral",
    isCompact: true,
  },
};

export const BreadcrumbsDebug: Story = {
  args: {
    ...Default.args,
    hasMidSection: true,
    midSectionType: "empty",
    navigationItems: [],
    subHeaderConfig: debugBreadcrumbsConfig,
  },
};

export const StickyDebug: Story = {
  args: {
    ...Default.args,
    isSticky: true,
    showAtScrollUp: false,
    subHeaderConfig: debugBreadcrumbsConfig,
  },
  render: (args) => {
    return {
      props: { ...args },
      template: `
        <div style="height: 240vh">
          <rte-header
            [appearance]="appearance"
            [isCompact]="isCompact"
            [isSticky]="isSticky"
            [showAtScrollUp]="showAtScrollUp"
            [hasLeftSection]="hasLeftSection"
            [hasMidSection]="hasMidSection"
            [hasRightSection]="hasRightSection"
            [hasSubHeader]="hasSubHeader"
            [hasDivider]="hasDivider"
            [hasLogo]="hasLogo"
            [applicationName]="applicationName"
            [logoSrc]="logoSrc"
            [homeLink]="homeLink"
            [navigationItems]="navigationItems"
            [hasSearchbar]="hasSearchbar"
            [searchbarProps]="searchbarProps"
            [hasActionButton]="hasActionButton"
            [actionButton]="actionButton"
            [hasIconButtons]="hasIconButtons"
            [iconButtons]="iconButtons"
            [hasAvatar]="hasAvatar"
            [avatarProps]="avatarProps"
            [subHeaderConfig]="subHeaderConfig"
          />

          <div style="padding: 24px; max-width: 900px; margin: 0 auto">
            <div style="display: grid; gap: 12px">
              <h2 style="margin: 0">Sticky debug</h2>
              <p style="margin: 0">
                Scroll this page. With <strong>isSticky=true</strong>, the header should remain pinned to the top of the
                viewport.
              </p>
              <div style="height: 180vh; border-radius: 12px; background: rgba(0,0,0,0.04)"></div>
            </div>
          </div>
        </div>
      `,
    };
  },
};

export const ShowAtScrollUpDebug: Story = {
  args: {
    ...Default.args,
    isSticky: true,
    showAtScrollUp: true,
    subHeaderConfig: debugBreadcrumbsConfig,
  },
  render: (args) => {
    return {
      props: { ...args },
      template: `
        <div style="height: 260vh">
          <rte-header
            [appearance]="appearance"
            [isCompact]="isCompact"
            [isSticky]="isSticky"
            [showAtScrollUp]="showAtScrollUp"
            [hasLeftSection]="hasLeftSection"
            [hasMidSection]="hasMidSection"
            [hasRightSection]="hasRightSection"
            [hasSubHeader]="hasSubHeader"
            [hasDivider]="hasDivider"
            [hasLogo]="hasLogo"
            [applicationName]="applicationName"
            [logoSrc]="logoSrc"
            [homeLink]="homeLink"
            [navigationItems]="navigationItems"
            [hasSearchbar]="hasSearchbar"
            [searchbarProps]="searchbarProps"
            [hasActionButton]="hasActionButton"
            [actionButton]="actionButton"
            [hasIconButtons]="hasIconButtons"
            [iconButtons]="iconButtons"
            [hasAvatar]="hasAvatar"
            [avatarProps]="avatarProps"
            [subHeaderConfig]="subHeaderConfig"
          />

          <div style="padding: 24px; max-width: 900px; margin: 0 auto">
            <div style="display: grid; gap: 12px">
              <h2 style="margin: 0">Scroll-up behavior debug</h2>
              <p style="margin: 0">
                Scroll down: the header should hide. Scroll up: it should reappear. (Requires
                <strong>isSticky=true</strong> and <strong>showAtScrollUp=true</strong>.)
              </p>
              <div style="height: 200vh; border-radius: 12px; background: rgba(0,0,0,0.04)"></div>
            </div>
          </div>
        </div>
      `,
    };
  },
};

export const WithRightSlot: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    return {
      props: { ...args },
      template: `
        <rte-header
          [appearance]="appearance"
          [hasDivider]="hasDivider"
          [hasLogo]="hasLogo"
          [applicationName]="applicationName"
          [logoSrc]="logoSrc"
          [homeLink]="homeLink"
          [navigationItems]="navigationItems"
          [searchbarProps]="searchbarProps"
          [actionButton]="actionButton"
          [iconButtons]="iconButtons"
          [avatarProps]="avatarProps"
        >
          <div rteHeaderRight style="width: 40px; height: 40px; background: rgba(0,0,0,0.08); border-radius: 8px"></div>
        </rte-header>
      `,
    };
  },
};

export const WithLeftSlot: Story = {
  args: {
    ...Default.args,
    hasLogo: false,
    applicationName: "",
    logoSrc: undefined,
  },
  render: (args) => {
    return {
      props: { ...args },
      template: `
        <rte-header
          [appearance]="appearance"
          [hasDivider]="hasDivider"
          [navigationItems]="navigationItems"
          [searchbarProps]="searchbarProps"
          [actionButton]="actionButton"
          [iconButtons]="iconButtons"
          [avatarProps]="avatarProps"
        >
          <div rteHeaderLeft style="display:flex; align-items:center; gap: 8px;">
            <strong style="white-space: nowrap">Left slot</strong>
          </div>
        </rte-header>
      `,
    };
  },
};

export const MobileSearchInteraction: Story = {
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    isCompact: false,
  },
  parameters: {
    viewport: { defaultViewport: "mobile2" },
  },
  render: (args) => {
    const isSearchActive = signal(false);

    function handleIsSearchActiveChange(nextValue: boolean): void {
      isSearchActive.set(nextValue);
    }

    return {
      props: {
        ...args,
        isSearchActive,
        handleIsSearchActiveChange,
      },
      template: `
        <div style="height: 200vh; padding-top: 8px">
          <rte-header
            [appearance]="appearance"
            [hasDivider]="hasDivider"
            [hasLeftSection]="hasLeftSection"
            [hasRightSection]="hasRightSection"
            [hasLogo]="hasLogo"
            [applicationName]="applicationName"
            [logoSrc]="logoSrc"
            [homeLink]="homeLink"
            [navigationItems]="navigationItems"
            [hasSearchbar]="true"
            [searchbarProps]="searchbarProps"
            [mobileSearchButtonAriaLabel]="'Rechercher'"
            [isSearchActive]="isSearchActive()"
            (isSearchActiveChange)="handleIsSearchActiveChange($event)"
          />

          <div style="padding: 12px 16px; font-family: monospace">
            isSearchActive: <strong>{{ isSearchActive() }}</strong>
          </div>
        </div>
      `,
    };
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

export const MobileSearchActiveDebug: Story = {
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    isCompact: false,
  },
  parameters: {
    viewport: { defaultViewport: "mobile2" },
  },
  render: (args) => {
    const isSearchActive = signal(false);

    function handleIsSearchActiveChange(nextValue: boolean): void {
      isSearchActive.set(nextValue);
    }

    return {
      props: {
        ...args,
        isSearchActive,
        handleIsSearchActiveChange,
      },
      template: `
        <div style="height: 140vh; padding-top: 8px">
          <rte-header
            [appearance]="appearance"
            [hasDivider]="hasDivider"
            [hasLeftSection]="hasLeftSection"
            [hasRightSection]="hasRightSection"
            [hasLogo]="hasLogo"
            [applicationName]="applicationName"
            [logoSrc]="logoSrc"
            [homeLink]="homeLink"
            [navigationItems]="navigationItems"
            [hasSearchbar]="true"
            [searchbarProps]="searchbarProps"
            [mobileSearchButtonAriaLabel]="'Rechercher'"
            [isSearchActive]="isSearchActive()"
            (isSearchActiveChange)="handleIsSearchActiveChange($event)"
          />

          <div style="padding: 12px 16px; font-family: monospace">
            <div>Expected:</div>
            <ul style="margin: 8px 0 0; padding-left: 18px">
              <li>isSearchActive=false → app name visible, searchbar hidden</li>
              <li>isSearchActive=true → app name hidden, searchbar visible</li>
            </ul>
            <div style="margin-top: 8px">
              isSearchActive: <strong>{{ isSearchActive() }}</strong>
            </div>
          </div>
        </div>
      `,
    };
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole("banner");

    await waitFor(() => {
      expect(within(header).getByText("Nom de l'application")).toBeVisible();
      expect(within(header).queryByRole("search")).toBeNull();
      assertHeaderMobileSearchShellState(canvasElement, "closed");
    });

    await userEvent.click(within(header).getByRole("button", { name: "Rechercher" }));

    await waitFor(() => {
      expect(within(header).getByRole("search")).toBeVisible();
      assertHeaderApplicationNameVisuallyHidden(header, true);
      assertHeaderApplicationNameScreenReaderHidden(canvasElement, true);
      assertHeaderMobileSearchShellState(canvasElement, "open");
    });

    const searchInput = within(header).getByRole("textbox");
    await userEvent.click(searchInput);
    await userEvent.keyboard("{Escape}");

    await waitFor(() => {
      expect(within(header).getByText("Nom de l'application")).toBeVisible();
      expect(within(header).queryByRole("search")).toBeNull();
      assertHeaderApplicationNameScreenReaderHidden(canvasElement, false);
      assertHeaderMobileSearchShellState(canvasElement, "closed");
    });
  },
};

export const MobileLongApplicationName: Story = {
  args: {
    ...Default.args,
    applicationName:
      "Nom de l'application avec un libellé très long pour vérifier la troncature entre le logo et le menu",
    hasMidSection: false,
    hasSubHeader: false,
    hasDivider: false,
    mobileMenuItems,
  },
  parameters: {
    viewport: { defaultViewport: "mobile2" },
  },
  render: (args) => ({
    props: { ...args },
    template: `
      <rte-header
        [appearance]="appearance"
        [hasLeftSection]="hasLeftSection"
        [hasRightSection]="hasRightSection"
        [hasLogo]="hasLogo"
        [applicationName]="applicationName"
        [logoSrc]="logoSrc"
        [homeLink]="homeLink"
        [hasSearchbar]="hasSearchbar"
        [searchbarProps]="searchbarProps"
        [mobileMenuItems]="mobileMenuItems"
      />
    `,
  }),
};

export const MobileMenuItemsDropdown: Story = {
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    mobileMenuItems,
  },
  parameters: {
    viewport: { defaultViewport: "mobile2" },
  },
  render: (args) => {
    const lastMenuEventId = signal<string | null>(null);

    function handleMobileMenuItemEvent(event: { id: string }): void {
      lastMenuEventId.set(event.id);
    }

    return {
      props: {
        ...args,
        lastMenuEventId,
        handleMobileMenuItemEvent,
      },
      template: `
        <div style="height: 140vh; padding-top: 8px">
          <rte-header
            [appearance]="appearance"
            [hasDivider]="hasDivider"
            [hasLeftSection]="hasLeftSection"
            [hasRightSection]="hasRightSection"
            [hasLogo]="hasLogo"
            [applicationName]="applicationName"
            [logoSrc]="logoSrc"
            [homeLink]="homeLink"
            [navigationItems]="navigationItems"
            [hasSearchbar]="true"
            [searchbarProps]="searchbarProps"
            [mobileMenuItems]="mobileMenuItems"
            (mobileMenuItemEvent)="handleMobileMenuItemEvent($event)"
          />

          <div style="padding: 12px 16px; font-family: monospace">
            lastMenuEventId: <strong>{{ lastMenuEventId() }}</strong>
          </div>
        </div>
      `,
    };
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
    const profileItem = menuItems.find((menuItem) => (menuItem.textContent || "").includes("Profil"));
    expect(profileItem).toBeTruthy();
    await userEvent.click(profileItem as HTMLElement);

    await waitFor(() => {
      expect(canvas.getByText("lastMenuEventId:")).toBeVisible();
      expect(canvas.getByText("profile")).toBeVisible();
      expect(within(header).getByRole("button", { name: "Menu" })).toHaveAttribute("aria-expanded", "false");
    });
  },
};

export const MobileMenuInterceptSelectedItemId: Story = {
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    mobileMenuItems: mobileMenuItemsInterceptSelectionStory,
  },
  parameters: {
    viewport: { defaultViewport: "mobile2" },
  },
  render: (args) => {
    const selectedItemId = signal<string | null>(null);

    function interceptMobileMenuItemSelection(menuItemSelection: {
      event: Event;
      id: string;
      item?: DropdownItemConfig;
    }): void {
      selectedItemId.set(menuItemSelection.id);
    }

    return {
      props: {
        ...args,
        selectedItemId,
        interceptMobileMenuItemSelection,
      },
      template: `
        <div style="height: 140vh; padding-top: 8px">
          <rte-header
            [appearance]="appearance"
            [hasDivider]="hasDivider"
            [hasLeftSection]="hasLeftSection"
            [hasRightSection]="hasRightSection"
            [hasLogo]="hasLogo"
            [applicationName]="applicationName"
            [logoSrc]="logoSrc"
            [homeLink]="homeLink"
            [navigationItems]="navigationItems"
            [hasSearchbar]="true"
            [searchbarProps]="searchbarProps"
            [mobileMenuItems]="mobileMenuItems"
            (mobileMenuItemEvent)="interceptMobileMenuItemSelection($event)"
          />

          <div style="padding: 12px 16px; font-family: monospace; display: grid; gap: 6px">
            <div>Bind <code>(mobileMenuItemEvent)</code> on <code>rte-header</code> to read the mobile menu choice.</div>
            <div>
              selectedItemId:
              <strong data-testid="intercepted-selected-item-id">{{ selectedItemId() ?? "—" }}</strong>
            </div>
          </div>
        </div>
      `,
    };
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
    const shortcutsItem = menuItems.find((menuItem) => (menuItem.textContent || "").includes("Raccourcis"));
    expect(shortcutsItem).toBeTruthy();
    await userEvent.click(shortcutsItem as HTMLElement);

    await waitFor(() => {
      expect(canvas.getByTestId("intercepted-selected-item-id")).toHaveTextContent("shortcuts");
      expect(within(header).getByRole("button", { name: "Menu" })).toHaveAttribute("aria-expanded", "false");
    });
  },
};

export const MobileMenuProjectionDropdown: Story = {
  tags: ["skip-ci"],
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: { defaultViewport: "mobile2" },
  },
  render: (args) => {
    const lastProjectionClick = signal<string | null>(null);

    function handleProjectionClick(id: string): void {
      lastProjectionClick.set(id);
    }

    return {
      props: {
        ...args,
        lastProjectionClick,
        handleProjectionClick,
      },
      template: `
        <div style="height: 140vh; padding-top: 8px">
          <rte-header
            [appearance]="appearance"
            [hasDivider]="hasDivider"
            [hasLeftSection]="hasLeftSection"
            [hasRightSection]="hasRightSection"
            [hasLogo]="hasLogo"
            [applicationName]="applicationName"
            [logoSrc]="logoSrc"
            [homeLink]="homeLink"
            [navigationItems]="navigationItems"
            [hasSearchbar]="true"
            [searchbarProps]="searchbarProps"
          >
            <div rteHeaderMobileMenu style="display: grid; gap: 8px; padding: 8px;">
              <button type="button" role="menuitem" (click)="handleProjectionClick('account')">Compte</button>
              <button type="button" role="menuitem" (click)="handleProjectionClick('help')">Aide</button>
            </div>
          </rte-header>

          <div style="padding: 12px 16px; font-family: monospace">
            lastProjectionClick: <strong>{{ lastProjectionClick() }}</strong>
          </div>
        </div>
      `,
    };
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
    const accountItem = menuItems.find((menuItem) => (menuItem.textContent || "").includes("Compte"));
    expect(accountItem).toBeTruthy();
    await userEvent.click(accountItem as HTMLElement);

    await waitFor(() => {
      expect(canvas.getByText("lastProjectionClick:")).toBeVisible();
      expect(canvas.getByText("account")).toBeVisible();
      expect(within(header).getByRole("button", { name: "Menu" })).toHaveAttribute("aria-expanded", "false");
    });
  },
};

export const DesktopSearchEventInteraction: Story = {
  args: {
    ...Default.args,
    hasSubHeader: false,
    searchbarProps: { id: "header-search", label: "Rechercher", value: "rte" },
    searchEvent: fn(),
  },
  render: (args) => ({
    props: args,
    template: `
      <rte-header
        [appearance]="appearance"
        [hasDivider]="hasDivider"
        [hasLeftSection]="hasLeftSection"
        [hasMidSection]="hasMidSection"
        [hasRightSection]="hasRightSection"
        [hasLogo]="hasLogo"
        [applicationName]="applicationName"
        [logoSrc]="logoSrc"
        [homeLink]="homeLink"
        [navigationItems]="navigationItems"
        [hasSearchbar]="hasSearchbar"
        [searchbarProps]="searchbarProps"
        (searchEvent)="searchEvent($event)"
      />
    `,
  }),
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole("banner");
    const searchRegion = within(header).getByRole("search");

    await userEvent.click(within(searchRegion).getByRole("button", { name: "Rechercher" }));

    await waitFor(() => {
      expect(args["searchEvent"]).toHaveBeenCalledWith("rte");
    });
  },
};

export const DesktopActionButtonClickInteraction: Story = {
  args: {
    ...Default.args,
    hasSubHeader: false,
    hasSearchbar: false,
    actionButtonClick: fn(),
  },
  render: (args) => ({
    props: args,
    template: `
      <rte-header
        [appearance]="appearance"
        [hasDivider]="hasDivider"
        [hasLeftSection]="hasLeftSection"
        [hasMidSection]="hasMidSection"
        [hasRightSection]="hasRightSection"
        [hasLogo]="hasLogo"
        [applicationName]="applicationName"
        [logoSrc]="logoSrc"
        [homeLink]="homeLink"
        [navigationItems]="navigationItems"
        [hasActionButton]="hasActionButton"
        [actionButton]="actionButton"
        (actionButtonClick)="actionButtonClick()"
      />
    `,
  }),
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole("banner");

    await userEvent.click(within(header).getByRole("button", { name: "Partager" }));

    await waitFor(() => {
      expect(args["actionButtonClick"]).toHaveBeenCalled();
    });
  },
};

export const DesktopIconButtonClickInteraction: Story = {
  args: {
    ...Default.args,
    hasSubHeader: false,
    hasSearchbar: false,
    hasActionButton: false,
    iconButtonClick: fn(),
  },
  render: (args) => ({
    props: args,
    template: `
      <rte-header
        [appearance]="appearance"
        [hasDivider]="hasDivider"
        [hasLeftSection]="hasLeftSection"
        [hasMidSection]="hasMidSection"
        [hasRightSection]="hasRightSection"
        [hasLogo]="hasLogo"
        [applicationName]="applicationName"
        [logoSrc]="logoSrc"
        [homeLink]="homeLink"
        [navigationItems]="navigationItems"
        [hasIconButtons]="hasIconButtons"
        [iconButtons]="iconButtons"
        (iconButtonClick)="iconButtonClick($event)"
      />
    `,
  }),
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole("banner");

    await userEvent.click(within(header).getByRole("button", { name: "Notification" }));

    await waitFor(() => {
      expect(args["iconButtonClick"]).toHaveBeenCalledWith("notification");
    });
  },
};

export const DesktopAvatarClickInteraction: Story = {
  args: {
    ...Default.args,
    hasSubHeader: false,
    hasSearchbar: false,
    hasActionButton: false,
    hasIconButtons: false,
    avatarClick: fn(),
  },
  render: (args) => ({
    props: args,
    template: `
      <rte-header
        [appearance]="appearance"
        [hasDivider]="hasDivider"
        [hasLeftSection]="hasLeftSection"
        [hasMidSection]="hasMidSection"
        [hasRightSection]="hasRightSection"
        [hasLogo]="hasLogo"
        [applicationName]="applicationName"
        [logoSrc]="logoSrc"
        [homeLink]="homeLink"
        [navigationItems]="navigationItems"
        [hasAvatar]="hasAvatar"
        [avatarProps]="avatarProps"
        (avatarClick)="avatarClick()"
      />
    `,
  }),
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole("banner");

    await userEvent.click(within(header).getByRole("button", { name: "Avatar button" }));

    await waitFor(() => {
      expect(args["avatarClick"]).toHaveBeenCalled();
    });
  },
};
