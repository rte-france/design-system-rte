Import `DaterangepickerComponent` and bind the range with `ngModel` or `formControlName`. The value is a tuple `[startDate, endDate]` where either bound can be `null` while the range is incomplete.

```typescript
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DaterangepickerComponent } from "@design-system-rte/angular";

@Component({
  selector: "app-period-field",
  imports: [FormsModule, DaterangepickerComponent],
  template: `
    <rte-daterangepicker
      id="date-range-picker"
      labelText="Période"
      [(ngModel)]="range"
      [hasActions]="true"
      [hasAssistiveText]="true"
      assistiveTextLabel="Assistive text"
      [showAssistiveIcon]="true"
    />
  `,
})
export class PeriodFieldComponent {
  range: [Date | null, Date | null] = [
    new Date(2026, 4, 1),
    new Date(2026, 4, 10),
  ];
}
```

Do not use internal selectors such as `rte-daterangepicker-menu` or `rte-datepicker-segmented-field` in application templates. They are implementation details of `rte-daterangepicker`.

When `hasActions` is `true`, calendar changes stay pending until the user clicks Confirm. Cancel, clicking outside, or blurring the inputs reverts to the last committed range.

#### Disabled

```html
<rte-daterangepicker
  id="date-range-picker"
  labelText="Période"
  [(ngModel)]="range"
  [disabled]="true"
/>
```

Disable typing and calendar interaction with `disabled`.

#### Error

```html
<rte-daterangepicker
  id="date-range-picker"
  labelText="Période"
  [(ngModel)]="range"
  [error]="true"
  [hasAssistiveText]="true"
  assistiveTextLabel="Champ en erreur"
  assistiveTextAppearance="error"
/>
```

Show error styling on the inputs and assistive text with `error` and `assistiveTextAppearance="error"`.

#### Readonly

```html
<rte-daterangepicker
  id="date-range-picker"
  labelText="Période"
  [(ngModel)]="range"
  [readOnly]="true"
/>
```

Prevent editing while keeping the current range visible with `readOnly`.
