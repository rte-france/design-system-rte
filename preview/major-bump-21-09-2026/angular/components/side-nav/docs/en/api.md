The `rte-side-nav` component is the public API. Consumers configure navigation through component inputs and project page content with the `[content]` attribute.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| size | `"s" \| "m" \| "l"` | `"m"` | Width of the expanded panel. |
| appearance | `"neutral" \| "brand"` | `"brand"` | Visual theme of the navigation panel. |
| contrast | `"low" \| "high"` | `"high"` | Contrast level paired with `appearance`. |
| collapsible | boolean | `false` | Shows a footer control to collapse and expand the panel. |
| isCollapsed | boolean | `false` | Initial or controlled collapsed state. |
| headerConfig | `SideNavHeaderConfig` | — | Header area configuration (title, identifier, version, link). |
| items | `NavItem[]` | `[]` | Primary navigation items. |
| footerItems | `NavItem[]` | — | Optional footer navigation items. |

| Output | Type | Description |
|--------|------|-------------|
| itemClicked | `string` | Emits the `id` (or `label` fallback) of a clicked nav item. Use this to drive active state in the parent. |

### SideNavHeaderConfig

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| title | string | — (required) | Application title displayed in the header. |
| identifier | string | — | Short identifier shown above the title (for example initials). |
| version | string | — | Version string shown below the title when not compact. |
| icon | string | — | Icon name for the header (reserved for future use). |
| link | `string \| null` | — | When set, the header title renders as a `routerLink`. |
| onClick | `() => void` | — | When set (without `link`), the header title becomes a clickable button. |
| ariaLabel | string | — | Accessible label for the header title control. |
| isCompact | boolean | `false` | Hides the version row and uses a compact header layout. |
| tooltip | string | — | Custom tooltip label when collapsed. Falls back to `title`. |

### NavItem (items and footerItems)

Each entry is either a leaf item or a nested menu when `items` is provided.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| id | string | — | Unique identifier. Emitted by `itemClicked` and used for active tracking. |
| label | string | — (required) | Visible label. |
| icon | string | — | Leading icon name. |
| hasLeadingIcon | boolean | `true` | Shows or hides the leading icon slot. |
| routerLink | `RouterLinkValue` | — | In-app route for Angular Router. |
| href | string | — | External URL. Takes precedence over `routerLink` when set. |
| externalLink | boolean | — | When `true` with `href`, opens the link in a new tab. |
| routerLinkConfig | `RouterLinkConfig` | — | Angular Router options (`queryParams`, `fragment`, etc.). |
| link | `RouterLinkValue` | — | Deprecated. Use `routerLink` instead. |
| onClick | `() => void` | — | Click handler for non-navigable items. |
| active | boolean | `false` | Marks the item as active. Managed by the consumer. |
| open | boolean | — | Initial open state for nested menus. |
| items | `NavItem[]` | — | Nested children. When present, the entry renders as a menu. |
| badge | `BadgeProps` | — | Badge displayed on the item. |
| hasDivider | boolean | — | Renders a divider after the item. |
