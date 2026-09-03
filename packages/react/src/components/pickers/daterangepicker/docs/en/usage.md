Use `DateRangePicker` as a controlled component with `value` and `onChange`. The value is a tuple `[startDate, endDate]` where either bound can be `null` while the range is incomplete.

```tsx
import { DateRangePicker } from "@design-system-rte/react";
import { useState } from "react";

function PeriodField() {
  const [range, setRange] = useState<[Date | null, Date | null] | null>([
    new Date(2026, 4, 1),
    new Date(2026, 4, 10),
  ]);

  return (
    <DateRangePicker
      id="date-range-picker"
      label="Période"
      value={range}
      onChange={setRange}
      hasAction
      assistiveTextLabel="Assistive text"
      showAssistiveIcon
    />
  );
}
```

When `hasAction` is `true`, calendar changes stay pending until the user clicks Confirm. Cancel, clicking outside, or blurring the inputs reverts to the last committed range and calls `onCancel` when applicable.

#### Uncontrolled default value

```tsx
<DateRangePicker
  id="date-range-picker"
  label="Période"
  defaultValue={[new Date(2026, 4, 1), new Date(2026, 4, 10)]}
  onChange={() => {}}
  hasAction
/>
```

Initialize the field without a `value` prop by passing `defaultValue`.

#### Controlled prop update

```tsx
const [range, setRange] = useState<[Date | null, Date | null] | null>([
  new Date(2026, 4, 1),
  new Date(2026, 4, 10),
]);

<button onClick={() => setRange([new Date(2026, 5, 1), new Date(2026, 5, 10)])}>
  Set range
</button>
<button onClick={() => setRange(null)}>Clear</button>

<DateRangePicker id="date-range-picker" label="Période" value={range} onChange={setRange} hasAction />
```

Update or clear the range from the parent by changing the `value` prop.

#### Disabled

```tsx
<DateRangePicker
  id="date-range-picker"
  label="Période"
  value={range}
  onChange={setRange}
  disabled
  hasAction
/>
```

Disable typing and calendar interaction with `disabled`.

#### Error

```tsx
<DateRangePicker
  id="date-range-picker"
  label="Période"
  value={range}
  onChange={setRange}
  isError
  assistiveTextLabel="Champ en erreur"
  assistiveAppearance="error"
  hasAction
/>
```

Show error styling on the inputs and assistive text with `isError` and `assistiveAppearance="error"`.

#### Readonly

```tsx
<DateRangePicker
  id="date-range-picker"
  label="Période"
  value={range}
  onChange={setRange}
  readonly
  hasAction
/>
```

Prevent editing while keeping the current range visible with `readonly`.
