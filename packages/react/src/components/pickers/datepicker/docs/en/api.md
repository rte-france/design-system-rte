The `DatePicker` component is the public API. Control the selected date through `value` / `defaultValue` and `onChange`, and configure the field, constraints, and calendar actions via props.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | — (required) | Unique identifier for the input element. |
| `label` | `string` | — (required) | Visible label text. |
| `labelId` | `string` | — | ID applied to the label element. Used as `aria-labelledby` on the input when provided. |
| `required` | `boolean` | `false` | Marks the field as required on the label. |
| `showLabelRequirement` | `boolean` | `false` | Shows the required indicator on the label when `required` is `true`. |
| `width` | `string` \| `number` | `"248px"` | Width of the picker container. |
| `value` | `Date` \| `null` | — | Controlled selected date. Omit to run in uncontrolled mode with `defaultValue`. |
| `defaultValue` | `Date` \| `null` | — | Initial date when uncontrolled. |
| `onChange` | `(newDate: Date \| null) => void` | — | Called when the committed date changes. |
| `disabled` | `boolean` | `false` | Disables the field and prevents opening the calendar. |
| `readonly` | `boolean` | `false` | Prevents editing the value and opening the calendar. |
| `isError` | `boolean` | — | Applies the error visual state to the field. |
| `assistiveTextLabel` | `string` | — | Assistive text rendered below the field. Hidden while the calendar is open. |
| `assistiveAppearance` | `"description"` \| `"error"` \| `"success"` \| `"link"` | `"description"` | Assistive text style. Overridden to `"error"` when `isError` is `true`. |
| `showAssistiveIcon` | `boolean` | `false` | Shows an icon alongside assistive text. |
| `assistiveTextLink` | `string` | — | Optional link URL for assistive text with `"link"` appearance. |
| `minDate` | `Date` | — | Earliest selectable date. |
| `maxDate` | `Date` | — | Latest selectable date. |
| `disabledDates` | `Date[]` | — | Individual dates that cannot be selected. |
| `hasAction` | `boolean` | `false` | When `true`, the calendar shows Cancel and Confirm actions. Selection stays pending until Confirm. When `false`, a day selection commits immediately and closes the menu. |
| `onCancel` | `() => void` | — | Called when the user clicks Cancel in the calendar. |
| `onValidate` | `() => void` | — | Called when the user clicks Confirm in the calendar. |
