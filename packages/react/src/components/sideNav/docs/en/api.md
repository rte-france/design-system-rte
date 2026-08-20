The `SideNav` component is the public API. Consumers configure navigation through component props and pass page content as `children`.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| size | `"s" \| "m" \| "l"` | `"m"` | Width of the expanded panel. |
| appearance | `"neutral" \| "brand"` | `"brand"` | Visual theme of the navigation panel. |
| contrast | `"low" \| "high"` | `"high"` | Contrast level paired with `appearance`. |
| collapsible | boolean | — | Shows a footer control to collapse and expand the panel. |
| isCollapsed | boolean | — | Controlled collapsed state. When omitted, the component manages collapse internally. |
| defaultCollapsed | boolean | `false` | Initial collapsed state when `isCollapsed` is not provided. |
| headerConfig | `SideNavHeaderConfig` | — | Header area configuration (title, identifier, version, link). |
| items | `NavItemProps[]` | — (required) | Primary navigation items. |
| footerItems | `NavItemProps[]` | — | Optional footer navigation items. |
| activeItem | string | — | Id of the currently active item. |
| onActiveItemChange | `(id: string \| undefined) => void` | — | Called when the active item changes through user interaction. |
| onCollapsedChange | `(collapsed: boolean) => void` | — | Called when the user toggles the collapse control. |
| children | `ReactNode` | — | Main page content rendered beside the navigation panel. |

### SideNavHeaderConfig

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| title | string | — (required) | Application title displayed in the header. |
| identifier | string | — | Short identifier shown above the title (for example initials). |
| version | string | — | Version string shown below the title when not compact. |
| icon | string | — | Icon name for the header (reserved for future use). |
| link | `string \| null` | — | When set, the header title renders as a link. |
| onClick | `() => void` | — | When set (without `link`), the header title becomes a clickable button. |
| ariaLabel | string | — | Accessible label for the header title control. |
| isCompact | boolean | `false` | Hides the version row and uses a compact header layout. |
| tooltip | string | — | Custom tooltip label when collapsed. Falls back to `title`. |

### NavItemProps (items and footerItems)

Each entry is either a leaf item or a nested menu when `items` is provided.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| id | string | — | Unique identifier. Used for active tracking and React keys. |
| label | string | — (required) | Visible label. |
| icon | string | — | Leading icon name. |
| hasLeadingIcon | boolean | `true` | Shows or hides the leading icon slot. |
| href | string | — | Navigation URL passed to the link component. |
| link | string | — | Deprecated. Use `href` instead. |
| onClick | `() => void` | — | Click handler for non-navigable items. |
| active | boolean | `false` | Marks the item as active. Managed by the consumer. |
| open | boolean | — | Initial open state for nested menus. |
| items | `NavItemProps[]` | — | Nested children. When present, the entry renders as a menu. |
| badge | `BadgeProps` | — | Badge displayed on the item. |
| hasDivider | boolean | — | Renders a divider after the item. |
