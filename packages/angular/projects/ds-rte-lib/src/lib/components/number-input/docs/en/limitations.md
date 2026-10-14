### Text input instead of native number type

The spinbutton uses `type="text"` with `inputmode` and `role="spinbutton"`, not `type="number"`. Decimal separators come from `locale` only; typing `.` or `,` is normalized to the locale separator.

### Out-of-range values stay visible

Values outside `min` / `max` remain in the field and trigger automatic French range messages (unless `rangeErrorMessages` or `error` / `errorMessage` override them). The component does not clamp typed values to the range.

### Empty field on blur

If the user clears the field and blurs, the display resets to `defaultValue` when it is defined; otherwise the value stays empty and the model emits `null`.

### Disabled display

When `disabled` is true (including via reactive forms `disable()`), the spinbutton shows no numeric value. The unit remains visible in disabled styling. The underlying `number | null` value is preserved for forms and when the control is enabled again.

### Width includes steppers

`width` applies to the full layout (field and steppers), not the inner text field alone. Default total width is `184px` (minimum layout widths apply in CSS).

### Mouse wheel

The wheel adjusts the value only while the spinbutton is focused; the event is prevented from scrolling the page in that case.

### Accessible name

Provide a non-empty `label`, or set `label` to `""` and supply `ariaLabel` (or `ariaLabelledby` for an external label). The component logs a console error when none of these are provided.

### Stepper focus order

Increment and decrement icon buttons use `tabIndex="-1"`. Use the spinbutton and arrow keys (↑ / ↓), or pointer interaction on steppers, to change the value.

### Reactive forms disabled state

When bound with `formControl` / `formControlName`, the form control’s disabled state takes precedence over the `disabled` input.
