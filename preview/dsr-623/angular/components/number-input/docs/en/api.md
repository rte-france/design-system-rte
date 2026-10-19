The `NumberInputComponent` (`<rte-number-input>`) is the public API. Import it from `@design-system-rte/angular` and bind inputs, outputs, or a reactive `FormControl` for `number | null` values.

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
| hasUnit | boolean | `false` | Shows a unit suffix inside the field (for example `kW`). |
| unit | string | `"kW"` | Unit text when `hasUnit` is `true`. |
| hasAssistiveText | boolean | `false` | Enables assistive text below the field when no range error is shown. |
| assistiveTextLabel | string | `""` | Assistive description when `hasAssistiveText` is `true`. |
| showAssistiveIcon | boolean | `false` | Shows an icon next to assistive text (error state forces the error icon). |
| error | boolean | `false` | Forces error styling and uses `errorMessage` when set. |
| errorMessage | string | `""` | Custom error message when `error` is `true`. |
| disabled | boolean | `false` | Disables the field and steppers; the displayed value is hidden while the model value is kept. |
| readOnly | boolean | `false` | Read-only field; value remains visible, steppers are inactive. |
| min | number | `0` | Minimum allowed value for validation and stepping. |
| max | number | `undefined` | Maximum allowed value; omit for no upper bound. |
| step | number | `1` | Increment/decrement step for steppers, arrow keys, and wheel. |
| decimalPrecision | number | `0` | Number of decimal places (`0` for integers only). |
| locale | string | `"fr-FR"` | Locale used to derive the decimal separator (`,` or `.`). |
| defaultValue | number | `undefined` | Initial display value when not using `value` or forms; also used on blur when the field is cleared. |
| placeholder | string | `""` | Placeholder on the spinbutton input. |
| width | string | `undefined` | Total width of the layout (field + steppers). Defaults to `184px` when omitted. |
| name | string | `""` | `name` attribute on the native input. |
| rangeErrorMessages | `NumberInputRangeErrorMessages` | French defaults from core | Callables to override automatic min/max error messages. |
| value | `number \| null \| undefined` | `undefined` | One-way model input; when set, updates the displayed value. |
| valueChange | `number \| null` | — | Emits the parsed numeric value on user input or stepping. |
| inputBlur | `void` | — | Emits when the spinbutton loses focus. |
