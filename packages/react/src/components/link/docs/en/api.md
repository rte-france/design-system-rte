The `Link` component is the public API. Consumers pass navigation targets and styling props; the component renders a native anchor or a custom router link.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| label | string | — (required) | Visible link text. Also used as `aria-label`. |
| subtle | boolean | `false` | Renders the link with subtle styling (no underline by default). |
| externalLink | boolean | `false` | Opens the link in a new tab with `rel="noopener noreferrer"` and shows an external-link icon. |
| reverse | boolean | — | Renders the link with inverse colors for use on dark backgrounds. |
| customLinkComponent | `ElementType` | — | Custom element type for SPA routing (for example React Router `Link`). Overrides the component from `NavigationProvider`. |
| to | string | — | Passed to the rendered link component alongside `href`. Useful when the router link expects a `to` prop. |

Native anchor attributes such as `href` and `className` can be passed through to the underlying element but are not part of the design system API.
