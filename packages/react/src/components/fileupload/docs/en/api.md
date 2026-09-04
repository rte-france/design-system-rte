The `FileUpload` component is the public API. Consumers configure it via props and handle file selection through callback props.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| id | string | — (required) | Unique identifier for the hidden file input. |
| label | string | — (required) | Label text for the upload field. |
| buttonLabel | string | — (required) | Label displayed on the upload button. |
| showLabel | boolean | `true` | Shows or hides the visible label. When `false`, the label is applied as `aria-label` on the file input. |
| compactSpacing | boolean | — | Uses compact spacing for the button and file list items. |
| multiple | boolean | `false` | Allows selecting multiple files in the native file picker. |
| accept | string | — | Comma-separated list of accepted file types (native `accept` attribute). |
| required | boolean | — | Marks the field as required and shows the required indicator when applicable. |
| showLabelRequirement | boolean | — | Shows the required indicator even when `required` is falsy. |
| disabled | boolean | `false` | Disables the file input and upload button. |
| assistiveTextLabel | string | — | Assistive text displayed below the label. |
| assistiveAppearance | `"description" \| "error" \| "success" \| "link"` | `"description"` | Appearance of the assistive text when no field-level error is active. |
| showAssistiveText | boolean | `true` | Shows assistive text when `assistiveTextLabel` is set and no per-file errors are present. |
| showAssistiveIcon | boolean | — | Shows an icon alongside the assistive text. |
| assistiveTextLink | string | — | Optional link URL for assistive text with link appearance. |
| isError | boolean | — | Switches assistive text to error appearance. |
| errorFilesMap | string[] | `[]` | Per-file error messages aligned by index with the selected files. |
| onChange | `(files: File[]) => void` | — | Called when the selected file list changes or a file is removed. |
| onUpload | `(file: File) => Promise<void>` | — | Optional async upload handler. Shows a loading state on each file while the promise is pending. |
| onRemovingFile | `(file: File) => void` | — | Called when a file is removed from the list. |
