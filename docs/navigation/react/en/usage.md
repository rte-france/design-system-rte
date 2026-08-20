React navigable components accept an `href` prop for the destination URL. By default they render a native `<a>`, which triggers a full page reload — even for internal paths.

### One-time SPA setup

Wrap your app with `NavigationProvider` and pass your router's link component:

```tsx
<NavigationProvider linkComponent={RouterLink}>
  <Link href="/home" label="Home" />
  <Link href="/products/123" label="Product 123" />
  <Outlet />
</NavigationProvider>
```

The design system passes `href` as both `href` and `to` on the underlying component, so router libraries work without extra wiring.

`NavigationProvider` applies to all navigable components in its subtree: `Link`, `NavItem`, `NavMenu`, `SideNav`, `Header`, and `Breadcrumbs`.

### Per-link override

When only one link needs a different router component:

```tsx
<Link href="/home" label="Home" customLinkComponent={RouterLink} />
```

### External links

Use `href` with `externalLink`:

```tsx
<Link href="https://react.dev" label="React docs" externalLink />
```

### Without NavigationProvider

Links still work, but internal paths behave like normal anchors (full reload).
