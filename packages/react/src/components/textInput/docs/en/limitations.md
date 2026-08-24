### Minimum input width

The input field has a minimum width of `48px`. Container widths below this value (for example `width="20px"`) are visually clamped to the minimum.

### Default width

The default container width is `300px`. Pass `width` to override it.

### Right icon visibility

The right icon is hidden when the input is `disabled` or `readOnly`. With `rightIconAction="clean"`, the icon appears only when the field contains text. With visibility actions (`"visibilityOn"` / `"visibilityOff"`), the icon is always shown when `showRightIcon` is enabled.

### Error icon overrides left icon

When `error` is `true`, the left icon is replaced by the error icon regardless of the `leftIcon` value.

### Placeholder not supported

`placeholder` is not part of the public `TextInput` API. Use `assistiveTextLabel` for hints and instructions instead.

### Custom className not supported for layout

`className` is forwarded to the native `<input>` element, not the component container. CSS rules that set layout properties such as `width` on `className` can break the input bar layout. Use the `width` prop for container width instead.
