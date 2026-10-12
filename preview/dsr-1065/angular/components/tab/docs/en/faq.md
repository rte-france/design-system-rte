Q: Why does my horizontal tab collapse when the viewport shrinks?

A: Check `overflowType`. When set to `"dropdown"`, overflowing tabs collapse into a single menu button. Use `"scrollable"` (the default) to keep tabs visible with scroll arrows.

Q: Can I display an icon on the right side of the tab label to indicate a status?

A: There is no right-icon variant. Use a badge with `badgeContent: "icon"`, `badgeIcon`, and `showBadge: true`.
