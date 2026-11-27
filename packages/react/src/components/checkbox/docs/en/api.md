The `Checkbox` component is the public API. It renders a styled native checkbox input with an associated label, optional description, and optional error message.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| id | string | — (required) | Unique identifier linked to the label and native input. |
| label | string | `""` | Visible label text displayed next to the checkbox. Omit the value or pass an empty string to hide the label. |
| showLabel | boolean | `true` | Deprecated. Visible label display is controlled by `label` instead. |
| description | string | `undefined` | Secondary text displayed below the label. |
| isError | boolean | `false` | Applies error styling to the checkbox and label. |
| error | boolean | `undefined` | Deprecated alias of `isError`. Prefer `isError`. |
| errorMessage | string | `undefined` | Error text displayed below the description when `isError` is `true`. |
| readOnly | boolean | `undefined` | Displays the current state without allowing changes. |
| indeterminate | boolean | `undefined` | Sets the indeterminate visual state on the native input. |

The component also accepts standard native checkbox input attributes from `React.InputHTMLAttributes<HTMLInputElement>` (except `id`), which are forwarded to the underlying `<input type="checkbox">`.
