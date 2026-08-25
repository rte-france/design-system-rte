### Do not combine formControl and value on the same instance

Binding both `[formControl]` and `[value]` on one component leads to conflicting updates. Choose reactive/template-driven forms or input/output binding, not both.

### formControl requires ReactiveFormsModule or FormsModule

`[formControl]` and `formControlName` require the corresponding Angular forms module in the component `imports` array.

### value input does not replace formControl for validation

Input/output binding does not connect to Angular validators, `touched`, or `dirty` state. Use `[formControl]` when you need form-level validation and error display tied to control status.

### Select value input sync

`rte-select` initializes from `[value]` in `ngAfterViewInit`. If options load asynchronously after init, verify the displayed selection still matches the bound value once options are available.

### SideNav collapse is not two-way bound

`rte-side-nav` has no `(collapsedChange)` output. Passing `[isCollapsed]` sets state from the parent; user toggles update internal state only until the parent binding changes again.

### Switch checked vs formControl

`rte-switch` supports both `[checked]` and `[formControl]`. Use one source of truth. Prefer `[formControl]` inside forms and `[checked]` with `(valueChange)` or manual state only when forms are not in use.
