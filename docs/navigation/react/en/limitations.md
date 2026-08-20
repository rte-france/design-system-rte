### Default behavior is a full page reload

Without `NavigationProvider` or `customLinkComponent`, an internal path such as `href="/dashboard"` reloads the page. This is intentional for backward compatibility.

### Router library is consumer-owned

The design system has no dependency on React Router or any other routing library. You must install, configure, and inject your router's link component via `NavigationProvider`.

### NavigationProvider scope is the React subtree

Only components rendered inside the provider inherit the router link component. Place the provider high enough in your tree — typically at the app root — so all navigable DS components are covered.

### externalLink is independent of routing setup

External links always use a native `<a>` with `target="_blank"` and `rel="noopener noreferrer"`, regardless of `NavigationProvider`. Set `externalLink` on `href`-based links that leave your app.

### Query params and fragments

Include them in `href` (e.g. `href="/settings?tab=general#privacy"`) or pass additional props supported by your router link component via spread props on the DS component.
