Use `<rte-link>` in templates for text links. Choose `routerLink` for in-app navigation or `href` for native browser navigation and external URLs.

```html
<rte-link label="Link" href="#" />
```

#### Navigation

Use `routerLink` for SPA routes, `href` for anchors or native navigation, and `externalLink` to open external URLs in a new tab.

```html
<rte-link label="SPA — /products" routerLink="/products" />
<rte-link label="SPA — /about" routerLink="/about" />
<rte-link label="Native — #anchor" href="#anchor" />
<rte-link label="External — angular.dev" href="https://angular.dev" [externalLink]="true" />
```

#### Subtle Link

```html
<rte-link label="Subtle Link" href="#" [subtle]="true" />
```

Renders the link with subtle styling (no underline until hover).

#### Subtle Link External

```html
<rte-link label="Subtle Link" href="#" [subtle]="true" [externalLink]="true" />
```

Combines subtle styling with external-link behavior and icon.

#### External Link

```html
<rte-link label="External Link" href="https://angular.dev" [externalLink]="true" />
```

Opens the destination in a new tab and displays the external-link icon.

#### Reverse

```html
<div style="background-color: black; padding: 16px; display: flex; gap: 16px;">
  <rte-link label="External Link" href="#" [externalLink]="true" [reverse]="true" />
  <rte-link label="External Link" href="#" [reverse]="true" />
</div>
```

Use `reverse` on dark backgrounds for inverse link colors.
