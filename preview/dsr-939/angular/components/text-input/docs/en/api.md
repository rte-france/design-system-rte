The `TextInputComponent` (`<rte-text-input>`) is the public API. Bind its inputs and outputs in templates, or connect it to reactive forms via `formControl` / `formControlName`.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| id | string | — | Associates the label with the input. Required for accessible label linking. |
| label | string | `""` | Visible label text. |
| labelPosition | `"top" \| "side"` | `"top"` | Label placement relative to the input. |
| required | boolean | `false` | Marks the field as required for the label indicator. |
| showCounter | boolean | `false` | Shows a character counter when `maxLength` is set. |
| value | string | `""` | Current input value (one-way binding). |
| maxLength | number | `150` | Maximum number of characters allowed. |
| leftIcon | string \| null | `null` | Left icon name. Replaced by the error icon when `error` is `true`. |
| showRightIcon | boolean | `true` | Enables the right icon slot. |
| rightIconAction | `"clean" \| "visibilityOn" \| "visibilityOff"` | `"clean"` | Right icon behaviour: clear value, or toggle password visibility. |
| rightIconSize | `"s" \| "m"` | `"s"` | Size of the right icon button. |
| showLabelRequirement | boolean | `false` | Shows optional/required text next to the label. |
| assistiveAppearance | `"description" \| "error" \| "success" \| "link"` | `"description"` | Visual style of the assistive text. |
| showAssistiveIcon | boolean | `false` | Shows an icon alongside assistive text (error and success only). |
| assistiveTextLabel | string | `""` | Assistive text displayed below the input. |
| error | boolean | `false` | Applies error styling to the input. |
| disabled | boolean | `false` | Disables the input. Also set automatically when the bound `FormControl` is disabled. |
| readOnly | boolean | `false` | Makes the input read-only. |
| width | string | `"300px"` | Container width (px, %, em, or rem). Numeric values are treated as pixels. |
| ariaLabel | string | `""` | Accessible name when no visible label is provided. |
| ariaRequired | boolean | `false` | Exposes required state to assistive technologies. |
| ariaLabelledby | string | `""` | ID of an external element that labels the input. Overrides auto-generated label association. |
| autocomplete | string | `""` | Native `autocomplete` attribute value. |
| customStyle | `Record<string, string>` | — | Inline styles applied to the native input element. |
| valueChange | `Output<string>` | — | Emits the updated value on each input event. |
| enterKeyDown | `Output<string>` | — | Emits the current value when Enter is pressed. |
| inputBlur | `Output<void>` | — | Emits when the input loses focus. |
| rightIconClick | `Output<MouseEvent \| KeyboardEvent>` | — | Emits when the right icon is activated. The built-in action (clear or visibility toggle) runs after this event. |
