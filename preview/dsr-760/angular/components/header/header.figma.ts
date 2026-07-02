import figma, { html } from "@figma/code-connect/html";

type HeaderCodeConnectProps = {
  appearance: string;
  leftSection: {
    applicationName: string;
  };
  isCompact: boolean;
  isSearchActive: boolean;
  hasLeftSection: boolean;
  hasRightSection: boolean;
  hasSubHeader: boolean;
  hasDivider: boolean;
};

figma.connect("https://www.figma.com/design/Wiy8uWsWjoagf95lOmPXNU/01.0-Design-System-RTE---WEB?node-id=13762-6673", {
  props: {
    appearance: figma.enum("appearance", {
      brand: "brand",
      neutral: "neutral",
    }),
    leftSection: figma.nestedProps("Left Section", {
      applicationName: figma.string("app/pageNameText"),
    }),
    isCompact: figma.enum("isCompact", {
      true: true,
      false: false,
    }),
    isSearchActive: figma.enum("isSearchActive", {
      true: true,
      false: false,
    }),
    hasLeftSection: figma.boolean("hasLeftSection", {
      true: true,
      false: false,
    }),
    hasRightSection: figma.boolean("hasRightSection", {
      true: true,
      false: false,
    }),
    hasSubHeader: figma.boolean("hasSubHeader", {
      true: true,
      false: false,
    }),
    hasDivider: figma.boolean("hasDivider", {
      true: true,
      false: false,
    }),
  },
  example: ({
    appearance,
    leftSection,
    isCompact,
    isSearchActive,
    hasLeftSection,
    hasRightSection,
    hasSubHeader,
    hasDivider,
  }: HeaderCodeConnectProps) =>
    html`<rte-header
      [appearance]="'${appearance}'"
      [isCompact]="${isCompact}"
      [hasLeftSection]="${hasLeftSection}"
      [hasMidSection]="true"
      [hasRightSection]="${hasRightSection}"
      [hasSubHeader]="${hasSubHeader}"
      [hasDivider]="${hasDivider}"
      [hasLogo]="true"
      applicationName="${leftSection.applicationName}"
      homeLink="/"
      [navigationItems]="[{ id: 'home', label: 'Accueil', href: '/' }, { id: 'dashboard', label: 'Tableau de bord', href: '/dashboard', active: true }, { id: 'docs', label: 'Documentation', href: '/docs' }]"
      [hasSearchbar]="true"
      [searchbarProps]="{ id: 'header-search', label: 'Rechercher' }"
      [hasActionButton]="true"
      [actionButton]="{ label: 'Partager', iconName: 'share' }"
      [hasIconButtons]="true"
      [iconButtons]="[{ id: 'notification', iconName: 'notification', ariaLabel: 'Notification', badge: { count: 1, badgeType: 'indicator', size: 'l' } }, { id: 'map', iconName: 'map', ariaLabel: 'Carte' }, { id: 'info', iconName: 'info', ariaLabel: 'Informations' }, { id: 'settings', iconName: 'settings', ariaLabel: 'Paramètres' }]"
      [hasAvatar]="true"
      [avatarProps]="{ alt: 'Profil', initials: 'GA', isInteractive: true }"
      [isSearchActive]="${isSearchActive}"
      [subHeaderConfig]="{ ariaLabel: 'Fil d\\'Ariane', items: [{ label: 'Accueil', link: '/' }, { label: 'Section', link: '/section' }, { label: 'Page active', link: '/section/page-active' }] }"
    />`,
  imports: ['import { HeaderComponent } from "@design-system-rte/angular";'],
});
