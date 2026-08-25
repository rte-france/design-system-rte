Q: Should I use `[formControl]` or `[value]` with `(valueChange)`?

A: Use `[formControl]` (or `formControlName`) inside forms when you need validation, reset, or disabled state managed by Angular. Use `[value]` and `(valueChange)` for simple parent-owned state outside a form group. See Usage / Reactive forms and Input / output binding.

Q: My field does not update when I type — I bound `[value]` but nothing changes in the parent.

A: You must handle `(valueChange)` and update the bound property or signal. `[value]` alone is one-way into the component until you write back on change. See Usage / Input / output binding.

Q: I use `[formControl]` but `setValue` from code does not reflect in the UI.

A: Confirm the same `FormControl` instance is bound to the component and that the control is not disabled when you expect edits. CVA components implement `writeValue` and should reflect programmatic updates. Check that you did not also bind `[value]` on the same element.

Q: Can I use `ngModel` instead of `[formControl]`?

A: Yes. CVA components work with template-driven forms when `FormsModule` is imported and `ngModel` is used instead of `[formControl]`.

Q: Why does my Select show the wrong option after loading options from an API?

A: See Limitations / Select value input sync. Ensure `[value]` matches an option `value` once options are loaded, or set the control value after options are available.

Q: My SideNav collapse state and my parent state get out of sync.

A: See Limitations / SideNav collapse is not two-way bound. The nav manages toggle clicks internally; update `[isCollapsed]` from the parent when you need to force a specific state.
