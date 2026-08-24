The `TextInput` component is the public API. Pass props to control appearance and behaviour; use `onChange` for controlled value updates.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| id | string | — (required) | Associates the label with the input. |
| label | string | — | Visible label text. |
| labelPosition | `"top" \| "side"` | `"top"` | Label placement relative to the input. |
| value | string | — | Controlled input value. |
| defaultValue | string | — | Initial value for uncontrolled usage. |
| maxLength | number | — | Maximum number of characters allowed. |
| leftIcon | string | — | Left icon name. Replaced by the error icon when `error` is `true`. |
| showRightIcon | boolean | `true` | Enables the right icon slot. |
| rightIconAction | `"clean" \| "visibilityOn" \| "visibilityOff"` | `"clean"` | Right icon behaviour: clear value, or toggle password visibility. |
| rightIconSize | `"s" \| "m" \| "l"` | — | Size of the right icon button. |
| showLabelRequirement | boolean | `false` | Shows optional/required text next to the label. |
| assistiveAppearance | `"description" \| "error" \| "success" \| "link"` | `"description"` | Visual style of the assistive text. |
| showAssistiveIcon | boolean | `false` | Shows an icon alongside assistive text (error and success only). |
| assistiveTextLabel | string | `""` | Assistive text displayed below the input. |
| error | boolean | `false` | Applies error styling to the input. |
| disabled | boolean | `false` | Disables the input. |
| readOnly | boolean | `false` | Makes the input read-only. |
| width | string | `"300px"` | Container width. |
| onChange | `(value: string) => void` | — | Called with the updated value on each input event. |
| onEnterKeyDown | `(value: string) => void` | — | Called with the current value when Enter is pressed. |
| onRightIconClick | `() => void` | — | Called when the right icon is clicked. The built-in action (clear or visibility toggle) runs after this callback. |

`TextInput` also accepts standard native input attributes (`autoComplete`, `aria-*`, `name`, etc.) except `id`, `onChange`, `value`, `defaultValue`, and `placeholder`.
