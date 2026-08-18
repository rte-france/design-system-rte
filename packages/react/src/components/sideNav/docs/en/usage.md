Place `SideNav` in your layout and pass `headerConfig` and `items`. Render the main page area as `children`.

When integrating with a client-side router, wrap the application (or the layout) in `NavigationProvider` and pass your router link component (for example React Router `NavLink`).

Active state is not inferred from the router automatically. Control it with `activeItem` and `onActiveItemChange`, or set `active` on individual items.

```tsx
const headerConfig = {
  title: "My Header",
  icon: "home",
  identifier: "MA",
  link: "/my-application",
};

const items = [
  { id: "home", label: "Home", icon: "home", hasLeadingIcon: true },
  { id: "dashboard", label: "Dashboard", icon: "dashboard", hasLeadingIcon: true },
  { id: "analytics", label: "Analytics", icon: "analytics", hasLeadingIcon: true },
  { id: "settings", label: "Settings", icon: "settings", hasLeadingIcon: true },
  { id: "profile", label: "Profile", icon: "user", hasLeadingIcon: true, href: "/profile" },
];
```

```tsx
<SideNav headerConfig={headerConfig} items={items}>
  <main>Page content</main>
</SideNav>
```

Do not use `NavItem`, `NavMenu`, or `BaseSideNav` directly in application code. These are internal building blocks rendered by `SideNav`.

When using React Router, wrap with `NavigationProvider`:

```tsx
<BrowserRouter>
  <NavigationProvider linkComponent={NavLink}>
    <SideNav headerConfig={headerConfig} items={items}>
      <Routes>{/* routes */}</Routes>
    </SideNav>
  </NavigationProvider>
</BrowserRouter>
```

### Examples

#### Collapsible

```tsx
<SideNav headerConfig={headerConfig} items={items} collapsible>
  Page content
</SideNav>
```

Enable the collapse control in the footer with `collapsible`.

#### With custom router

```tsx
const items = [
  { id: "home", label: "Home", icon: "home", hasLeadingIcon: true, href: "/" },
  { id: "dashboard", label: "Dashboard", icon: "dashboard", hasLeadingIcon: true, href: "/dashboard" },
  { id: "analytics", label: "Analytics", icon: "analytics", hasLeadingIcon: true, href: "/analytics" },
  { id: "settings", label: "Settings", icon: "settings", hasLeadingIcon: true, href: "/settings" },
  { id: "profile", label: "Profile", icon: "user", hasLeadingIcon: true, href: "/profile" },
];
```

```tsx
<BrowserRouter>
  <NavigationProvider linkComponent={NavLink}>
    <SideNav
      headerConfig={headerConfig}
      items={items}
      activeItem="home"
      onActiveItemChange={(id) => console.log("Active item changed to:", id)}
    >
      <Routes>{/* route elements */}</Routes>
    </SideNav>
  </NavigationProvider>
</BrowserRouter>
```

Set `href` on items and use `NavigationProvider` to render router-aware links. Track the active item with `activeItem` and `onActiveItemChange`.

#### With nested menus

```tsx
const items = [
  { id: "home", label: "Home", icon: "home", hasLeadingIcon: true },
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "dashboard",
    hasLeadingIcon: true,
    items: [{ label: "Overview" }, { label: "Reports" }, { label: "Analytics", icon: "analytics" }],
  },
  {
    id: "settings",
    label: "Settings",
    icon: "settings",
    hasLeadingIcon: true,
    items: [
      { label: "General" },
      { label: "Privacy" },
      {
        label: "Advanced",
        icon: "settings",
        items: [{ label: "Security" }, { label: "API Keys" }],
      },
    ],
  },
];
```

```tsx
<SideNav headerConfig={headerConfig} items={items} collapsible>
  Page content
</SideNav>
```

Provide `items` on a nav entry to render a collapsible nested menu.

#### With footer items

```tsx
const footerItems = [
  { id: "footer-settings", label: "Settings", icon: "settings", hasLeadingIcon: true },
  { id: "footer-help", label: "Help & Support", icon: "help", hasLeadingIcon: true, href: "/help" },
];
```

```tsx
<SideNav headerConfig={headerConfig} items={items} footerItems={footerItems} collapsible>
  Page content
</SideNav>
```

Add secondary actions in the footer with `footerItems`.
