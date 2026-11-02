Import `NumberInput` from `@design-system-rte/react`. Provide a unique `id` for label and assistive text association.

Use `defaultValue` for an uncontrolled initial value, or bind `value` and `onChange` for a controlled field (`number | null`). The component forwards a ref to the native spinbutton input.

```tsx
import { NumberInput } from "@design-system-rte/react";

export function PowerField() {
  return (
    <NumberInput
      id="number-input-default"
      label="Puissance"
      min={0}
      max={100}
      step={1}
      defaultValue={50}
      unit="kW"
      onChange={(value) => {
        // handle value (null when the field is empty or not parseable)
      }}
    />
  );
}
```

Controlled usage keeps React state in sync with the parsed value:

```tsx
import { useState } from "react";
import { NumberInput } from "@design-system-rte/react";

export function QuantityField() {
  const [value, setValue] = useState<number | null>(3);

  return (
    <NumberInput
      id="number-input-controlled"
      label="Quantité"
      min={0}
      max={10}
      value={value}
      onChange={setValue}
    />
  );
}
```

Set `assistiveTextLabel` for helper copy below the field, or `isError` with `errorMessage` for a custom error. When a range or custom error is shown, helper text is replaced by the error message in the assistive area.

#### Sides

```tsx
<NumberInput
  id="number-input-sides"
  label="Puissance"
  incrementPosition="sides"
  min={0}
  max={100}
  defaultValue={50}
  unit="kW"
/>
```

Places decrement and increment steppers on the left and right of the field (`"right" | "sides"`).

#### Neutral

```tsx
<NumberInput
  id="number-input-neutral"
  label="Puissance"
  appearance="neutral"
  min={0}
  max={100}
  defaultValue={50}
  unit="kW"
/>
```

Uses neutral-bold filled steppers instead of brand-filled ones (`"brand" | "neutral"`).

#### Compact spacing

```tsx
<NumberInput
  id="number-input-compact"
  label="Puissance"
  compactSpacing
  min={0}
  max={100}
  defaultValue={50}
  unit="kW"
/>
```

Reduces field and stepper height for dense layouts.

#### Custom width

```tsx
<NumberInput
  id="number-input-custom-width"
  label="Puissance"
  width="320px"
  min={0}
  max={100}
  defaultValue={50}
  unit="kW"
/>
```

Sets the total width of the number input layout (field plus steppers).

#### Decimals fr

```tsx
<NumberInput
  id="number-input-decimals-fr"
  label="Puissance"
  decimalPrecision={2}
  defaultValue={12.34}
  max={999}
  unit="kW"
/>
```

Formats decimals with the locale separator (comma for `fr-FR`).

#### Decimals en

```tsx
<NumberInput
  id="number-input-decimals-en"
  label="Puissance"
  locale="en-US"
  decimalPrecision={2}
  defaultValue={12.34}
  max={999}
  unit="kW"
/>
```

Uses an English locale so the decimal separator is a period.

#### Disabled

```tsx
<NumberInput
  id="number-input-disabled"
  label="Puissance"
  disabled
  min={0}
  max={100}
  defaultValue={50}
  unit="kW"
/>
```

Disables interaction; the numeric value is not shown, the unit appears greyed out, and steppers are inactive.

#### Read only

```tsx
<NumberInput
  id="number-input-readonly"
  label="Puissance"
  readOnly
  min={0}
  max={100}
  defaultValue={50}
  unit="kW"
/>
```

Shows the value without allowing edits or stepping.
