Angular navigable components share the same navigation inputs: `routerLink`, `href`, `externalLink`, and optionally `routerLinkConfig`.

### SPA navigation

Use `routerLink` for routes handled by Angular Router. The URL updates without a full page reload.

```html
<rte-link label="Products" routerLink="/products" />
<rte-link label="Product detail" routerLink="/products/42" />
```

Query params, fragments, and other router options go in `routerLinkConfig`:

```html
<rte-link
  label="Settings"
  routerLink="/settings"
  [routerLinkConfig]="{ queryParams: { tab: 'general' }, fragment: 'privacy' }"
/>
```

Your app must provide Angular Router (`provideRouter` or `RouterModule`) and declare `@angular/router` as a dependency.

### External links

Use `href` with `externalLink` for URLs outside your app. The link opens in a new tab and shows the external-link icon.

```html
<rte-link label="Angular documentation" href="https://angular.dev" [externalLink]="true" />
```

### In-page anchors

Use `href` without `routerLink`:

```html
<rte-link label="Skip to content" href="#main-content" />
```

### Navigation data (SideNav, Header, Breadcrumbs)

Items and configuration objects follow the same contract:

```typescript
{ id: "home", label: "Home", icon: "home", routerLink: "/home" }
{ id: "docs", label: "Docs", href: "https://example.com", externalLink: true }
```

The deprecated `link` input is an alias for `routerLink`. Prefer `routerLink` in new code.
