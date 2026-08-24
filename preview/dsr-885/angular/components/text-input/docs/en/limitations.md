### Minimum input width

The input field has a minimum width of `48px`. Container widths below this value (for example `width="20px"`) are visually clamped to the minimum.

### Default width

The default container width is `300px`. Pass `width` to override it; numeric values without a unit are treated as pixels.

### Character counter

The counter is displayed only when both `showCounter` is `true` and `maxLength` is a number. Counter placement depends on `labelPosition`: above the input bar when `"top"`, beside the container when `"side"`.

### Right icon visibility

The right icon is hidden when the input is `disabled` or `readOnly`. With `rightIconAction="clean"`, the icon appears only when the field contains text. With visibility actions (`"visibilityOn"` / `"visibilityOff"`), the icon is always shown when `showRightIcon` is enabled.

### Error icon overrides left icon

When `error` is `true`, the left icon is replaced by the error icon regardless of the `leftIcon` value.

### Placeholder not supported

Use `assistiveTextLabel` for hints and instructions. Placeholder content is not accessible, disappears once the user types, and conflicts with assistive text when both convey the same information.

### Reactive forms disabled state

When bound via `formControl` / `formControlName`, the disabled state from the form control takes precedence over the `disabled` input.
