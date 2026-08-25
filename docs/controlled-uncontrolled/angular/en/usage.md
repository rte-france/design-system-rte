In Angular, "who owns the value" depends on how you bind the component. The design system supports two main integration patterns:

1. **Angular Forms (recommended for forms)** — bind with `[formControl]`, `formControlName`, or `ngModel`. The component implements `ControlValueAccessor` and Angular owns the model.
2. **Input / output binding** — bind `[value]` (or an equivalent input) and handle `(valueChange)` in the parent. The parent owns the model explicitly.

These map to the same idea as React controlled vs uncontrolled, but Angular expresses them through its forms API rather than `value` vs `defaultValue`.

## Components that support `ControlValueAccessor`

The following components integrate with Angular Forms via `[formControl]`, `formControlName`, or `ngModel`:

- `rte-text-input`
- `rte-textarea`
- `rte-select`
- `rte-switch`
- `rte-searchbar`
- `rte-datepicker`
- `rte-daterangepicker`
- `rte-time-picker`

When you use `[formControl]`, Angular is the source of truth. The component receives updates through `writeValue`, emits changes through the registered `onChange` callback, and respects disabled state via `setDisabledState`.

## Reactive forms (formControl)

Use this pattern in forms, when you need validation, reset, or programmatic updates:

```typescript
import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { TextInputComponent } from "@design-system-rte/angular";

@Component({
  selector: "app-profile",
  imports: [ReactiveFormsModule, TextInputComponent],
  template: `
    <rte-text-input label="Name" id="name" [formControl]="nameControl" />
    <button type="button" (click)="nameControl.setValue('from model')">Reset from model</button>
    <span>{{ nameControl.value }}</span>
  `,
})
export class ProfileComponent {
  readonly nameControl = new FormControl("");
}
```

The same binding works for `rte-select`, `rte-switch`, and other CVA components:

```html
<rte-select
  id="country"
  label="Country"
  [options]="options"
  [formControl]="countryControl"
/>
```

Angular updates the component when you call `setValue`, `patchValue`, `reset`, or `disable` on the control. User interaction updates the control value and triggers `valueChanges`.

## Input / output binding (parent-owned state)

When you are not using Angular Forms, bind the value input and update it in the output handler:

```typescript
import { Component, signal } from "@angular/core";
import { SelectComponent } from "@design-system-rte/angular";

@Component({
  selector: "app-filter",
  imports: [SelectComponent],
  template: `
    <rte-select
      id="filter"
      label="Status"
      [options]="options"
      [value]="selectedValue()"
      (valueChange)="selectedValue.set($event)"
    />
  `,
})
export class FilterComponent {
  readonly selectedValue = signal("option-2");
  readonly options = [
    { value: "option-1", label: "Option 1" },
    { value: "option-2", label: "Option 2" },
  ];
}
```

This is the Angular equivalent of a React controlled component: the parent holds the value and passes it back on each change.

For text fields, `rte-text-input` and `rte-textarea` expose `(valueChange)` the same way when used without `[formControl]`.

## Do not mix formControl and value binding

Pick one integration per instance:

```html
<!-- Correct: formControl only -->
<rte-text-input [formControl]="control" />

<!-- Correct: value + valueChange only -->
<rte-text-input [value]="text()" (valueChange)="text.set($event)" />

<!-- Incorrect: do not combine -->
<rte-text-input [formControl]="control" [value]="text()" />
```

`ControlValueAccessor` and explicit `[value]` binding compete for the same internal state and produce inconsistent results.

## Components controlled by dedicated inputs

Some components are controlled through specific inputs rather than `value`:

| Component | Controlled input | Output / callback |
|-----------|------------------|-------------------|
| `rte-modal` (directive) | `[rteModalIsOpen]` | close events via directive API |
| `rte-side-nav` | `[isCollapsed]` | collapse toggled internally; re-bind `isCollapsed` from parent to force state |
| `rte-switch` | `[checked]` or `[formControl]` | `(stateChange)` for the DOM event; use form control or `[checked]` for the boolean state |

## SideNav collapsed state

`rte-side-nav` accepts `[isCollapsed]` and syncs it to internal state. When the user clicks the collapse control, the component updates internally. To fully control collapse from the parent, keep `isCollapsed` in a signal or property and update it when you need to force collapsed or expanded state:

```typescript
readonly collapsed = signal(false);

// template
<rte-side-nav [isCollapsed]="collapsed()" [items]="items" collapsible />
```
