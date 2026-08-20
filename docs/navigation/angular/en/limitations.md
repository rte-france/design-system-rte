### href and routerLink are mutually exclusive

When `href` is set, `routerLink` is ignored. Do not set both expecting SPA navigation — pick one.

```html
<!-- Incorrect -->
<rte-link routerLink="/dashboard" href="/dashboard" label="Dashboard" />

<!-- Correct -->
<rte-link routerLink="/dashboard" label="Dashboard" />
```

This rule applies to all navigable components that use the shared navigation resolver (`SideNav`, `Header`, `Breadcrumbs`, etc.).

### externalLink only applies to href links

The external icon, `target="_blank"`, and `rel="noopener noreferrer"` are rendered on the native anchor branch. SPA links via `routerLink` do not use `externalLink`.

For external sites, always use `href` with `externalLink` — never `routerLink`.

### Angular Router is required for SPA navigation

Components use the `RouterLink` directive internally. Without a configured Angular Router, `routerLink` bindings will not work.

### Deprecated link input

The `link` input remains supported as an alias for `routerLink`. New code should use `routerLink`.
