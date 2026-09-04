The `rte-datepicker` component is the public API. It implements `ControlValueAccessor` and exposes inputs and outputs for field configuration, date constraints, and calendar behaviour.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | — | Unique identifier for the field and associated label. |
| `labelText` | `string` | `"Label"` | Visible label text. |
| `hasLabel` | `boolean` | `true` | Whether the label is rendered. |
| `labelPosition` | `"top"` \| `"side"` | `"top"` | Label placement relative to the field. |
| `required` | `boolean` | `false` | Marks the field as required for the label and segmented control. |
| `showLabelRequirement` | `boolean` | `false` | Shows the required indicator on the label when `required` is `true`. |
| `width` | `string` | `"248px"` | Field width. Values without a unit are treated as pixels. |
| `hasAssistiveText` | `boolean` | `false` | Whether assistive text is rendered below the field. |
| `assistiveTextLabel` | `string` | `""` | Assistive text content. Only shown when `hasAssistiveText` is `true`. |
| `assistiveTextAppearance` | `"description"` \| `"error"` | `"description"` | Assistive text style. Overridden to `"error"` when `error` is `true`. |
| `showAssistiveIcon` | `boolean` | `false` | Shows an icon alongside assistive text. |
| `fieldAriaLabel` | `string` | `""` | Accessible name for the segmented date field when no visible label is used. |
| `fieldAriaLabelledby` | `string` | `""` | ID of an external element that labels the field. When empty and `hasLabel` is `true`, the internal label ID is used. |
| `disabled` | `boolean` | `false` | Disables the field and prevents opening the calendar. |
| `readOnly` | `boolean` | `false` | Prevents editing the value and opening the calendar. |
| `error` | `boolean` | `false` | Applies the error visual state to the field. |
| `minDate` | `Date` \| `undefined` | `undefined` | Earliest selectable date. Dates before this value are disabled in the calendar and rejected on commit. |
| `maxDate` | `Date` \| `undefined` | `undefined` | Latest selectable date. Dates after this value are disabled in the calendar and rejected on commit. |
| `disabledDates` | `readonly Date[]` | `[]` | Individual dates that cannot be selected. |
| `locale` | `string` | `"fr-FR"` | Locale used for calendar labels and field formatting. |
| `hasActions` | `boolean` | `true` | When `true`, the calendar shows Cancel and Confirm actions and keeps selections pending until Confirm. When `false`, a day selection commits immediately and closes the menu. |

| Output | Type | Description |
| --- | --- | --- |
| `valueChange` | `Date \| null` | Emits when the committed value changes (typing, Confirm, or immediate selection when `hasActions` is `false`). |
| `openedChange` | `boolean` | Emits when the calendar overlay opens or closes. |

The component also supports Angular forms integration via `formControlName`, `formControl`, or `[(ngModel)]`. The form control value type is `Date | null`.
