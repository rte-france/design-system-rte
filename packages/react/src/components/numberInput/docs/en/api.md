The `NumberInput` component is the public API. Import it from `@design-system-rte/react`, pass props, and listen to `onChange` for the parsed numeric value (`number | null`).

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| id | string | — (required) | Stable id for the field, label association, and assistive text. |
| label | string | — (required) | Visible label text. Set to `""` only when `aria-label` or `aria-labelledby` names the field. |
| aria-label | string | `""` | Accessible name for the spinbutton when no visible label is shown. Required if `label` is empty. |
| aria-labelledby | string | `""` | Id of an external element that labels the field. Overrides automatic label association. |
| labelPosition | `"top" \| "side"` | `"top"` | Label placement relative to the control. |
| required | boolean | `false` | Marks the field as required for the required indicator. |
| showLabelRequirement | boolean | `false` | Shows requirement wording next to the label when applicable. |
| appearance | `"brand" \| "neutral"` | `"brand"` | Visual style of the increment/decrement steppers. |
| incrementPosition | `"right" \| "sides"` | `"right"` | Stepper layout: stacked on the right or on both sides of the field. |
| compactSpacing | boolean | `false` | Compact field and stepper sizing (24px height). |
| unit | string | `""` | Unit suffix shown inside the field when non-empty (for example `kW`). |
| assistiveTextLabel | string | `""` | Help text below the field when non-empty and no range or custom error message is shown. |
| assistiveAppearance | `"description" \| "error" \| "success" \| "link"` | `"description"` | Assistive text styling when no error state is active. Switches to error appearance when validation fails. |
| showAssistiveIcon | boolean | `false` | Shows an icon next to assistive text; also shown automatically when an error state is active. |
| isError | boolean | `false` | Forces error styling and uses `errorMessage` when set. Range validation also drives error styling. |
| errorMessage | string | `""` | Custom error message when `isError` is `true`. |
| disabled | boolean | `false` | Disables the field and steppers; the displayed value is hidden while the model value is kept. |
| readOnly | boolean | `false` | Read-only field; value remains visible, steppers are inactive. |
| min | number | `0` | Minimum allowed value for validation and stepping. |
| max | number | `undefined` | Maximum allowed value; omit for no upper bound. |
| step | number | `1` | Increment/decrement step for steppers, arrow keys, and wheel. Non-finite or non-positive values fall back to `1`. |
| decimalPrecision | number | `0` | Number of decimal places (`0` for integers only). Clamped to `0`–`100`. |
| locale | string | `"fr-FR"` | Locale used to derive the decimal separator (`,` or `.`). |
| defaultValue | `number \| null` | `undefined` | Initial value when uncontrolled; also restored on blur when the field is cleared. |
| value | `number \| null` | `undefined` | Controlled parsed value. When set, the parent must update `value` in `onChange`. |
| onChange | `(value: number \| null) => void` | `undefined` | Called when the parsed value changes (typing, stepping, or blur). |
| onBlur | `() => void` | `undefined` | Called when the spinbutton loses focus. |
| placeholder | string | `""` | Placeholder on the spinbutton input. |
| width | string | `"184px"` | Total width of the layout (field + steppers). Numeric values are treated as pixels. |
| name | string | `""` | `name` attribute on the native input. |
| rangeErrorMessages | `NumberInputRangeErrorMessages` | French defaults from core | Overrides automatic min/max messages via `between`, `greaterThan`, and `lessThan` callables. |

Range and validation errors show an error icon next to assistive text automatically when an error state is active.

Additional native `<input>` attributes (except those reserved by the component) can be passed through to the spinbutton element.
