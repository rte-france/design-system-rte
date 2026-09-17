The `SegmentedControl` component is the public API. Pass segment definitions through `options`, control the active segment with `selectedSegment`, and handle selection changes with `onChange`.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `options` | `SegmentOptions[]` | — (required) | Segment definitions rendered in the control. Must contain 2 or 3 items. |
| `onChange` | `(id: string) => void` | — (required) | Called with the `id` of the segment the user selected. |
| `selectedSegment` | `string` | — | Id of the currently selected segment. Must match an `id` in `options`. |
| `appearance` | `"brand"` \| `"neutral"` | `"brand"` | Visual variant of the control background and borders. |
| `compactSpacing` | `boolean` | `false` | Reduces segment height and horizontal padding. |

Each entry in `options` accepts the following fields:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `id` | `string` | — (required) | Unique identifier for the segment. Passed to `onChange`. |
| `label` | `string` | — (required) | Visible segment label. Also used as the segment's `aria-label`. |
| `icon` | `string` | — | Icon name. When set on one option, all options must define an icon; labels are hidden and only icons are shown. |
| `showBadge` | `boolean` | — | Shows the badge when badge content criteria are met. |
| `badgeCount` | `number` | — | Numeric value shown when `badgeContent` is `"number"`. |
| `badgeContent` | `"number"` \| `"icon"` \| `"empty"` | — | `"number"` shows a count; `"icon"` shows `badgeIcon`; `"empty"` shows a dot indicator. |
| `badgeIcon` | `string` | — | Icon name shown when `badgeContent` is `"icon"`. |
| `badgeType` | `"brand"` \| `"neutral"` \| `"indicator"` | — | Badge visual variant. |
| `badgeSize` | `"xs"` \| `"s"` \| `"m"` \| `"l"` | — | Badge size. |
