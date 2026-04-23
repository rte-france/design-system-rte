import { signal } from "@angular/core";
import type { HeaderIconButtonConfig, HeaderNavigationItem } from "@design-system-rte/core/components/header";
import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { userEvent, within } from "@storybook/test";

import { HeaderComponent } from "../header.component";

const navigationItems: HeaderNavigationItem[] = [
  { id: "home", label: "Accueil", href: "/" },
  { id: "dashboard", label: "tableau de bord", href: "/dashboard", active: true },
  { id: "docs", label: "documentation", href: "/docs" },
];

const iconButtons: HeaderIconButtonConfig[] = [
  {
    id: "notifications",
    iconName: "notifications",
    ariaLabel: "Notifications",
    badge: { count: 1, type: "indicator", size: "l" },
  },
  { id: "map", iconName: "map", ariaLabel: "Carte" },
  { id: "info", iconName: "info", ariaLabel: "Informations" },
  { id: "settings", iconName: "settings", ariaLabel: "Paramètres" },
];

const meta: Meta<HeaderComponent> = {
  title: "Composants/Header/Header",
  component: HeaderComponent,
  tags: ["autodocs"],
  decorators: [
    moduleMetadata({
      imports: [HeaderComponent],
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
type Story = StoryObj<HeaderComponent>;

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
    leftSectionType: "default",
    hasLogo: true,
    applicationName: "Nom de l'application",
    logoSrc: "https://placehold.co/24x24/png",
    navigationItems,
    hasSearchbar: true,
    searchbarProps: { id: "header-search", label: "Rechercher" },
    hasActionButton: true,
    actionButton: { label: "Partager", iconName: "share" },
    hasIconButtons: true,
    iconButtons,
    hasAvatar: true,
    avatarProps: { alt: "Profil", initials: "GA", isInteractive: true },
    breadcrumbs: {
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
          [leftSectionType]="leftSectionType"
          [hasLogo]="hasLogo"
          [applicationName]="applicationName"
          [logoSrc]="logoSrc"
          [navigationItems]="navigationItems"
          [hasSearchbar]="hasSearchbar"
          [searchbarProps]="searchbarProps"
          [hasActionButton]="hasActionButton"
          [actionButton]="actionButton"
          [hasIconButtons]="hasIconButtons"
          [iconButtons]="iconButtons"
          [hasAvatar]="hasAvatar"
          [avatarProps]="avatarProps"
          [breadcrumbs]="breadcrumbs"
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

export const Figma_14955_8083: Story = {
  args: {
    ...Default.args,
    appearance: "brand",
    isCompact: false,
    hasMidSection: true,
    midSectionType: "empty",
    navigationItems: [],
    iconButtons,
    breadcrumbs: {
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
          [applicationName]="applicationName"
          [logoSrc]="logoSrc"
          [navigationItems]="navigationItems"
          [searchbarProps]="searchbarProps"
          [actionButton]="actionButton"
          [iconButtons]="iconButtons"
          [avatarProps]="avatarProps"
          [breadcrumbs]="breadcrumbs"
        >
          <div rteHeaderRight style="width: 40px; height: 40px; background: rgba(0,0,0,0.08); border-radius: 8px"></div>
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
            [applicationName]="applicationName"
            [logoSrc]="logoSrc"
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
