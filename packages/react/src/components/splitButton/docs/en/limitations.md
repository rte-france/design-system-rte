### Shared dropdown identifier

The embedded dropdown uses a fixed `dropdownId` (`"tab-dropdown"`). Avoid placing multiple split buttons that rely on distinct dropdown IDs on the same page, or use the standalone Dropdown when per-instance IDs are required.

### Shared button attributes

Native button attributes passed through `...props` are applied to both the primary button and the menu trigger. Avoid props that should apply to only one segment (for example a single `id`).

### Menu open behavior

The menu trigger opens the panel on click; it does not toggle closed on a second click. The panel closes via click outside, Escape, or item selection (with `autoClose` enabled on the embedded dropdown).
