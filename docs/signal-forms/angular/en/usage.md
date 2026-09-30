This guide is for teams that already build forms with Signal Forms (`form()`, a signal model, and `[formField]` on native controls). To plug in Luciole inputs, pickers, and toggles, put `[formField]` on the component host—the same field node you would bind to an `<input>`. Those components implement `ControlValueAccessor`, which is how Angular connects them to Signal Forms without a separate integration API.

Official references:

- [Forms with signals (essentials)](https://angular.dev/essentials/signal-forms#1-create-a-form-model-with-signal)
- [FormField API](https://angular.dev/api/forms/signals/FormField)
- [Custom controls — how FormField works with CVA](https://angular.dev/guide/forms/signals/custom-controls#how-the-formfield-directive-works)

## Components with `ControlValueAccessor`

Only the components below register `NG_VALUE_ACCESSOR` in `@design-system-rte/angular`. They work with `[formControl]`, `formControlName`, `ngModel`, and Signal Forms `[formField]`. No other Luciole component implements CVA today.


| Component (import)         | Selector              | CVA value type                                           |
| -------------------------- | --------------------- | -------------------------------------------------------- |
| `TextInputComponent`       | `rte-text-input`      | `string`                                                 |
| `TextareaComponent`        | `rte-textarea`        | `string`                                                 |
| `SearchbarComponent`       | `rte-searchbar`       | `string`                                                 |
| `SelectComponent`          | `rte-select`          | `string` (single) or `string[]` when `[multiple]="true"` |
| `SwitchComponent`          | `rte-switch`          | `boolean`                                                |
| `DatepickerComponent`      | `rte-datepicker`      | `Date \| null` |
| `DaterangepickerComponent` | `rte-daterangepicker` | `[Date \| null, Date \| null] \| null` |
| `TimePickerComponent`      | `rte-time-picker`     | `TimeFormat`                                             |


The time picker CVA always reads and writes a full `TimeFormat` object.


| Property | Type     | Description                                        |
| -------- | -------- | -------------------------------------------------- |
| `hh`     | `string` | Hours segment (typically two digits, `00`–`23`).   |
| `mm`     | `string` | Minutes segment (typically two digits, `00`–`59`). |
| `ss`     | `string` | Seconds segment (typically two digits, `00`–`59`). |


Example: `{ hh: "09", mm: "30", ss: "00" }`. Prefer non-empty segments when the field is not cleared; empty strings (`""`) are used internally for incomplete input states.

Give every field in the model a **defined** initial value (`''`, `false`, `null`, `{ hh: '00', mm: '00', ss: '00' }`, etc.). In Signal Forms, `undefined` means the field is absent, not empty.

## Basic form

1. Define a model `signal` with all fields initialized.
2. Pass it to `form(model)` (optionally with a schema for validation).
3. Put `[formField]="yourForm.fieldName"` on the Luciole component.
4. Read or update values via `yourForm.fieldName().value()` and `yourForm.fieldName().value.set(...)`, or read the whole model with `yourModel()`.

```typescript
import { Component, signal } from "@angular/core";
import { form, FormField } from "@angular/forms/signals";
import { TextInputComponent, TextareaComponent } from "@design-system-rte/angular";

interface ContactModel {
  name: string;
  message: string;
}

@Component({
  selector: "app-contact",
  imports: [FormField, TextInputComponent, TextareaComponent],
  template: `
    <form (submit)="onSubmit($event)">
      <rte-text-input label="Name" id="contact-name" [formField]="contactForm.name" />
      <rte-textarea label="Message" id="contact-message" [formField]="contactForm.message" />
      <button type="submit">Send</button>
    </form>
    <p>Name: {{ contactForm.name().value() }}</p>
  `,
})
export class ContactComponent {
  readonly contactModel = signal<ContactModel>({
    name: "",
    message: "",
  });

  readonly contactForm = form(this.contactModel);

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log(this.contactModel());
  }
}
```

`FormField` two-way binds the field value to the CVA (`writeValue`, `registerOnChange`, `registerOnTouched`, `setDisabledState`). User edits update the model signal; programmatic `value.set()` updates the component.

## Validation and field state

Add rules in the second argument to `form()`:

```typescript
import { email, form, FormField, required } from "@angular/forms/signals";

readonly profileModel = signal({ email: "" });

readonly profileForm = form(this.profileModel, (schemaPath) => {
  required(schemaPath.email, { message: "Email is required" });
  email(schemaPath.email, { message: "Enter a valid email address" });
});
```

Each field node exposes signals such as `valid()`, `invalid()`, `touched()`, `dirty()`, `disabled()`, and `errors()`. Use them in the template for submit guards and messaging:

```html
<button type="submit" [disabled]="profileForm().invalid()">Save</button>

@if (profileForm.email().touched() && profileForm.email().invalid()) {
  @for (error of profileForm.email().errors(); track error.message) {
    <p>{{ error.message }}</p>
  }
}
```



### Showing errors on Luciole fields

Luciole inputs do not read Signal Forms errors automatically. They use inputs such as `error`, `assistiveAppearance`, and `assistiveTextLabel`. Map field state explicitly:

```html
<rte-text-input
  label="Email"
  id="profile-email"
  [formField]="profileForm.email"
  assistiveAppearance="error"
  [error]="profileForm.email().touched() && profileForm.email().invalid()"
  [assistiveTextLabel]="profileForm.email().errors()[0]?.message ?? ''"
/>
```

Keep validation rules in the form schema; use component inputs only for presentation.

## Pickers and switch

Use the same `[formField]` binding; match the model type to the component’s CVA value:

```typescript
import type { TimeFormat } from "@design-system-rte/core";

interface SchedulingModel {
  active: boolean;
  day: Date | null;
  range: [Date | null, Date | null] | null;
  time: TimeFormat;
}

readonly schedulingModel = signal<SchedulingModel>({
  active: false,
  day: null,
  range: null,
  time: { hh: "09", mm: "00", ss: "00" },
});
```

```html
<rte-switch label="Enabled" [formField]="schedulingForm.active" />
<rte-datepicker label="Date" id="day" [formField]="schedulingForm.day" />
<rte-daterangepicker label="Range" id="range" [formField]="schedulingForm.range" />
<rte-time-picker label="Time" id="time" [formField]="schedulingForm.time" />
```

For `rte-select`, bind `[options]` as usual; the selected value still flows through `[formField]`.

## Disabled state

When the field tree marks a field disabled (for example via schema rules or `disabled()` on field state), `FormField` calls the CVA’s `setDisabledState`. Luciole components merge that with their own `[disabled]` input. Prefer driving disabled state from the form when using Signal Forms rather than duplicating `[disabled]` on the same field unless you have a deliberate override.

## Signal Forms vs reactive `[formControl]`


| Integration                         | When to use                                                 |
| ----------------------------------- | ----------------------------------------------------------- |
| `[formField]="form.field"`          | New forms on Angular 21+ with a signal model and field tree |
| `[formControl]` / `formControlName` | Existing reactive or template-driven forms                  |


Do not bind `[formField]` together with `[formControl]`, `formControlName`, `ngModel`, or Luciole `[value]` / `(valueChange)` on the **same** instance. Pick one integration path per component.

## Programmatic updates

Updates through the field tree stay in sync with the UI:

```typescript
this.profileForm.email().value.set("user@example.com");
// profileModel().email is updated as well
```

Reset a single field with `this.profileForm.email().reset()` when you need to clear interaction and validation state for that node.