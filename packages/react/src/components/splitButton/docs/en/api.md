The `SplitButton` component is the public API. Bind `onClick` for the primary (left) button and pass menu entries through the `options` array.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | — (required) | Text displayed on the primary (left) button. |
| `options` | `SplitButtonOption[]` | — (required) | Menu entries rendered in the dropdown panel. |
| `appearance` | `"primary"` \| `"secondary"` | `"primary"` | Visual variant applied to both button segments. |
| `size` | `"s"` \| `"m"` \| `"l"` | `"m"` | Height and padding scale for the control. |
| `compactSpacing` | `boolean` | `false` | Reduces vertical height for each size tier. |
| `position` | `"bottom-start"` \| `"bottom-end"` \| `"top-start"` \| `"top-end"` | `"bottom-start"` | Placement of the dropdown menu relative to the menu trigger. |
| `icon` | `keyof typeof RegularIcons` \| `keyof typeof TogglableIcons` | — | Optional icon name displayed before the label on the left button. |
| `disabled` | `boolean` | — | Disables both the primary button and the menu trigger. |
| `ariaLabelRight` | `string` | — | Accessible label for the menu trigger button. Provide a meaningful value (for example `"Open menu"`). |
| `onClick` | `(event: React.MouseEvent<HTMLButtonElement>) => void` | — | Handler for the primary (left) button. |
| `className` | `string` | — | Additional CSS class on the root container. |
| `showBadge` | `boolean` | — | Shows a badge on the menu trigger when combined with badge props. |
| `badgeContent` | `"number"` \| `"icon"` \| `"empty"` | — | Badge content type on the menu trigger. |
| `badgeType` | `"brand"` \| `"neutral"` \| `"indicator"` | — | Badge visual variant on the menu trigger. |
| `badgeIcon` | `string` | — | Icon name when `badgeContent` is `"icon"`. |
| `badgeCount` | `number` | — | Numeric badge value when `badgeContent` is `"number"`. |
| `badgeSize` | `"xs"` \| `"s"` \| `"m"` \| `"l"` | — | Badge size on the menu trigger. |

### Menu item (`SplitButtonOption`)

Each entry in the `options` array accepts the following fields:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `id` | `string` | — (required) | Unique identifier for the menu item. |
| `label` | `string` | — (required) | Visible text of the menu item. |
| `onClick` | `(event: React.MouseEvent<HTMLElement> \| React.KeyboardEvent<HTMLElement>) => void` | — | Handler for item activation (click, Space, or Enter). |
| `icon` | `string` | — | Icon name passed to the dropdown item as `leftIcon`. |
| `disabled` | `boolean` | `false` | Disables the menu item. |
| `compactSpacing` | `boolean` | — | Reserved for item-level spacing. |
| `direction` | `Direction` | — | Text direction for the item label. |
| `inverted` | `boolean` | — | Applies inverted styling to the item. |
| `showBadge` | `boolean` | — | Shows a badge on the item when combined with badge props. |
| `badgeCount` | `number` | — | Numeric badge value when `badgeContent` is `"number"`. |
| `badgeContent` | `"number"` \| `"icon"` \| `"empty"` | — | Badge content type on the item. |
| `badgeIcon` | `string` | — | Icon name when `badgeContent` is `"icon"`. |
| `badgeType` | `"brand"` \| `"neutral"` \| `"indicator"` | — | Badge visual variant on the item. |
| `badgeSize` | `"xs"` \| `"s"` \| `"m"` \| `"l"` | — | Badge size on the item. |

The component also accepts standard native button attributes from `ButtonHTMLAttributes<HTMLButtonElement>` (except `onClick`), which are forwarded to both the primary button and the menu trigger.
