The `DateRangePicker` component is the public API. Its props configure the start/end segmented inputs, calendar dropdown, and optional confirm/cancel actions.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | — (required) | Unique identifier for the field group and its sub-elements. |
| `label` | `string` | — (required) | Visible label displayed above the inputs. |
| `labelId` | `string` | — | Custom id for the group label. Defaults to `{id}-label`. |
| `required` | `boolean` | `false` | Marks the field as required in the label. |
| `showLabelRequirement` | `boolean` | `false` | Shows the required indicator next to the label when `required` is `true`. |
| `value` | `[Date \| null, Date \| null] \| null` | — | Controlled range value as a tuple `[start, end]`. |
| `defaultValue` | `[Date \| null, Date \| null] \| null` | — | Initial range for uncontrolled usage. |
| `onChange` | `(value: [Date \| null, Date \| null] \| null) => void` | — | Called when the range changes (typed input or calendar selection). |
| `hasAction` | `boolean` | `false` | When `true`, the calendar shows Confirm and Cancel buttons; the range is committed only on confirm. |
| `onValidate` | `() => void` | — | Called when the user confirms the calendar selection (`hasAction` must be `true`). |
| `onCancel` | `() => void` | — | Called when the user cancels a pending calendar selection (`hasAction` must be `true`). |
| `minDate` | `Date` | — | Earliest selectable date (inclusive). |
| `maxDate` | `Date` | — | Latest selectable date (inclusive). |
| `disabledDates` | `Date[]` | — | Individual dates that cannot be selected. |
| `disabled` | `boolean` | `false` | Disables both inputs and the calendar trigger buttons. |
| `readonly` | `boolean` | `false` | Prevents editing the segmented inputs and opening the calendar. |
| `isError` | `boolean` | `false` | Applies error styling to the inputs. |
| `assistiveTextLabel` | `string` | — | Assistive text shown below the field. |
| `assistiveAppearance` | `"description" \| "error"` | `"description"` | Assistive text appearance. Overridden by `"error"` when `isError` is `true`. |
| `showAssistiveIcon` | `boolean` | `false` | Shows an icon next to the assistive text. |
| `assistiveTextLink` | `string` | — | Optional link URL rendered in the assistive text. |
| `width` | `string` | `"490px"` | CSS width of the picker container. |
