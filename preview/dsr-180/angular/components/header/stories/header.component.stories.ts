import { signal } from "@angular/core";
import type { HeaderIconButtonConfig, HeaderNavigationItem } from "@design-system-rte/core/components/header";
import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { userEvent, within } from "@storybook/test";

import { HeaderLeftDirective } from "../header-left.directive";
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
    badge: { count: 1, type: "indicator", size: "l" },
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

const meta: Meta<HeaderComponent> = {
  title: "Composants/Header/Header",
  component: HeaderComponent,
  tags: ["autodocs"],
  decorators: [
    moduleMetadata({
      imports: [HeaderComponent, HeaderLeftDirective],
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
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    appearance: "brand",
    isCompact: false,
    isSticky: false,
    showAtScrollUp: false,
    hasLeftSection: true,
    hasMidSection: true,
    hasRightSection: true,
    hasSubHeader: true,
    hasLogo: true,
    applicationName: "Nom de l'application",
    logoSrc: "https://placehold.co/24x24/png",
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

export const Figma_14955_8083: Story = {
  args: {
    ...Default.args,
    appearance: "brand",
    isCompact: false,
    hasMidSection: true,
    midSectionType: "empty",
    navigationItems: [],
    iconButtons,
    subHeaderConfig: {
      ariaLabel: "Fil d'Ariane",
      items: [
        { label: "This is a link", link: "/" },
        { label: "This is a link", link: "/section" },
        { label: "Active page", link: "/section/page-active" },
      ],
    },
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
  args: {
    ...Default.args,
    isCompact: false,
  },
  parameters: {
    viewport: { defaultViewport: "mobile1" },
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
        </div>
      `,
    };
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const searchButton = canvas.getByRole("button", { name: "Rechercher" });
    await userEvent.click(searchButton);
  },
};
