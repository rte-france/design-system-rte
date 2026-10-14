Import `NumberInputComponent` from `@design-system-rte/angular` and use `<rte-number-input>` in your template. Provide a unique `id` for label and assistive text association.

Bind `[value]` and listen to `(valueChange)` for controlled usage, set `[defaultValue]` for an initial value without a form, or connect the component with `formControl` / `formControlName` (`number | null`).

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
      [hasUnit]="true"
      unit="kW"
      (valueChange)="onPowerChange($event)"
    />
  `,
})
export class PowerFieldComponent {
  onPowerChange(value: number | null): void {
    // handle value
  }
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
  [hasUnit]="true"
  unit="kW"
/>
```

Places decrement and increment steppers on the left and right of the field (`"right" | "sides"`).

#### Neutral

```html
<rte-number-input
  id="number-input-neutral"
  label="Puissance"
  appearance="neutral"
  [min]="0"
  [max]="100"
  [defaultValue]="50"
  [hasUnit]="true"
  unit="kW"
/>
```

Uses neutral outlined steppers instead of brand-filled ones (`"brand" | "neutral"`).

#### Compact spacing

```html
<rte-number-input
  id="number-input-compact"
  label="Puissance"
  [compactSpacing]="true"
  [min]="0"
  [max]="100"
  [defaultValue]="50"
  [hasUnit]="true"
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
  [hasUnit]="true"
  unit="kW"
/>
```

Sets the total width of the number input layout (field plus steppers).

#### Decimals fr

```html
<rte-number-input
  id="number-input-decimals-fr"
  label="Puissance"
  [decimalPrecision]="2"
  [defaultValue]="12.34"
  [max]="999"
  [hasUnit]="true"
  unit="kW"
/>
```

Formats decimals with the locale separator (comma for `fr-FR`).

#### Decimals en

```html
<rte-number-input
  id="number-input-decimals-en"
  label="Puissance"
  locale="en-US"
  [decimalPrecision]="2"
  [defaultValue]="12.34"
  [max]="999"
  [hasUnit]="true"
  unit="kW"
/>
```

Uses an English locale so the decimal separator is a period.

#### Disabled

```html
<rte-number-input
  id="number-input-disabled"
  label="Puissance"
  [disabled]="true"
  [min]="0"
  [max]="100"
  [defaultValue]="50"
  [hasUnit]="true"
  unit="kW"
/>
```

Disables interaction; the numeric value is not shown, the unit appears greyed out, and steppers are inactive.

#### Read-only

```html
<rte-number-input
  id="number-input-readonly"
  label="Puissance"
  [readOnly]="true"
  [min]="0"
  [max]="100"
  [defaultValue]="50"
  [hasUnit]="true"
  unit="kW"
/>
```

Shows the value without allowing edits or stepping.

#### With assistive text

```html
<rte-number-input
  id="number-input-assistive"
  label="Puissance"
  [hasAssistiveText]="true"
  assistiveTextLabel="Entrez une valeur entre 0 et 100, par pas de 1."
  [min]="0"
  [max]="100"
  [defaultValue]="50"
  [hasUnit]="true"
  unit="kW"
/>
```

Shows helper text under the field when no automatic range error is active.
