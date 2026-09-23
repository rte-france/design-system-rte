The `LinkComponent` (`<rte-link>`) is the public API. Consumers configure navigation and appearance through component inputs.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| label | string | `""` | Visible link text. |
| href | string | `"#"` | URL for native browser navigation. Used when `routerLink` is not set. |
| routerLink | `RouterLinkValue` | — | Angular Router link for in-app SPA navigation. Takes precedence over `href` when set. |
| link | `RouterLinkValue` | — | Deprecated alias of `routerLink`. Prefer `routerLink`. |
| routerLinkConfig | `RouterLinkConfig` | — | Optional Angular Router options (`queryParams`, `fragment`, `queryParamsHandling`, `preserveFragment`, `replaceUrl`, `state`). |
| subtle | boolean | `false` | Renders the link with subtle styling (no underline by default). |
| externalLink | boolean | `false` | Opens the link in a new tab with `rel="noopener noreferrer"` and shows an external-link icon. Applies only to `href` links. |
| reverse | boolean | `false` | Renders the link with inverse colors for use on dark backgrounds. |
| maxWidth | number | — | Maximum width in pixels. Long labels truncate with an ellipsis. |

`RouterLinkValue`: `string | UrlTree | Array<string \| number \| boolean \| null \| undefined \| Record<string, unknown>>`
