### Fixed panel widths

The navigation panel uses fixed pixel widths per size. Expanded widths are 224px (`s`), 320px (`m`), and 504px (`l`). The collapsed width is always 64px. The panel does not grow to fit long titles or labels.

### Header title truncation

Long application titles are truncated with an ellipsis inside the header area. The panel width stays fixed. Prefer a short `title` or a concise `identifier` for branding.

### Active state is consumer-managed

The component does not derive active items from the router. Set `activeItem` and handle `onActiveItemChange`, or set `active` on individual items in your data model.

### Menu open state resets when items change

When the `items` prop reference changes, internally tracked menu open overrides are cleared. Preserve menu open state in your item data with `open` if needed.

### Collapsed badge display

When the panel is collapsed, numeric badges render as a small indicator dot on the icon. Count text and right-column badges are hidden.

### Nested menus in collapsed state

When the panel is collapsed, nested sub-menus cannot be opened or accessed. Only top-level items are shown as icons; tooltips display the parent label on focus or hover. This is intentional — collapsed mode keeps navigation minimal to preserve screen space. If sub-menu access is frequent, keep the panel expanded or default to expanded mode.

### Closed nested menus and keyboard navigation

Nested items inside a closed menu are removed from the tab order. Users must open the parent menu before nested entries receive focus.

### Collapse control labels

The collapse button labels are fixed in French (`Ouvrir le menu` / `Réduire le menu`).

### Internal components

Do not use `NavItem`, `NavMenu`, or `BaseSideNav` directly in application code. Configure navigation only through `SideNav` props.

### Router link component

By default, navigation links render as `<a>` elements. Wrap the tree in `NavigationProvider` with your router link component when using client-side routing.
