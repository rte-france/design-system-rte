The `[rteDropdown]` directive, `[rteDropdownTrigger]` directive, and `<rte-dropdown-menu>` component form the public API. Define menu entries with a `DropdownItemConfig[]` array and handle selection through the `menuEvent` output.

### DropdownDirective (`[rteDropdown]`)

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| rteDropdownId | string | auto-generated | Optional custom id for the dropdown instance. |
| rteDropdownPosition | `"auto" \| "top" \| "bottom" \| "left" \| "right"` | `"bottom"` | Preferred placement relative to the trigger. `"auto"` picks the best fit in the viewport. |
| rteDropdownAlignment | `"start" \| "center" \| "end"` | `"start"` | Alignment of the panel along the placement axis. |
| rteDropdownIsOpen | boolean | `false` | Opens the menu programmatically when set to `true`. |
| rteDropdownOffset | number | `0` | Gap in pixels between the trigger and the panel. |
| rteDropdownAutofocus | boolean | `true` | Moves focus to the first menu item when the panel opens. |
| rteDropdownAutoOpen | boolean | `true` | Opens the menu on trigger click and keyboard activation. |
| rteDropdownWidth | `number \| null` | `null` | Fixed width in pixels for the dropdown panel. |
| rteDropdownOverlayLevel | `"low" \| "high"` | auto-detected | Overlay stacking priority. `"high"` is used when the trigger sits inside another overlay. |
| rteCloseOnItemClick | boolean | `true` | Closes the menu when a leaf item (without children) is activated. |

| Output | Payload | Description |
|--------|---------|-------------|
| menuEvent | `{ event: Event; id: string; item?: DropdownItemConfig }` | Emitted when a leaf item is clicked or activated via keyboard. |
| clickedOutside | `void` | Emitted when the user clicks outside the dropdown. |
| closedDropdown | `void` | Emitted after the dropdown finishes closing. |

### DropdownTriggerDirective (`[rteDropdownTrigger]`)

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| rteDropdownTriggerActivateWithArrowDown | boolean | `false` | Opens the menu when Arrow Down is pressed on the trigger. |

Apply this directive to the element that opens the menu (for example a `<button>`).

### DropdownMenuComponent (`<rte-dropdown-menu>`)

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| items | `DropdownItemConfig[]` | `[]` | Menu entries. Omit when using a custom body template. |
| maxHeight | `number \| null` | `null` | Maximum height of the panel in pixels. Content scrolls when exceeded. |

Project optional header, footer, or custom body content with `ng-template`:

| Directive | Selector | Description |
|-----------|----------|-------------|
| DropdownMenuHeaderDirective | `[rteDropdownMenuHeader]` | Content above the menu body. |
| DropdownMenuFooterDirective | `[rteDropdownMenuFooter]` | Content below the menu body. |
| DropdownMenuBodyDirective | `[rteDropdownMenuBody]` | Replaces the default item list with custom content. |

Do not use `<rte-dropdown-item>` directly in application templates — items are rendered internally from the `items` array.

### DropdownItemConfig

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| label | string | — (required) | Visible text of the menu item. |
| id | string | label | Identifier emitted in `menuEvent`. |
| leftIcon | string | — | Icon name displayed before the label. |
| trailingText | string | — | Secondary text aligned to the right. |
| link | string | — | **Deprecated.** Use `href` or `routerLink` instead. |
| href | string | — | Renders the label as an external link. |
| routerLink | `string \| any[]` | — | Angular router link for in-app navigation. |
| routerLinkConfig | `RouterLinkConfig` | — | Additional router link options (`queryParams`, `fragment`, etc.). |
| externalLink | boolean | — | Opens `href` links in a new tab. |
| disabled | boolean | `false` | Disables interaction. |
| hasSeparator | boolean | `false` | Renders a divider below the item. |
| hasIndent | boolean | `false` | Adds left indentation. |
| hasCheckbox | boolean | `false` | Renders a checkbox before the label. |
| selected | boolean | `false` | Selected state for checkbox items. |
| isIndeterminate | boolean | `false` | Indeterminate state for checkbox items. |
| children | `DropdownItemConfig[]` | — | Nested submenu items. |
| showBadge | boolean | — | Shows a badge when combined with badge props. |
| badgeCount | number | — | Numeric badge value. |
| badgeContent | `"number" \| "icon" \| "empty"` | — | Badge content type. |
| badgeIcon | string | — | Icon name when `badgeContent` is `"icon"`. |
| badgeType | `"brand" \| "neutral" \| "indicator"` | — | Badge visual variant. |
| badgeSize | `"xs" \| "s" \| "m" \| "l"` | — | Badge size. |
