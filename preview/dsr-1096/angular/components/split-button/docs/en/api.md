The `SplitButtonComponent` (`<rte-split-button>`) is the public API. Consumers bind inputs for appearance and menu configuration, and listen to outputs for the left (primary) and right (menu trigger) button actions.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | — (required) | Text displayed on the primary (left) button. |
| `appearance` | `"primary"` \| `"secondary"` | `"primary"` | Visual variant applied to both button segments. |
| `size` | `"s"` \| `"m"` \| `"l"` | `"m"` | Height and padding scale for the control. |
| `compactSpacing` | `boolean` | `false` | Reduces vertical height for each size tier. |
| `position` | `"bottom-start"` \| `"bottom-end"` \| `"top-start"` \| `"top-end"` | `"bottom-start"` | Placement of the dropdown menu relative to the menu trigger. |
| `icon` | `RegularIconIdKey` \| `TogglableIconIdKey` \| `null` | `null` | Optional icon name displayed before the label on the left button. |
| `disabled` | `boolean` | `false` | Disables both the primary button and the menu trigger. |
| `ariaLabelRight` | `string` | — | Accessible label for the menu trigger button. Provide a meaningful value (for example `"Open menu"`). |
| `options` | `SplitButtonItemProps[]` | `[]` | Menu entries rendered in the dropdown panel. |
| `showBadge` | `boolean` | `false` | Shows a badge on the menu trigger button when combined with badge props. |
| `badgeContent` | `"number"` \| `"icon"` \| `"empty"` | — | Badge content type on the menu trigger. |
| `badgeType` | `"brand"` \| `"neutral"` \| `"indicator"` | — | Badge visual variant on the menu trigger. |
| `badgeIcon` | `RegularIconIdKey` \| `TogglableIconIdKey` | `"notification"` | Icon name when `badgeContent` is `"icon"`. |
| `badgeCount` | `number` | — | Numeric badge value when `badgeContent` is `"number"`. |
| `badgeSize` | `"xs"` \| `"s"` \| `"m"` \| `"l"` | `"m"` | Badge size on the menu trigger. |

| Output | Type | Description |
|--------|------|-------------|
| `clickLeftButton` | `void` | Emitted when the primary (left) button is activated. |
| `clickRightButton` | `void` | Emitted when the menu trigger (right) button is activated. The dropdown open state toggles on each activation. |

### Menu item (`SplitButtonItemProps`)

Each entry in the `options` array accepts the following fields:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `id` | `string` | — (required) | Unique identifier for the menu item. |
| `label` | `string` | — (required) | Visible text of the menu item. |
| `icon` | `string` | — | Icon name displayed before the label. |
| `disabled` | `boolean` | `false` | Disables the menu item. |
| `compactSpacing` | `boolean` | — | Reserved for item-level spacing (inherits from the parent control by default). |
| `direction` | `Direction` | — | Text direction for the item label. |
| `inverted` | `boolean` | — | Applies inverted styling to the item. |
| `showBadge` | `boolean` | — | Shows a badge on the item when combined with badge props. |
| `badgeCount` | `number` | — | Numeric badge value when `badgeContent` is `"number"`. |
| `badgeContent` | `"number"` \| `"icon"` \| `"empty"` | — | Badge content type on the item. |
| `badgeIcon` | `string` | — | Icon name when `badgeContent` is `"icon"`. |
| `badgeType` | `"brand"` \| `"neutral"` \| `"indicator"` | — | Badge visual variant on the item. |
| `badgeSize` | `"xs"` \| `"s"` \| `"m"` \| `"l"` | — | Badge size on the item. |
