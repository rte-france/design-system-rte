### No built-in validation

The component does not validate file type, size, or count. Consumers must validate selected files and drive `isError`, `assistiveTextLabel`, and `errorFilesMap` from their own rules.

### Index-based error mapping

`errorFilesMap` entries are matched to selected files by array index. When a file is removed, recompute the map so remaining entries stay aligned with the updated list.

### Assistive text hidden during per-file errors

Assistive text is not shown while `errorFilesMap` contains any entry, even when `assistiveTextLabel` is set. Use per-file error messages in `errorFilesMap` or clear the map to show field-level assistive text again.

### Multiple selection appends to the current list

When `multiple` is `true`, each file picker interaction appends newly picked files to the current list. When `multiple` is `false`, the current selection is replaced.

### Default width and consumer override

The root uses a default width and `min-width` of 128px. Consumers set the field width on `rte-file-upload` (for example a layout class or `style="width: 320px"`) when they need more horizontal space. The component does not apply a `max-width`.

### Upload button wider than the field

The upload button sizes to its label and icon (`max-content`). When the button is wider than the component width, it overflows the root while file rows stay inside the component width. Overflow on the root is visible so the button is not clipped.

### File list width

Selected file rows span the full width of the component root (`width: 100%` on the file list wrapper). They do not match or follow the upload button width when the button is wider than the field.

### Long file names

File names truncate when horizontal space is limited. The file size and remove control keep their space; only the name flexes and truncates. A tooltip shows the full name when truncation occurs.
