The `NumberInputComponent` (`<rte-number-input>`) is the public API. Import it from `@design-system-rte/angular` and bind its inputs and outputs, or connect a reactive `FormControl` / `formControlName` of type `number | null`.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| id | string | — (required) | Stable id for the field, label association, and assistive text. |
| label | string | `"Label"` | Visible label text. Omit or set to `""` only when `ariaLabel` or `ariaLabelledby` names the field. |
| ariaLabel | string | `""` | Accessible name for the spinbutton when no visible label is shown. Required if `label` is empty. |
| ariaLabelledby | string | `""` | Id of an external element that labels the field. Overrides automatic label association. |
| labelPosition | `"top" \| "side"` | `"top"` | Label placement relative to the control. |
| required | boolean | `false` | Marks the field as required for the required indicator. |
| showLabelRequirement | boolean | `false` | Shows requirement wording next to the label when applicable. |
| appearance | `"brand" \| "neutral"` | `"brand"` | Visual style of the increment/decrement steppers. |
| incrementPosition | `"right" \| "sides"` | `"right"` | Stepper layout: stacked on the right or on both sides of the field. |
| compactSpacing | boolean | `false` | Compact field and stepper sizing (24px height). |
| unit | string | `""` | Unit suffix shown inside the field when non-empty (for example `kW`). |
| assistiveText | string | `""` | Help text below the field when non-empty and no range or custom error message is shown. |
| error | boolean | `false` | Forces error styling and uses `errorMessage` when set. Range validation also drives error styling. |
| errorMessage | string | `""` | Custom error message when `error` is `true`. |
| disabled | boolean | `false` | Disables the field and steppers; the displayed value is hidden while the model value is kept. |
| readOnly | boolean | `false` | Read-only field; value remains visible, steppers are inactive. |
| min | number | `0` | Minimum allowed value for validation and stepping. |
| max | number | `undefined` | Maximum allowed value; omit for no upper bound. |
| step | number | `1` | Increment/decrement step for steppers, arrow keys, and wheel. Non-finite or non-positive values fall back to `1`. |
| decimalPrecision | number | `0` | Number of decimal places (`0` for integers only). Clamped to `0`–`100`. |
| locale | string | `"fr-FR"` | Locale used to derive the decimal separator (`,` or `.`). |
| defaultValue | number | `undefined` | Initial display value when `value` is empty and when not using forms; also used on blur when the field is cleared. |
| placeholder | string | `""` | Placeholder on the spinbutton input. |
| width | string | `"184px"` | Total width of the layout (field + steppers). Numeric values are treated as pixels. |
| name | string | `""` | `name` attribute on the native input. |
| rangeErrorMessages | `NumberInputRangeErrorMessages` | French defaults from core | Overrides automatic min/max messages via `between`, `greaterThan`, and `lessThan` callables. |
| value | string | `""` | One-way binding as numeric text; when non-empty and finite, updates the displayed value. Prefer `defaultValue` or reactive forms for typical use. |
| valueChange | `number` | — | Emits the parsed numeric value on input or stepping. Emits `0` when the field is empty or not parseable; the form model still receives `number \| null`. |
| inputBlur | `void` | — | Emits when the spinbutton loses focus. |

Range and validation errors show an error icon next to assistive text automatically; there is no separate input to toggle that icon.
