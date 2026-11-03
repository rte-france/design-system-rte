### Disabled display

When `disabled` is true (including via reactive forms `disable()`), the input field shows no numeric value. The unit remains visible in disabled styling. The underlying `number | null` value is preserved for forms and when the control is enabled again.

### Width includes steppers

`width` applies to the full layout (field and steppers), not the inner text field alone. Default total width is `184px` (minimum layout widths apply in CSS).

### Mouse wheel

The wheel adjusts the value only while the input field is focused; the event is prevented from scrolling the page in that case.

### Accessible name

Provide a non-empty `label`, or set `label` to `""` and supply `ariaLabel` (or `ariaLabelledby` for an external label). The component logs a console error when none of these are provided.

### Stepper focus order

Increment and decrement icon buttons use `tabIndex="-1"`. Use the input field and arrow keys (↑ / ↓), or pointer interaction on steppers, to change the value.

### Reactive forms disabled state

When bound with `formControl` / `formControlName`, the form control’s disabled state takes precedence over the `disabled` input.
