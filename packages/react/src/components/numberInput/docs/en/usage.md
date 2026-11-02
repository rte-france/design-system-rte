Import `NumberInput` from `@design-system-rte/react`. Provide a unique `id` for label and assistive text association.

Use `defaultValue` for an uncontrolled initial value, or bind `value` and `onChange` for a controlled field (`number | null`). The component forwards a ref to the native input field.

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

#### Decimals

Set `decimalPrecision` for fractional values. The displayed separator follows `locale` (comma with the default `fr-FR`; pass `locale="en-US"` for a period).

```tsx
<NumberInput
  id="number-input-decimals"
  label="Puissance"
  decimalPrecision={2}
  defaultValue={12.34}
  max={999}
  unit="kW"
/>
```
