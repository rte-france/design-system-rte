Q: When should I use `routerLink` vs `href`?

A: Use `routerLink` for in-app SPA routes. Use `href` for external URLs, in-page anchors, or when you intentionally want a full browser navigation. See [limitations](./limitations.md#href-and-routerlink-are-mutually-exclusive).

Q: Can I use `externalLink` with `routerLink`?

A: No. `externalLink` is for `href`-based links that leave your app. For external sites, use `href="https://…"` with `externalLink`.

Q: Do SideNav, Header, and Breadcrumbs follow the same rules?

A: Yes. Nav items accept `routerLink` / `href` / `externalLink` with the same precedence. When `href` is set, `routerLink` is ignored.

Q: What if I need query params or a URL fragment?

A: Use `routerLink` with `routerLinkConfig` — pass `queryParams`, `fragment`, `queryParamsHandling`, `preserveFragment`, `replaceUrl`, or `state` as needed.

Q: Can I mix SPA and external links in the same navigation menu?

A: Yes. Set `routerLink` on in-app items and `href` + `externalLink` on items that leave the app. Do not set both `routerLink` and `href` on the same item.

Q: Should I use `link` or `routerLink`?

A: Use `routerLink`. The `link` input is deprecated and kept only for backward compatibility.
