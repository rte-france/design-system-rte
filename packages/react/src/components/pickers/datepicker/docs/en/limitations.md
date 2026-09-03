### Date format

The input displays dates in **DD/MM/YYYY** format. Segment order and separators are fixed; calendar month names follow the runtime locale but the typed format does not change.

### Pending vs committed selection

When `hasAction` is `true`, calendar day selection updates a pending value until the user clicks **Confirm**. With `hasAction` set to `false`, a day selection commits immediately and closes the menu. Cancel and overlay dismiss restore the last committed value when actions are enabled.

### Assistive text visibility

Assistive text is hidden while the calendar dropdown is open (`assistiveTextLabel && !isDropdownOpen`). Do not rely on assistive text being visible during calendar interaction.

### Overlay portal

The calendar menu renders inside `#overlay-root`. Without the overlay root in the app shell, the dropdown will not display correctly.
