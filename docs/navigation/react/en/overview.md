```tsx
<NavigationProvider linkComponent={RouterLink}>
  <Link href="/dashboard" label="Dashboard" />
</NavigationProvider>
```

| Intent | Configuration |
|--------|---------------|
| Navigate inside the SPA (no reload) | `href` + `NavigationProvider` (or `customLinkComponent`) |
| Open an external URL in a new tab | `href` + `externalLink` |
| Jump to an in-page anchor | `href="#section-id"` |
| Full browser navigation (no router) | `href="/path"` without `NavigationProvider` |

**Rule of thumb:** wrap your app in `NavigationProvider` with your router's link component for client-side routing. Use `externalLink` on `href` when the destination leaves your app.

Navigable components share this contract: `Link`, `NavItem`, `NavMenu`, `SideNav`, `Header`, and `Breadcrumbs`.
