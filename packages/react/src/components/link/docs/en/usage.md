Import and render `Link` for text navigation. Pass `href` for standard anchors. For SPA routing, wrap the app (or subtree) in `NavigationProvider` with a router link component, or pass `customLinkComponent` on individual links.

```tsx
<Link label="Link" href="#" />
```

#### Subtle

```tsx
<Link label="Subtle Link" href="#" subtle />
<Link label="Subtle Link" href="#" subtle externalLink />
```

Renders subtle links with and without external-link styling.

#### Not Subtle

```tsx
<Link label="External Link" href="#" />
<Link label="External Link" href="#" externalLink />
```

Default link styling with and without the external-link icon.

#### Reverse

```tsx
<div style={{ display: "flex", gap: 8, backgroundColor: "black", padding: 16 }}>
  <Link label="External Link" href="#" reverse subtle />
  <Link label="External Link" href="#" reverse subtle externalLink />
</div>
```

Use `reverse` on dark backgrounds for inverse link colors.

#### With Custom Router

```tsx
<BrowserRouter>
  <NavigationProvider linkComponent={RouterLink}>
    <Link customLinkComponent={RouterLink} href="/home" label="SPA Link via customLinkComponent" />
    <Link href="/dashboard" label="SPA Link via NavigationProvider" />
  </NavigationProvider>
</BrowserRouter>
```

Configure SPA navigation globally with `NavigationProvider`, or override per link with `customLinkComponent`.
