Import `NumberInputComponent` from `@design-system-rte/angular` and use `<rte-number-input>` in your template. Provide a unique `id` for label and assistive text association.

Set `[defaultValue]` for an initial value without a form, bind `[value]` as numeric text for one-way updates, listen to `(valueChange)` for parsed numbers, or connect the component with `formControl` / `formControlName` (`number | null`).

```typescript
import { Component } from "@angular/core";
import { NumberInputComponent } from "@design-system-rte/angular";

@Component({
  selector: "app-power-field",
  imports: [NumberInputComponent],
  template: `
    <rte-number-input
      id="number-input-default"
      label="Puissance"
      [min]="0"
      [max]="100"
      [step]="1"
      [defaultValue]="50"
      unit="kW"
      (valueChange)="onPowerChange($event)"
    />
  `,
})
export class PowerFieldComponent {
  onPowerChange(value: number): void {
    // handle value (0 when the field is empty)
  }
}
```

With reactive forms, bind a `FormControl<number | null>`; the control’s value and disabled state stay in sync with the input field.

```typescript
import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { NumberInputComponent } from "@design-system-rte/angular";

@Component({
  selector: "app-quantity-field",
  imports: [ReactiveFormsModule, NumberInputComponent],
  template: `
    <rte-number-input
      id="number-input-reactive"
      label="Quantité"
      [min]="0"
      [max]="10"
      [formControl]="quantity"
    />
  `,
})
export class QuantityFieldComponent {
  readonly quantity = new FormControl<number | null>(3);
}
```

Do not use internal building blocks such as `<rte-base-input>` with projected controls in application templates unless you are extending the design system itself.

#### Sides

```html
<rte-number-input
  id="number-input-sides"
  label="Puissance"
  incrementPosition="sides"
  [min]="0"
  [max]="100"
  [defaultValue]="50"
  unit="kW"
/>
```

Places decrement and increment steppers on the left and right of the field (`"right" | "sides"`).

#### Compact spacing

```html
<rte-number-input
  id="number-input-compact"
  label="Puissance"
  [compactSpacing]="true"
  [min]="0"
  [max]="100"
  [defaultValue]="50"
  unit="kW"
/>
```

Reduces field and stepper height for dense layouts.

#### Custom width

```html
<rte-number-input
  id="number-input-custom-width"
  label="Puissance"
  width="320px"
  [min]="0"
  [max]="100"
  [defaultValue]="50"
  unit="kW"
/>
```

Sets the total width of the number input layout (field plus steppers).

#### Decimals

Set `[decimalPrecision]` for fractional values. The displayed separator follows `locale` (comma with the default `fr-FR`; pass `locale="en-US"` for a period).

```html
<rte-number-input
  id="number-input-decimals"
  label="Puissance"
  [decimalPrecision]="2"
  [defaultValue]="12.34"
  [max]="999"
  unit="kW"
/>
```

#### With assistive text

```html
<rte-number-input
  id="number-input-assistive"
  label="Puissance"
  assistiveText="Entrez une valeur entre 0 et 100, par pas de 1."
  [min]="0"
  [max]="100"
  [defaultValue]="50"
  unit="kW"
/>
```

Shows helper text under the field when no automatic range error is active.
