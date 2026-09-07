Import `DatepickerComponent` and use `<rte-datepicker>` in templates. The component works with reactive forms, template-driven forms, or standalone two-way binding through `(valueChange)`.

```typescript
import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { DatepickerComponent } from "@design-system-rte/angular";

@Component({
  selector: "app-example",
  imports: [ReactiveFormsModule, DatepickerComponent],
  template: `
    <form [formGroup]="form">
      <rte-datepicker
        formControlName="appointmentDate"
        id="appointment-date"
        labelText="Appointment date"
        [hasLabel]="true"
        locale="fr-FR"
        (valueChange)="onDateChange($event)"
        (openedChange)="onOpenedChange($event)"
      />
    </form>
  `,
})
export class ExampleComponent {
  readonly form = new FormGroup({
    appointmentDate: new FormControl<Date | null>(null, Validators.required),
  });

  onDateChange(date: Date | null): void {
    console.log(date);
  }

  onOpenedChange(open: boolean): void {
    console.log(open);
  }
}
```

Do not use `<rte-datepicker-menu>` or `<rte-datepicker-segmented-field>` in application templates. Those selectors are internal building blocks managed by `rte-datepicker`.

#### Error

```html
<rte-datepicker
  id="datepicker"
  labelText="Label"
  [hasLabel]="true"
  [error]="true"
  [hasAssistiveText]="true"
  assistiveTextLabel="Error message"
  assistiveTextAppearance="error"
  [showAssistiveIcon]="true"
/>
```

Shows the field in an error state with error-styled assistive text and icon.
