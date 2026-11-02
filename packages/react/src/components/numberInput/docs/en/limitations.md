### Width includes steppers

`width` applies to the full layout (field and steppers), not the inner text field alone. Default total width is `184px` (minimum layout widths apply in CSS).

### Accessible name

Provide a non-empty `label`, or set `label` to `""` and supply `aria-label` (or `aria-labelledby` for an external label). The component logs a console error when none of these are provided.

### Stepper focus order

Increment and decrement icon buttons use `tabIndex="-1"`. Use the input field and arrow keys (↑ / ↓) to change the value.