### No built-in validation

The component does not validate file type, size, or count. Consumers must validate selected files and drive `isError`, `assistiveTextLabel`, and `errorFilesMap` from their own rules.

### Index-based error mapping

`errorFilesMap` entries are matched to selected files by array index. When a file is removed, recompute the map so remaining entries stay aligned with the updated list.

### Assistive text hidden during per-file errors

Assistive text is not shown while `errorFilesMap` contains any entry, even when `assistiveTextLabel` is set. Use per-file error messages in `errorFilesMap` or clear the map to show field-level assistive text again.

### Selection replaces the current list

Each file picker interaction replaces the full selected file list. The component does not append newly picked files to an existing selection.

### Long file names

File names in the list are truncated when space is limited. A tooltip shows the full name when truncation occurs. The file list width follows the upload button width.
