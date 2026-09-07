Q: Why can't I access sub-menus when the side nav is collapsed?

A: Collapsed mode reduces navigation to top-level icons only. Nested sub-menus are hidden and cannot be opened in this state — a tooltip shows the parent item label, but its children are not reachable. This is an intentional design decision. If users frequently navigate to sub-menu destinations, keep the panel expanded or default to expanded mode (`isCollapsed: false`). See Limitations / Nested menus in collapsed state.

Q: Will a variant be added to expose sub-menus while the side nav is collapsed?

A: A feature request to access sub-menus in collapsed mode was reviewed and declined. Collapsed mode is designed to stay minimal and limit complexity. Expanding the panel before navigating to nested items remains the supported workaround. If deep navigation is common in your application, prefer expanded mode by default rather than collapsed mode.

Q: Users must expand the side nav every time they want a sub-menu item. Is there an alternative?

A: Yes. Either keep the panel expanded during sessions where nested navigation is frequent, or configure the application to start in expanded mode. Restructuring navigation — for example promoting frequently used sub-menu items to top-level entries — can also reduce reliance on nested menus while collapsed.
