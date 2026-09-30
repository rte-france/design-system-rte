### CVA bridge, not native Signal Form controls

Luciole form components implement `ControlValueAccessor`. Angular connects them through the compatibility path described in [Custom controls](https://angular.dev/guide/forms/signals/custom-controls#how-the-formfield-directive-works). They do not implement `FormValueControl` / `FormCheckboxControl` yet, so you will not get optional control inputs such as `invalid` or `errors` injected by `FormField` into the component API.

### Validation errors are not wired to assistive UI automatically

Components do not consume `NgControl` or Signal Forms error signals internally. You must bind `error`, `assistiveAppearance`, and `assistiveTextLabel` (or your own messaging) from `field().errors()`, `field().invalid()`, and `field().touched()`.

### Do not combine `[formField]` with other value bindings

On one instance, use either `[formField]` or reactive/template-driven forms (`[formControl]`, `formControlName`, `ngModel`) or Luciole `[value]` with `(valueChange)`. Mixing bindings causes conflicting updates, the same way mixing `[formControl]` and `[value]` does.

