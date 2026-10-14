The `<rte-breadcrumbs>` component is the public API. Pass the trail as `items` and configure truncation, labels, and badges through the component inputs.

### Breadcrumbs

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `BreadcrumbItem[]` | `[]` | Ordered list of breadcrumb entries, from root to current page. |
| `ariaLabel` | `string` | `"Fil d'Ariane"` | Accessible name for the navigation landmark. |
| `breadcrumbItemMaxWidth` | `number` | `150` | Maximum width in pixels for each item label before ellipsis is applied. |
| `showBadge` | `boolean` | `false` | Shows a badge on the truncation overflow button when the trail is collapsed. |
| `badgeContent` | `"number" \| "icon" \| "empty"` | — | Badge content type for the overflow button. |
| `badgeCount` | `number` | — | Numeric badge value when `badgeContent` is `"number"`. |
| `badgeIcon` | `string` | — | Icon name when `badgeContent` is `"icon"`. |
| `badgeType` | `"brand" \| "neutral" \| "indicator"` | — | Badge visual variant for the overflow button. |
| `badgeSize` | `"xs" \| "s" \| "m" \| "l"` | `"s"` | Badge size for the overflow button. |

### Breadcrumb item (`items` entry)

Each entry in `items` accepts the fields below. Per-item badge props apply to that breadcrumb label.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | — (required) | Visible text of the breadcrumb. |
| `link` | `string` | — (required) | URL or route for the breadcrumb item. |
| `showBadge` | `boolean` | — | Shows a badge next to the item label. |
| `badgeContent` | `"number" \| "icon" \| "empty"` | — | Badge content type. |
| `badgeCount` | `number` | — | Numeric badge value when `badgeContent` is `"number"`. |
| `badgeIcon` | `string` | — | Icon name when `badgeContent` is `"icon"`. |
| `badgeType` | `"brand" \| "neutral" \| "indicator"` | — | Badge visual variant. |
| `badgeSize` | `"xs" \| "s" \| "m" \| "l"` | — | Badge size. |
