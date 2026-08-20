### Overlay portal

The dropdown panel renders inside the application overlay root (`#overlay-root`). Ensure the overlay layer is present in the app shell; otherwise the panel will not appear.

### Maximum width

When `hasMaxWidth` is `true` (default), the panel is capped at 300px. Pass `hasMaxWidth={false}` or set an explicit `style.width` when a wider panel is required.

### Indentation and icons

`hasIndent` is ignored when `leftIcon` is provided. Use one or the other — not both — for a given item.

### Submenu interaction

Nested submenus open on hover and keyboard focus. Only one submenu branch is open at a time within a parent menu. Submenus are positioned automatically to the right of their trigger item.

### Click outside

A mousedown outside every open dropdown panel and its trigger closes the menu. Clicks inside any `[data-dropdown-id]` element (including nested submenus) keep the menu open.

### Controlled open state

Open state is fully controlled by the consumer via `isOpen` and `onClose`. The component does not toggle itself — the trigger must update `isOpen`.

### Checkbox items

When `hasCheckbox` is enabled, item activation is driven by the embedded checkbox `onChange`. Provide `isSelected` and optionally `isIndeterminate` to reflect selection state.
