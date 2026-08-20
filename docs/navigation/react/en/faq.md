Q: I set `href="/dashboard"` but the page reloads. Why?

A: By default, navigable components render a native `<a>`. Wrap your app in `NavigationProvider` with your router's `Link` component for client-side navigation.

Q: Do I need `NavigationProvider` on every page?

A: No. Configure it once at the app root. All navigable design system components inside the provider use the injected link component automatically.

Q: When should I use `customLinkComponent` instead of `NavigationProvider`?

A: Use `NavigationProvider` for the common case — one router for the whole app. Use `customLinkComponent` on a single link when it needs a different router component than the rest of the tree.

Q: Do SideNav, Header, and Breadcrumbs need separate setup?

A: No. They read the link component from `NavigationProvider` context, same as `Link`. One provider covers all of them.

Q: Can I use the design system without any router?

A: Yes. Without configuration, components render native anchors. This works for static sites or external-only links.

Q: How do external links work with `NavigationProvider`?

A: Set `externalLink` on the component. The external-link icon, new tab, and `rel` attributes are applied regardless of the provider.
