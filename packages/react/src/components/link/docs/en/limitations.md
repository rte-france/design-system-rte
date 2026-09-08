### Long labels truncate

Link labels use `text-overflow: ellipsis` and `white-space: nowrap`. Text that exceeds the available width is truncated. Wrap the link in a wider container or use a shorter label when the full text must remain visible.

### SPA routing requires a router link component

By default, `Link` renders a native `<a>` element. Client-side routing requires `NavigationProvider` with a router link component (for example React Router `Link`) or `customLinkComponent` on the link itself.

### href is mapped to both href and to

The component passes the `href` value to both `href` and `to` on the rendered element. Ensure the chosen link component accepts the prop it expects from your router library.
