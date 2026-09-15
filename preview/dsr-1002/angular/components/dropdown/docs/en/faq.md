Q: The dropdown menu does not appear when I click the trigger.

A: See **Overlay portal** in Limitations. The panel is created in `#overlay-root`. Ensure the overlay layer is present in your application shell.

Q: Can I use `<rte-dropdown-item>` directly in my template?

A: See **Internal item component** in Limitations. Items are rendered internally from the `items` array on `<rte-dropdown-menu>`. Define entries as `DropdownItemConfig` objects instead.

Q: A nested submenu closes when I move the pointer away briefly.

A: See **Submenu interaction** in Limitations. Submenus close after a 300ms delay when the pointer leaves the trigger item. Move the pointer into the submenu panel before the delay expires.

Q: The `link` property on an item does not navigate correctly.

A: See **Deprecated link property** in Limitations. `link` is deprecated — use `href` for external URLs or `routerLink` for in-app navigation.

Q: Checkbox items do not reflect selection after click.

A: See **Checkbox items** in Limitations. Update the `selected` (and `isIndeterminate` if needed) property on the item in your `items` array inside the `menuEvent` handler.
