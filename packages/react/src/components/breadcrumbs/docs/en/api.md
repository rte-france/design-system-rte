The `Breadcrumbs` component is the public API. Pass the trail as `items` and configure truncation, labels, and badges through component props. Standard HTML attributes are forwarded to the root `<nav>` element.

### Breadcrumbs

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `BreadcrumbItemProps[]` | — (required) | Ordered list of breadcrumb entries, from root to current page. |
| `ariaLabel` | `string` | `"Fil d'Ariane"` | Accessible name for the navigation landmark. |
| `breadcrumbItemMaxWidth` | `number` | — | Maximum width in pixels for each item label before ellipsis is applied. |
| `showBadge` | `boolean` | — | Shows a badge on the truncation overflow button when the trail is collapsed. |
| `badgeContent` | `"number" \| "icon" \| "empty"` | — | Badge content type for the overflow button. |
| `badgeCount` | `number` | — | Numeric badge value when `badgeContent` is `"number"`. |
| `badgeIcon` | `string` | — | Icon name when `badgeContent` is `"icon"`. |
| `badgeType` | `"brand" \| "neutral" \| "indicator"` | — | Badge visual variant for the overflow button. |
| `badgeSize` | `"xs" \| "s" \| "m" \| "l"` | — | Badge size for the overflow button. |

### Breadcrumb item (`items` entry)

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | — (required) | Visible text of the breadcrumb. |
| `link` | `string` | — (required) | URL or route passed to the underlying Link component. |
| `showBadge` | `boolean` | — | Shows a badge next to the item label. |
| `badgeContent` | `"number" \| "icon" \| "empty"` | — | Badge content type. |
| `badgeCount` | `number` | — | Numeric badge value when `badgeContent` is `"number"`. |
| `badgeIcon` | `string` | — | Icon name when `badgeContent` is `"icon"`. |
| `badgeType` | `"brand" \| "neutral" \| "indicator"` | — | Badge visual variant. |
| `badgeSize` | `"xs" \| "s" \| "m" \| "l"` | — | Badge size. |
