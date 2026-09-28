Place `rte-side-nav` in your layout and pass `headerConfig` and `items`. Project the main page area with an element carrying the `content` attribute.

When using `routerLink` on items or the header, ensure `RouterModule` (or standalone `RouterLink`) is available in the application.

Active state is not inferred from the router automatically. Listen to `(itemClicked)` and update the `active` flag on items in your data model.

```typescript
headerConfig = {
  title: "My Header",
  icon: "home",
  identifier: "MA",
};

items = [
  { id: "home", label: "Home", icon: "home", hasLeadingIcon: true },
  { id: "dashboard", label: "Dashboard", icon: "dashboard", hasLeadingIcon: true },
  { id: "analytics", label: "Analytics", icon: "analytics", hasLeadingIcon: true },
  { id: "settings", label: "Settings", icon: "settings", hasLeadingIcon: true },
  { id: "profile", label: "Profile", icon: "user", hasLeadingIcon: true, link: "/profile" },
];
```

```html
<rte-side-nav
  [headerConfig]="headerConfig"
  [items]="items"
>
  <div content>
    <router-outlet />
  </div>
</rte-side-nav>
```

Do not use `<rte-nav-item>`, `<rte-nav-menu>`, or `<rte-base-side-nav>` directly in application templates. These are internal building blocks rendered by `rte-side-nav`.

### Examples

#### Collapsible

```html
<rte-side-nav
  [headerConfig]="headerConfig"
  [items]="items"
  [collapsible]="true"
>
  <div content>Page content</div>
</rte-side-nav>
```

Enable the collapse control in the footer with `collapsible`.

#### With router navigation

```typescript
items = [
  { id: "home", label: "Home", icon: "home", routerLink: "/home" },
  { id: "dashboard", label: "Dashboard", icon: "dashboard", routerLink: "/dashboard" },
  {
    id: "settings",
    label: "Settings",
    icon: "settings",
    items: [
      { id: "general", label: "General", routerLink: "/settings/general" },
      { id: "privacy", label: "Privacy", routerLink: "/settings/privacy" },
    ],
  },
  { id: "docs", label: "Angular docs", icon: "link", href: "https://angular.dev", externalLink: true },
];
```

Use `routerLink` for in-app navigation and `href` with `externalLink` for external links.

#### With nested menus

```typescript
items = [
  { id: "home", label: "Home", icon: "home", hasLeadingIcon: true },
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "dashboard",
    hasLeadingIcon: true,
    items: [
      { id: "overview", label: "Overview" },
      { id: "reports", label: "Reports" },
      { id: "analytics-nested", label: "Analytics", icon: "analytics" },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    icon: "settings",
    hasLeadingIcon: true,
    items: [
      { id: "general", label: "General" },
      { id: "privacy", label: "Privacy" },
      {
        id: "advanced",
        label: "Advanced",
        icon: "settings",
        items: [
          { id: "security", label: "Security" },
          { id: "api-keys", label: "API Keys" },
        ],
      },
    ],
  },
];
```

```html
<rte-side-nav
  [headerConfig]="headerConfig"
  [items]="items"
  [collapsible]="true"
>
  <div content>Page content</div>
</rte-side-nav>
```

Provide `items` on a nav entry to render a collapsible nested menu.

#### With footer items

```typescript
footerItems = [
  { id: "footer-settings", label: "Settings", icon: "settings", hasLeadingIcon: true },
  { id: "footer-help", label: "Help & Support", icon: "help", hasLeadingIcon: true, link: "/help" },
];
```

```html
<rte-side-nav
  [headerConfig]="headerConfig"
  [items]="items"
  [footerItems]="footerItems"
  [collapsible]="true"
>
  <div content>Page content</div>
</rte-side-nav>
```

Add secondary actions in the footer with `footerItems`.
