```html
<rte-link label="Dashboard" routerLink="/dashboard" />
```

| Intent | Input |
|--------|-------|
| Navigate inside the SPA (no reload) | `routerLink` |
| Open an external URL in a new tab | `href` + `externalLink` |
| Jump to an in-page anchor | `href="#section-id"` |
| Force a full browser navigation | `href="/path"` (no `routerLink`) |

**Rule of thumb:** use `routerLink` for routes handled by Angular Router. Use `href` for everything the browser should handle natively — external URLs, anchors, mailto links, or intentional full reloads.

Navigable components share this contract: `Link`, `SideNav` / `NavItem` / `NavMenu`, `Header`, and `Breadcrumbs`.
