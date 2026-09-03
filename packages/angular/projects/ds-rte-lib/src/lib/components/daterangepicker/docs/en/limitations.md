### Minimum width

The picker container accepts a custom `width` but is designed around a default of `490px` and a minimum of `320px` (`DATERANGEPICKER_MIN_WIDTH`).

### Date input format

Segmented inputs use a locale-driven date mask (default locale `fr-FR`, typically `DD/MM/YYYY`). Dates outside `minDate`, `maxDate`, or listed in `disabledDates` cannot be committed from either the text fields or the calendar.

### Calendar range selection

In the calendar, the first click sets the start date and the second sets the end date. If the second date is before the start date, the range resets to `[selectedDate, null]` and selection continues from the new start.

When `hasActions` is `false`, completing a range closes the calendar and commits immediately. When `hasActions` is `true` (the default), the range stays pending until Confirm.

### Pending changes with actions

With `[hasActions]="true"`, calendar edits are not final until Confirm. Closing the dropdown (outside click, segmented-field click while open, or blur while pending) reverts to the last committed range.
