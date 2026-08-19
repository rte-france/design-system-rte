The `Tab` component is the public API. Pass tab definitions through `options`, control the active tab with `selectedTabId`, and handle selection changes with `onChange`.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| options | `TabItemProps[]` | — (required) | Tab definitions rendered in the tab list. |
| onChange | `(id: string) => void` | — (required) | Called with the `id` of the tab the user selected. |
| selectedTabId | `string` | — | Id of the currently selected tab. When omitted and `options` is non-empty, the first tab is selected automatically. |
| direction | `"horizontal" \| "vertical"` | `"horizontal"` | Layout direction of the tab list. `"horizontal"` lays tabs in a row; `"vertical"` stacks them in a column. |
| alignment | `"start" \| "center"` | `"start"` | Alignment of tabs within the list when there is no overflow. Forced to `"start"` when tabs overflow. |
| compactSpacing | `boolean` | `false` | Reduces spacing between tab items. |
| overflowType | `"scrollable" \| "dropdown"` | `"scrollable"` | How horizontal overflow is handled. `"scrollable"` adds scroll arrows; `"dropdown"` collapses tabs into a menu. |
| inverted | `boolean` | `false` | Renders tabs for use on inverse (dark) backgrounds. |

Each entry in `options` accepts the following fields:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| id | `string` | — (required) | Unique identifier for the tab. Passed to `onChange`. |
| panelId | `string` | — (required) | Id of the associated tab panel, set as `aria-controls` on the tab button. |
| label | `string` | — | Visible tab label. |
| icon | `string` | — | Icon name displayed before the label. |
| disabled | `boolean` | `false` | Disables the tab. Skipped during keyboard navigation. |
| showBadge | `boolean` | — | Shows the badge even when count or icon criteria are not met. |
| badgeCount | `number` | — | Numeric value shown when `badgeContent` is `"number"`. |
| badgeContent | `"number" \| "icon" \| "empty"` | `"empty"` | `"number"` shows a count; `"icon"` shows `badgeIcon`; `"empty"` shows a dot indicator. |
| badgeIcon | `string` | — | Icon name shown when `badgeContent` is `"icon"`. |
| badgeType | `"brand" \| "neutral" \| "indicator"` | `"indicator"` | Badge visual variant. |
