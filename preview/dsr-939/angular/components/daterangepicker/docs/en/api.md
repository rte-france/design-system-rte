The `rte-daterangepicker` component (`DaterangepickerComponent`) is the public API. Bind the range with `ngModel` or a reactive form control; listen to `valueChange` for explicit output handling.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | — (required) | Unique identifier for the field group and its sub-elements. |
| `labelText` | `string` | `"Label"` | Visible label displayed above the inputs. |
| `hasLabel` | `boolean` | `true` | Shows or hides the label block. |
| `labelPosition` | `"top" \| "side"` | `"top"` | Label placement relative to the inputs. |
| `required` | `boolean` | `false` | Marks the field as required in the label. |
| `showLabelRequirement` | `boolean` | `false` | Shows the required indicator next to the label when `required` is `true`. |
| `width` | `string` | `"490px"` | CSS width of the picker container. |
| `hasAssistiveText` | `boolean` | `false` | Enables assistive text below the field. |
| `assistiveTextLabel` | `string` | `""` | Assistive text content. |
| `assistiveTextAppearance` | `"description" \| "error"` | `"description"` | Assistive text appearance. Overridden by `"error"` when `error` is `true`. |
| `showAssistiveIcon` | `boolean` | `false` | Shows an icon next to the assistive text. |
| `fieldAriaLabelledby` | `string` | `""` | Custom `aria-labelledby` for the input group. When empty, falls back to the label id when `hasLabel` is `true`. |
| `disabled` | `boolean` | `false` | Disables both inputs and the calendar trigger buttons. |
| `readOnly` | `boolean` | `false` | Prevents editing the segmented inputs and opening the calendar. |
| `error` | `boolean` | `false` | Applies error styling to the inputs. |
| `minDate` | `Date` | — | Earliest selectable date (inclusive). |
| `maxDate` | `Date` | — | Latest selectable date (inclusive). |
| `disabledDates` | `readonly Date[]` | `[]` | Individual dates that cannot be selected. |
| `locale` | `string` | `"fr-FR"` | Locale used for date formatting in the segmented fields. |
| `hasActions` | `boolean` | `true` | When `true`, the calendar shows Confirm and Cancel buttons; the range is committed only on confirm. |
| `valueChange` | `EventEmitter<[Date \| null, Date \| null]>` | — | Emits when the committed range changes. Also invoked through `ControlValueAccessor` when used with forms. |
| `openedChange` | `EventEmitter<boolean>` | — | Emits when the calendar dropdown opens or closes. |
