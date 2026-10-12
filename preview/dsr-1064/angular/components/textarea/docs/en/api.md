The `TextareaComponent` (`rte-textarea`) is the public API. Use it in templates and bind it to reactive or template-driven forms via `formControl`, `formControlName`, or `ngModel`.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| id | string | — | `id` of the native textarea; used to build the assistive text element id when assistive text is present. |
| name | string | — | `name` attribute of the native textarea. |
| ariaLabelledby | string | — | Alternative to `labelId` for `aria-labelledby` when no visible label id is set. |
| label | string | — | Visible label text for the field. |
| labelId | string | — | `id` of the label element, wired to the textarea via `aria-labelledby`. |
| labelPosition | `"top" \| "side"` | `"top"` | Placement of the label relative to the textarea. |
| assistiveTextLabel | string | — | Text shown below the field or as the link label when appearance is `link`. |
| assistiveTextAppearance | `"description" \| "error" \| "success" \| "link"` | `"description"` | Visual style of the assistive text, or link mode when combined with `assistiveTextLink`. |
| assistiveTextLink | string | — | URL for assistive text when `assistiveTextAppearance` is `"link"`. |
| required | boolean | `false` | Sets the native `required` attribute and drives the requirement indicator. |
| showLabelRequirement | boolean | `false` | Shows the required or optional indicator next to the label. |
| resizeable | boolean \| string | `true` | Enables or disables user resizing of the textarea. |
| maxLength | number | — | Maximum number of characters; enforced by the native element. |
| disabled | boolean | `false` | Disables the textarea (also respects disabled state from `FormControl`). |
| readOnly | boolean | `false` | Makes the textarea read-only. |
| value | string | — | Value synchronized from the parent when provided. |
| defaultValue | string | — | Initial value when not using form binding. |
| rows | number | `3` | Visible height of the textarea in rows. |
| showCounter | boolean | `false` | Shows a character counter when `maxLength` is set. |
| width | string \| number | `"350px"` | Width of the outer wrapper; numeric values are treated as pixels unless a unit is included. |

| Output | Type | Description |
|--------|------|-------------|
| change | `Event` | Emitted on native `input` after the value is updated. |
| blur | `FocusEvent` | Emitted when the textarea loses focus, after touch is propagated to forms. |
