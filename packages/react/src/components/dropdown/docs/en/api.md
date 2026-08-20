The `Dropdown` and `DropdownItem` components are the public API. Control open state with `isOpen` and `onClose`; compose menu entries as `DropdownItem` children.

### Dropdown

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| trigger | `React.ReactNode` | — (required) | Element that opens the menu (typically a button). |
| isOpen | boolean | `false` | Controls whether the dropdown panel is visible. |
| onClose | `() => void` | `() => {}` | Called when the dropdown closes (click outside, Escape, or item selection when `autoClose` is enabled). |
| dropdownId | string | auto-generated | Unique identifier used for focus management and nested menus. |
| position | `"auto" \| "top" \| "bottom" \| "left" \| "right"` | `"bottom"` | Preferred placement relative to the trigger. `"auto"` picks the best fit in the viewport. |
| alignment | `"start" \| "center" \| "end"` | `"start"` | Alignment of the panel along the placement axis. |
| offset | number | `0` | Gap in pixels between the trigger and the panel. |
| autoClose | boolean | `true` | Closes the root dropdown when a leaf item is activated. |
| autofocus | boolean | `true` | Moves focus to the first menu item when the panel opens. |
| hasParent | boolean | `false` | Marks a nested submenu. Set automatically by `DropdownItem` when it has children. |
| header | `React.ReactNode` | — | Optional content rendered above the menu body, separated by a divider. |
| footer | `React.ReactNode` | — | Optional content rendered below the menu body, separated by a divider. |
| isList | boolean | `true` | When `true`, wraps children in a `<ul role="menu">`. Set to `false` for custom body content. |
| hasMaxWidth | boolean | `true` | Applies the design-system max width (300px) to the panel. |
| overlayLevel | `"low" \| "high"` | auto-detected | Overlay stacking priority. `"high"` is used when the trigger sits inside another overlay. |
| maxHeight | `number \| string` | — | Maximum height of the panel; content scrolls when exceeded. |
| className | string | — | Additional CSS class on the dropdown panel. |
| style | `React.CSSProperties` | — | Inline styles on the dropdown panel (for example `width`). |

### DropdownItem

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| label | string | — | Visible text of the menu item. |
| leftIcon | string | — | Icon name displayed before the label. |
| trailingText | string | — | Secondary text aligned to the right (for example a shortcut). |
| link | string | — | Renders the label as a link with the given `href`. |
| disabled | boolean | `false` | Disables interaction and applies disabled styling. |
| hasSeparator | boolean | `false` | Renders a divider below the item. |
| hasIndent | boolean | `false` | Adds left indentation. Ignored when `leftIcon` is set. |
| hasCheckbox | boolean | `false` | Renders a checkbox before the label. |
| isSelected | boolean | `false` | Selected state for checkbox items. |
| isIndeterminate | boolean | `false` | Indeterminate state for checkbox items. |
| onClick | `(event: React.MouseEvent<HTMLLIElement> \| React.KeyboardEvent<HTMLLIElement>) => void` | — | Handler for item activation (click, Space, or Enter). |
| showBadge | boolean | — | Shows a badge when combined with badge props. |
| badgeCount | number | — | Numeric badge value when `badgeContent` is `"number"`. |
| badgeContent | `"number" \| "icon" \| "empty"` | — | Badge content type. |
| badgeIcon | string | — | Icon name when `badgeContent` is `"icon"`. |
| badgeType | `"brand" \| "neutral" \| "indicator"` | — | Badge visual variant. |
| badgeSize | `"xs" \| "s" \| "m" \| "l"` | — | Badge size. |
| children | `React.ReactNode` | — | Nested submenu items. Renders a chevron and opens a child `Dropdown` on hover or keyboard. |
