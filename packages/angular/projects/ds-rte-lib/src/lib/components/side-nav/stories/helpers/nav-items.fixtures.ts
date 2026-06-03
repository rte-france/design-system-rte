import type { NavItem } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";

const baseBadge = {
  size: "m" as const,
  content: "number" as const,
};

export const baseNavItems: NavItem[] = [
  { kind: "link", id: "home", label: "Home", icon: "home", hasLeadingIcon: true, route: "/home" },
  {
    kind: "link",
    id: "dashboard",
    label: "Dashboard",
    icon: "dashboard",
    hasLeadingIcon: true,
    route: "/dashboard",
  },
  {
    kind: "link",
    id: "analytics",
    label: "Analytics",
    icon: "analytics",
    hasLeadingIcon: true,
    route: "/analytics",
  },
  {
    kind: "link",
    id: "settings",
    label: "Settings",
    icon: "settings",
    hasLeadingIcon: true,
    route: "/settings",
  },
  {
    kind: "link",
    id: "profile",
    label: "Profile",
    icon: "user",
    hasLeadingIcon: true,
    route: "/profile",
  },
];

export const navigationItems: NavItem[] = baseNavItems;

export const navigationItemsWithLinkableSettingsGroup: NavItem[] = [
  baseNavItems[0],
  {
    kind: "group",
    id: "settings",
    label: "Settings",
    icon: "settings",
    hasLeadingIcon: true,
    route: "/settings",
    open: true,
    items: [
      { kind: "link", id: "general", label: "General", route: "/settings/general" },
      { kind: "link", id: "privacy", label: "Privacy", route: "/settings/privacy" },
      { kind: "link", id: "security", label: "Security", route: "/settings/security" },
    ],
  },
  baseNavItems[4],
];

export const navigationItemsWithNestedAndIds: NavItem[] = [
  baseNavItems[0],
  {
    kind: "group",
    id: "dashboard",
    label: "Dashboard",
    icon: "dashboard",
    hasLeadingIcon: true,
    items: [
      { kind: "link", id: "overview", label: "Overview", route: "/dashboard/overview" },
      { kind: "link", id: "reports", label: "Reports", route: "/dashboard/reports" },
      {
        kind: "link",
        id: "analytics-nested",
        label: "Analytics",
        icon: "analytics",
        route: "/dashboard/analytics",
      },
    ],
  },
  {
    kind: "group",
    id: "settings",
    label: "Settings",
    icon: "settings",
    hasLeadingIcon: true,
    items: [
      { kind: "link", id: "general", label: "General", route: "/settings/general" },
      { kind: "link", id: "privacy", label: "Privacy", route: "/settings/privacy" },
      {
        kind: "group",
        id: "advanced",
        label: "Advanced",
        icon: "settings",
        items: [
          { kind: "link", id: "security", label: "Security", route: "/settings/advanced/security" },
          { kind: "link", id: "api-keys", label: "API Keys", route: "/settings/advanced/api-keys" },
        ],
      },
    ],
  },
  baseNavItems[4],
];

export const navigationItemsWithNestedNavMenuActivePreselected: NavItem[] = [
  baseNavItems[0],
  {
    kind: "group",
    id: "settings",
    label: "Settings",
    icon: "settings",
    hasLeadingIcon: true,
    open: true,
    items: [
      { kind: "link", id: "general", label: "General", route: "/settings/general" },
      { kind: "link", id: "privacy", label: "Privacy", route: "/settings/privacy" },
      {
        kind: "group",
        id: "advanced",
        label: "Advanced",
        icon: "settings",
        open: true,
        items: [
          {
            kind: "link",
            id: "security",
            label: "Security",
            route: "/settings/advanced/security",
            active: true,
          },
          { kind: "link", id: "api-keys", label: "API Keys", route: "/settings/advanced/api-keys" },
        ],
      },
    ],
  },
  baseNavItems[4],
];

export const navigationItemsWithNestedActivePreselected: NavItem[] = [
  baseNavItems[0],
  {
    kind: "group",
    id: "dashboard",
    label: "Dashboard",
    icon: "dashboard",
    hasLeadingIcon: true,
    open: true,
    items: [
      {
        kind: "link",
        id: "overview",
        label: "Overview",
        route: "/dashboard/overview",
        active: true,
      },
      { kind: "link", id: "reports", label: "Reports", route: "/dashboard/reports" },
      {
        kind: "link",
        id: "analytics-nested",
        label: "Analytics",
        icon: "analytics",
        route: "/dashboard/analytics",
      },
    ],
  },
  {
    kind: "group",
    id: "settings",
    label: "Settings",
    icon: "settings",
    hasLeadingIcon: true,
    items: [
      { kind: "link", id: "general", label: "General", route: "/settings/general" },
      { kind: "link", id: "privacy", label: "Privacy", route: "/settings/privacy" },
      {
        kind: "group",
        id: "advanced",
        label: "Advanced",
        icon: "settings",
        items: [
          { kind: "link", id: "security", label: "Security", route: "/settings/advanced/security" },
          { kind: "link", id: "api-keys", label: "API Keys", route: "/settings/advanced/api-keys" },
        ],
      },
    ],
  },
  baseNavItems[4],
];

export const navigationItemsWithNested = navigationItemsWithNestedAndIds;

export const navigationItemsWithNestedAndBadges: NavItem[] = [
  {
    ...baseNavItems[0],
    badge: { ...baseBadge, badgeType: "indicator", count: 5 },
  },
  {
    kind: "group",
    id: "dashboard",
    label: "Dashboard",
    icon: "dashboard",
    hasLeadingIcon: true,
    badge: { ...baseBadge, badgeType: "indicator", count: 3 },
    items: [
      {
        kind: "link",
        id: "overview",
        label: "Overview",
        route: "/dashboard/overview",
        badge: { ...baseBadge, badgeType: "brand", count: 2 },
      },
      { kind: "link", id: "reports", label: "Reports", route: "/dashboard/reports" },
      {
        kind: "link",
        id: "analytics-nested",
        label: "Analytics",
        icon: "analytics",
        route: "/dashboard/analytics",
        badge: { ...baseBadge, badgeType: "indicator", count: 12 },
      },
    ],
  },
  {
    kind: "group",
    id: "settings",
    label: "Settings",
    icon: "settings",
    hasLeadingIcon: true,
    items: [
      { kind: "link", id: "general", label: "General", route: "/settings/general" },
      {
        kind: "link",
        id: "privacy",
        label: "Privacy",
        icon: "privacy",
        route: "/settings/privacy",
        badge: { ...baseBadge, badgeType: "brand", count: 1 },
      },
      {
        kind: "group",
        id: "advanced",
        label: "Advanced",
        icon: "settings",
        badge: { ...baseBadge, badgeType: "indicator", count: 7 },
        items: [
          {
            kind: "link",
            id: "security",
            label: "Security",
            icon: "security",
            route: "/settings/advanced/security",
            badge: { ...baseBadge, badgeType: "indicator", count: 99 },
          },
          { kind: "link", id: "api-keys", label: "API Keys", route: "/settings/advanced/api-keys" },
        ],
      },
    ],
  },
  {
    ...baseNavItems[4],
    badge: { ...baseBadge, badgeType: "brand", count: 8 },
  },
];

export const footerItems: NavItem[] = [
  {
    kind: "link",
    id: "footer-settings",
    label: "Settings",
    icon: "settings",
    hasLeadingIcon: true,
    route: "/footer/settings",
  },
  {
    kind: "link",
    id: "footer-help",
    label: "Help & Support",
    icon: "help",
    hasLeadingIcon: true,
    route: "/help",
  },
  {
    kind: "group",
    id: "footer-account",
    label: "Account",
    icon: "user",
    hasLeadingIcon: true,
    items: [
      {
        kind: "link",
        id: "footer-profile",
        label: "Profile",
        route: "/profile",
        icon: "user",
      },
      { kind: "link", id: "footer-preferences", label: "Preferences", route: "/preferences" },
      {
        kind: "action",
        id: "footer-logout",
        label: "Logout",
        onClick: () => console.log("Logout clicked"),
      },
    ],
  },
];

export const navigationItemsWithDividers: NavItem[] = [
  baseNavItems[0],
  {
    kind: "group",
    id: "dashboard",
    label: "Dashboard",
    icon: "dashboard",
    hasLeadingIcon: true,
    items: [
      { kind: "link", id: "overview", label: "Overview", route: "/dashboard/overview" },
      { kind: "link", id: "reports", label: "Reports", route: "/dashboard/reports", hasDivider: true },
      {
        kind: "link",
        id: "analytics-nested",
        label: "Analytics",
        icon: "analytics",
        route: "/dashboard/analytics",
      },
    ],
  },
  { ...baseNavItems[2], hasDivider: true },
  { kind: "link", id: "reports", label: "Reports", icon: "info", hasLeadingIcon: true, route: "/reports" },
  {
    kind: "group",
    id: "settings",
    label: "Settings",
    icon: "settings",
    hasLeadingIcon: true,
    hasDivider: true,
    items: [
      { kind: "link", id: "general", label: "General", route: "/settings/general" },
      { kind: "link", id: "privacy", label: "Privacy", route: "/settings/privacy", hasDivider: true },
      { kind: "link", id: "notifications", label: "Notifications", route: "/settings/notifications" },
      {
        kind: "group",
        id: "advanced",
        label: "Advanced",
        icon: "settings",
        hasDivider: true,
        items: [
          { kind: "link", id: "security", label: "Security", route: "/settings/advanced/security" },
          { kind: "link", id: "api-keys", label: "API Keys", route: "/settings/advanced/api-keys", hasDivider: true },
          { kind: "link", id: "integrations", label: "Integrations", route: "/settings/advanced/integrations" },
        ],
      },
    ],
  },
  baseNavItems[4],
];

export const defaultHeaderConfig = {
  identifier: "MA",
  title: "My Application",
  version: "V1.2.3",
  icon: "home",
  route: "/",
};

export const headerConfigWithRoute = { ...defaultHeaderConfig };

export const headerConfigWithOnClick = {
  ...defaultHeaderConfig,
  route: null as string | null,
  onClick: () => {
    console.log("Header clicked");
  },
};

export function deepCloneNavItems(items: NavItem[]): NavItem[] {
  return JSON.parse(JSON.stringify(items));
}
