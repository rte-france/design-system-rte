### Date format

The segmented field and committed value use a fixed **DD/MM/YYYY** display format (`formatDate` in core). The `locale` input affects calendar month names and accessibility labels, not the segment order or separator.

### Pending vs committed selection

When `hasActions` is `true` (default), calendar day selection updates a pending value only. The committed value changes when the user clicks **Confirm**, completes a valid typed date, or selects a day with `hasActions` set to `false`. Dismissal paths — outside click, Escape, Cancel, or clicking the segmented field while open — restore the last committed value.

### Overlay portal

The calendar menu is rendered in the application overlay layer (`#overlay-root`). Ensure the overlay root is present in the app shell; otherwise the menu will not appear or focus trapping will not activate.
