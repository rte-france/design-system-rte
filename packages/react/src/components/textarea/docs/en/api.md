The `Textarea` component is the public API. It renders a labeled multiline field with optional assistive text and character counter.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| label | string | — | Visible label text for the field. |
| labelId | string | — | `id` of the label element, wired to the textarea via `aria-labelledby`. |
| labelPosition | `"top" \| "side"` | `"top"` | Placement of the label relative to the textarea. |
| required | boolean | `false` | Marks the field as required for the label requirement indicator. |
| showLabelRequirement | boolean | `false` | Shows the required or optional indicator next to the label. |
| width | string \| number | `"350px"` | Width of the outer wrapper. |
| resizeable | boolean | `true` | Enables or disables user resizing of the textarea. |
| showCounter | boolean | `false` | Shows a character counter when `maxLength` is set. |
| value | string | — | Controlled value of the textarea. |
| defaultValue | string | — | Initial value for an uncontrolled textarea. |
| assistiveTextLabel | string | — | Description, success, or link text shown below the field. |
| errorMessage | string | — | Message shown below the field when `aria-invalid` is true (falls back to `assistiveTextLabel` if omitted). |
| assistiveTextAppearance | `"description" \| "error" \| "success" \| "link"` | `"description"` | Visual style of the assistive text when the field is not in an invalid state. |
| assistiveTextLink | string | — | URL used when assistive text is shown as a link. |
| id | string | — | `id` of the native textarea; also used to build the assistive text element id. |
| name | string | — | `name` attribute of the native textarea. |
| className | string | `""` | Additional CSS class on the native textarea. |
| maxLength | number | — | Maximum number of characters; enforced by the native element. |
| disabled | boolean | `false` | Disables the textarea. |
| readOnly | boolean | `false` | Makes the textarea read-only. |
| onChange | `(event: ChangeEvent<HTMLTextAreaElement>) => void` | — | Called when the value changes. |
| onBlur | `(event: FocusEvent<HTMLTextAreaElement>) => void` | — | Called when the textarea loses focus. |

Standard textarea attributes (for example `rows`, `aria-invalid`, or `aria-label`) can be passed through to the native element except `placeholder`, which is not supported.
