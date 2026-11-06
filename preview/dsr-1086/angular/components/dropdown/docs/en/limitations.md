### Overlay portal

The dropdown panel is created dynamically in the application overlay root (`#overlay-root`). Ensure the overlay layer is present in the app shell.

### Config-driven items

Menu entries are defined as a `DropdownItemConfig[]` array, not as projected template content. Use `[rteDropdownMenuBody]` only when the default list layout does not fit (for example a fully custom panel).

### Internal item component

`<rte-dropdown-item>` is an internal component rendered by `<rte-dropdown-menu>`. Do not use it directly in application templates.

### Submenu interaction

Nested submenus (via `children` on an item) open on hover and keyboard focus. Submenus close after a 300ms delay when the pointer leaves the trigger item. Only one submenu branch is open at a time within a parent menu.

### Click outside

A mousedown outside the trigger host and the open menu panel closes the dropdown and emits `clickedOutside`.

### Programmatic open

Use `[rteDropdownIsOpen]="true"` to open the menu without a trigger interaction. Pair with `(closedDropdown)` or `(clickedOutside)` to sync state when the menu closes.

### Deprecated link property

The `link` property on `DropdownItemConfig` is deprecated. Use `href` for external URLs or `routerLink` for in-app navigation.

### Checkbox items

When `hasCheckbox` is enabled, selection state is read from `selected` and `isIndeterminate`. Handle toggling in the `menuEvent` handler and update the `items` array accordingly.
