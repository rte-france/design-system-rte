### Tab panels are not rendered

`Tab` renders the tab list only. You must create and manage tab panel content separately, wiring each panel's `id` to the corresponding `panelId` in `options`.

### Automatic first-tab selection

When `selectedTabId` is omitted and `options` contains at least one tab, `Tab` calls `onChange` with the first tab's `id` on mount.

### Dropdown overflow is horizontal only

When `overflowType` is `"dropdown"`, the dropdown replaces the tab list only when tabs overflow horizontally. Vertical tabs always use scroll arrows when content exceeds the container.

### Badge display

Without `showBadge`, a badge appears only when `badgeCount` is greater than 0 with `badgeContent: "number"`, or when `badgeContent` is `"icon"` and `badgeIcon` is set.

### Custom label content

The `label` field accepts a `string` only. Custom ReactNode labels are not supported.

### Fixed tab list aria-label

The tab list uses a hardcoded `aria-label="Sample Tabs"`. Provide an accessible name for the surrounding context if a more specific label is required.

### Disabled tabs and keyboard navigation

Disabled tabs cannot be clicked and are skipped when navigating with arrow keys. Arrow navigation wraps from the last enabled tab back to the first.
