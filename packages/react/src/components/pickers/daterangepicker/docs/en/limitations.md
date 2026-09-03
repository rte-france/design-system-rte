### Minimum width

The picker enforces a minimum width of `320px` (`DATERANGEPICKER_MIN_WIDTH`). Values below this are clamped by the component styles.

### Date input format

Segmented inputs use a fixed `DD/MM/YYYY` mask. Dates outside `minDate`, `maxDate`, or listed in `disabledDates` cannot be committed from either the text fields or the calendar.

### Calendar range selection

In the calendar, the first click sets the start date and the second sets the end date. If the second date is before the start date, the range resets to `[selectedDate, null]` and selection continues from the new start.

When `hasAction` is `false`, completing a range (start and end selected) closes the calendar and commits immediately. When `hasAction` is `true`, the range stays pending until Confirm.

### Pending changes with actions

With `hasAction={true}`, calendar edits are not final until Confirm. Closing the dropdown (outside click, Escape, or blur while pending) reverts to the last committed range and triggers `onCancel`.
