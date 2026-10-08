The `Button` component renders a native `<button>`. Visual style is controlled through the props below. Standard button HTML attributes (including `disabled`) can be passed through.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| appearance | `"brand"` \| `"neutral"` | `"brand"` | Brand or neutral color family. |
| hierarchy | `"primary"` \| `"secondary"` \| `"text"` \| `"transparent"` \| `"outlined"` | `"primary"` | Visual hierarchy within the appearance. |
| isCritical | boolean | `false` | Applies critical (destructive) styling. |
| isReversed | boolean | `false` | Applies inverse colors for use on dark or branded backgrounds. |
| variant | `"primary"` \| `"secondary"` \| `"text"` \| `"transparent"` \| `"danger"` \| `"neutral"` \| `"reverse"` | — | Deprecated flat visual alias. Prefer `appearance`, `hierarchy`, `isCritical`, and `isReversed`. |
| label | string | — (required) | Visible button text. |
| size | `"s"` \| `"m"` \| `"l"` | `"m"` | Button size. |
| icon | string | — | Icon name. |
| iconPosition | `"left"` \| `"right"` | `"left"` | Icon position relative to the label. |
| iconAppearance | `"filled"` \| `"outlined"` | — | Icon appearance. |
| badgeContent | `"number"` \| `"icon"` \| `"empty"` | — | Badge content type when a badge is shown. |
| badgeCount | number | — | Badge count when `badgeContent` is `"number"`. |
| badgeType | `"brand"` \| `"neutral"` \| `"indicator"` | — | Badge visual type. |
| badgeIcon | string | — | Badge icon when `badgeContent` is `"icon"`. |
| disabled | boolean | `false` | Native disabled state (HTML `disabled`). |

### Migrating from `variant`

| Deprecated `variant` | Use instead |
|----------------------|-------------|
| `primary` | `appearance="brand"` + `hierarchy="primary"` |
| `secondary` | `brand` + `secondary` |
| `text` | `brand` + `text` |
| `transparent` | `brand` + `transparent` |
| `danger` | `brand` + `primary` + `isCritical` |
| `reverse` | `brand` + `primary` + `isReversed` |
| `neutral` | `neutral` + `text` (legacy flat neutral); new neutral styles use `neutral` + `primary` \| `secondary` \| `outlined` |

When both deprecated `variant` and new props are set, explicit new props take precedence per axis.
