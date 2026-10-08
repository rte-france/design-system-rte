The `ButtonComponent` is applied to a native HTML `<button>` via the `rteButton` attribute. Visual style is controlled through the inputs below; label text is projected between the opening and closing tags. Native host attributes such as `disabled` and `(click)` remain available on the host element.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| rteButtonAppearance | `"brand"` \| `"neutral"` | — | Brand or neutral color family. |
| rteButtonHierarchy | `"primary"` \| `"secondary"` \| `"text"` \| `"transparent"` \| `"outlined"` | — | Visual hierarchy within the appearance. |
| rteButtonIsCritical | boolean | — | Applies critical (destructive) styling. |
| rteButtonIsReversed | boolean | — | Applies inverse colors for use on dark or branded backgrounds. |
| rteButtonVariant | `"primary"` \| `"secondary"` \| `"text"` \| `"transparent"` \| `"danger"` \| `"neutral"` \| `"reverse"` | — | Deprecated flat visual alias. Prefer `rteButtonAppearance`, `rteButtonHierarchy`, `rteButtonIsCritical`, and `rteButtonIsReversed`. |
| rteButtonSize | `"s"` \| `"m"` \| `"l"` | `"m"` | Button size. |
| rteButtonIcon | string | — | Icon name (`RegularIconIdKey` or `TogglableIconIdKey`). |
| rteButtonIconPosition | `"left"` \| `"right"` | `"left"` | Icon position relative to projected content. |
| rteButtonIconAppearance | `"filled"` \| `"outlined"` | `"filled"` | Icon appearance. |

### Migrating from `rteButtonVariant`

| Deprecated `rteButtonVariant` | Use instead |
|-------------------------------|-------------|
| `primary` | `rteButtonAppearance="brand"` + `rteButtonHierarchy="primary"` |
| `secondary` | `brand` + `secondary` |
| `text` | `brand` + `text` |
| `transparent` | `brand` + `transparent` |
| `danger` | `brand` + `primary` + `[rteButtonIsCritical]="true"` |
| `reverse` | `brand` + `primary` + `[rteButtonIsReversed]="true"` |
| `neutral` | `neutral` + `text` (legacy flat neutral); new neutral styles use `neutral` + `primary` \| `secondary` \| `outlined` |

When both deprecated `rteButtonVariant` and new inputs are set, explicit new inputs take precedence per axis.

### Badge composition (`BadgeDirective`)

Attach `rteBadge` on the same host to show a badge. Badge inputs (`rteBadgeType`, `rteBadgeContent`, `rteBadgeCount`, etc.) belong to `BadgeDirective`, not to `ButtonComponent`.
