The `rte-checkbox` component is the public API. Import `CheckboxComponent` in the consuming component's `imports` array and bind inputs on the element.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| id | string | — (required) | Unique identifier linked to the label and native input. |
| label | string | — (required) | Visible label text displayed next to the checkbox. |
| value | string | `""` | Value submitted with the native checkbox input. |
| indeterminate | boolean | `false` | Sets the indeterminate visual state on the native input. |
| description | string | `""` | Secondary text displayed below the label. |
| showLabel | boolean | `true` | Shows or hides the visible label. Provide `ariaLabel` when set to `false`. |
| disabled | boolean | `false` | Disables interaction and applies disabled styling. |
| error | boolean | `false` | Applies error styling to the checkbox and label. |
| errorMessage | string | `""` | Error text displayed below the description when `error` is `true`. |
| readOnly | boolean | `false` | Displays the current state without allowing changes. |
| checked | boolean | `false` | Checked state of the checkbox. Use with `(checkedChange)` for controlled usage. |
| tabindex | string \| number | `undefined` | Tab order override passed to the native input. |
| ariaLabel | string | `undefined` | Accessible name applied as `aria-label` when the visible label is hidden. |

| Output | Type | Description |
|--------|------|-------------|
| checkedChange | boolean | Emitted when the user toggles the checked state. |
