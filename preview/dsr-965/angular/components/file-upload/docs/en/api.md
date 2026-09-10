The `FileUploadComponent` (`rte-file-upload`) is the public API. Consumers configure it via inputs and react to file selection through outputs.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| id | string | — (required) | Unique identifier for the hidden file input. |
| label | string | — (required) | Label text for the upload field. |
| buttonLabel | string | — (required) | Label displayed on the upload button. |
| showLabel | boolean | `true` | Shows or hides the visible label. When `false`, the label is applied as `aria-label` on the file input. |
| compactSpacing | boolean | `false` | Uses compact spacing for the button and file list items. |
| multiple | boolean | `false` | Allows selecting multiple files in the native file picker. |
| accept | string | — | Comma-separated list of accepted file types (native `accept` attribute). |
| required | boolean | `false` | Marks the field as required and shows the required indicator when applicable. |
| showLabelRequirement | boolean | `false` | Shows the required indicator even when `required` is `false`. |
| disabled | boolean | `false` | Disables the file input and upload button. |
| assistiveTextLabel | string | — | Assistive text displayed below the label. |
| assistiveAppearance | `"description" \| "error" \| "success" \| "link"` | `"description"` | Appearance of the assistive text when no field-level error is active. |
| showAssistiveText | boolean | `true` | Shows assistive text when `assistiveTextLabel` is set and no per-file errors are present. |
| showAssistiveIcon | boolean | `false` | Shows an icon alongside the assistive text. |
| assistiveTextLink | string | — | Optional link URL for assistive text with link appearance. |
| isError | boolean | `false` | Switches assistive text to error appearance. |
| errorFilesMap | string[] | `[]` | Per-file error messages aligned by index with the selected files. |
| onUploadFile | `(file: File) => Promise<void>` | — | Optional async upload handler. Shows a loading state on each file while the promise is pending. |
| filesChange | output | — | Emits the current list of selected files when the selection changes or a file is removed. |
| fileRemoved | output | — | Emits the file removed from the list. |
