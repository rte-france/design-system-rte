### Tab panels are not rendered

`rte-tab` renders the tab list only. You must create and manage tab panel content separately, wiring each panel's `id` to the corresponding `panelId` in `options`.

### Selection is fully controlled

The component does not auto-select a tab. You must initialize `selectedTabId` to a valid tab `id` and update it when `(change)` fires.

### Dropdown overflow is horizontal only

When `overflowType` is `"dropdown"`, the dropdown replaces the tab list only when tabs overflow horizontally. Vertical tabs always use scroll arrows when content exceeds the container.

### Badge display

Without `showBadge`, a badge appears only when `badgeCount` is greater than 0 with `badgeContent: "number"`, or when `badgeContent` is `"icon"` and `badgeIcon` is set.

### Fixed tab list aria-label

The tab list uses a hardcoded `aria-label="Sample Tabs"`. Provide an accessible name for the surrounding context if a more specific label is required.

### Disabled tabs and keyboard navigation

Disabled tabs cannot be clicked and are skipped when navigating with arrow keys. Arrow navigation wraps from the last enabled tab back to the first.
